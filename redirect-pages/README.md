# Weiterleitungsseiten für GitHub Pages (vorbereitet, nicht aktiv)

Zweck: Wenn die Website auf STRATO liegt und dieses Repo privat werden soll, schaltet GitHub Pages bei einem kostenlosen Konto ab. Die in der App (ab 1.4: 4 Stellen), in App Store Connect und in Version 1.2 verlinkte Adresse `https://toehl-lgtm.github.io/weekly-web/privacy.html` wäre dann tot. Deshalb vorher ein **winziges öffentliches Repo** (oder diesen Pages-Inhalt) auf diese drei Weiterleitungsseiten reduzieren.

Reihenfolge (nicht abweichen):
1. STRATO-Seite ist online, alle URLs funktionieren (`/weekly/`, `/weekly/privacy.html`, `/impressum/`).
2. In diesen drei Dateien `[[NUTZER: STRATO-Domain]]` durch die Domain ersetzen (z. B. `example.de`, ohne `https://`). Mit „Suchen und Ersetzen“ in allen drei Dateien, sonst nichts ändern.
3. App-Konstante und App-Store-Connect-URLs auf STRATO umstellen (siehe `docs/releases/einreichung-2026-11-08.md` im Repo weekly).
4. Die drei Dateien als `index.html`, `privacy.html`, `imprint.html` in ein neues öffentliches Repo (nur diese Dateien) legen und GitHub Pages dort aktivieren, oder die Wurzeldateien dieses Repos ersetzen.
5. Erst dann dieses Repo privat stellen.

Eine Weiterleitung per `<meta http-equiv="refresh">` plus `rel="canonical"` und sichtbarem Link ist die einzige Möglichkeit auf GitHub Pages (kein `.htaccess`). Solange die Domain nicht eingetragen ist, enthalten die Seiten den Platzhalter und dürfen nicht veröffentlicht werden.
