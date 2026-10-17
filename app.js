/* =========================================================
   LOGIKA UJIAN ONLINE
   ========================================================= */
(function () {
  "use strict";

  const $ = (s) => document.querySelector(s);
  const KEY = "ujian_state_" + CONFIG.KODE_UJIAN;
  const LETTERS = "ABCDEFGH";
  const TIPE_LABEL = {
    single: "Pilihan Ganda",
    multi: "Multi Jawaban – pilih SEMUA yang benar",
    tf: "Benar / Salah",
  };
  const BAGIAN = { single: "Pilihan Ganda", multi: "Multi Jawaban", tf: "Benar / Salah" };

  let S = null;          // state ujian
  let timerId = null;
  let sending = false;

  /* ---------- util ---------- */
  const shuffle = (a) => {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pad = (n) => String(n).padStart(2, "0");
  const fmt = (ms) => {
    const t = Math.max(0, Math.floor(ms / 1000));
    return pad(Math.floor(t / 3600)) + ":" + pad(Math.floor((t % 3600) / 60)) + ":" + pad(t % 60);
  };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } };
  const show = (id) => {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $(id).classList.add("active");
    window.scrollTo(0, 0);
  };
  const uuid = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === "x" ? r : (r & 3) | 8).toString(16);
    });
  const byId = {};
  SOAL.forEach((q) => (byId[q.id] = q));

  function normWA(v) {
    let d = String(v).replace(/\D/g, "");
    if (d.startsWith("0")) d = "62" + d.slice(1);
    else if (d.startsWith("8")) d = "62" + d;
    return d;
  }

  /* ---------- API Apps Script ---------- */
  async function api(body) {
    if (/GANTI_DENGAN/.test(CONFIG.URL_APPS_SCRIPT)) throw new Error("URL Apps Script belum diisi di config.js.");
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), 30000);
    try {
      const res = await fetch(CONFIG.URL_APPS_SCRIPT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" }, // hindari preflight CORS
        body: JSON.stringify(body),
        signal: ctrl.signal,
      });
      return await res.json();
    } catch (e) {
      throw new Error(e.name === "AbortError" ? "Server lama merespons. Coba lagi." : "Koneksi gagal. Periksa internet Anda.");
    } finally { clearTimeout(to); }
  }

  /* ---------- login + order token ---------- */
  let tokenStep = false;      // false = isi data, true = isi token
  let resendTimer = null;

  function loginMsg(m) { const e = $("#login-err"); e.textContent = m || ""; e.hidden = !m; }
  function setBusy(b, txt) { const btn = $("#btn-login"); btn.disabled = b; if (txt) btn.textContent = txt; }

  function resetLogin() {
    tokenStep = false;
    clearInterval(resendTimer);
    ["#in-nama", "#in-id", "#in-wa"].forEach((s) => ($(s).readOnly = false));
    $("#token-step").hidden = true;
    $("#token-links").hidden = true;
    $("#in-token").value = "";
    loginMsg("");
    setBusy(false, CONFIG.WAJIB_TOKEN ? "📲 Order Token via WhatsApp" : "Mulai Ujian");
  }

  function startCooldown(detik) {
    const b = $("#btn-resend");
    clearInterval(resendTimer);
    let t = detik;
    const paint = () => {
      b.disabled = t > 0;
      b.textContent = t > 0 ? "Kirim ulang token (" + t + ")" : "Kirim ulang token";
    };
    paint();
    resendTimer = setInterval(() => { t--; paint(); if (t <= 0) clearInterval(resendTimer); }, 1000);
  }

  function readForm() {
    const nama = $("#in-nama").value.trim();
    const id = $("#in-id").value.trim();
    const wa = normWA($("#in-wa").value);
    if (nama.length < 3) return loginMsg("Nama minimal 3 karakter.");
    if (!id) return loginMsg("NIS / NIK / Kelas wajib diisi.");
    if (!/^62\d{8,13}$/.test(wa)) return loginMsg("Nomor WhatsApp tidak valid. Contoh: 081234567890");
    return { nama, id, wa };
  }

  async function orderToken(isResend) {
    const f = readForm();
    if (!f) return;
    loginMsg("");
    setBusy(true, "Mengirim token…");
    try {
      const r = await api({ aksi: "order", kode: CONFIG.KODE_UJIAN, judul: CONFIG.JUDUL, nama: f.nama, nis: f.id, wa: f.wa });
      if (!r.ok) {
        loginMsg(r.error || "Gagal order token.");
        if (r.tunggu && tokenStep) startCooldown(r.tunggu);
        setBusy(false, tokenStep ? "Mulai Ujian" : "📲 Order Token via WhatsApp");
        return;
      }
      tokenStep = true;
      ["#in-nama", "#in-id", "#in-wa"].forEach((s) => ($(s).readOnly = true));
      $("#tk-wa").textContent = "+" + f.wa;
      $("#tk-exp").textContent = r.berlaku || 15;
      $("#token-step").hidden = false;
      $("#token-links").hidden = false;
      $("#in-token").value = "";
      $("#in-token").focus();
      startCooldown(r.tunggu || CONFIG.TOKEN_COOLDOWN_DETIK);
      setBusy(false, "Mulai Ujian");
    } catch (e) {
      loginMsg(e.message);
      setBusy(false, tokenStep ? "Mulai Ujian" : "📲 Order Token via WhatsApp");
    }
  }

  async function verifyToken() {
    const f = readForm();
    if (!f) return;
    const token = $("#in-token").value.trim();
    if (!/^\d{6}$/.test(token)) return loginMsg("Token harus 6 digit angka.");
    loginMsg("");
    setBusy(true, "Memeriksa token…");
    try {
      const r = await api({ aksi: "verify", kode: CONFIG.KODE_UJIAN, wa: f.wa, token });
      if (!r.ok) { loginMsg(r.error || "Token tidak valid."); setBusy(false, "Mulai Ujian"); return; }
      clearInterval(resendTimer);
      setBusy(false, "Mulai Ujian");
      startExam(f.nama, f.id, f.wa, token);
    } catch (e) {
      loginMsg(e.message);
      setBusy(false, "Mulai Ujian");
    }
  }

  function initLogin() {
    $("#judul-ujian").textContent = CONFIG.JUDUL;
    $("#sub-judul").textContent = CONFIG.SUB_JUDUL;
    document.title = CONFIG.JUDUL;
    const n = { single: 0, multi: 0, tf: 0 };
    SOAL.forEach((q) => n[q.tipe]++);
    $("#info-aturan").innerHTML =
      "<b>Ketentuan ujian</b><ul>" +
      "<li>Jumlah soal: <b>" + SOAL.length + "</b> (" + n.single + " pilihan ganda, " + n.multi +
      " multi-jawaban, " + n.tf + " benar/salah)</li>" +
      "<li>Waktu: <b>" + CONFIG.DURASI_MENIT + " menit</b>. Jawaban terkirim otomatis saat waktu habis.</li>" +
      "<li>Soal multi-jawaban dinilai benar jika <b>semua</b> pilihan benar terpilih dan tidak ada yang salah.</li>" +
      (CONFIG.WAJIB_TOKEN ? "<li>Untuk memulai, <b>order token</b>. Token dikirim ke WhatsApp Anda.</li>" : "") +
      "<li>Nilai minimal lulus: <b>" + CONFIG.KKM + "</b>. Nilai dikirim ke WhatsApp Anda.</li>" +
      "<li>Jangan menutup atau berpindah halaman selama ujian.</li></ul>";

    resetLogin();
    $("#form-login").addEventListener("submit", (e) => {
      e.preventDefault();
      if (!CONFIG.WAJIB_TOKEN) { const f = readForm(); if (f) startExam(f.nama, f.id, f.wa, ""); return; }
      if (!tokenStep) orderToken(false); else verifyToken();
    });
    $("#btn-resend").addEventListener("click", () => orderToken(true));
    $("#btn-ganti").addEventListener("click", resetLogin);
    $("#in-token").addEventListener("input", (e) => { e.target.value = e.target.value.replace(/\D/g, "").slice(0, 6); });
  }

  /* ---------- mulai ---------- */
  function startExam(nama, id, wa, token) {
    const order = [];
    ["single", "multi", "tf"].forEach((tp) => {
      let list = SOAL.filter((q) => q.tipe === tp);
      if (CONFIG.ACAK_SOAL) list = shuffle(list);
      list.forEach((q) => {
        let opt = q.opsi.map((_, i) => i);
        const keepOrder =
          tp === "tf" || q.opsi.some((o) => /semua jawaban (di atas )?benar/i.test(o));
        if (CONFIG.ACAK_OPSI && !keepOrder) opt = shuffle(opt);
        order.push({ id: q.id, opt });
      });
    });
    const now = Date.now();
    S = {
      subId: uuid(), nama, id, wa, token, order, ans: {}, flag: {}, cur: 0,
      start: now, end: now + CONFIG.DURASI_MENIT * 60000,
      tabOut: 0, submitted: false, result: null, sent: false,
    };
    save();
    enterExam();
  }

  function enterExam() {
    $("#top-nama").textContent = S.nama;
    $("#top-id").textContent = S.id;
    buildGrid();
    renderQ();
    show("#scr-exam");
    tick();
    clearInterval(timerId);
    timerId = setInterval(tick, 1000);
  }

  function tick() {
    const left = S.end - Date.now();
    const t = $("#timer");
    t.textContent = fmt(left);
    t.classList.toggle("low", left <= 5 * 60000);
    if (left <= 0 && !S.submitted) {
      clearInterval(timerId);
      finish(true);
    }
  }

  /* ---------- render soal ---------- */
  function buildGrid() {
    const g = $("#grid");
    g.innerHTML = "";
    S.order.forEach((o, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "gn";
      b.textContent = i + 1;
      b.addEventListener("click", () => { S.cur = i; save(); renderQ(); });
      g.appendChild(b);
    });
  }

  function refreshGrid() {
    const cells = $("#grid").children;
    let done = 0;
    S.order.forEach((o, i) => {
      const a = S.ans[o.id] && S.ans[o.id].length;
      if (a) done++;
      cells[i].className =
        "gn" + (a ? " done" : "") + (S.flag[o.id] ? " flag" : "") + (i === S.cur ? " cur" : "");
    });
    $("#bar").style.width = (done / S.order.length) * 100 + "%";
    $("#bar-txt").textContent = done + " / " + S.order.length + " terjawab";
  }

  function renderQ() {
    const o = S.order[S.cur];
    const q = byId[o.id];
    $("#q-no").textContent = "Soal " + (S.cur + 1) + " / " + S.order.length;
    $("#q-tipe").textContent = TIPE_LABEL[q.tipe];
    $("#q-text").textContent = q.soal;
    $("#btn-flag").textContent = S.flag[q.id] ? "🚩 Hapus tanda" : "🚩 Tandai ragu-ragu";
    const box = $("#q-opts");
    box.innerHTML = "";
    const cur = S.ans[q.id] || [];
    o.opt.forEach((orig, pos) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "opt" + (q.tipe === "multi" ? " multi" : "") + (cur.includes(orig) ? " sel" : "");
      const k = document.createElement("span");
      k.className = "k";
      k.textContent = q.tipe === "multi" && cur.includes(orig) ? "✓" : LETTERS[pos];
      const t = document.createElement("span");
      t.textContent = q.opsi[orig];
      b.append(k, t);
      b.addEventListener("click", () => choose(q, orig));
      box.appendChild(b);
    });
    $("#btn-prev").disabled = S.cur === 0;
    $("#btn-next").disabled = S.cur === S.order.length - 1;
    refreshGrid();
  }

  function choose(q, orig) {
    let a = (S.ans[q.id] || []).slice();
    if (q.tipe === "multi") {
      a = a.includes(orig) ? a.filter((x) => x !== orig) : a.concat(orig);
    } else {
      a = [orig];
    }
    if (a.length) S.ans[q.id] = a; else delete S.ans[q.id];
    save();
    renderQ();
  }

  /* ---------- penilaian ---------- */
  function grade() {
    const per = { single: { b: 0, t: 0 }, multi: { b: 0, t: 0 }, tf: { b: 0, t: 0 } };
    let benar = 0, kosong = 0;
    const detail = [];
    SOAL.forEach((q) => {
      const a = (S.ans[q.id] || []).slice().sort();
      const k = q.kunci.slice().sort();
      per[q.tipe].t++;
      if (!a.length) kosong++;
      else if (a.length === k.length && a.every((v, i) => v === k[i])) { benar++; per[q.tipe].b++; }
      detail.push(q.id + ":" + (a.length ? a.map((i) => LETTERS[i]).join("") : "-"));
    });
    const total = SOAL.length;
    const skor = Math.round((benar / total) * 10000) / 100;
    return {
      benar, kosong, salah: total - benar - kosong, total, skor, per,
      lulus: skor >= CONFIG.KKM, jawaban: detail.join("|"),
    };
  }

  /* ---------- selesai ---------- */
  function confirmBox(title, body, okText) {
    return new Promise((res) => {
      $("#m-title").textContent = title;
      $("#m-body").innerHTML = body;
      $("#m-ok").textContent = okText;
      $("#modal").hidden = false;
      const close = (v) => { $("#modal").hidden = true; $("#m-ok").onclick = $("#m-cancel").onclick = null; res(v); };
      $("#m-ok").onclick = () => close(true);
      $("#m-cancel").onclick = () => close(false);
    });
  }

  async function finish(auto) {
    if (S.submitted) return;
    if (!auto) {
      const unanswered = S.order.filter((o) => !(S.ans[o.id] && S.ans[o.id].length)).length;
      const ok = await confirmBox(
        "Kirim jawaban?",
        unanswered
          ? "Masih ada <b>" + unanswered + " soal</b> yang belum dijawab. Setelah dikirim, jawaban tidak dapat diubah."
          : "Semua soal sudah dijawab. Setelah dikirim, jawaban tidak dapat diubah.",
        "Ya, Kirim"
      );
      if (!ok) return;
    }
    clearInterval(timerId);
    S.submitted = true;
    S.finishAt = Date.now();
    S.result = grade();
    save();
    showResult();
    sendResult();
  }

  function showResult() {
    const r = S.result;
    $("#res-nama").textContent = S.nama + " • " + S.id;
    if (CONFIG.TAMPILKAN_NILAI_SISWA) {
      $("#res-skor").textContent = r.skor;
      $("#res-benar").textContent = r.benar;
      $("#res-salah").textContent = r.salah;
      $("#res-kosong").textContent = r.kosong;
      const st = $("#res-status");
      st.textContent = r.lulus ? "LULUS" : "BELUM LULUS";
      st.className = "status " + (r.lulus ? "lulus" : "gagal");
      $("#res-detail").innerHTML =
        "<tr><th>Bagian</th><th>Benar</th><th>Jumlah soal</th></tr>" +
        Object.keys(BAGIAN).map((k) =>
          "<tr><td>" + BAGIAN[k] + "</td><td>" + r.per[k].b + "</td><td>" + r.per[k].t + "</td></tr>"
        ).join("");
    } else {
      document.querySelector(".score").hidden = true;
      $("#res-status").hidden = true;
      document.querySelector(".stats").hidden = true;
      $("#res-detail").hidden = true;
    }
    show("#scr-result");
    paintSend();
  }

  /* ---------- kirim ke Google Apps Script ---------- */
  function paintSend() {
    const el = $("#res-send");
    const retry = $("#btn-retry");
    retry.hidden = true;
    $("#btn-again").hidden = !CONFIG.BOLEH_ULANG;
    $("#btn-review").hidden = !CONFIG.TAMPILKAN_PEMBAHASAN;
    if (S.sent) {
      el.className = "sendbox ok";
      el.textContent = "✅ Jawaban tersimpan ke spreadsheet" +
        (S.waInfo ? " • " + S.waInfo : "") + ".";
    } else if (sending) {
      el.className = "sendbox wait";
      el.textContent = "⏳ Mengirim jawaban… mohon jangan tutup halaman ini.";
    } else {
      el.className = "sendbox fail";
      el.textContent = "⚠️ " + (S.sendErr || "Jawaban belum terkirim.") +
        " Jawaban Anda aman di perangkat ini. Tekan tombol di bawah untuk mengirim ulang.";
      retry.hidden = false;
    }
  }

  async function sendResult(attempt) {
    attempt = attempt || 1;
    if (S.sent || sending) return;
    if (/GANTI_DENGAN/.test(CONFIG.URL_APPS_SCRIPT)) {
      S.sendErr = "URL Apps Script belum diisi di config.js.";
      sending = false; return paintSend();
    }
    sending = true; paintSend();
    const r = S.result;
    const payload = {
      aksi: "kirim", kode: CONFIG.KODE_UJIAN, token: S.token || "", subId: S.subId, nama: S.nama, nis: S.id, wa: S.wa,
      skor: r.skor, benar: r.benar, salah: r.salah, kosong: r.kosong, total: r.total,
      kkm: CONFIG.KKM, lulus: r.lulus, judul: CONFIG.JUDUL,
      bagian: r.per, durasiDetik: Math.round(((S.finishAt || Date.now()) - S.start) / 1000),
      pindahTab: S.tabOut, jawaban: r.jawaban,
    };
    try {
      const res = await fetch(CONFIG.URL_APPS_SCRIPT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" }, // hindari preflight CORS
        body: JSON.stringify(payload),
      });
      const j = await res.json();
      if (!j.ok) throw new Error(j.error || "Server menolak data.");
      S.sent = true; S.sendErr = "";
      S.waInfo = j.wa ? (j.wa.sent ? "nilai dikirim ke WhatsApp " + S.wa : "WhatsApp: " + (j.wa.detail || "gagal")) : "";
    } catch (e) {
      S.sendErr = "Gagal mengirim (" + e.message + ").";
      if (attempt < 3) {
        sending = false; save();
        return setTimeout(() => sendResult(attempt + 1), 2500 * attempt);
      }
    }
    sending = false;
    save();
    paintSend();
  }

  /* ---------- pembahasan ---------- */
  let rvFilter = "all";
  function statusOf(q) {
    const a = (S.ans[q.id] || []).slice().sort();
    const k = q.kunci.slice().sort();
    if (!a.length) return "nil";
    return a.length === k.length && a.every((v, i) => v === k[i]) ? "ok" : "no";
  }
  function openReview() { rvFilter = "all"; renderReview(); show("#scr-review"); }
  function renderReview() {
    const cnt = { all: S.order.length, ok: 0, no: 0, nil: 0 };
    S.order.forEach((o) => cnt[statusOf(byId[o.id])]++);
    $("#rv-sum").textContent = cnt.ok + " benar • " + cnt.no + " salah • " + cnt.nil + " kosong";
    const F = [["all", "Semua"], ["ok", "✅ Benar"], ["no", "❌ Salah"], ["nil", "⚪ Kosong"]];
    $("#rv-filter").innerHTML = "";
    F.forEach(([k, label]) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (rvFilter === k ? " on" : "");
      b.textContent = label + " (" + cnt[k] + ")";
      b.onclick = () => { rvFilter = k; renderReview(); window.scrollTo(0, 0); };
      $("#rv-filter").appendChild(b);
    });
    const list = $("#rv-list");
    list.innerHTML = "";
    S.order.forEach((o, i) => {
      const q = byId[o.id];
      const st = statusOf(q);
      if (rvFilter !== "all" && rvFilter !== st) return;
      const mine = S.ans[q.id] || [];
      const card = document.createElement("div");
      card.className = "card rv-card " + st;
      const label = { ok: "BENAR", no: "SALAH", nil: "TIDAK DIJAWAB" }[st];
      card.innerHTML =
        '<div class="rv-head"><span class="badge">Soal ' + (i + 1) + '</span>' +
        '<span class="badge soft">' + TIPE_LABEL[q.tipe].split(" –")[0] + '</span>' +
        '<span class="tag ' + st + '">' + label + '</span></div>';
      const qt = document.createElement("div");
      qt.className = "rv-q"; qt.textContent = q.soal;
      card.appendChild(qt);
      o.opt.forEach((orig, pos) => {
        const isKey = q.kunci.includes(orig);
        const picked = mine.includes(orig);
        const row = document.createElement("div");
        row.className = "rv-opt" + (isKey ? " key" : "") + (picked && !isKey ? " wrong" : "");
        const k = document.createElement("span"); k.className = "k";
        k.textContent = isKey ? "✓" : picked ? "✗" : LETTERS[pos];
        const t = document.createElement("span"); t.className = "t"; t.textContent = q.opsi[orig];
        row.append(k, t);
        let note = "";
        if (isKey && picked) note = '<span class="note g">Jawaban Anda • Benar</span>';
        else if (isKey) note = '<span class="note g">Kunci jawaban</span>';
        else if (picked) note = '<span class="note r">Jawaban Anda • Salah</span>';
        if (note) row.insertAdjacentHTML("beforeend", note);
        card.appendChild(row);
      });
      if (st === "nil") card.insertAdjacentHTML("beforeend", '<div class="rv-ans">Anda tidak menjawab soal ini.</div>');
      if (q.tipe === "multi" && st !== "ok")
        card.insertAdjacentHTML("beforeend", '<div class="rv-ans">Soal multi-jawaban benar jika semua pilihan yang benar terpilih dan tidak ada pilihan salah.</div>');
      list.appendChild(card);
    });
  }

  /* ---------- ulangi ujian ---------- */
  async function ulangUjian() {
    if (!S.sent) {
      const ok = await confirmBox("Hasil belum terkirim",
        "Hasil percobaan ini <b>belum tersimpan</b> di spreadsheet. Jika Anda mengulang sekarang, hasil ini akan hilang.",
        "Tetap Ulangi");
      if (!ok) return;
    }
    const { nama, id, wa } = S;
    try { localStorage.removeItem(KEY); } catch (e) {}
    S = null; sending = false;
    ["#res-send"].forEach((s) => ($(s).textContent = ""));
    document.querySelector(".score").hidden = false;
    $("#res-status").hidden = false;
    document.querySelector(".stats").hidden = false;
    $("#res-detail").hidden = false;
    $("#in-nama").value = nama; $("#in-id").value = id; $("#in-wa").value = wa;
    resetLogin();
    show("#scr-login");
  }

  /* ---------- event ---------- */
  function bind() {
    $("#btn-prev").onclick = () => { S.cur = Math.max(0, S.cur - 1); save(); renderQ(); };
    $("#btn-next").onclick = () => { S.cur = Math.min(S.order.length - 1, S.cur + 1); save(); renderQ(); };
    $("#btn-flag").onclick = () => {
      const id = S.order[S.cur].id;
      if (S.flag[id]) delete S.flag[id]; else S.flag[id] = 1;
      save(); renderQ();
    };
    $("#btn-finish").onclick = () => finish(false);
    $("#btn-retry").onclick = () => sendResult(1);
    $("#btn-again").onclick = ulangUjian;
    $("#btn-review").onclick = openReview;
    $("#rv-back").onclick = () => show("#scr-result");

    document.addEventListener("keydown", (e) => {
      if (!S || S.submitted || !$("#scr-exam").classList.contains("active")) return;
      if (e.key === "ArrowRight") $("#btn-next").click();
      if (e.key === "ArrowLeft") $("#btn-prev").click();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && S && !S.submitted && $("#scr-exam").classList.contains("active")) { S.tabOut++; save(); }
    });
    window.addEventListener("beforeunload", (e) => {
      if (S && !S.submitted && $("#scr-exam").classList.contains("active")) { e.preventDefault(); e.returnValue = ""; }
    });
  }

  /* ---------- init ---------- */
  initLogin();
  bind();
  const old = load();
  if (old && old.subId) {
    S = old;
    if (S.submitted) { showResult(); if (!S.sent) sendResult(1); }
    else if (Date.now() >= S.end) { finish(true); }
    else enterExam();
  }
})();
