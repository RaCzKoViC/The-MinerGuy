// The MinerGuy website: latest-release download links, EN/PL toggle and screenshot lightbox.
(() => {
  const REPO = "RaCzKoViC/The-MinerGuy";
  const LATEST = `https://github.com/${REPO}/releases/latest`;

  // ---- Download buttons: point straight at the newest installer when the API answers;
  //      otherwise they keep linking to the "latest release" page (works without JavaScript).
  const fmtMB = (b) => `${Math.round(b / 1048576)} MB`;
  let release = null;
  fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: { Accept: "application/vnd.github+json" } })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((rel) => {
      const setup = rel.assets.find((a) => /^TheMinerGuySetup-.*\.exe$/i.test(a.name));
      const zip = rel.assets.find((a) => /-win-x64\.zip$/i.test(a.name));
      release = { tag: rel.tag_name, setup, zip };
      if (setup) document.querySelectorAll("#download, [data-dl]").forEach((a) => (a.href = setup.browser_download_url));
      if (zip) document.getElementById("zip").href = zip.browser_download_url;
      applyMeta();
    })
    .catch(() => { /* rate-limited or offline: keep the releases/latest links */ });

  // ---- Language toggle
  const PL = {
    "nav.features": "Funkcje", "nav.screens": "Zrzuty", "nav.coop": "Co-op", "nav.req": "Wymagania",
    "hero.title": "Kop głęboko. Buduj z rozmachem.<br>Pokonaj strażników.",
    "hero.lead": "Sandbox 2D w stylu pixel-art: kopanie, crafting, osady i automatyka — solo albo w co-opie z maksymalnie 8 znajomymi.",
    "cta.play": "Graj / Pobierz", "cta.meta": "Darmowy build testowy · Windows 10/11 x64", "cta.meta2": "Najnowsze wydanie na GitHubie",
    "cta.github": "Zobacz na GitHubie", "cta.portable": "Wolisz bez instalatora?", "cta.zip": "Pobierz wersję przenośną .zip",
    "stat.guardians": "głównych strażników", "stat.players": "graczy w co-opie", "stat.items": "przedmiotów i receptur", "stat.skills": "poziomów umiejętności",
    "features.title": "Co czeka pod ziemią",
    "f1.t": "Proceduralne światy", "f1.d": "Każde ziarno to nowy świat: powierzchnia, kryształowe groty, głębokie kopalnie pełne magmy, oceany z rafami i wrakami — aż do Rdzenia świata.",
    "f2.t": "Kop, buduj, craftuj", "f2.d": "Setki przedmiotów i receptur, przeszukiwalna księga receptur, śledzenie receptur, meble, skosy i modyfikatory przedmiotów.",
    "f3.t": "Strażnicy i wydarzenia", "f3.d": "Siedmiu głównych strażników, strażnicy biomów, inwazje, burze, zaćmienia — i świat, który budzi się po finale.",
    "f4.t": "Osady", "f4.d": "Osadnicy wprowadzają się do zbudowanych domów, otwierają sklepy, dają zadania, podnoszą rangę osady i ruszają na wyprawy.",
    "f5.t": "Automatyka i przemysł", "f5.d": "Okablowanie, bramki logiczne, czujniki, wagoniki, rurociągi, rafinerie ropy, generatory, akumulatory i sieci energetyczne.",
    "f6.t": "Głębiny oceanu", "f6.d": "Nurkuj w odpowiednim sprzęcie, pływaj łodzią, spotykaj morskie stworzenia i zmierz się z Lewiatanem.",
    "f7.t": "Klimat", "f7.d": "Słońce i cienie, bloom, promienie światła, kaustyki pod wodą, falowanie powietrza nad magmą, mgła w jaskiniach i świetliki.",
    "f8.t": "Graj po swojemu", "f8.d": "Klawiatura i mysz albo pad XInput, zmiana klawiszy, skala interfejsu do 200%, polski i angielski.",
    "nav.gameplay": "Rozgrywka",
    "gp.title": "Rozgrywka", "gp.sub": "Krótkie klipy nagrane z prawdziwej gry, wersja 1.32.1.",
    "gp.clip1": "Ekran tytułowy", "gp.clip2": "Kopanie w Kryształowej Grocie",
    "gp.clip3": "Budowa domu", "gp.clip4": "Wytwarzanie i naprawa",
    "gp.clip5": "Walka ze strażnikiem", "gp.clip6": "Sztorm na plaży",
    "gp.clip7": "Lewiatan na morzu", "gp.clip8": "Zlecenia w osadzie",
    "gp.clip9": "Lot na skrzydłach", "gp.clip10": "Gra we dwoje",
    "shots.title": "Zrzuty ekranu", "shots.sub": "Prawdziwe zrzuty z gry. Kliknij, aby powiększyć.",
    "coop.title": "Razem raźniej",
    "coop.s1t": "Gospodarz", "coop.s1": "Wczytaj świat, naciśnij Esc i wybierz „Otwórz dla sieci LAN” albo „Otwórz dla Internetu”, żeby dostać kod zaproszenia.",
    "coop.s2t": "Dołącz", "coop.s2": "W menu głównym wybierz „Gra sieciowa”: grę z listy LAN, adres IP albo wklej kod zaproszenia.",
    "coop.s3t": "Graj", "coop.s3": "Do 8 graczy dzieli walki ze strażnikami, czat i znaczniki na minimapie. Rozłączeni gracze wracają automatycznie.",
    "coop.note": "Chcesz świat dostępny non stop? Uruchom serwer dedykowany bez okna: <code>MinerGuy.exe --server \"Nazwa świata\"</code>",
    "req.title": "Zaczynamy", "req.sys": "Wymagania systemowe",
    "req.os": "Windows 10 lub 11, 64-bit", "req.gpu": "Karta graficzna z OpenGL 3.x", "req.disk": "Ok. 80 MB na dysku plus Twoje światy",
    "req.net": "Bez instalowania .NET — wszystko jest w paczce", "req.input": "Klawiatura + mysz albo pad XInput",
    "inst.title": "Instalacja w minutę",
    "inst.1": "Pobierz <b>TheMinerGuySetup-&lt;wersja&gt;.exe</b> przyciskiem powyżej.", "inst.2": "Uruchom go — uprawnienia administratora nie są potrzebne.",
    "inst.3": "Jeśli SmartScreen pokaże „System Windows ochronił ten komputer”, kliknij <b>Więcej informacji → Uruchom mimo to</b> (build nie jest jeszcze podpisany).",
    "inst.4": "Zapisy są w <code>%LOCALAPPDATA%\\MinerGuy</code> i przetrwają aktualizacje.",
    "help.title": "Znalazłeś błąd?", "help.text": "Testerzy czynią grę lepszą. Jeśli coś nie działa, zgłoś błąd i — jeśli gra się wysypała — dołącz plik <code>%LOCALAPPDATA%\\MinerGuy\\crash.log</code>.",
    "help.bug": "🐞 Zgłoś błąd", "help.idea": "💡 Zaproponuj pomysł",
    "foot.license": "© 2026 Maciej Raczkowski (RaCzKoViC). Wszelkie prawa zastrzeżone. Gra jest darmowa do prywatnego, niekomercyjnego użytku; kod źródłowy nie jest udostępniany — zobacz <a href=\"https://github.com/RaCzKoViC/The-MinerGuy/blob/main/LICENSE\">licencję</a>.",
    "foot.tech": "Stworzone w C#, .NET 8 i <a href=\"https://monogame.net/\">MonoGame</a>. Komponenty firm trzecich: <a href=\"https://github.com/RaCzKoViC/The-MinerGuy/blob/main/THIRD-PARTY-NOTICES.md\">informacje</a>.",
    "foot.changelog": "Historia zmian",
  };
  const EN = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => (EN[el.dataset.i18n] = el.innerHTML));
  let lang = localStorage.getItem("mg-lang") || ((navigator.language || "").toLowerCase().startsWith("pl") ? "pl" : "en");

  function applyMeta() {
    if (!release) return;
    const pl = lang === "pl";
    const size = release.setup ? ` · ${fmtMB(release.setup.size)}` : "";
    document.getElementById("dl-meta").textContent =
      `${release.tag} · ${pl ? "instalator Windows" : "Windows installer"}${size}`;
  }
  function apply() {
    const dict = lang === "pl" ? PL : EN;
    document.querySelectorAll("[data-i18n]").forEach((el) => { const v = dict[el.dataset.i18n]; if (v) el.innerHTML = v; });
    document.documentElement.lang = lang;
    document.getElementById("lang").textContent = lang === "pl" ? "EN" : "PL";
    applyMeta();
  }
  document.getElementById("lang").addEventListener("click", () => {
    lang = lang === "pl" ? "en" : "pl";
    localStorage.setItem("mg-lang", lang);
    apply();
  });
  if (lang === "pl") apply();

  // ---- Lightbox
  const box = document.getElementById("lightbox");
  if (box && box.showModal) {
    const img = box.querySelector("img");
    document.querySelectorAll(".gallery a").forEach((a) =>
      a.addEventListener("click", (e) => {
        e.preventDefault();
        img.src = a.href; img.alt = a.querySelector("img").alt;
        box.showModal();
      }));
    box.addEventListener("click", () => box.close());
  }
})();
