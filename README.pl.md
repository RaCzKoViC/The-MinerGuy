<p align="center">
  <a href="https://raczkovic.github.io/The-MinerGuy/"><img src="docs/brand/banner.png" width="100%" alt="The MinerGuy"></a>
</p>

<h3 align="center">Kop głęboko. Buduj z rozmachem. Pokonaj strażników — sam albo z maksymalnie 8 znajomymi.</h3>

<p align="center">
  Autorska gra 2D w stylu pixel-art: sandbox, przetrwanie, crafting i automatyzacja. Na Windows, napisana w C# i MonoGame.
</p>

<p align="center">
  <a href="README.md">English</a> · <b>Polski</b>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/licencja-wszelkie%20prawa%20zastrze%C5%BCone-c0392b" alt="Licencja: wszelkie prawa zastrzeżone"></a>
  <a href="https://github.com/RaCzKoViC/The-MinerGuy/releases/latest"><img src="https://img.shields.io/github/v/release/RaCzKoViC/The-MinerGuy?label=wersja&color=26c6da" alt="Najnowsza wersja"></a>
  <a href="https://github.com/RaCzKoViC/The-MinerGuy/releases"><img src="https://img.shields.io/github/downloads/RaCzKoViC/The-MinerGuy/total?label=pobrania&color=f1c40f" alt="Pobrania"></a>
  <br>
  <img src="https://img.shields.io/badge/platforma-Windows%2010%20%7C%2011%20(x64)-0078D6" alt="Platforma: Windows 10 i 11, x64">
  <a href="https://monogame.net/"><img src="https://img.shields.io/badge/silnik-MonoGame%203.8-E73C00?logo=monogame&logoColor=white" alt="Silnik: MonoGame 3.8"></a>
  <a href="https://dotnet.microsoft.com/"><img src="https://img.shields.io/badge/.NET-8.0-512BD4?logo=dotnet&logoColor=white" alt=".NET 8"></a>
  <img src="https://img.shields.io/badge/co--op-do%208%20graczy-8e44ad" alt="Co-op: do 8 graczy">
  <img src="https://img.shields.io/badge/testy-400%20zielonych-2ea44f" alt="400 testów">
</p>

<p align="center">
  <a href="https://github.com/RaCzKoViC/The-MinerGuy/releases/latest"><img src="https://img.shields.io/badge/%E2%96%B6%20%20Graj%20%2F%20Pobierz-instalator%20Windows-2ea44f?style=for-the-badge" height="44" alt="Graj / Pobierz najnowszą wersję"></a>
  &nbsp;
  <a href="https://raczkovic.github.io/The-MinerGuy/"><img src="https://img.shields.io/badge/Strona%20WWW-raczkovic.github.io-f5a623?style=for-the-badge&logo=githubpages&logoColor=white" height="44" alt="Oficjalna strona"></a>
</p>

<p align="center">
  <a href="#️-o-grze">O grze</a> ·
  <a href="#-funkcje">Funkcje</a> ·
  <a href="#-rozgrywka">Rozgrywka</a> ·
  <a href="#-zrzuty-ekranu">Zrzuty</a> ·
  <a href="#-pobieranie-i-instalacja">Instalacja</a> ·
  <a href="#-wymagania-systemowe">Wymagania</a> ·
  <a href="#-sterowanie">Sterowanie</a> ·
  <a href="#-gra-wieloosobowa-co-op">Co-op</a> ·
  <a href="#-zgłaszanie-błędów-i-logi-awarii">Błędy</a> ·
  <a href="#-licencja">Licencja</a>
</p>

![The MinerGuy — krajobraz na starcie](docs/screenshots/01_spawn.png)

## ⛏️ O grze

**The MinerGuy** to sandbox 2D, w którym każdy świat jest generowany proceduralnie z ziarna (seed). Kopiesz od powierzchni przez podziemia, kryształowe groty i głębokie kopalnie pełne magmy aż do Rdzenia świata. Budujesz dom i osadę, przechodzisz drogę od prostego kilofa do zaawansowanego przemysłu i mierzysz się z siedmioma głównymi strażnikami. Po finale świat się przebudza i gra toczy się dalej: rozprzestrzeniające się biomy Skazy i Rozkwitu, latanie, nowi strażnicy, portale wypraw, głębokie oceany, ropa, sieci energetyczne i układy logiczne.

Wszystko, co widzisz i słyszysz — grafika pixel-art, czcionki, efekty dźwiękowe i muzyka — jest generowane przez kod gry. Repozytorium nie zawiera cudzych assetów.

Aktualna wersja to **1.32.1** — w pełni angielska wersja **1.32.0 — Tam, gdzie skończyłeś**: wczytana gra stawia postać **dokładnie tam, gdzie stała** przy zapisie (nawet w łódce), a menu główne ma przycisk **Kontynuuj** do ostatniego zapisu. Wcześniej: **1.31.0 — Uczciwa kuźnia** (zużyte narzędzia i bronie **naprawiasz zamiast je tracić**, narzędzia wytrzymują ok. 2× dłużej, klasyczne metale nie omijają już strażników), **1.30.0 — Wspólna fabryka** (w co-opie **całą fabrykę prowadzi gospodarz**, strażnicy dają łup **każdemu graczowi**) i **1.29.1 — Bezpieczny start** (gra **aktualizuje się sama z menu głównego**). Zobacz [historię wydań](CHANGELOG.md) (po angielsku).

## ✨ Funkcje

- 🌍 **Proceduralne światy** — deterministyczne ziarna, powierzchnia, jaskinie, głębokie oceany, rafy, wraki i Rdzeń świata, aż do rozmiaru *Huge* 6000×1800 kafelków.
- ⛏️ **Kopanie, budowanie, crafting** — setki przedmiotów i receptur, przeszukiwalna księga receptur, śledzenie receptur na HUD-zie, meble, skosy i modyfikatory przedmiotów.
- 🐉 **Strażnicy i wydarzenia** — siedmiu głównych strażników, strażnicy biomów, inwazje, burze, zaćmienia, krwawe zmierzchy i dynamiczne wydarzenia.
- 🏘️ **Osady** — osadnicy z domami, sklepami, zadaniami, reputacją, rangami osady i czasowymi wyprawami.
- ⚙️ **Automatyka i przemysł** — okablowanie, bramki logiczne, czujniki, wagoniki, pompy i rurociągi, rafinerie ropy, generatory, akumulatory i sieci energetyczne.
- 🌊 **Głębiny oceanu** — sprzęt do nurkowania, łodzie, morskie stworzenia i Lewiatan.
- 🎣 **Życie w dziczy** — uprawy, wędkarstwo, polowanie, gotowanie, pogoda, dzień i noc.
- 🧑‍🤝‍🧑 **Co-op do 8 graczy** — wykrywanie gier w LAN, bezpośredni adres IP, kody zaproszeń przez Internet, automatyczne ponowne łączenie i serwer dedykowany bez okna.
- 🎨 **Twoja postać** — edytor postaci, umiejętności do poziomu 1000, osiągnięcia i ramki awatarów.
- 💡 **Klimat** — kierunkowe światło słońca i cienie, cienie od źródeł światła, bloom, promienie słońca, kaustyki pod wodą, falowanie powietrza nad magmą i mgła w jaskiniach.
- 🎮 **Wygoda** — obsługa padów XInput w grze i menu, zmiana klawiszy, skala interfejsu 100–200%, interfejs po polsku i angielsku.
- 💾 **Bezpieczne zapisy** — atomowy zapis z automatycznym odtwarzaniem kopii `.bak` i testowaną zgodnością ze starszymi światami.

## 🎬 Rozgrywka

Krótkie klipy nagrane z prawdziwej gry (wersja 1.32.1) — zaprogramowana rozgrywka w prawdziwym oknie gry, bez makiet i montowanych animacji.

| Ekran tytułowy | Kopanie w Kryształowej Grocie |
|---|---|
| ![Animowane logo i żywe menu główne](docs/gifs/menu.gif) | ![Kopanie tunelu do Kryształowej Groty tytanowym kilofem i oświetlanie go pochodniami](docs/gifs/mining.gif) |

| Budowa domu | Wytwarzanie i naprawa |
|---|---|
| ![Budowa małego drewnianego domu blok po bloku](docs/gifs/building.gif) | ![Wytwarzanie werdanitowego kilofa i ostrza przy kuźni polowej, potem naprawa zużytego kilofa](docs/gifs/crafting.gif) |

| Walka ze strażnikiem | Sztorm na plaży |
|---|---|
| ![Walka z Korzeńcem, pradawnym strażnikiem lasu](docs/gifs/boss-fight.gif) | ![Sztorm na plaży: deszcz, fale zalewające brzeg i uderzenia piorunów](docs/gifs/storm.gif) |

| Lewiatan na morzu | Zlecenia w osadzie |
|---|---|
| ![Wypłynięcie łódką na morze, zadęcie w muszlę i walka z Lewiatanem z łodzi](docs/gifs/ocean.gif) | ![Przyjęcie zlecenia od kowala w osadzie i oddanie go za nagrodę](docs/gifs/settlement.gif) |

| Lot na skrzydłach | Gra we dwoje |
|---|---|
| ![Lot nad koronami drzew na skrzydłach burzy](docs/gifs/flight.gif) | ![Drugi gracz dołącza przez sieć i oboje kopią w dół ramię w ramię](docs/gifs/coop.gif) |

## 📸 Zrzuty ekranu

| Jaskinie | Crafting i ekwipunek |
|---|---|
| ![Eksploracja jaskiń](docs/screenshots/04_cave.png) | ![Crafting i ekwipunek](docs/screenshots/02_inventory_crafting.png) |

| Walka ze strażnikiem | Po Przebudzeniu |
|---|---|
| ![Walka ze Strażnikiem Pryzmatu](docs/screenshots/09_boss_prism.png) | ![Biom Rozkwitu](docs/screenshots/50_bloom.png) |

| Głęboki ocean | Lewiatan |
|---|---|
| ![Rafa w głębokim oceanie](docs/screenshots/72_reef.png) | ![Walka z Lewiatanem](docs/screenshots/75_leviathan.png) |

| Okablowanie i automatyka | Co-op w sieci LAN |
|---|---|
| ![Okablowanie](docs/screenshots/22_wiring.png) | ![Gra kooperacyjna](docs/screenshots/35_lan.png) |

<details>
<summary><b>Więcej zrzutów</b></summary>

| Noc z pochodnią | Sanktuarium |
|---|---|
| ![Noc](docs/screenshots/03_night_torch.png) | ![Sanktuarium](docs/screenshots/21_sanctuary.png) |

| Zaćmienie | Burza |
|---|---|
| ![Zaćmienie](docs/screenshots/56_eclipse.png) | ![Burza](docs/screenshots/76_storm.png) |

| Edytor postaci | Wyprawy z osady |
|---|---|
| ![Edytor postaci](docs/screenshots/67_editor_hair.png) | ![Wyprawa Kartografki](docs/screenshots/81_cartographer.png) |

| Menu główne | Instalator |
|---|---|
| ![Menu główne](docs/screenshots/08_menu.png) | ![Instalator](docs/screenshots/38_installer.png) |

Więcej jest na [oficjalnej stronie](https://raczkovic.github.io/The-MinerGuy/).

</details>

## 📥 Pobieranie i instalacja

Najnowszy build pobierzesz z **[GitHub Releases](https://github.com/RaCzKoViC/The-MinerGuy/releases/latest)**. Każde wydanie ma dwie wersje:

| Plik | Co to jest |
|---|---|
| `TheMinerGuySetup-<wersja>.exe` | **Polecane.** Instalator dla bieżącego użytkownika — nie wymaga uprawnień administratora. Instaluje grę w `%LOCALAPPDATA%\Programs`, dodaje skróty w menu Start i na pulpicie oraz zwykły deinstalator. |
| `TheMinerGuy-<wersja>-win-x64.zip` | Wersja przenośna — rozpakuj gdziekolwiek i uruchom `MinerGuy.exe`. |

Obie wersje są samowystarczalne: **nie trzeba instalować .NET.** Światy i postacie są w `%LOCALAPPDATA%\MinerGuy` i zostają przy aktualizacji oraz odinstalowaniu gry.

> [!NOTE]
> **Windows SmartScreen:** buildy nie są jeszcze podpisane cyfrowo, więc przy pierwszym uruchomieniu Windows może pokazać „System Windows ochronił ten komputer”. Kliknij **Więcej informacji → Uruchom mimo to**. Pobieraj grę tylko ze strony [Releases tego repozytorium](https://github.com/RaCzKoViC/The-MinerGuy/releases) albo z [oficjalnej strony](https://raczkovic.github.io/The-MinerGuy/).

Gra uruchamia się po polsku, gdy Windows jest ustawiony na polski (w innym wypadku po angielsku); język zmienisz w **Ustawieniach** w menu głównym.

Od wersji 1.29.1 gra **aktualizuje się sama**: gdy wyjdzie nowa wersja, menu główne pokaże ją z opisem zmian, zrobi kopię zapasową zapisów i uruchomi się ponownie już zaktualizowana.

## 💻 Wymagania systemowe

| | Minimum |
|---|---|
| **System** | Windows 10 lub Windows 11, 64-bit |
| **Grafika** | karta graficzna z obsługą OpenGL 3.x |
| **Dysk** | ok. 80 MB na grę plus miejsce na światy |
| **Środowisko** | nic dodatkowego — .NET 8 jest w paczce |
| **Sterowanie** | klawiatura i mysz albo pad XInput |
| **Co-op** | sieć LAN albo otwarty port TCP / UPnP / VPN do gry przez Internet |

## 🎮 Sterowanie

| Klawisz | Akcja |
|---|---|
| `A` / `D` | Ruch w lewo lub w prawo |
| `Spacja` / `W` | Skok, pływanie w górę lub wspinaczka |
| `S` | Zeskok przez platformę lub schodzenie w dół |
| Lewy przycisk myszy | Kopanie, atak, strzał lub stawianie wybranego przedmiotu |
| Prawy przycisk myszy | Interakcja z drzwiami, skrzyniami, łóżkami, osadnikami i urządzeniami |
| `1`–`0` / kółko myszy | Wybór slotu na pasku szybkiego dostępu |
| `E` / `C` | Ekwipunek i crafting / panel craftingu |
| `B` | Księga receptur |
| `J` / `K` | Dziennik górnika / umiejętności |
| `M` / `N` | Mapa świata / minimapa |
| `H` / `F` | Szybkie leczenie / interakcja z najbliższym obiektem |
| `Q` | Wyrzucenie wybranego przedmiotu |
| `Esc` / `F12` | Pauza lub zamknięcie panelu / zrzut ekranu |

Klawisze można zmienić w ustawieniach. Pady XInput działają w całej grze i w menu.

## 🧑‍🤝‍🧑 Gra wieloosobowa (co-op)

W jednym świecie może grać do **ośmiu graczy**; świat symuluje gospodarz.

1. **Gospodarz:** wczytaj świat, naciśnij `Esc` i wybierz **Otwórz dla sieci LAN** (domyślnie port TCP `7777`) albo **Otwórz dla Internetu** — kody zaproszeń pojawią się wtedy w menu `Esc`.
2. **Znajomi:** w menu głównym wybierz **Gra sieciowa**, a potem świat z listy LAN (wykrywanie przez UDP na porcie `7778`), wpisz adres IP gospodarza albo wklej kod zaproszenia skrótem `Ctrl+V`.
3. **Serwer dedykowany:** uruchom serwer bez okna gry:

   ```powershell
   MinerGuy.exe --server "Nazwa świata" [--port 7777] [--bind <adres>] [--internet]
   ```

Do gry przez Internet potrzebny jest otwarty port, UPnP albo VPN, jeśli bezpośrednie połączenia przychodzące nie działają. Rozłączeni gracze łączą się ponownie automatycznie; walki ze strażnikami, czat, portrety i znaczniki na minimapie są wspólne. PvP nie jest częścią projektu gry.

## 🐞 Zgłaszanie błędów i logi awarii

Znalazłeś błąd? **[Zgłoś go](https://github.com/RaCzKoViC/The-MinerGuy/issues/new?template=bug_report.yml)** — formularz pyta o wszystko, co potrzebne do odtworzenia problemu. Pomysły zgłaszaj jako **[propozycje funkcji](https://github.com/RaCzKoViC/The-MinerGuy/issues/new?template=feature_request.yml)**. Zgłoszenia można pisać po polsku lub po angielsku.

Gdy gra się wysypie, zapisuje szczegóły w pliku w folderze:

```text
%LOCALAPPDATA%\MinerGuy\Logs
```

Wklej tę ścieżkę w pasek adresu Eksploratora plików, a potem dołącz do zgłoszenia najnowszy plik `crash-<data>.log` (logi zostają na Twoim komputerze; nic nie jest wysyłane automatycznie). Podaj też wersję gry, wersję Windows i model karty graficznej. Problemy z bezpieczeństwem zgłaszaj prywatnie — zobacz [SECURITY.md](SECURITY.md).

## 📜 Licencja

**W The MinerGuy grasz za darmo, ale to nie jest open source** — wszelkie prawa zastrzeżone, a kod źródłowy nie jest udostępniany.

- ✅ Pobieraj oficjalne buildy ze strony [Releases](https://github.com/RaCzKoViC/The-MinerGuy/releases), z [oficjalnej strony](https://raczkovic.github.io/The-MinerGuy/) lub przez aktualizator w grze i graj w nie prywatnie, niekomercyjnie — sam albo w co-opie, także na własnych serwerach dla znajomych.
- ✅ Zgłaszaj błędy i pomysły w [Issues](https://github.com/RaCzKoViC/The-MinerGuy/issues).
- ✅ Nagrywaj, transmituj i publikuj filmy oraz zrzuty ekranu ze swojej gry (także na kanałach z reklamami).
- ❌ Ponowne udostępnianie plików gry, sprzedaż, modyfikowanie lub dekompilacja gry oraz używanie jej nazwy, logo, grafik czy muzyki gdzie indziej wymagają wcześniejszej pisemnej zgody — zamiast plików udostępniaj link do tej strony.

Pełna licencja użytkownika (po polsku i po angielsku) jest w pliku [LICENSE](LICENSE).

## 🙏 Twórcy i oprogramowanie firm trzecich

Autor: **Maciej Raczkowski ([@RaCzKoViC](https://github.com/RaCzKoViC))**.

Zbudowane z użyciem [MonoGame](https://monogame.net/) i [.NET](https://dotnet.microsoft.com/). Gra zawiera też SDL2, OpenAL Soft, NLayer i NVorbis. Każdy z tych komponentów ma własną licencję open source — zobacz [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) i folder [licenses](licenses/).

## Status projektu

Wersja **1.32.1** jest grywalna od początku aż po zawartość po finale, a gra jest aktywnie rozwijana. Nowe wersje są ogłaszane na stronie [Releases](https://github.com/RaCzKoViC/The-MinerGuy/releases) i w pliku [CHANGELOG.md](CHANGELOG.md).

<p align="center"><sub>© 2026 Maciej Raczkowski (RaCzKoViC). Wszelkie prawa zastrzeżone.</sub></p>
