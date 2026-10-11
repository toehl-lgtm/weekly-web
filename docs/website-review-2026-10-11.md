# Website-Prüfung vom 11. Oktober 2026

Geprüft wurden die drei HTML-Seiten, beide Stylesheets, das gemeinsame JavaScript, die Asset-Verweise, die veröffentlichte Website und die GitHub-Pages-Konfiguration. Ausgangsrevision: `2700384`. Dieser Bericht beschreibt die Prüfung und die Änderungen des zugehörigen Commits, keine verbindliche rechtliche Freigabe. Die native iOS-App wurde in dieser Website-Prüfung nicht erneut technisch oder rechtlich auditiert.

## Ergebnis und behobene Punkte

- Die Anschrift **Gauchstraße 17, 79098 Freiburg im Breisgau, Deutschland** war bereits in beiden Sprachfassungen von Impressum und Datenschutzerklärung vorhanden, auch auf der veröffentlichten Website. Sie bleibt vollständig erhalten. Das Impressum benennt Tim Oehl und OEHL studios, die E-Mail-Adresse und § 5 DDG. Impressum und Datenschutz sind auf allen drei Seiten im Footer direkt verlinkt und die deutschen Texte ohne JavaScript lesbar.
- Der veraltete Hinweis auf die EU-OS-Plattform wurde in Deutsch und Englisch entfernt. Die Plattform wurde zum 20. Juli 2025 eingestellt. Die vorhandene Erklärung zur Nichtteilnahme an Verbraucherschlichtung bleibt erhalten.
- Die Datenschutzerklärung beschreibt jetzt zusätzlich die Website: GitHub Pages einschließlich IP-Protokollierung, Verarbeitungszweck, Rechtsgrundlage, veröffentlichte Aufbewahrungskriterien, mögliche US-Verarbeitung und Verweise auf die Transfergarantien. Sie nennt ausdrücklich keine unbestätigte feste Log-Löschfrist und behauptet keinen abgeschlossenen Auftragsverarbeitungsvertrag.
- Hinweise zu Support-E-Mails einschließlich Gmail/Google, Zwecken, Rechtsgrundlagen und Löschkriterien wurden ergänzt. Die tatsächliche Umsetzung der Löschpraxis muss der Betreiber gewährleisten.
- Betroffenenrechte einschließlich Widerspruch, Widerruf, Beschwerde und zuständiger Aufsichtsbehörde wurden ergänzt. Widersprüchliche Aussagen wie „jede Art von Datensammlung“ und „ausschließlich lokal“ wurden präzisiert.
- Sprache und Farbschema werden nur nach einer Auswahl für die Tab-Sitzung in `sessionStorage` gespeichert. Kein automatisches Schreiben beim Erstbesuch, keine Nutzerkennung, kein Versand durch Website-Code. Die bisherige unbefristete `localStorage`-Nutzung entfällt; frühere Werte werden nicht mehr gelesen. Browser können Sitzungsdaten beim Wiederherstellen eines Tabs wiederherstellen. Diese Grenze steht in den Datenschutzhinweisen. Die Einordnung unter § 25 Abs. 2 Nr. 2 TDDDG beruht auf dem ausdrücklich gewünschten Darstellungswechsel und der auf die Sitzung begrenzten Speicherung; sie ist eine rechtliche Bewertung, keine behördliche Bestätigung.
- Alle eingebundenen Bilder, Stylesheets und Skripte stammen aus dem Website-Repository. Die Schriften sind Systemschriften. Im geprüften Code gibt es keine Analyse-SDKs, Tracking-Pixel, Formulare, extern eingebetteten Karten/Videos, Netzwerk-API-Aufrufe oder Werbedienste. Externe Links werden durch den Nutzer geöffnet. Das native Smart-App-Banner-Metadatum wurde entfernt, um mögliche browserseitige App-Store-Metadatenabrufe durch dieses Banner zu vermeiden; die normalen App-Store-Links bleiben bestehen.
- Die Seiten enthalten eine Content Security Policy: Skripte nur vom eigenen Host, keine Netzwerk-API-Verbindungen, keine Plugins oder Formularziele. Die verbleibenden Inline-Styles sind ausdrücklich erlaubt; Inline-JavaScript wurde in lokale Skripte überführt. `no-referrer` begrenzt die Weitergabe der Herkunftsseite. Eine Meta-CSP ersetzt nicht alle HTTP-Sicherheitsheader, insbesondere keine `frame-ancestors`-Headerregel.
- Sprachwechsel aktualisieren jetzt auch Dokumenttitel, Fußzeile und die Sichtbarkeit der Rechtstexte konsistent. Ungültige gespeicherte Themes werden ignoriert. Gesperrter Browserspeicher verhindert die Bedienung nicht. FAQ-Antworten sind ohne JavaScript lesbar. Lange Kontaktangaben dürfen umbrechen. Social-Preview-Bilder verwenden absolute URLs.

## Nachtrag zur Betreiber- und Vertragsklärung

Der Betreiber hat seine Tätigkeit als Einzelunternehmer unter OEHL studios bestätigt; Impressum und Datenschutzerklärung wurden entsprechend präzisiert. Umsatzsteuer-ID und Telefonnummer liegen noch nicht vor. Die vertiefte Vertragsrecherche einschließlich der Unterschiede zwischen Consumer-Gmail, Workspace und Workspace Individual sowie der offenen GitHub-Pages-Abdeckung steht in der [Anbieter-Vertragsprüfung](provider-contracts-2026-10-11.md). Die folgenden Punkte beschreiben den ursprünglichen Prüfstand; der Nachtrag konkretisiert ihn.

## Offene rechtliche Punkte vor einer Vollständigkeitsbestätigung

1. **Betreiberangaben:** Die tatsächliche Rechtsform, Niederlassungs-/Zustellanschrift, ein etwaiger Registereintrag und zugeteilte Umsatzsteuer- oder Wirtschafts-Identifikationsnummern sind nicht aus dem Website-Code belegbar. Solche Nummern müssen, soweit vorhanden und gesetzlich erforderlich, ergänzt werden. Es wurden keine Nummern oder Rechtsformen erfunden.
2. **Schnelle unmittelbare Kommunikation:** Es gibt eine E-Mail-Adresse und eine Postanschrift, aber keinen weiteren schnellen Kontaktweg; der Supporttext kündigt mögliche mehrtägige Antworten an. § 5 Abs. 1 Nr. 2 DDG und die EuGH-Rechtsprechung C-298/07 verlangen eine schnelle, direkte und effektive Kommunikation. Ein geeigneter zusätzlicher Kontaktweg (beispielsweise eine tatsächlich erreichbare geschäftliche Telefonnummer) muss geklärt werden. Eine Telefonnummer wurde beim Betreiber angefragt, nicht erfunden.
3. **Hosting und E-Mail-Verträge:** Für den konkreten GitHub-/Gmail-Account sind Rollen, Vertragsbedingungen, gegebenenfalls notwendige Auftragsverarbeitung nach Art. 28 DSGVO, tatsächlich anwendbare Transfergrundlage und Löschfristen zu prüfen. Die öffentlichen Anbietererklärungen beweisen keinen Vertrag für dieses Konto. Insbesondere ist die Verwendung einer `@gmail.com`-Adresse kein Nachweis eines geschäftlichen Google-Workspace-Vertrags. Falls die vorhandenen Verträge die konkrete Verarbeitung nicht abdecken, muss ein geeignetes Hosting bzw. Supportpostfach gewählt werden. Die Website wurde nicht ungefragt zu einem anderen Anbieter migriert.
4. **Betriebliche Umsetzung:** Die beschriebenen Auskunfts-, Lösch- und Supportabläufe, die tatsächliche Datenminimierung und gesetzliche Aufbewahrung müssen in der Praxis umgesetzt werden. Der Website-Code kann dies nicht nachweisen. Die appbezogenen Apple-/StoreKit-/iCloud-Angaben benötigen bei Änderungen der App einen gesonderten Abgleich mit der tatsächlichen App-Verarbeitung.

Für diese statische Informationswebsite sind insbesondere DDG, DSGVO und TDDDG einschlägig. Das frühere TMG ist nicht die aktuelle Grundlage für das Impressum. Der Code stellt selbst keinen Telekommunikationsdienst bereit; eine umfassende TKG-Konformitätsprüfung für einen Telekommunikationsanbieter ist daher nicht Gegenstand dieses Berichts. Aus dem Verzicht auf Tracking allein folgt keine vollständige DSGVO-Konformität des Hostings oder Supportbetriebs.

## Technische Prüfung und Grenzen

- JavaScript-Syntaxprüfung für `main.js` und `theme.js`: bestanden.
- HTML-Struktur: ausgeglichene Elemente und keine doppelten Attribute auf allen drei Seiten; eindeutige IDs, vorhandene lokale Links, Anker, CSS-Bildverweise und Skript-/Bild-/Stylesheet-Dateien geprüft.
- 40 Gruppen automatisierter DOM-Prüfungen mit temporär installiertem JSDOM: bestanden. Sie prüfen alle Seiten, Sprachwahl per Kopf-/Fußzeile, Titel und sichtbare Rechtstexte, explizite Speicherung und Wiederherstellung, ungültige Werte, gesperrten Speicher, FAQ-Zustände, Escape/Fokus im Mobilmenü, Vorschau per Tastatur und sichtbare Inhalte bei reduzierter Bewegung. Keine Testabhängigkeit wurde der Website hinzugefügt.
- Diff auf unbeabsichtigte Änderungen und Whitespace-Fehler geprüft.
- GitHub Pages war auf `main` mit Veröffentlichungsverzeichnis `/` konfiguriert; HTTPS ist erzwungen, die veröffentlichte Impressumsseite antwortete mit HTTP 200 und HSTS.
- Die Browser-Vorschau konnte wegen einer fehlgeschlagenen Webview-Verbindung nicht benutzt werden. Daher keine bestätigte visuelle Prüfung von 320/375/768-Pixel-Layouts, kein echter Safari-/VoiceOver-Test und keine Laufzeitmessung von Netzwerkrequests oder CSP-Durchsetzung. DOM-Prüfungen ersetzen diese Prüfungen nicht.
- Als mögliche weitere Optimierung: Das App-Icon-PNG ist etwa 1,17 MiB groß, obwohl es meist klein dargestellt wird; kleinere abgeleitete Varianten könnten den Erstabruf beschleunigen. Das bestehende Erscheinungsbild und die Bilddateien wurden nicht verändert. Die Stylesheets enthalten außerdem spätere Überschreibungen und beide Rechteseiten ähnliche Inline-Styles; eine Zusammenführung wäre eine Wartbarkeitsverbesserung, kein belegter Rechts- oder Laufzeitfehler.
- Kein iOS-Build: Die Änderungen betreffen ausschließlich das separate statische Website-Repository.

## Offizielle Quellen

Abgerufen am 11. Oktober 2026:

- [§ 5 DDG: allgemeine Informationspflichten](https://www.gesetze-im-internet.de/ddg/__5.html)
- [§ 25 TDDDG: Schutz der Privatsphäre bei Endeinrichtungen](https://www.gesetze-im-internet.de/ttdsg/__25.html)
- [DSGVO: insbesondere Art. 6, 13, 15–22, 28, 44 ff. und 77](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [§ 36 VSBG: Informationen zur Verbraucherschlichtung](https://www.gesetze-im-internet.de/vsbg/__36.html)
- [Verordnung (EU) 2024/3228: Einstellung der OS-Plattform](https://eur-lex.europa.eu/eli/reg/2024/3228/oj)
- [EuGH C-298/07: zusätzliche schnelle und effektive Kontaktmöglichkeit](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A62007CJ0298)
- [DSK-Orientierungshilfe für Telemedien, Version 1.1, insbesondere S. 23–24](https://www.datenschutzkonferenz-online.de/media/oh/20221130_OH_Telemedien_Version_1.1.pdf) – verwendet zur Auslegung der unveränderten Grundmechanik des heutigen § 25 TDDDG; die damalige Gesetzesbezeichnung lautet TTDSG.
- [GitHub Pages: Protokollierung von Besucher-IP-Adressen](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)
- [GitHub: Datenschutz und Datenübermittlungen](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [GitHub Data Protection Agreement: Anwendungsbereich und Rollen](https://github.com/customer-terms/github-data-protection-agreement)
- [Google-Datenschutzerklärung](https://policies.google.com/privacy?hl=de) und [Transfergarantien](https://policies.google.com/privacy/frameworks?hl=de)
- [LfDI Baden-Württemberg](https://www.baden-wuerttemberg.datenschutz.de/)
