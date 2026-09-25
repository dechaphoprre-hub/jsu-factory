/* ตัวสร้างหน้าเว็บจากข้อมูลใน config.js — ปกติไม่ต้องแก้ไฟล์นี้ */
(function () {
  const S = SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    phone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
    line: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5s6-3.5 8.2-6.1c1.5-1.6 2.2-3.2 2.2-4.8C22.4 6.6 17.5 3 12 3z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    buttonhole: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="4" y="11" width="24" height="10" rx="5"/><path d="M9 16h14" stroke-dasharray="2 2.5"/></svg>',
    button: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="16" cy="16" r="11"/><circle cx="12.5" cy="12.5" r="1.6" fill="currentColor"/><circle cx="19.5" cy="12.5" r="1.6" fill="currentColor"/><circle cx="12.5" cy="19.5" r="1.6" fill="currentColor"/><circle cx="19.5" cy="19.5" r="1.6" fill="currentColor"/></svg>',
    factory: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M4 27V14l7 4v-4l7 4v-4l7 4V6h3v21z"/><path d="M9 23h3M16 23h3"/></svg>',
    truck: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M3 8h16v14H3zM19 13h6l4 5v4h-10z"/><circle cx="9" cy="24" r="2.5" fill="#fff"/><circle cx="23" cy="24" r="2.5" fill="#fff"/></svg>',
  };

  // ---------- ลิงก์ติดต่อ ----------
  const tel = (n) => (n ? "tel:" + n.replace(/[^\d+]/g, "") : "");
  const telHref = tel(S.phone);
  const lineHref = S.lineUrl || (S.lineId
    ? S.lineId.startsWith("@")
      ? "https://line.me/R/ti/p/" + encodeURIComponent(S.lineId)
      : "https://line.me/ti/p/~" + encodeURIComponent(S.lineId)
    : "");

  function buttons({ ghostMap = false, short = false } = {}) {
    let h = "";
    if (telHref) h += `<a class="btn btn-call" href="${telHref}">${ICONS.phone}${short ? "โทร" : "โทร " + esc(S.phone)}</a>`;
    if (S.phone2 && !short) h += `<a class="btn btn-call" href="${tel(S.phone2)}">${ICONS.phone}โทร ${esc(S.phone2)}</a>`;
    if (lineHref) h += `<a class="btn btn-line" href="${lineHref}" target="_blank" rel="noopener">${ICONS.line}${short ? "LINE" : "แอดไลน์"}</a>`;
    if (S.facebook && !short) h += `<a class="btn btn-fb" href="${esc(S.facebook)}" target="_blank" rel="noopener">${ICONS.fb}Facebook</a>`;
    if (ghostMap && S.googleMapLink) h += `<a class="btn btn-ghost" href="${esc(S.googleMapLink)}" target="_blank" rel="noopener">${ICONS.map}นำทาง</a>`;
    return h;
  }

  // ---------- ข้อความทั่วไป ----------
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = S[el.dataset.bind];
    if (v) el.textContent = v;
  });
  $("#year").textContent = new Date().getFullYear();
  $("#hero-cta").innerHTML = buttons();
  $("#contact-cta").innerHTML = buttons({ ghostMap: true });
  $("#float-bar").innerHTML = buttons({ ghostMap: true, short: true });
  if (S.googleMapLink) $("#hero-map").href = S.googleMapLink;

  // ---------- บริการ ----------
  $("#services-list").innerHTML = (S.services || [])
    .map((s) => `<div class="card"><div class="ic">${ICONS[s.icon] || ICONS.button}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`)
    .join("");

  // ---------- แกลเลอรี ----------
  const works = S.works || [];
  const cats = [...new Set(works.map((w) => w.category).filter(Boolean))];
  const PAGE = 12;               // จำนวนรูปที่โชว์ก่อนกด "ดูเพิ่มเติม"
  let current = "ทั้งหมด";
  let visible = [];
  let limit = PAGE;

  function renderFilters() {
    if (cats.length < 2) { $("#filters").innerHTML = ""; return; }
    $("#filters").innerHTML = ["ทั้งหมด", ...cats]
      .map((c) => `<button class="chip${c === current ? " on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`)
      .join("");
  }
  function renderGallery() {
    visible = works.filter((w) => current === "ทั้งหมด" || w.category === current);
    $("#gallery").innerHTML = visible
      .slice(0, limit)
      .map((w, i) => `<button class="tile" data-i="${i}"><img src="images/works/thumb/${esc(w.file)}" alt="${esc(w.caption)}" loading="lazy"><span>${esc(w.caption)}</span></button>`)
      .join("");
    const more = visible.length - limit;
    $("#more").hidden = more <= 0;
    $("#more").textContent = `ดูรูปเพิ่มเติม (อีก ${more} รูป)`;
    // ไม่มีรูปย่อ → ใช้รูปเต็ม, ไม่มีรูปเลย → แสดงกล่องบอกชื่อไฟล์แทน
    $("#gallery").querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        const tile = img.parentElement;
        if (img.src.includes("/thumb/")) { img.src = "images/works/" + visible[tile.dataset.i].file; return; }
        tile.classList.add("missing");
        tile.disabled = true;
        tile.innerHTML = `<span>ยังไม่มีรูป<br>images/works/${esc(visible[tile.dataset.i].file)}</span>`;
      });
    });
  }
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    current = b.dataset.cat;
    limit = PAGE;
    renderFilters();
    renderGallery();
  });
  $("#more").addEventListener("click", () => { limit += PAGE * 2; renderGallery(); });
  renderFilters();
  renderGallery();

  // ---------- Lightbox ----------
  const lb = $("#lightbox");
  let idx = 0;
  const openable = () => [...$("#gallery").querySelectorAll(".tile:not(.missing)")].map((t) => +t.dataset.i);
  function show(i) {
    const list = openable();
    if (!list.length) return;
    idx = (i + list.length) % list.length;
    const w = visible[list[idx]];
    $("#lb-img").src = "images/works/" + w.file;
    $("#lb-img").alt = w.caption || "";
    $("#lb-cap").textContent = w.caption || "";
  }
  $("#gallery").addEventListener("click", (e) => {
    const t = e.target.closest(".tile:not(.missing)");
    if (!t) return;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    show(openable().indexOf(+t.dataset.i));
  });
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
  lb.querySelector(".lb-close").onclick = closeLb;
  lb.querySelector(".lb-prev").onclick = () => show(idx - 1);
  lb.querySelector(".lb-next").onclick = () => show(idx + 1);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
  // ปัดซ้าย-ขวาบนมือถือ
  let x0 = null;
  lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  // ---------- คลิป ----------
  function ytId(url) {
    const m = String(url).match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
    return m ? m[1] : "";
  }
  $("#video-list").innerHTML = (S.videos || [])
    .map((v) => {
      let frame = "";
      const id = v.youtube ? ytId(v.youtube) : "";
      if (id) {
        frame = `<button class="yt" data-id="${id}" style="background-image:url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)" aria-label="เล่นคลิป"></button>`;
      } else if (v.file) {
        const poster = v.poster ? ` poster="videos/${esc(v.poster)}"` : "";
        frame = `<video controls preload="none" playsinline${poster} src="videos/${esc(v.file)}"></video>`;
      } else return "";
      return `<div class="vid${v.vertical ? " vertical" : ""}"><div class="frame">${frame}</div><h3>${esc(v.title)}</h3></div>`;
    })
    .join("");
  // โหลด YouTube เมื่อกดเล่นเท่านั้น (เว็บเปิดเร็วขึ้น)
  $("#video-list").addEventListener("click", (e) => {
    const b = e.target.closest(".yt");
    if (!b) return;
    b.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="คลิป"></iframe>`;
  });

  // ---------- ติดต่อ ----------
  const rows = [
    ["โทร", [S.phone, S.phone2].filter(Boolean).map((n) => `<a href="${tel(n)}">${esc(n)}</a>`).join("<br>")],
    ["LINE", lineHref && `<a href="${lineHref}" target="_blank" rel="noopener">${esc(S.lineId || "กดเพื่อแอดไลน์")}</a>`],
    ["Facebook", S.facebook && `<a href="${esc(S.facebook)}" target="_blank" rel="noopener">เปิดเพจ</a>`],
    ["เวลาทำการ", S.hours && esc(S.hours)],
    ["ที่อยู่", S.address && esc(S.address)],
  ];
  $("#contact-info").innerHTML = rows.filter((r) => r[1]).map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join("");
  if (S.storefront) {
    $("#storefront").innerHTML = `<img src="images/${esc(S.storefront)}" alt="หน้าร้าน ${esc(S.name)}" loading="lazy"><figcaption>หน้าตึกโรงงาน</figcaption>`;
  }
  if (S.mapQuery) {
    $("#map-frame").src = "https://maps.google.com/maps?q=" + encodeURIComponent(S.mapQuery) + "&z=16&output=embed";
  }

  // ---------- ข้อมูลสำหรับ Google (ช่วยให้ค้นเจอง่ายขึ้น) ----------
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: S.name,
    description: S.intro,
    telephone: S.phone,
    address: S.address,
    openingHours: S.hours,
    hasMap: S.googleMapLink,
  });
  document.head.appendChild(ld);
})();
