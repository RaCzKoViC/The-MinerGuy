# Release history

This file records the major player-facing milestones. Detailed behavior and implementation boundaries are documented in [the game specification](docs/SPECIFICATION.md) and [architecture guide](docs/ARCHITECTURE.md).

## 1.34.0 — Readable world

- **See the danger.** A damaged enemy shows a thin health bar for a few seconds, every enemy has a soft outline, and
  in the dark hostile enemies get a faint rim light and glinting eyes (Settings → Game → "Highlight enemies").
- **Know where to go.** Arrows at the screen edge point to the active guardian, settlers with a request and the spot
  where you died, with the distance.
- **A map that remembers.** A death marker shows what you dropped and when it vanishes; up to 20 named pins
  (right-click the map); altars, vaults, sanctuaries, wrecks, crystal grottos and ruins are marked when you first see
  them; a legend explains the icons. Pins, finds and the death marker also show on the minimap.
- **Hints that match your controls.** Every key hint shows the key you actually bound — or the pad button when you
  play with a controller — and tips point at the hotbar slot that really holds the tool.
- **Tips at the right moment.** Urgent tips (night falling, low health, running out of air) come first, the
  night warning arrives earlier and repeats once if missed, and tips wait while a panel is open. New tips explain
  platforms, combat, interacting, skill points and energy.
- **Messages you can read.** [L] opens the last 40 messages; story, event, guardian and quest lines stay longer;
  log lines and the HUD numbers have a dark backing; achievement toasts wait until panels are closed.
- **Controls page.** The pause menu (and "How to play") shows every action with its current key and pad button, with
  a shortcut to rebinding.
- **A Journal that leads all the way.** Goals are split into the main path and side goals, show have/need counters
  ("Rustite bar 3/8"), and pin their recipe when clicked. The first guardian now comes before building a house, and
  the Journal continues past the wings: biome guardians, vaults, sanctuaries, an industry chapter (power, diesel,
  pipes, automation), the City rank, Echo, purification and Challenge.
- **19 new achievements**, among them the awakened guardians, wings, all twelve guardians, events survived,
  industry, purification, reforging and repairing.
- **Sounds come from somewhere.** Enemy, guardian, explosion and door sounds are panned and fade with distance.
- Text you type yourself — map pins, signs, portal names and chat — is always shown exactly as written (a pin named
  "Kopalnia" no longer turned into "Mine" in English).

## 1.33.1 — Fair rules

- **Money means something again.**
  - A stack is sold as a whole: 50 bullets from one rustite bar now bring 10 nuggets, not 50.
  - All shop discounts together (mood, reputation, Haggling) are capped at 40%, and nothing can be bought for less
    than it sells for — geodes now cost at least 76.
  - The Transmutation Crucible gives back 75% of the ingredients (less for worn items) and asks before taking an
    item with a good modifier apart, so it is no longer a free reforge or a free repair.
- **One meal at a time.** A better meal replaces a weaker one and food heals over 8 seconds, so eating can no
  longer out-heal potions or stack three meal buffs.
- **Weapons do what they say.** The Void Bow's arrows pierce three enemies, the Pulsite Bow fires three arrows, the
  Aurora Bow shoots aurora beams, the Echo Bow's arrows leave an echo, the Storm Staff's lightning pierces, the
  Brood Staff's spores home again, the Void Rifle's bullets pierce and the Tide Tome's orbs bounce. The Harpoon Gun
  fires a piercing harpoon under water. Burst guns and the Root Bow's second arrow use the full critical chance.
- **Tools are tools.** Pickaxes, axes and hammers deal half damage to enemies, and mining-speed bonuses no longer
  speed up combat swings (the pulsite pickaxe was as strong as the pulsite sword).
- **Factories run for everyone.** Machines, power, pipes, sensors and wiring now run around every player, not only
  the host — a guest's base keeps working when the host walks away, and factories work on dedicated servers.
  Launch pads, teleporters and pressure plates now work for guests too.
- **Wires switch machines.** A wire pulse turns pumps, rigs, generators, the refinery and electric lamps on and off,
  and opens or closes electric valves and circuit breakers.
- **Generators burn fuel only under load,** and the refinery needs 3 kW of power while it is refining (a wood or
  coal generator is enough). **Existing refineries stop until they are connected to power.**
- **A guardian that leaves undefeated gives its summon item back** (when everyone fell or walked away).
- On Large and Huge worlds the surface is no longer labelled "Sky". The death screen is translated, the stone
  pickaxe tip counts copper and iron pickaxes, and the trash says what it deletes.
- **Co-op:** the network protocol changed, so everyone needs 1.33.1 to play together.

## 1.33.0 — Light game

- **Graphics quality presets.** Settings → Graphics starts with a quality selector: **Low** (basic lighting and
  character shadows, half the particles — for integrated graphics), **Medium** (no lamp shadows, environment
  shaders or deep fog, fewer particles) and **High** (every effect, as before). Changing any single switch shows
  **Custom**. Hovering the selector names the detected graphics card. Existing settings are kept as they are.
- **A sensible preset on the first start.** A new installation picks the preset from the graphics card: Low for
  older integrated graphics and software renderers, Medium for newer integrated graphics (Iris Xe, Ryzen APUs,
  GeForce MX), High for dedicated cards.
- **A precise FPS counter.** Settings → "Show FPS" now shows real frames per second, the average frame time and
  the slowest frame of the last half second.
- **No freeze when someone joins.** When a guest joins a big co-op world, the host's game no longer stops: the
  longest step on the host's game thread is now 1–3 ms instead of about 200 ms on a Huge world. The world is
  copied gradually and packed in the background, and everything that changes meanwhile — blocks, chests, signs,
  drops, chat — still reaches the new player.
- **New worlds start with their water at rest.** World generation lets liquids settle much longer, so right after
  creation 5–6 times less water keeps flowing (less work for the host, far fewer changes sent to co-op guests).
  Creating a world takes a moment longer once (Small about 1 s, Huge about 8 s). A seed still gives the same world.
- For developers: `tools\gpubench.ps1` measures real frame and GPU time per preset and per effect;
  docs/PERFORMANCE.md has the results and the new co-op join measurements.

## 1.32.1 — English all the way

- **The English version no longer shows Polish text.** About 120 texts that were still Polish are translated:
  guardian names on the health bar and their "awakens" and "defeated" messages, achievements, settler quests,
  dialogue, rewards and arrivals, expeditions, settlement ranks, pickup pop-ups ("Stone (19)"), miner level and
  statistics, Journal goals, death drops, fishing, the world map, loading screens, difficulty descriptions and
  co-op messages ("Ola joins the game!"). Many of them were sentences put together in code, which could never be
  translated; they now use translation templates.
- English quotation marks and the minus sign were drawn as "?" because the game font did not have them. A test
  now checks that the font can draw every character of every text.
- In Polish, a guardian's defeat now reads "Pokonano: <name>!" (it used to be "<name> został pokonany!", which
  was wrong for female guardians such as Aurora).
- All ten gameplay GIFs are re-recorded in English on this version (menu, mining, building, crafting, guardian
  fight, storm, ocean, settlement, flight, co-op).
- For developers: `MINERGUY_LANG_AUDIT=<file>` lists every text shown in Polish while playing in another language,
  and `MINERGUY_SELFTEST_LANG=en` runs the in-window self-test in English.

## 1.32.0 — Right where you left off

- **A saved game continues exactly where you stopped.** Loading a world puts your character back on the very spot
  where it stood when the game was saved — facing the same way, with the camera already there — instead of at its
  bed or the world's spawn. The place is remembered for every world separately on every save (manual save,
  autosave, leaving to the menu, closing the window, and for co-op guests too). A character saved in a boat is still
  in its boat.
- If a block now fills that spot (for example something another player built in co-op), the nearest free spot
  within 8 blocks is used; only a save from before 1.32, a damaged entry or a different world with the same name
  start at the bed or spawn as before.
- **Continue.** The main menu has a new top button, "Continue: <character> — <world>", which loads your last
  played save in one click. It is hidden when that character or world has been deleted.
- New tests save and reload the game and check the exact position, the boat, blocked spots, other worlds and old
  saves; the in-window self-test saves, returns to the menu, clicks Continue and checks the character is back on
  the same spot.

## 1.31.0 — Fair forge

- **Repair instead of loss.** Worn tools and weapons can be repaired near the station of their own recipe (hand
  recipes anywhere) for part of the recipe's main material — at most half of it for a fully worn item — or at the
  blacksmith settler for coins, which also covers boss and monster drops. A repair restores full durability and keeps
  the modifier. The crafting window has a new **Repair** view listing every worn item with its cost, with **Repair**
  and **Repair all**; the tooltip of a worn item says where it can be repaired, and you are warned once when a tenth
  of its durability is left.
- **Tools last about twice as long.** The stone pickaxe now lasts 200 uses (was 100), the starter pickaxe 130 (was
  55), the wooden pickaxe and axe 80 (was 50); every tool and weapon lasts longer than before, up to 1500 uses.
- **Guardians are milestones again.** Classic metal pickaxes are side-grades within their tier instead of a ladder
  around the guardians: iron is now tier 2, silver and tungsten 3, gold 4 and cobalt 5. Without a guardian the best
  pickaxe is tier 2; the Rootwarden opens tier 3 and the Prism Warden tiers 4–5. Each classic pickaxe is weaker than
  its main-ladder peer in one way and better in another. Pickaxes you already own keep working and show their new
  tier.
- The Tinkerer sells the Tinker's workshop only after the Rootwarden (taking two apart gave enough rootheart for a
  verdanite pickaxe without the fight).
- **Lakes keep their water.** A lake's shallow rim used to dry up every moment, so lakes slowly drained through their
  edges and co-op guests received a constant stream of water changes. Only leftover puddles dry up now.
- **A refused player always learns why.** The host could close the connection while its refusal (wrong invite code,
  full world, other version) was still being sent, and the player saw "The host closed the connection" instead of the
  reason.
- A new test works out the best pickaxe reachable with each set of guardians from the real game data (mining,
  crafting, shops, chests, fishing, enemies) and fails with the path if a classic metal skips a guardian again.

## 1.30.0 — Shared factory

- **One factory for the whole group.** In co-op the host alone runs pipes, pumps, tanks, generators, batteries, fuses
  and breakers. Guests see the same fuel, charge, liquid levels and valve settings (sent four times a second) and can no
  longer overwrite them with their own copy, so two players at one generator no longer see different numbers.
- **Machines answer guests through the host.** A guest's right-click on a machine (refuelling, switching a valve or a
  refinery mode, pumping by hand) is carried out by the host with the item the guest really holds; the canister that
  comes back lands in the guest's backpack. Items the host has never seen in the guest's inventory are refused.
- **Fire burns once.** Fire, smoke and heat are simulated by the host and shown to guests as they are, so burning
  wood gives one pile of charcoal instead of one per player, and flames hurt every player standing in them. Fires and
  heat sources now start around every player, not just the host.
- **Fair guardians in co-op.** A guardian summoned with more players nearby has 35% more health for every extra
  player (shown under its name), and every player near it when it falls gets their own roll of its drop table, even
  if they died during the fight. Coins, echo shards and Challenge trophies are still dropped once, and the hint after
  the kill is shown once. Single-player fights are exactly as before.
- **Enough guardian materials for a full set.** The Prism Warden drops 7–10 prism lenses (was 5–8) and the Rootwarden
  12–15 rootheart (was 8–12), so one kill covers the gear and stations that need them.
- Sessions can be started with a fixed random seed, so tests (and later replays) give the same crafting results and
  drops every time.
- **Patches can play together.** Joining checks the network protocol and a fingerprint of the game content (blocks,
  items, enemies, settlers and liquids) instead of the exact version, so 1.30.0 and a later 1.30.x bug-fix release can
  share a world. A refused player sees why in their own language, including both version numbers.
- New automatic tests drive a host and a guest over a real local connection (machines, refuelling, forged items,
  batteries, fire, version checks).

## 1.29.1 — Safe ground

- **In-game updates.** When the main menu opens, the game checks GitHub for a newer release. If there is one, a button
  opens a window with the new version, its date, download size and release notes (in Polish or English, following the
  game language). "Update and restart" downloads the installer, checks its size and SHA-256 against GitHub, copies your
  characters, worlds and settings to `%LOCALAPPDATA%\MinerGuy\Backups`, installs the update and starts the new version,
  which shows what changed. "Later" and "Skip this version" are there too, and the check can be turned off in
  Settings → Game. Saves are never touched by an update. `MinerGuy.exe --update` does the same without the window.
  Updating from inside the game works from 1.29.1 on: 1.29.0 has to be updated by hand once.
- **Safer installer.** Every file is unpacked next to the old one first and swapped in only when the whole game is
  unpacked; a failed install or update leaves the previous version intact (and starts it again after a failed update).
  New switches for the updater: `/update`, `/portable` (a portable folder stays portable) and `/waitpid=N`.
- **Co-op hardening.** A damaged or malicious packet can no longer crash the host or the other players: unknown liquid
  kinds are cleaned up, every count and position read from the network is checked, a guest that sends garbage is
  disconnected and logged, a host that sends garbage disconnects the guest cleanly. Connections must say hello within
  10 s and may send at most 64 KB before that; chat can no longer pretend to come from someone else.
- **English from the first minute.** A first start picks English unless Windows is set to Polish. The first tips, the
  help screen, the HUD, the Journal (including the 1.28 industry goals), widget labels and the main menu are translated;
  a test checks that every Journal goal and tip has an English text.
- **The Journal always shows the next step.** Unfinished goals come first, finished ones fold into one line, and the
  list scrolls. Pickaxe goals accept any pickaxe of the right tier (copper and iron count), and the guardian counter
  includes all major guardians.
- **Crash logs.** Crashes on any thread are written to `%LOCALAPPDATA%\MinerGuy\Logs\crash-<date>.log` (the newest
  20 are kept) with the game version, Windows and .NET versions; `crash.log` is still written too.
- **Settings fit the screen.** The Graphics and Game tabs use two columns (the effect switches scroll), so nothing is
  drawn off-screen at 1080p and below.
- A clean clone builds with `dotnet build MinerGuy.sln` (the installer only requires the game package when built by
  `tools\package.ps1`). New end-to-end checks: `tools\check_update.ps1` (a full update on real files) and
  `tools\check_install.ps1`.

## 1.29.0 — 2026-10-04 — Wooden tools

- Added the wooden pickaxe, crafted by hand from 6 wood of any kind (no workbench needed). It fixes a soft-lock: once the starter pickaxe wore out, there was no way to mine the stone needed for a stone pickaxe.
- The wooden pickaxe is the lowest pickaxe (tier 0): it digs dirt, sand, clay, stone, coal and other basic blocks but no ores, mines at about 64% of the stone pickaxe's speed and lasts 50 uses (stone pickaxe: 100) — enough stone for three stone pickaxes.
- When the last pickaxe in the backpack breaks, a message points to the wooden pickaxe recipe.
- Bare hands: with an empty slot selected you can pull up grass, flowers and leaves and punch a tree down — slowly (an oak takes 9 punches, 4 s) and for half the wood (one per trunk). This fixes the second soft-lock: once the starter axe wore out with no wood left, there was no way to get wood.
- Added the wooden axe, crafted by hand from 5 wood of any kind. It fells trees at about 64% of the stone axe's speed and lasts 50 uses (stone axe: 100), about 16 oaks.
- A character with no tools and no materials can always get back to stone tools: bare hands → wooden axe → wooden pickaxe → stone → workbench → stone pickaxe and stone axe.
- When the last axe breaks, a message explains bare-handed felling and the wooden axe recipe.
- Tools can now define their durability explicitly; the balance report has new early-pickaxe and early-axe tables.
- Co-op: 1.29 adds items, so hosts and guests must both run 1.29 (a 1.28.x game cannot join a 1.29 host and vice versa). Saves from 1.28 load unchanged.

## 1.28.1 — 2026-10-04 — Collision fix

- Fixed a serious glitch where walking into a wall or a narrow passage launched the player upwards through every block. The slope-to-block hand-over lifted any entity onto the wall in front of it once per collision sub-step without checking for space, so it climbed walls of any height and pushed the body into ceilings.
- Step-up now climbs only real one-tile ledges, only from the ground, only when the whole body fits above the ledge, and at most once per frame.
- Entities found inside blocks (teleporters, beds, blocks placed on them, leaving cheat flight or a minecart) are moved to the nearest free spot within four tiles instead of being thrown upwards; a buried entity stays put.
- Collision now clamps runaway speeds, recovers from NaN values, caps lag-spike frames and guarantees that a collision sub-step never ends inside a solid tile.
- Boats no longer pass under ceilings too low for the player.
- Added 49 collision regression tests, including randomized fuzzing over 240 worlds and 96,000 frames.

## 1.28.0 — Atmosphere and depth

- Added layered cave fog, impact-driven chromatic aberration, nighttime fireflies and magma sparks.
- Added measurable image checks for god rays, heat haze, underwater refraction, wet surfaces, cave fog and chromatic aberration.
- Added character and enemy readability checks for dark caves.
- Extended the Miner Journal with a guided introduction to oil extraction and industrial storage.
- Improved hand-pump diagnostics for missing fluid, missing pipes and full networks.
- Fixed loading of Huge 6000×1800 worlds and added legacy v7 save fixtures.
- Fixed portable and installed builds by shipping SDL2 and OpenAL native libraries beside the executable.
- Added combat, storm, forest-fire and large-installation performance scenarios.

## 1.24.0–1.27.0 — Lighting and environmental rendering

- Added directional sunlight and shadows, entity shadows and a filmic scene-composition pipeline.
- Replaced axis-biased light propagation with eight-direction flood fill.
- Added hard point-light shadows and thresholded GPU bloom.
- Added god rays, underwater refraction and caustics, magma heat haze, lightning exposure and wet surfaces.

## 1.17.0–1.23.0 — Industry and automation

- Added oil deposits, multiple fluids, pipelines, pumps, tanks, refineries and fuel fractions.
- Added power networks, generators, batteries, cable capacity, overload protection and industrial lighting.
- Added heat conduction, ignition, fire propagation, pressure, pipe ruptures and environmental sensors.
- Added logic gates, relays, counters and stateful automation components.

## 1.13.0–1.16.0 — World and player depth

- Added large-scale enemy encounters, equipment durability, hunting and developer tools.
- Expanded the skill system to level 1000 and added a searchable creative item catalogue.
- Added slopes, vegetation, classic ore families, Huge worlds and explicit cheat controls.

## 1.9.0–1.12.0 — Usability and reliability

- Added recipe search, filters, variants and HUD recipe tracking.
- Added repeatable performance measurement and cleaned up per-world rendering resources.
- Added an English interface and screenshot folder integration.
- Added host-side guest-inventory accounting for settlement transactions.

## 1.7.0–1.8.1 — Ocean and settlement

- Added deep oceans, reefs, wrecks, diving equipment, boats, sea creatures, the Leviathan and storms.
- Added settler quests, reputation, settlement ranks, expeditions and avatar-frame rewards.
- Added atomic save recovery and hardened network transaction handling.

## 1.3.0–1.6.1 — Post-finale progression and multiplayer

- Added the world Awakening, spreading Blight and Bloom biomes, flight and three post-finale guardians.
- Added expedition portals, signs, Challenge worlds and Internet invite codes.
- Expanded character customization and multiplayer presentation.
- Added reconnect support, dedicated servers and cooperative boss attacks.

## 1.0.0–1.2.0 — Complete core game

- Delivered the procedural world, mining, construction, crafting, combat and save systems.
- Added the complete four-guardian main progression and final victory state.
- Added local cooperative multiplayer for up to eight players.
- Expanded crafting, furniture, settlers, enemies, audio and controller support.

## 0.1.0–0.6.0 — Foundation

- Established the original playable vertical slice and deterministic world generation.
- Added balance reporting, tutorials, weather, fishing, gardening and biome guardians.
- Added wiring, mechanisms, minecarts, item modifiers, skills and achievements.
- Reworked procedural visuals, animation, particles, liquids and controller input.
