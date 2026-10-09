# Security policy

## Supported versions

Only the latest release published on [GitHub Releases](https://github.com/RaCzKoViC/The-MinerGuy/releases/latest) receives fixes. Please update before reporting a problem.

| Version | Supported |
|---|---|
| Latest release (currently 1.35.x) | ✅ |
| Older releases | ❌ |

## Reporting a vulnerability

**Please do not report security problems in public issues.**

Report them privately through GitHub: open the repository's **Security** tab and click **Report a vulnerability**, or go directly to <https://github.com/RaCzKoViC/The-MinerGuy/security/advisories/new>.

Useful details include:

- the game version and how it was installed (installer or portable zip);
- the affected area — for example co-op networking (TCP port 7777, LAN discovery on UDP 7778, Internet invite codes), the dedicated server, save files or the installer;
- steps to reproduce, and a proof of concept if you have one;
- the impact you expect (crash, code execution, data loss, cheating in co-op, and so on).

You can expect a first response within 7 days. Please give a reasonable amount of time for a fix before disclosing the problem publicly.

## Scope notes

- In co-op, player inventories are client-owned by design; the host validates observed transactions but cannot prove every state reported by a modified client. Cheating by a modified client in a session you joined with friends is a known limitation, not a vulnerability.
- Only download the game from this repository's Releases page or the official website, <https://raczkovic.github.io/The-MinerGuy/>. Builds from other sources are not supported and may not be redistributed (see [LICENSE](LICENSE)).
- The source code is not public. Please report what you observe in the released game; do not attach decompiled code.
