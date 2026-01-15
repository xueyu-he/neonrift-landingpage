// ===== helpers =====
function $(id) {
  return document.getElementById(id);
}

// ===== modal controls =====
const modal = $("modal");
const modalBackdrop = $("modalBackdrop");
const modalClose = $("modalClose");
const modalOk = $("modalOk");
const modalCancel = $("modalCancel");

function openModal(title, body) {
  $("modalTitle").textContent = title;
  $("modalBody").textContent = body;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

// close actions
modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
modalOk.addEventListener("click", closeModal);
modalCancel.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ===== language switch (DE/EN) =====
let lang = "EN";

const text = {
  EN: {
    title: "Enter the Rift.",
    lead:
      "NEON RIFT is a fast-paced sci-fi action RPG. Build your loadout, fight bosses in co-op raids, and unlock seasonal rewards.",
    f1t: "Fast Combat",
    f1p: "Responsive controls and stylish abilities.",
    f2t: "Co-op Raids",
    f2p: "Team up to defeat bosses and claim rare loot.",
    f3t: "Seasonal Updates",
    f3p: "New missions, skins, and events regularly.",
    seasonTitle: "Season 01: Riftstorm",
    seasonText: "New boss raids • Limited skins • Weekly challenges",
    modalJoinTitle: "Join the Beta",
    modalJoinBody: "Thanks for your interest! This is a demo UI for the portfolio project.",
    modalTrailerTitle: "Trailer",
    modalTrailerBody: "Trailer link can be added later (YouTube / MP4). For now this modal shows UI interaction."
  },
  DE: {
    title: "Betritt den Riss.",
    lead:
      "NEON RIFT ist ein schnelles Sci-Fi-Action-RPG. Baue dein Loadout, besiege Bosse im Co-op und sichere dir saisonale Belohnungen.",
    f1t: "Schneller Combat",
    f1p: "Direkte Steuerung und stylische Fähigkeiten.",
    f2t: "Co-op Raids",
    f2p: "Im Team Bosse besiegen und seltenen Loot holen.",
    f3t: "Season Updates",
    f3p: "Regelmäßig neue Missionen, Skins und Events.",
    seasonTitle: "Season 01: Riftstorm",
    seasonText: "Neue Boss-Raids • Limitierte Skins • Wöchentliche Challenges",
    modalJoinTitle: "Beta beitreten",
    modalJoinBody: "Danke! Das ist eine Demo-UI für dein Portfolio-Projekt (Modal, Buttons, Events).",
    modalTrailerTitle: "Trailer",
    modalTrailerBody: "Trailer-Link kann später ergänzt werden (YouTube / MP4). Aktuell zeigt das Modal die Interaktion."
  }
};

function applyLanguage(nextLang) {
  lang = nextLang;

  $("title").textContent = text[lang].title;
  $("lead").textContent = text[lang].lead;

  $("f1t").textContent = text[lang].f1t;
  $("f1p").textContent = text[lang].f1p;

  $("f2t").textContent = text[lang].f2t;
  $("f2p").textContent = text[lang].f2p;

  $("f3t").textContent = text[lang].f3t;
  $("f3p").textContent = text[lang].f3p;

  $("seasonTitle").textContent = text[lang].seasonTitle;
  $("seasonText").textContent = text[lang].seasonText;
}

// ===== buttons =====
$("btnPlay").addEventListener("click", () => {
  openModal(text[lang].modalJoinTitle, text[lang].modalJoinBody);
});

$("btnTrailer").addEventListener("click", () => {
  openModal(text[lang].modalTrailerTitle, text[lang].modalTrailerBody);
});

$("btnLang").addEventListener("click", () => {
  const next = lang === "EN" ? "DE" : "EN";
  applyLanguage(next);
});

// init
applyLanguage("EN");
