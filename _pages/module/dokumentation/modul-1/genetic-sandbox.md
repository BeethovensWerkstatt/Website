---
layout: module-content
title: "Die Genetic Sandbox als Werkzeug in Beethovens Werkstatt"
permalink: /dokumentation/genetic-sandbox/
module: 1
kind: "Dokumentation"
author: Maja Hartwig
date: 2017-07-03
---

Bei der *Genetic Sandbox* handelt es sich um eine Webanwendung, welche von den MitarbeiterInnen zunächst als internes Arbeitswerkzeug entwickelt wurde. Sie entstand aus den Erfahrungen bei der Vorbereitung des ersten Prototyps zum Beispiel Op. 111 und sollte die Verknüpfung der einzelnen Zeichen des Faksimiles mit ihren jeweiligen MEI-Codierungen unterstützen. Bei der Arbeit mit der *Sandbox* stellte sich allerdings heraus, dass sie ein über diesen konkreten Anwendungsfall hinausgehendes Potential aufweist. Einerseits dient sie als Kommunikationsmittel – man kann einzelne Noten direkt adressieren, da diese farblich hervorgehoben und damit zweifelsfrei identifiziert werden können – andererseits erlaubt sie es durch die Einfärbungen, verschiedene Hypothesen zur Schreibschichten- und Variantenchronologie zu entwickeln, in ihrem jeweiligen Erscheinungsbild im Dokument zu beurteilen und so letztlich auf Plausibilität zu überprüfen.  
Benötigt werden hierfür sogenannte *SVG*-Shapes, welche durch Nachzeichnen sämtlicher Einzelzeichen einer Manuskriptseite mit Hilfe eines Grafiktablets erstellt werden können. Diese Einzelzeichen definieren bestimmte Bereiche der Faksimile-Seiten, die so auswählbar gemacht werden. Als kleine Webanwendung kann die *Sandbox* als einfache HTML-Seite in einem Browser geöffnet werden und erlaubt es, die *SVG*-Shapes farblich ein- bzw. auszublenden. Der Benutzer hat so die Möglichkeit, einzelne Zeichen durch Anklicken einzufärben, um beliebige Hervorhebungen zu erstellen. Dazu steht eine kleine Palette relevanter Farben zur Verfügung, die sich u. a. an Tinte, Papier, Bleistift und Rötel orientieren.

Bislang bietet die *Genetic Sandbox* keine Persistenz, d. h. getätigte Einfärbungen lassen sich nicht speichern und zu einem späteren Zeitpunkt bzw. von einer anderen Person wieder aufrufen. Für den internen Gebrauch haben sich einfache Screenshots als ausreichender Behelf erwiesen. Aufgrund steigender Komplexität der bearbeiteten Fallstudien, die wiederum eine gesteigerte Effizienz der genutzten Werkzeuge wünschenswert erscheinen lassen, ist allerdings geplant, die *Sandbox* zukünftig stärker mit den übrigen Werkzeugen zu verknüpfen und eine spezialisierte Editor-Komponente zu entwickeln, welche es gezielt erlaubt, bestimmte Aspekte des Datenmodells aus der *VideApp* heraus zu bearbeiten.

Die *Genetic Sandbox* zum Beispiel aus dem Streichquartett op. 59/3 finden Sie hier: [Op. 59/3 Seite 19](https://beethovens-werkstatt.de/sandbox/op59.3/index.html)

Ein weiteres Beispiel ist eine Manuskriptseite aus dem Lied *Neue Liebe, neues Leben* [op. 75/2, fol. 5r](https://beethovens-werkstatt.de/sandbox/op75.2/5r/index.html)
