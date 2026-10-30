---
layout: module-content
title: "Die VideApp – Erläuterungen und Funktionsweise"
permalink: /dokumentation/videapp-var/
module: 1
kind: "Dokumentation"
author: Maja Hartwig
date: 2018-07-11
---

(Vgl. zu den folgenden Ausführungen auch das Strukturschema) \[Anm. 2026: Das Strukturschema ist derzeit nicht verfügbar.\]

## 1. Einleitung

Das von der Akademie der Wissenschaften und der Literatur in Mainz geförderte Forschungsprojekt *Beethovens Werkstatt* möchte unter verschiedenen Perspektiven Einblicke in die Schreibwerkstatt Beethovens gewähren und die hier zu beobachtenden Schreibprozesse auf neue Weise sichtbar machen. Mit den hierfür entwickelten digitalen Methoden und Konzepten werden gewissermaßen Brillen zur Verfügung gestellt, die ein Nutzer aufsetzen kann, um die Genese eines Werkausschnitts aus unterschiedlichen Blickwinkeln betrachten und dadurch besser nachvollziehen zu können. Dabei kann sich das Vorhaben nicht auf eine bereits bewährte Verbindung der Schreibprozesse erforschenden „Genetischen Textkritik“ mit Darstellungsmethoden der „Digitalen Musikedition“ stützen. Vielmehr steht das 2014 begonnene Grundlagenforschungsprojekt vor der Aufgabe, einerseits musikspezifische Verfahren der Genetischen Textkritik zu entwickeln und dies andererseits von Anfang an vor dem Horizont jener Möglichkeiten zu tun, die die Digitale Musikedition bietet bzw. aktiv neue Verknüpfungsmöglichkeiten beider Bereiche zu explorieren.  
Die Präsentation der Ergebnisse der bisherigen Arbeiten ist nun in einem Werkzeug, der sogenannten *VideApp*, gebündelt worden, nachdem sie zuvor in einzelnen, auf spezifische Forschungsschwerpunkte ausgerichteten Prototypen erarbeitet worden waren (vgl. dazu [Prototyp 1](/dokumentation/prototyp-1/) zum I. Satz der Klaviersonate op. 111 mit dem Schwerpunkt auf der Entstehungsreihenfolge von Varianten sowie [Prototyp 2](/dokumentation/prototyp-2/) zu einer Textnarbe im II. Satz des Streichquartetts op. 59/3 mit der Darstellung von Schreibschichten und Invarianz).  
Die *VideApp* verdankt ihren Namen einem von Beethoven (und anderen Komponisten) häufig genutzten Verweiszeichen, bei dem die beiden Silben des Wortes "vide" (lat. für siehe) genutzt werden, um räumlich getrennte, aber inhaltlich zusammengehörende Textsegmente zu verbinden und in komplizierten, bei Beethoven oft auch labyrinthischen Handschriften den Textverlauf anzuzeigen.  
Die folgenden Ausführungen sollen in Verbindung mit dem alle Funktionen in einer Übersicht zusammenfassenden Strukturschema Hinweise zur effektiven Nutzung der *VideApp* geben und zugleich das Verständnis für die zugrundeliegenden Konzepte und Methoden fördern.

## 2. Technische Grundlagen der VideApp

Die vom Projekt entwickelte Anwendung beruht auf einer sehr komplexen, modular aufgebauten Software, die sich auf die Auswertung der zugrundeliegenden Codierung der beobachteten Notationsphänomene stützt. Bei dieser Codierung handelt es sich um das XML-Datenformat MEI, in dem sämtliche Informationen zur Textgenese der jeweils untersuchten Beispiele einschließlich deren musikalischer und graphischer Inhalte (Einbindung von Faksimiles) sowie unterschiedlichste Annotationen und Kommentare dokumentiert sind. Über die Erfassung der Noten- und Verbaltexte hinaus sind in diesen Daten sämtliche zugehörigen SVG-Shapes der behandelten Manuskriptstellen (d.h. Markierungen aller einzeln erfassbaren, bedeutungstragenden grafischen Zeichen des Notats wie Noten, Balkungen, Dynamik, Artikulation usw.) eingebunden und durch eindeutige Identifikationsnummern mit dem codierten musikalischen Inhalt verknüpft. Es besteht demnach eine direkte Verbindung zwischen einem in der Transkription dargestellten musikalischen Sachverhalt (also dem "Text") und dessen Entsprechung im Manuskript (d.h. dem Zeichen im "Dokument").  
Die Flexibilität der Auszeichnungssprache MEI und ihre Präzision fordernde Codierung, die die strukturierte Erfassung von Texten erlaubt, ermöglichen das gezielte Auffinden der jeweils gewünschten Informationen innerhalb dieser Daten und weiterhin deren Verarbeitung, z.B. durch entsprechende technische Operationen zur Visualisierung der im Weiteren beschriebenen Darstellungsmodi. (Zum Einsatz kommen dabei Programmiersprachen wie JavaScript und JQuery, XML-Abfragesprachen wie XQuery, XSLT-Transformationen der Daten und Darstellungssprachen wie CSS und HTML). Bisher enthält die *VideApp* drei Fallstudien: Die Takte 124–135 aus dem Lied *Neue Liebe, neues Leben* op. 75/2, den vollständig bearbeiteten ersten Satz des *Duetts mit zwei obligaten Augengläsern* WoO 32 sowie die Schlusstakte des Kopfsatzes der 8. Symphonie op. 93. (Die Darstellungsmodi hängen dabei auch vom Stand der technischen Entwicklung ab, deren Versionen auf [GitHub](https://github.com/BeethovensWerkstatt/Data-Model/search?utf8=%E2%9C%93&q=Beethovens+Werkstatt&type=) verfolgt werden können.)

## 3. Ansichtsmenü und Kopfleiste

Nachdem auf der Startseite der *VideApp* ein Beispiel ausgewählt wurde, kann im Ansichtsmenü oben links zwischen vier unterschiedlichen Darstellungsmodi („Kommentar-Ansicht“, „Quellen-Ansicht“, „Transkriptions-Ansicht“ oder „XML-Ansicht“; ausführlicher dazu weiter unten) gewählt werden. Die Standardeinstellung ist die "Kommentar-Ansicht", die zunächst im Vollbildmodus erscheint. Das *VideApp*-Symbol in der Kopfleiste ganz oben links fungiert als „Home-Button“ und führt zurück zur Startseite der Anwendung.

![Abbildung aus der VideApp](/assets/images/dokumentation/videapp-var/VideApp1-Kopie.jpg){: width="320"}

Ebenfalls in der Kopfleiste, jedoch in deren rechter oberer Ecke, befinden sich Bedienhilfen, die es ermöglichen, zwei Ansichten übereinander oder parallel nebeneinander (jeweils durch die grauen Balken symbolisiert) zu öffnen und somit gleichzeitig unterschiedliche Darstellungsformen zu betrachten.  Außerdem kann hier zwischen deutscher und englischer Sprache (DE \| EN) gewählt werden. (Eine Übersetzung ins Englische ist derzeit nur für die Startseite, für die „Tour“ – siehe Startseite, blaues Kästchen – und für die Bedienwerkzeuge verfügbar.)

![Abbildung aus der VideApp](/assets/images/dokumentation/videapp-var/Balken_oben_rechts-e1529319686510.png){: width="300"}

### 3.1 Kommentar-Ansicht

Die "Kommentar-Ansicht" enthält Erläuterungen zu dem vom Nutzer ausgewählten Beispiel und den damit verbundenen Forschungsfragen. Sie umfasst allgemeine Informationen zum Werk, zur Quelle (bzw. den Quellen), eine detaillierte Erklärung der Variantenstelle(n) und neben der ausführlichen Beschreibung des Schreibprozesses auch eine Hypothese zur Art des kompositorischen Problems, das zu dieser Variantenbildung geführt hat. Daneben sind im Kommentartext die im Glossar des Projekts definierten Begriffe verlinkt. Zu den im Text beschriebenen (und typografisch hervorgehobenen) Stellen oder Zeichen (wie z.B. *Vide*-Verweisen) kann über eine Infobox eine Anzeige im Manuskript, in der Codierung oder in der Transkription aufgerufen werden (siehe unten "Infobox").

### 3.2 Quellen-Ansicht

In der "Quellen-Ansicht" steht der untersuchte Manuskriptausschnitt als hochaufgelöstes Digitalisat zur Verfügung. In einem kleineren Fenster oben rechts (siehe Abbildung "Quellennavigation") ist eine Miniatur-Anzeige dieses Digitalisats sichtbar, in dem das rote Kästchen den aktuell in der Vergrößerung sichtbaren Ausschnitt des Dokuments markiert. Dieses Kästchen kann mit Hilfe des gedrückten Mauszeigers in andere Bildbereiche verschoben werden (entsprechend wird die vergrößerte Darstellung angepasst).

![Quellennavigation aus dem Beispiel Op. 75/2](/assets/images/dokumentation/videapp-var/Mini_Partitur.png){: width="320"}

**Quellennavigation aus dem Beispiel Op. 75/2**

Unter dieser Miniatur-Anzeige finden sich verschiedene Navigationsbuttons, die das Heran- und Heraus-Zoomen („+“, „–“), das Herstellen einer Gesamtansicht (gekreuzter Doppelpfeil) und das Drehen des Manuskripts gegen oder mit dem Uhrzeigersinn erlauben. In der Zeile darunter können Taktzahlen in die Quelle eingeblendet oder wieder ausgeblendet werden.  
In der "Quellen-Ansicht" sowie in der nachfolgend beschriebenen "Transkriptions-Ansicht" steht auch die sogenannte „Textgenetische Navigation“ zur Verfügung (siehe dazu unter Punkt 4. "Textgenetische Navigation").

### 3.3 Transkriptions-Ansicht

In der "Transkriptions-Ansicht" wird der sogenannte [Cleartext]({% link _glossary/cleartext-transkription.md %}) der jeweils behandelten Stelle angezeigt. Diese Ansicht umfasst sowohl die transkribierten Einzelstellen des textgenetischen Prozesses ([Textzustände]({% link _glossary/textzustand.md %})) als auch die endgültige Fassung des Textes. Zum Auswählen der Textstellen dient wie in der "Quellen-Ansicht" die "Textgenetische Navigation" (siehe Punkt 4.). In der "Transkriptions-Ansicht" wird dem Nutzer angeboten, sich mit jedem einzelnen Textzustand bzw. jeder Variante zu beschäftigen und die Textentwicklung Schritt für Schritt anzusehen. Die Textzustände bzw. Varianten werden dabei aus der Codierung mit Hilfe der Rendering-Software [Verovio](http://www.verovio.org/index.xhtml) wieder als konventioneller Notentext angezeigt. Lesen Sie bitte in den Kommentartexten zu den einzelnen Fallbeispielen nach, welche beispielspezifischen Anzeigemöglichkeiten die Ansicht jeweils enthält.

### 3.4 XML-Ansicht

Sämtliche Daten (Texte und Beschreibungen, musikalischer Inhalt inklusive Varianten und Schreibprozessen bis hin zu bibliografischen Angaben zum Werk und seinen Quellen) sind in einer MEI-Datei gespeichert, in die mit dieser Ansicht Einblick genommen werden kann. Verlinkungen aus den anderen Ansichten führen über die "Infobox" zu entsprechenden Code-Ausschnitten. Wie oben bereits erwähnt, ist die Codierung in MEI der zentrale Kern der Datenerfassung und notwendig, um erstens die Schreiboperationen und Prozesse während der Entstehung der Texte sichtbar zu machen und zweitens die Verknüpfung von Texten, Kommentaren, Transkriptionen etc. mit den handschriftlichen Quellen herzustellen. Zugleich garantiert die Erfassung in diesem XML-Format eine langfristig les- und verarbeitbare Dokumentation der Erkenntnisse.

## 4. Textgenetische Navigation

Ein zentrales Element der *VideApp* befindet sich jeweils in der Mitte am unteren Bildrand des Fensters einer geöffneten "Quellen-Ansicht" bzw. "Transkriptions-Ansicht". Dieses Navigationsfeld erschließt die Ergebnisse der vom Projekt im betrachteten Textausschnitt ermittelten genetischen Schreibprozesse.  
In einer schematischen „Textübersicht“ symbolisieren hellgraue, horizontal verlaufende Balken die Anzahl der im Manuskript vorkommenden Partitur-Systeme: Über dem obersten sind in unveränderlichen grauen Werten Taktintervalle als Orientierungspunkte bezeichnet.

![Textgenetische Navigation in der Quellen-Ansicht des Beispiels Op. 75/2](/assets/images/dokumentation/videapp-var/Genetische_Navigation.png){: width="720"}

**Textgenetische Navigation in der Quellen-Ansicht des Beispiels Op. 75/2 ("Textübersicht")**

Bewegt man den Mauszeiger über diese Fläche, so erscheinen auf der linken Seite der Box die Stimmenbezeichnungen dieser Systeme sowie auch die aktuellen Taktzahlen zur Mauszeigerposition (hell hervorgehoben). Diese Taktzahlen sind mit einer schmalen hellgrauen Linie verknüpft, die bewegt werden kann. Mit einem Klick auf die Taktzahl kann an die entsprechende Stelle im Manuskript (oder innerhalb der „Transkriptions-Ansicht“ im Cleartext) navigiert werden.

![Abbildung aus der VideApp](/assets/images/dokumentation/videapp-var/VideApp2.jpg){: width="720"}

Die Taktzählung in den Beispielen richtet sich nach dem Konzept der [genetischen Taktzählung]({% link _glossary/genetische-taktzaehlung.md %}), die sich auf die betrachtete Textnarbe beschränkt und die Orientierung innerhalb der Variantenbildung erleichtert. Dabei wird die konventionelle Taktzählung mit Ziffern durch Buchstaben erweitert, mit denen dem Takt Informationen zum genetischen Stellenwert und seiner kontextuellen Einbettung in den Variantenbildungsprozess zugewiesen werden. Die früheste Variante wird dabei mit „a“ bezeichnet, die folgende mit „b“, usw. Bei allen in einen Kontext integrierten Varianten (geschlossene Varianten) wird ein Großbuchstabe, bei allen (abgebrochenen) Varianten ohne Textanschluss (offene Varianten) ein Kleinbuchstabe verwendet.  
Rötliche Unterlegungen der Balken in der Textübersicht zeigen diejenigen Stellen an, an denen der fortlaufende Fluss der Musik durch Variantenbildung „gestört“ wurde, sogenannte [Textnarben]({% link _glossary/textnarbe.md %}). Eine ausgewählte Textnarbe wird durch einen Klick auf "Detailansicht öffnen" am unteren Rand des Navigators aufgerufen. Dabei erscheint eine Übersicht zur Entwicklung der Textnarbe in Form eines Zeitstrahls, der die zeitliche Abfolge kompositorischer Entscheidungen symbolisiert, wobei den einzelnen isolierbaren Stationen auf dem Weg zum endgültigen Text umrandete Kästchen mit Buchstabenbezeichnungen (die der o.g. genetischen Taktzählung entsprechen) zugeordnet sind. Die Kästchen unter dem Zeitstrahl symbolisieren Streichungen.

![Textgenetische Navigation in der Quellen-Ansicht des Beispiels Op. 75/2](/assets/images/dokumentation/videapp-var/Genetische_Navigation2.png){: width="715"}

**Textgenetische Navigation in der Quellen-Ansicht des Beispiels Op. 75/2 (Entwicklung der Textnarbe)**

Die hier an zwei Stellen vorgenommene vertikale Anordnung von Kästchen (c, b und i, h) zeigt an, dass die zeitliche Reihenfolge der genetischen Abläufe an dieser Stelle nicht eindeutig ermittelt werden kann. Der dort vorhandene, geöffnete Pfeil hin zum Zeitstrahl weist darauf hin, dass es sich um eine Zeitspanne mit unklarer Chronologie handelt. Sind die Pfeile, welche von den Kästchen ausgehend auf den Zeitstrahl gerichtet sind, halbseitig geöffnet, zeigt dies an, dass zwar der frühestmögliche Zeitpunkt einer Schreiboperation festgestellt werden kann, sie kann jedoch auch zu jedem späteren Zeitpunkt des Prozesses durchgeführt worden sein (dies ist in dem angezeigten Beispiel aus Op. 75/2 bei den Streichungen der Fall, die unter dem Zeitstrahl vermerkt sind und frühestens zum markierten Zeitpunkt erfolgt sein können).  
In der "Textgenetischen Navigation" können die Kästchen in beliebiger Reihenfolge angeklickt werden. Ein roter Punkt innerhalb des Kästchens markiert die aktuell angewählte [Schreibschicht]({% link _glossary/schreibschichttextschicht.md %}). Blass rot markiert sind die Schreibschichten, die zum aktuell ausgewählten Zeitpunkt bereits niedergeschrieben waren. In der diesem Navigator zugeordneten Quelle wird die aktuell ausgewählte Schreibschicht ebenfalls rot eingefärbt und herangezoomt. Um zurück zur Textübersicht zu gelangen, kann das kleine Kreuz, das oben rechts innerhalb der genetischen Navigation (auf dem Rand der heller markierten Fläche) sichtbar ist, angeklickt werden.  
Diese Funktionen der "Textgenetischen Navigation" erlauben dem Nutzer, die Entstehung der behandelten Stelle mit einer „offenen Genauigkeit“ zu betrachten. Die einzelnen Stationen des Schreibprozesses können entweder in der "Quellen-Ansicht" über die roten Einfärbungen nachvollzogen werden, oder in der "Transkriptions-Ansicht" durch das Anzeigen des [Cleartextes]({% link _glossary/cleartext-transkription.md %}). In der Parallelansicht ist es darüber hinaus möglich, diese Schritte zu synchronisieren und somit zeitgleich die Entwicklung einer Textnarbe im Manuskript und dessen Übertragung zu untersuchen. Diese Form der Darstellung ermöglicht es, sich mit der Variantenbildung auseinanderzusetzen und die [Mikrochronologie]({% link _glossary/mikrochronologie.md %}), also den relativen zeitlichen Verlauf von Schreibprozessen, nachzuvollziehen. Ermittelt wurde diese anhand verschiedener textgenetischer Methoden (vgl. dazu u.a. die Glossar-Einträge [Metatext]({% link _glossary/metatext.md %}), [Variante]({% link _glossary/variante.md %}), [Textnarbe]({% link _glossary/textnarbe.md %}), [Textualisierung]({% link _glossary/textualisierung.md %})); dabei bleiben nicht eindeutig bestimmbare Abfolgen klar als solche zu erkennen.

## 5. Infobox

Ein Klick auf ein beliebiges Zeichen in der Quelle, in der Transkription oder auch auf eine Verlinkung im Kommentar ruft die "Infobox" auf. Dieses Fenster enthält verschiedene Informationen zum entsprechenden Zeichen.  
In der oberen Hälfte der "Infobox" befindet sich eine Vorschau mit Ausschnitten aus der Quelle, der Transkription oder der XML-Codierung, je nachdem in welcher Ansicht man sich zum Zeitpunkt des Klickens befindet. Man kann zwischen den Ausschnitten wechseln, indem die Pfeile rechts und links im oberen Teil des Fensters ("\<" bzw. "\>") benutzt werden. Von der einzelnen Vorschau aus lässt sich das gerade ausgewählte Zeichen mit einem Klick auf den Schriftzug im oberen Teil des grau unterlegten Bereichs (sichtbar ist in der folgenden Abbildung: "Transkriptions-Ansicht"; entsprechend erscheint nach dem Blättern auch "Quellen-Ansicht" oder "XML-Ansicht") in einer dieser Ansichten öffnen.  
Die untere, graue Hälfte der "Infobox" enthält außerdem eine Kurzbeschreibung des angeklickten Zeichens (hier angezeigt nach der englischen Oktavzählung als: "Viertelnote e5") sowie den Verweis, in welchem Takt (ggf. der genetischen Zählung) und welcher Stimme sich dieses Zeichen befindet.  
*Beispiel*: Wird in der "Quellen-Ansicht" auf ein Zeichen geklickt, erscheint die "Infobox" mit (in der oberen Hälfte) Transkriptionsausschnitten (es können ggf. mehrere sein, je nachdem in wie vielen Schreibschichten das Zeichen auftritt) und (nach Blättern) "XML-Ansicht" (mit entsprechendem Codierungsausschnitt des Zeichens). In der unteren Hälfte der "Infobox" wird angegeben, um welches Zeichen es sich an welcher Position in der Quelle handelt; ggf. wird ein Hinweis auf unklare Lesarten oder Verweiszeichen angebracht.

![Beispiel aus Op. 75/2, fol. 5v, Takt 130, erste Note im System der Singstimme](/assets/images/dokumentation/videapp-var/Infobox_auf_Manuskript.png){: width="463"}

**Beispiel aus Op. 75/2, fol. 5v, Takt 130, erste Note im System der Singstimme (Vorschau der Transkription)**

![Dasselbe Beispiel nun mit angezeigter XML-Vorschau in der oberen Hälfte der Infobox](/assets/images/dokumentation/videapp-var/Infobox_XML-e1529321004251.png){: width="450"}

**Dasselbe Beispiel nun mit angezeigter XML-Vorschau in der oberen Hälfte der Infobox**


## 6. Die Beispiele

**1. Fallbeispiel: Das Lied *Neue Liebe, neues Leben* (J. W. v. Goethe) op. 75/2 (Schluss)**  
In diesem Beispiel wurde eine einzelne, sehr komplexe Textnarbe untersucht. Beethoven erarbeitete in den Schlusstakten 124–135 des Liedes insgesamt 12 Varianten, bis er einen zufriedenstellenden Lied-Schluss fand.  
Dieses Fallbeispiel enthält mehrere Besonderheiten:  
Sobald die Textnarbe geöffnet wird, erscheint innerhalb der "Quellennavigation" als zusätzliches Tool ein Schieberegler (hier weiß hervorgehoben), mit dem die Schreibschichtenrekonstruktion (die auf farbigen Markierungen der Schreibschichten beruht) ein- und ausgeblendet werden kann.

![Abbildung aus der VideApp](/assets/images/dokumentation/videapp-var/Schieberegler.png){: width="320"}

Steht dieser Schieberegler ganz links, ist die Quelle in der "Quellen-Ansicht" als unveränderte digitale Reproduktion zu sehen. Bewegt man den Regler nach rechts, wird die künstlich vorgenommene Rekonstruktion des Schreibprozesses auf der Manuskriptseite schrittweise stärker eingeblendet. Steht der Regler ganz rechts, ist nur noch die Rekonstruktion der Schreibschichten sichtbar.  
Im Zusammenspiel mit der Detailansicht der "Textgenetischen Navigation" kann die leere Manuskriptseite nun Schritt für Schritt um die jeweils ausgewählte neue Schreibschicht anwachsen. Das Wachstum des Textes im Manuskript und die damit verbundenen Schreibschichten werden an dieser Stelle rekonstruiert, wobei Schreibschichten, die neu hinzukommen, jeweils rot markiert sind, während frühere Schreibschichten in einem blasseren Rotbraun angezeigt werden.

Eine weitere, nur diesem Beispiel eigene Funktion ist die Darstellung von [Invarianz]({% link _glossary/invarianz.md %}). Die "Invarianzeinfärbung" ist in die "Transkriptions-Ansicht" eingebettet und über das Anwählen einer Checkbox in der zweitobersten Kopfleiste oben rechts (unterhalb der Ansichten- und Sprachauswahl) zu aktivieren.

![Abbildung aus der VideApp](/assets/images/dokumentation/videapp-var/Invarianzknopf2.png){: width="320"}

Das Konzept der Invarianzeinfärbung wurde anhand eines Beispiels aus dem Streichquartett op. 59/3 für den zugehörigen Prototyp entwickelt und dann für das Lied op. 75/2 erweitert und in die "Transkriptions-Ansicht" der *VideApp* integriert. Bei der Variantenbildung bleiben oftmals Textelemente voriger Varianten bestehen – sie werden vom Komponisten übernommen bzw. weiterverwendet. Mit den Einfärbungen innerhalb der "Transkriptions-Ansicht" werden diese übernommenen, invarianten Elemente hinsichtlich ihrer Herkunft kenntlich gemacht. Diese „vererbten“ Textteile werden immer in derselben Farbe abgebildet; die entsprechenden Farben erscheinen auch im angewählten Kästchen der textgenetischen Navigation. Hierdurch wird zum Beispiel deutlich, dass Beethoven bei der Entwicklung der Schlusstakte des Liedes gewisse Textbausteine bereits in der ersten Variante a (dem [Cue staff]({% link _glossary/cue-staff.md %})) notierte und diese innerhalb sämtlicher Überarbeitungen (aber mit teils wechselnder Position) bis zur letztgültigen Version beibehielt (Variante M).

![Abbildung aus der VideApp](/assets/images/dokumentation/videapp-var/Invarianz_a.png){: width="754"}

![Varianten a und M im Beispiel aus dem Lied op. 75/2 in der Invarianz-Anzeige](/assets/images/dokumentation/videapp-var/Op.752_Invarianz.png){: width="754"}

**Varianten a und M im Beispiel aus dem Lied op. 75/2 in der Invarianz-Anzeige**

**2. Fallbeispiel: *Duett mit zwei obligaten Augengläsern* WoO 32**  
Im Unterschied zu den anderen beiden Fallbeispielen wird mit dem Duett WoO 32 erstmals ein vollständiger Satz, komponiert für für Viola und Violoncello, in den Blick genommen. Somit werden der Verlauf des gesamten Notentextes und alle in ihm enthaltenen Varianten erfasst. Wie in den anderen Fallbeispielen auch gibt es zunächst eine "Kommentar-Ansicht" zur Erläuterung des Werks. Das Werk enthält 49 Textnarben, wobei den meisten davon einfache Schreiboperationen zu Grunde liegen, die gut nachzuvollziehen sind. Die Erklärungen der Textnarben beschränken sich daher auf die drei umfangreichsten Stellen.  
Die "Textgenetische Navigation" bietet hier zunächst einen Gesamtüberblick über alle im Satz vorkommenden Textnarben, die jeweils durch rote Flächen markiert werden. Manche davon betreffen beide Systeme, andere nur eines.

![Textgenetische Navigation für das Beispiel WoO 32](/assets/images/dokumentation/videapp-var/Genetische_Navigation3.png){: width="720"}

**Textgenetische Navigation für das Beispiel WoO 32 (Textübersicht)**

Anhand der Taktzahlen über der schematischen Darstellung wird die Position verdeutlicht; fährt man mit dem Mauszeiger über diese schematische Ansicht, wird die Taktzahl eingeblendet, an der sich der Cursor befindet. Die Pfeile am rechten und linken unteren Rand erlauben es dem Nutzer, durch sämtliche Textnarben zu navigieren. Dabei wird für jede Textnarbe angegeben, in welchen Takten sie sich befindet und aus wie vielen Schreibschichten sie besteht. Über „Detailansicht öffnen“ (am unteren Rand) kann die ausgewählte Textnarbe genauer betrachtet und können die einzelnen Schreibschichten angezeigt werden. Die "Textgenetische Navigation" bietet sowohl in der "Quellen-Ansicht" als auch in der "Transkriptions-Ansicht" einen Überblick über alle Textnarben des Satzes.  
In der "Transkriptions-Ansicht" von WoO 32 wird nun im Gegensatz zum Beispiel Op. 75/2 nicht nur ein Werkausschnitt wiedergegeben, sondern der Cleartext eines ganzen Satzes. Die Rendering-Software *Verovio* erlaubte zum Zeitpunkt der Entwicklung der *VideApp* innerhalb des Notentextes noch keine Zeilenumbrüche, sodass die Partitur als ein ununterbrochenes Band erscheint, welches bewegt werden kann. Textnarben werden innerhalb dieses Cleartextes rot hervorgehoben. Sie können entweder durch direktes Anklicken im Notentext oder über die "Textgenetische Navigation" erreicht werden. Auch hier kann in der Detailansicht durch die Textnarben navigiert werden. Zur jeweils ausgewählten Variante erscheint eine Transkription in einem zusätzlichen System über der Partitur an der entsprechenden Taktposition (im nachfolgenden Beispiel die beiden oberen Notenzeilen für Viola und Violoncello).

![Textnarbe aus dem Beispiel WoO 32, T. 79](/assets/images/dokumentation/videapp-var/WoO32_T79.png){: width="720"}

**Textnarbe aus dem Beispiel WoO 32, T. 79**

Aufgrund der Komplexität dieses Beispiels unter Einbeziehung aller enthaltenen Textnarben wurde darauf verzichtet eine Invarianzeinfärbung anzubieten. Eine zusätzliche Entwicklung, die mit dem Beispiel WoO 32 erarbeitet wurde, ist die innerhalb der "Kommentar-Ansicht" vorhandene Systematisierung der Varianten. Diese gibt in Bezug auf jede einzelne Variantenstelle Auskunft über die jeweilige kompositorische Maßnahme, die Zeitlichkeit (wenn feststellbar), die Schreiboperation, durch die die Variante entstanden ist, und die resultierende Textoperation. (Eine Anzeige der Kohärenzbeziehungen zwischen den Varianten konnte aus Zeitgründen bisher nicht umgesetzt werden.)  
Dieses Beispiel bietet einen Überblick über den letztgültigen Textzustand des Duetts. Zudem kann natürlich auch hier die "Quellen-Ansicht" in einem weiteren Fenster hinzugeschaltet und synchronisiert werden. Damit kann man die Stelle aus drei Perspektiven betrachten: aus der des Manuskripts (inklusive Einfärbung der Textnarben), als Transkription des letztgültigen Textzustands sowie als Variantenabfolge mit den einzelnen Transkriptionen der Mikro-Varianten.   

**3. Fallbeispiel: Schlusstakte der 8. Symphonie op. 93**  
Die unterschiedlichen Fassungen der abschließenden Takte im ersten Satz der 8. Symphonie sind in Bezug auf die Variantendarstellung anders aufbereitet als die zuvor besprochenen Beispiele. Die vielstimmige Partitur und die Komplexität des mehrere Quellen berücksichtigenden Beispiels erforderten einen methodisch anderen Zugang zur Erschließung der Schreibprozesse.

Da die chronologische Entwicklung des handwerklichen Arbeitsverlaufs – der nicht nur auf einer [Skriptur]({% link _glossary/skriptur.md %})-Ebene, sondern auch in der kodikologischen Umstrukturierung der Quellen zu beobachten ist – nicht eindeutig rekonstruierbar ist, wurden in der "Kommentar-Ansicht" kurze Videos in den Text eingearbeitet, die verschiedene Hypothesen dazu anbieten. Eine Besonderheit dieses Beispiel besteht dann in der Möglichkeit, zwischen variantenfreien Textwachstums-Phänomenen, die normalerweise in der Orchestrierungsphase stattfinden ([Progression]({% link _glossary/progression.md %})), und Korrekturen oder Revisionen ([Intervention]({% link _glossary/intervention.md %})) zu differenzieren. Diese Möglichkeit, zwischen Progression und Intervention zu unterscheiden, bieten Beethovens Manuskripte sehr selten (insofern stellt das Beispiel unter dieser Perspektive einen Sonderfall dar), denn normalerweise sind die beiden Phänomene kaum trennbar ineinander verschachtelt. In reinen Progressionsfällen bilden neu hinzugefügte Schreibschichten keine neuen Varianten, sondern einfach eine Vervollständigung des schon vorhandenen Textgerüsts. Da eine Darstellung, die Progression und Intervention voneinander trennt, aufgrund der im Codierungsmodell fehlenden Unterscheidung technisch (noch) nicht möglich ist, werden in der "Kommentar-Ansicht" die Varianten nur als statische PDF-Datei gezeigt.

Die "Quellen-Ansicht" stellt in diesem Falle einen möglichen Ablauf der Entstehung dieser Varianten dar und enthält in der "Textgenetischen Navigation" zwölf Schreibschichten. Die Buchstaben (A, B und C) zeigen an, an welcher Stelle eine neue Variante erzeugt wurde. Eine große Herausforderung bei dieser Fallstudie ergab sich durch die notwendige Einbeziehung mehrerer Quellen. Beethoven verwendete zur Niederschrift nicht nur verschiedene Manuskripte, sondern er überklebte in der Wiener Quelle auch bereits Notiertes durch eine neue Textfassung.

Diese Vorgänge erschweren die Darstellung der Textentwicklung auf dem engen Raum des Bildschirms.  
Auf eine aus den MEI-Daten erzeugte Transkription dieses Beispiels wurde verzichtet, da eine adäquate Umsetzung aufgrund der beschriebenen Probleme beim damaligen Entwicklungsstand der Anwendung noch nicht möglich war. Daher sind in der "Kommentar-Ansicht" lediglich Transkriptionen der drei ermittelten Varianten als mit *Verovio* erzeugte, feststehende Abbildungen integriert.  
Die "Textgenetische Navigation" und der Schieberegler innerhalb der "Quellen-Ansicht" funktionieren in dieser Fallstudie genauso wie im Liedbeispiel, jedoch mit der Einschränkung, dass die "Infoboxen" lediglich die "XML-Ansicht" enthalten.

## 7. Tour

Um sich mit der Bedienung der *VideApp* vertraut zu machen, wurde eine Nutzerhilfe integriert. Mit dieser sogenannten *Tour* kann sich der Nutzer einmal durch die Anwendung leiten lassen, wobei die einzelnen Möglichkeiten und Funktionen an den entsprechenden Stellen erklärt werden. Bitte beachten Sie die Benutzerhinweise zum Verlauf dieser Tour.

![Abbildung aus der VideApp](/assets/images/dokumentation/videapp-var/Tour.png){: width="320"}

## 8. Schluss

Die *VideApp* ist als „Zeige-Werkzeug“ konzipiert und soll zu erkennen helfen, was beim Schreibprozess ausgehend von einer zunächst leeren Manuskriptseite sukzessive geschah – auf diese Weise soll die Denk- und Arbeitsweise des Komponisten so weit wie möglich rekonstruiert werden. Dem Nutzer wird also angeboten, den Prozess des Entstehens zu beobachten und sich diesen mit Hilfe digitaler Techniken in einer Abfolge von (teils überblendeten) Bildern zu vergegenwärtigen. Einfache Mittel, wie etwa eingefärbte Notenzeichen, unmittelbares Nebeneinanderlegen von Manuskript und Transkription, Ein- und Ausblenden von Schreibschichten oder das Hervorheben einzelner Schreiboperationen bringen nicht zwingend neue Erkenntnisse hervor, doch verändern sie die Betrachtungsweise eines Gegenstandes. Sie lassen dabei andere und kombinierte Perspektiven zu, dienen einem neuen Verständnis von Texten, verändern den Zugang zu Quellenmaterialien und sind nicht zuletzt ein hilfreiches Werkzeug auf dem Weg zu neuen Erkenntnissen.  
Erst auf der Grundlage einer entsprechenden Codierung lässt sich eine solche Kombination der verschiedenen Perspektiven verwirklichen. Der Code enthält alle notwendigen Informationen, um unterschiedliche Betrachtungsweisen zu erlauben, um also, wie oben bemerkt, durch die jeweils geeignete Brille auf den Gegenstand zu blicken. Die Verknüpfungen von musikalischen und graphischen Inhalten innerhalb der XML-Strukturen erlauben demnach eine multiperspektivische Sichtweise, stellen das Projekt jedoch auch immer wieder vor große Herausforderungen, nicht zuletzt aufgrund derzeitiger technischer Begrenzungen. All dies zwingt dazu, terminologisch, methodisch und konzeptionell sehr präzise zu arbeiten und unter Umständen Kompromisse einzugehen. *Beethovens Werkstatt* sieht sich als Grundlagenforschungsprojekt, das genau diese Herausforderungen nachhaltig zu erproben versucht.
