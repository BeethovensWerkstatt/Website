---
layout: module-content
title: "Prototyp 1"
lead: "Variantendarstellung am Beispiel der Klaviersonate c-Moll op. 111"
permalink: /dokumentation/prototyp-1/
module: 1
kind: "Dokumentation"
---

Nach den beiden ersten Arbeitstreffen 2014, in deren Rahmen fachliche Grundlagen sowie erste Konzepte zur Codierung erarbeitet wurden, legt das Projekt *Beethovens Werkstatt* den ersten Entwurf eines Modells vor, der einerseits das Potential der digitalen Herangehensweise des Projekts illustrieren, andererseits einen fachlichen Diskurs anregen soll.

Dieser Prototyp 1 entspricht dem Stand vom Dezember 2014. Unser erster Versuch verfolgte das Ziel, eine vollständige Korrespondenz zwischen Faksimile, Transkription und Erläuterungstext herzustellen. Die Codierung wird mithilfe von skalierbaren Vektorgrafiken ([SVG](https://www.w3.org/TR/SVG11/)s) mit den hochauflösenden Faksimiles des [Beethoven-Hauses Bonn](https://www.beethoven.de) verknüpft. Die Darstellung der Notentexte erfolgt mit [Verovio](https://www.verovio.org), welches MEI-Daten in gewohnte Notenschrift konvertiert. Diese Transkription wird automatisch aus der MEI-Codierung generiert, wobei zur Zeit erst einige Parameter des Notentextes dargestellt werden können, da sich die entsprechende Software noch in der Entwicklung befindet.

Das im ersten Prototyp bearbeitete Beispiel stammt aus der autographen Werkniederschrift ([Beethoven-Haus Bonn BH 71](https://www.beethoven.de/de/media/view/5129936813686784/scan/0)) des ersten Satzes der Klaviersonate op. 111 in c-Moll, die Beethoven „am 13ten jenner 1822“ begann. Auf Seite 14 findet sich eine Stelle mit zahlreichen sich überlagernden Schreibschichten und Streichungen, deren letztgültige Ausarbeitung aus Platzmangel auf Seite 17 der Handschrift ausgelagert wurde.

**[Zur Demoversion von Prototyp 1](https://demo.beethovens-werkstatt.de/index.html)**

## Wie funktioniert Prototyp 1? {#bedienung}

![Abb. 1](/assets/images/dokumentation/prototyp-1/screenshot-prototyp-1-legende.jpg)

*Abb. 1: Screenshot des ersten im Dezember 2014 vorgestellten Prototyp 1, der anhand einer Variantenstelle in der Werkniederschrift der Klaviersonate op. 111 (Beethoven-Haus Bonn, BH 71) erarbeitet wurde.*

1. **Faksimile:** Die Faksimile-Seite mit der bearbeiteten Variantenstelle kann in verschiedenen Zoomstufen betrachtet werden. Zur besseren Orientierung im Manuskript ist die Einblendung der Taktzahlen möglich.
2. **Info-Fenster:** Wird ein beliebiges Zeichen im Faksimile angeklickt, öffnet sich an dieser Stelle das Info-Fenster. Es erläutert die Bedeutung des Zeichens und gibt an, in welchem Zusammenhang das Zeichen vom Komponisten hinzugefügt und wann es evtl. wieder getilgt wurde. Zudem kann darüber die zugehörige Note in der Transkription angezeigt oder Verweiszeichen gefolgt werden. Auch ist die Anzeige des Zeichens in der Codierung möglich.
3. **Auswahl-Box:** Hiermit kann die farbliche Hervorhebung einzelner Varianten ausgewählt werden.
4. **Variantenabfolge:** Die Varianten werden in einer redigierten [Transkription](/glossar/transkription-methoden/) angezeigt, die einerseits der Lesbarmachung und Verständlichkeit der Variantenstelle dient. Andererseits wird durch die Abbildung der Varianten in der Reihenfolge ihrer Entstehung die Textgenese rekonstruiert. Herausgeberergänzungen sind durch graue Einfärbung gekennzeichnet.
5. **Erläuterung:** Hier wird die Textgenese der jeweiligen Variantenstelle erklärt. Durch die Verlinkung von Begriffen des Erläuterungstextes mit dem Faksimile kann der Nutzer sich die in der verbalen Beschreibung gemeinten Zeichen im Faksimile direkt anzeigen lassen.
6. **Codierung:** Die dem Prototyp zugrunde liegende MEI-Codierung kann hier vollständig eingesehen werden.
7. **Seitenübersicht:** Hier kann durch die Seiten des Manuskripts geblättert werden. Die gewünschte Seite wird per Mausklick im Faksimile-Fenster aufgerufen. Die von uns noch nicht bearbeiteten Seiten des Manuskripts sind ausgegraut.

Zur Weiterentwicklung siehe [Prototyp 2](/dokumentation/prototyp-2/).
