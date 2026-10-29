---
layout: module-content
title: "Transkriptions- und Codierungsrichtlinien"
permalink: /modul-2/codierungsrichtlinien-modul2/
module: 2
kind: "Bericht"
author: Ran Mo
date: 2020-06-09
---

<style>
/* Stil der ursprünglichen, aus TEI/ODD erzeugten Richtlinien; nur innerhalb dieses Bereichs gültig */
.odd-richtlinien h5 { font-size: 100%; }
.odd-richtlinien .contents { display: inline-block; background: #F1F1F1; padding: 20px; }
.odd-richtlinien dt { font-size: 105%; font-weight: normal; padding-bottom: 5px; }
.odd-richtlinien .toc_1 { padding-top: 0.5em; padding-bottom: 0.3em; font-size: 110%; }
.odd-richtlinien .toc_1_1 { padding-left:5%; }
.odd-richtlinien .toc_1_1_1 { padding-left:10%; }
.odd-richtlinien ul.contents a:link { color: black; text-decoration: none; }
.odd-richtlinien ul.contents a:visited { color: black; text-decoration: none; }
.odd-richtlinien ul.contents a:hover { text-decoration: underline; }
.odd-richtlinien .att { font-weight: bold; }
.odd-richtlinien ul.contents { list-style:none; }
.odd-richtlinien div { margin-left: 10px; }
.odd-richtlinien div.sub_2 { padding-bottom:1em; }
.odd-richtlinien .pre { white-space: pre-wrap; }
.odd-richtlinien li>.element { font-style: normal; }
.odd-richtlinien li>.element a:link { color: darkblue; text-decoration: none; }
.odd-richtlinien li>.element a:visited { color: darkblue; text-decoration: none; }
.odd-richtlinien li>.element a:hover { text-decoration: underline; }
.odd-richtlinien .name { font-style: italic; }
.odd-richtlinien /* egXML */
            .indent1 { box-shadow: 1px 1px 5px gray; background-color:#F3F3F3; display:inline-block; overflow:auto; padding:3px; margin:10px; font-size:0.9em; font-family: monospace; white-space:pre; color: black; }
.odd-richtlinien div.indent > .element { color: darkblue; }
.odd-richtlinien .attribute { color: #008080; }
.odd-richtlinien .attributevalue { color: #800080; }
</style>

<div class="odd-richtlinien" markdown="0">
<div class="toc">
<h2>Inhaltsverzeichnis</h2>
<ul class="contents">
<li class="toc_1"><a href="#m546ea305-7899-4d7b-8575-43a6e6c2df07">1. Primäre Notation / events</a></li>
<li class="toc_1_1"><a href="#x0204f956-9fac-4394-a65f-c20ba8a7b7a6">1.1. Rahmennotation</a></li>
<li class="toc_1_1_1"><a href="#x5e118354-38c2-454c-928a-14ff91a5a175">1.1.1. Metrum</a></li>
<li class="toc_1_1_1"><a href="#x3bf50c62-400d-41f1-b3c0-919354aa7644">1.1.2. Schlüssel und Schlüsselwechsel</a></li>
<li class="toc_1_1_1"><a href="#x55cb0212-1241-4e50-8950-814cefd821cf">1.1.3. Tonartwechsel</a></li>
<li class="toc_1_1_1"><a href="#xe111fe91-fd37-4628-8f4e-fad4e9aca0b1">1.1.4. Stimmbezeichnung</a></li>
<li class="toc_1_1"><a href="#x50598ddd-4af9-4c6d-9ba2-840bb8666507">1.2. Noten</a></li>
<li class="toc_1_1_1"><a href="#xab100033-2a55-4e0c-b3a5-5f0142d59e53">1.2.1. Vorschlagsnoten</a></li>
<li class="toc_1_1_1"><a href="#x380ba72c-0861-4681-8896-b9bae57402ea">1.2.2. Vorzeichen und Versetzungszeichen</a></li>
<li class="toc_1_1_1"><a href="#xcacad184-aee7-4e7c-9224-5289639f805c">1.2.3. Notenhalsrichtung</a></li>
<li class="toc_1_1_1"><a href="#x4a3670e6-2e74-4577-9697-491698242e81">1.2.4. Triolen</a></li>
<li class="toc_1_1"><a href="#x1ab5affd-f90d-44dd-ad85-5425bc5fa16b">1.3. Singtext</a></li>
<li class="toc_1"><a href="#m2a538a69-022e-4fb2-a96e-6cb1ca0df039">2. Sekundäre Notation / controlevents</a></li>
<li class="toc_1_1"><a href="#xb18142fb-cd6c-4f70-9a90-7f5752f70494">2.1. Bogensetzung</a></li>
<li class="toc_1_1_1"><a href="#x0ea35e47-b8c8-4a71-bc3a-ecdb79f23787">2.1.1. Bindebögen</a></li>
<li class="toc_1_1_1"><a href="#x03024728-65f4-4dcd-b5b3-8a6940d1a5c3">2.1.2. Bogenrichtung</a></li>
<li class="toc_1_1_1"><a href="#x9a008f68-b61c-4600-97e8-5d28dd71f32c">2.1.3. Haltebögen</a></li>
<li class="toc_1_1"><a href="#x9a936376-082d-4827-8c38-5c4157e3c56f">2.2. Dynamik</a></li>
<li class="toc_1_1_1"><a href="#xfbcb3dbe-47a8-4658-8865-800ea944e8d5">2.2.1. Dynamikangaben</a></li>
<li class="toc_1_1_1"><a href="#xdbc3dca2-13ed-43f6-866f-d145acfcc02d">2.2.2. Crescendo- und decrescendo-Gabeln</a></li>
<li class="toc_1_1"><a href="#xc7eabadd-55ce-4bfd-9cfa-60d96331662d">2.3. Fermaten</a></li>
<li class="toc_1_1"><a href="#x98f43989-437a-4b2e-9c05-a79c517b7f89">2.4. Oktavierung</a></li>
<li class="toc_1_1"><a href="#x9c043f6a-546b-4c88-9686-3ece733ea71c">2.5. Artikulation</a></li>
<li class="toc_1_1"><a href="#x7c531aa3-595c-44a9-8279-7697907ff5ef">2.6. Tempoangaben</a></li>
<li class="toc_1_1"><a href="#xfa88c5ae-9faf-48d9-9c66-db6556034220">2.7. Studierzeichen</a></li>
<li class="toc_1_1"><a href="#xc00ee2dc-9177-40db-943c-f1732102a5a6">2.8. Triller</a></li>
<li class="toc_1"><a href="#m9a5088c3-2099-481e-9c0a-b75400e7bf92">3. Editorische Entscheidungen</a></li>
<li class="toc_1_1"><a href="#xf48025ff-793c-4a99-9c78-1c215f7c0e4e">3.1. Abgekürzte und alte Schreibweisen</a></li>
<li class="toc_1_1"><a href="#x677b52ff-e693-4abe-abe9-86e44e7a9efd">3.2. Fehler</a></li>
<li class="toc_1_1_1"><a href="#x77edf5b2-2a62-458b-8157-195584afa94b">3.2.1. Gravierende Fehler/Inkonsistenzen</a></li>
<li class="toc_1_1_1"><a href="#xff1c89cc-bbba-4039-a007-a9a5a89adeba">3.2.2. Lokale, offensichtliche Fehler</a></li>
</ul>
</div>
<div class="main">
<div class="sub_1">
<h3 id="m546ea305-7899-4d7b-8575-43a6e6c2df07">1. Primäre Notation / events</h3>
<div class="sub_2">
<h4 id="x0204f956-9fac-4394-a65f-c20ba8a7b7a6">1.1. Rahmennotation</h4>
<div class="sub_3">
<h5 id="x5e118354-38c2-454c-928a-14ff91a5a175">1.1.1. Metrum</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> wird das Metrum nach Vorlage in der <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/scoredef.html">&lt;scoreDef&gt;</a></span> codiert
</li>
<li class="item">Metrumangaben in der ersten <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/scoredef.html">&lt;scoreDef&gt;</a></span> eines <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/mdiv.html">&lt;mDiv&gt;</a></span> sind obligatorisch
</li>
<li class="item">Metrumangaben in der <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/staffdef.html">&lt;staffDef&gt;</a></span> sind nicht erlaubt
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;scoreDef <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xf25244be&quot;</span> <span class="attribute">meter.count=</span><span class="attributevalue">&quot;2&quot;</span> <span class="attribute">meter.unit=</span><span class="attributevalue">&quot;2&quot;</span> <span class="attribute">meter.sym=</span><span class="attributevalue">&quot;cut&quot;</span>/&gt;</span></div>
<p class="schema">im Schema: check_meter</p>
</div>
<div class="sub_3">
<h5 id="x3bf50c62-400d-41f1-b3c0-919354aa7644">1.1.2. Schlüssel und Schlüsselwechsel</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Schlüssel und Schlüsselwechsel nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/clef.html">&lt;clef&gt;</a></span> codiert
</li>
<li class="item"><span class="att">@tstamp</span> und <span class="att">@tstamp2</span> sind nicht erlaubt
</li>
</ul>
<p class="schema">im Schema: check_clef</p>
</div>
<div class="sub_3">
<h5 id="x55cb0212-1241-4e50-8950-814cefd821cf">1.1.3. Tonartwechsel</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Tonartwechsel nach Vorlage in einer neuen <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/scoredef.html">&lt;scoreDef&gt;</a></span> codiert
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;scoreDef <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x1ab89&quot;</span> <span class="attribute">meter.count=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">meter.unit=</span><span class="attributevalue">&quot;4&quot;</span> <span class="attribute">key.sig=</span><span class="attributevalue">&quot;0&quot;</span> <span class="attribute">key.mode=</span><span class="attributevalue">&quot;major&quot;</span> <span class="attribute">keysig.showchange=</span><span class="attributevalue">&quot;true&quot;</span>&gt;</span><div class="indent2 indent"><span data-indentation="2" class="element">&lt;staffGrp <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xb7d0e&quot;</span> <span class="attribute">symbol=</span><span class="attributevalue">&quot;bracket&quot;</span> <span class="attribute">bar.thru=</span><span class="attributevalue">&quot;false&quot;</span>&gt;</span><div class="indent3 indent"><span data-indentation="3" class="element">&lt;staffDef <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xa028f&quot;</span> <span class="attribute">n=</span><span class="attributevalue">&quot;1&quot;</span>&gt;</span><div class="indent4 indent"><span data-indentation="4" class="element">&lt;label <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xb3d76c&quot;</span>&gt;</span>piano<span data-indentation="4" class="element">&lt;/label&gt;</span></div><span data-indentation="3" class="element">&lt;/staffDef&gt;</span></div><div class="indent3 indent"><span data-indentation="3" class="element">&lt;staffDef <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xa6c32&quot;</span> <span class="attribute">n=</span><span class="attributevalue">&quot;2&quot;</span>&gt;</span><div class="indent4 indent"><span data-indentation="4" class="element">&lt;label <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x9f39&quot;</span>&gt;</span>piano<span data-indentation="4" class="element">&lt;/label&gt;</span></div><span data-indentation="3" class="element">&lt;/staffDef&gt;</span></div><span data-indentation="2" class="element">&lt;/staffGrp&gt;</span></div><span data-indentation="1" class="element">&lt;/scoreDef&gt;</span></div>
</div>
<div class="sub_3">
<h5 id="xe111fe91-fd37-4628-8f4e-fad4e9aca0b1">1.1.4. Stimmbezeichnung</h5>
<ul>
<li class="item">Die Bezeichnung der Stimmen richtet sich nach der Neuen Beethoven Gesamtausgabe</li>
</ul>
</div>
</div>
<div class="sub_2">
<h4 id="x50598ddd-4af9-4c6d-9ba2-840bb8666507">1.2. Noten</h4>
<div class="sub_3">
<h5 id="xab100033-2a55-4e0c-b3a5-5f0142d59e53">1.2.1. Vorschlagsnoten</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Vorschlagsnoten nach Vorlage mit dem Attribut <span class="att">@grace</span> codiert
</li>
<li class="item">nur der Wert &quot;unknown&quot; ist erlaubt</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;note <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x2d35&quot;</span> <span class="attribute">grace=</span><span class="attributevalue">&quot;unknown&quot;</span> <span class="attribute">pname=</span><span class="attributevalue">&quot;a&quot;</span> <span class="attribute">oct=</span><span class="attributevalue">&quot;5&quot;</span> <span class="attribute">dur=</span><span class="attributevalue">&quot;32&quot;</span> <span class="attribute">accid=</span><span class="attributevalue">&quot;n&quot;</span>/&gt;</span></div>
<p class="schema">im Schema: check_gracenote</p>
</div>
<div class="sub_3">
<h5 id="x380ba72c-0861-4681-8896-b9bae57402ea">1.2.2. Vorzeichen und Versetzungszeichen</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Vorzeichen und Versetzungszeichen nach Vorlage codiert
</li>
<li class="item">Versetzungszeichen werden mit dem Attribut <span class="att">@accid</span> an den Noten angegeben
</li>
<li class="item">Doppelkreuze in Originalausgaben werden mit <span class="att">@accid</span>=&quot;x&quot; codiert
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;note <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x420db&quot;</span> <span class="attribute">pname=</span><span class="attributevalue">&quot;f&quot;</span> <span class="attribute">accid=</span><span class="attributevalue">&quot;x&quot;</span> <span class="attribute">oct=</span><span class="attributevalue">&quot;5&quot;</span> <span class="attribute">dur=</span><span class="attributevalue">&quot;4&quot;</span> <span class="attribute">artic=</span><span class="attributevalue">&quot;stacc&quot;</span>/&gt;</span></div>
</div>
<div class="sub_3">
<h5 id="xcacad184-aee7-4e7c-9224-5289639f805c">1.2.3. Notenhalsrichtung</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> wird die Notenhalsrichtung nicht explizit codiert
</li>
<li class="item">Ausnahme: Wenn es zu Überlagerung der Stimmen/schlechte Lesbarkeit der Stimmführung
im Klavier führen würde
</li>
<li class="item">Angabe der Halsrichtung bei Ganzen Noten ist nicht erlaubt</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;note <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x329b8ef8&quot;</span> <span class="attribute">stem.dir=</span><span class="attributevalue">&quot;down&quot;</span> <span class="attribute">pname=</span><span class="attributevalue">&quot;e&quot;</span> <span class="attribute">oct=</span><span class="attributevalue">&quot;5&quot;</span> <span class="attribute">dur=</span><span class="attributevalue">&quot;16&quot;</span> <span class="attribute">accid.ges=</span><span class="attributevalue">&quot;f&quot;</span>/&gt;</span></div>
<p class="schema">im Schema: check_stem.dir_dur1</p>
</div>
<div class="sub_3">
<h5 id="x4a3670e6-2e74-4577-9697-491698242e81">1.2.4. Triolen</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Triolen nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/tuplet.html">&lt;tuplet&gt;</a></span> codiert
</li>
<li class="item"><span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/tupletspan.html">&lt;tupletSpan&gt;</a></span> ist nicht erlaubt
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;tuplet <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x40c&quot;</span> <span class="attribute">num=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">numbase=</span><span class="attributevalue">&quot;2&quot;</span> <span class="attribute">num.place=</span><span class="attributevalue">&quot;above&quot;</span>&gt;</span><div class="indent2 indent"><span data-indentation="2" class="element">&lt;note <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x7a0c8&quot;</span> <span class="attribute">dur=</span><span class="attributevalue">&quot;8&quot;</span> <span class="attribute">oct=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">pname=</span><span class="attributevalue">&quot;f&quot;</span>/&gt;</span></div><div class="indent2 indent"><span data-indentation="2" class="element">&lt;note <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xd9e3&quot;</span> <span class="attribute">dur=</span><span class="attributevalue">&quot;8&quot;</span> <span class="attribute">oct=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">pname=</span><span class="attributevalue">&quot;g&quot;</span>/&gt;</span></div><div class="indent2 indent"><span data-indentation="2" class="element">&lt;note <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x7325&quot;</span> <span class="attribute">dur=</span><span class="attributevalue">&quot;8&quot;</span> <span class="attribute">oct=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">pname=</span><span class="attributevalue">&quot;a&quot;</span>/&gt;</span></div><span data-indentation="1" class="element">&lt;/tuplet&gt;</span></div>
</div>
</div>
<div class="sub_2">
<h4 id="x1ab5affd-f90d-44dd-ad85-5425bc5fa16b">1.3. Singtext</h4>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> wird der Singtext mit den Elementen <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/verse.html">&lt;verse&gt;</a></span> und <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/syl.html">&lt;syl&gt;</a></span> innerhalb einer Note codiert
</li>
<li class="item">Singtext wird in den Stimmen hinzugefügt, auch wenn er in der Vorlage nicht steht
(z.B. beim Klavierauszug der OA von op. 122)
</li>
<li class="item">Silbentrennung geschieht nach Vorlage; normierte Silbentrennung im Fall von Platzmangel
ergänzt
</li>
<li class="item">Rechtschreibung geschieht nach Vorlage</li>
<li class="item">Verlängerungsstriche werden nicht codiert (graphische Variante)</li>
</ul>
</div>
</div>
<div class="sub_1">
<h3 id="m2a538a69-022e-4fb2-a96e-6cb1ca0df039">2. Sekundäre Notation / controlevents</h3>
<div class="sub_2">
<h4 id="xb18142fb-cd6c-4f70-9a90-7f5752f70494">2.1. Bogensetzung</h4>
<div class="sub_3">
<h5 id="x0ea35e47-b8c8-4a71-bc3a-ecdb79f23787">2.1.1. Bindebögen</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Bindebögen nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/slur.html">&lt;slur&gt;</a></span> codiert
</li>
<li class="item">Bindebögen werden mit <span class="att">@startid</span> und <span class="att">@endid</span> an die jeweiligen Noten oder Akkorde geknüpft
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;slur <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x93b9272b&quot;</span> <span class="attribute">layer=</span><span class="attributevalue">&quot;1&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;2&quot;</span> <span class="attribute">startid=</span><span class="attributevalue">&quot;#x278f22e5&quot;</span> <span class="attribute">endid=</span><span class="attributevalue">&quot;#x6adaacfe&quot;</span>/&gt;</span></div>
<p class="schema">im Schema: controlevents_slur</p>
</div>
<div class="sub_3">
<h5 id="x03024728-65f4-4dcd-b5b3-8a6940d1a5c3">2.1.2. Bogenrichtung</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> wird die Bogenrichtung nicht explizit angegeben
</li>
<li class="item">Ausnahme: Wenn es zu schlechter Lesbarkeit der Stimmführung im Klavier führen würde,
dann wird sie mit <span class="att">@curvedir</span> angegeben
</li>
</ul>
</div>
<div class="sub_3">
<h5 id="x9a008f68-b61c-4600-97e8-5d28dd71f32c">2.1.3. Haltebögen</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Haltebögen nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/tie.html">&lt;tie&gt;</a></span> codiert
</li>
<li class="item">Haltebögen werden mit <span class="att">@startid</span> und <span class="att">@endid</span> an jeweilige Noten oder Akkorde geknüpft
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;tie <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xb2f614ee&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;4&quot;</span> <span class="attribute">startid=</span><span class="attributevalue">&quot;#x07a8ae91&quot;</span> <span class="attribute">endid=</span><span class="attributevalue">&quot;#xd600c086&quot;</span>/&gt;</span></div>
<p class="schema">im Schema: controlevents_tie, check_notes, check_chords</p>
</div>
</div>
<div class="sub_2">
<h4 id="x9a936376-082d-4827-8c38-5c4157e3c56f">2.2. Dynamik</h4>
<div class="sub_3">
<h5 id="xfbcb3dbe-47a8-4658-8865-800ea944e8d5">2.2.1. Dynamikangaben</h5>
<ul>
<li class="item">z.B. f, p, sf, etc., cresc. und decresc.</li>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Dynamikangaben nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/dynam.html">&lt;dynam&gt;</a></span> codiert
</li>
<li class="item"><span class="att">@label</span> ist nicht erlaubt
</li>
<li class="item">in op.133 und 134 wurden Dynamikangaben normalisiert (z.B. F: zu f)</li>
<li class="item">Die Dynamik steht in allen Stimmen unterhalb, außer bei Singstimmen, dort oberhalb
wegen des Singtexts
</li>
<li class="item">Bei Dynamikangaben, die sich zwischen zwei Klaviersystemen befinden und sich auf beide
beziehen, werden beide staves angegeben
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;dynam <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xe7fae01c&quot;</span> <span class="attribute">tstamp=</span><span class="attributevalue">&quot;2&quot;</span> <span class="attribute">place=</span><span class="attributevalue">&quot;below&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;1&quot;</span>&gt;</span>p<span data-indentation="1" class="element">&lt;/dynam&gt;</span></div>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;dynam <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x557e0add&quot;</span> <span class="attribute">place=</span><span class="attributevalue">&quot;between&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;6 7&quot;</span> <span class="attribute">tstamp=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">tstamp2=</span><span class="attributevalue">&quot;0m+5&quot;</span> <span class="attribute">extender=</span><span class="attributevalue">&quot;true&quot;</span>&gt;</span>cres<span data-indentation="1" class="element">&lt;/dynam&gt;</span></div>
<p class="schema">im Schema: check_dynam, controlevents_dynam, check_dynam_between_space</p>
</div>
<div class="sub_3">
<h5 id="xdbc3dca2-13ed-43f6-866f-d145acfcc02d">2.2.2. Crescendo- und decrescendo-Gabeln</h5>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Crescendo- und decrescendo-Gabeln nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/hairpin.html">&lt;hairpin&gt;</a></span> codiert
</li>
<li class="item">nur <span class="att">@tstamp</span> und <span class="att">@tstamp2</span> sind erlaubt
</li>
<li class="item">cresc.u. decresc.-Gabeln, die sich auf zwei Klaviersysteme beziehen, bekommen die Angabe beider Systeme</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;hairpin <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x0e0f7bfa&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;2&quot;</span> <span class="attribute">tstamp=</span><span class="attributevalue">&quot;2.5&quot;</span> <span class="attribute">tstamp2=</span><span class="attributevalue">&quot;0m+2.75&quot;</span> <span class="attribute">form=</span><span class="attributevalue">&quot;dim&quot;</span> <span class="attribute">place=</span><span class="attributevalue">&quot;below&quot;</span>/&gt;</span></div>
<p class="schema">im Schema: controlevents_hairpin, check_hairpin_between_space</p>
</div>
</div>
<div class="sub_2">
<h4 id="xc7eabadd-55ce-4bfd-9cfa-60d96331662d">2.3. Fermaten</h4>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Fermaten nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/fermata.html">&lt;fermata&gt;</a></span> codiert
</li>
<li class="item">nur <span class="att">@startid</span> ist erlaubt, außer die Fermate steht auf einem Taktstrich, dann ist auch <span class="att">@tstamp</span> erlaubt
</li>
<li class="item">keine Ortsangabe nötig, außer wenn sie unterhalb des Systems steht, dann <span class="att">@place</span>=“below“
</li>
<li class="item"><span class="att">@form</span> und <span class="att">@shape</span> sind nicht erlaubt
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;fermata <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x02265c21&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">startid=</span><span class="attributevalue">&quot;#xf6e96376&quot;</span>/&gt;</span></div>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;fermata <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xeb595273&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;7&quot;</span> <span class="attribute">tstamp=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">place=</span><span class="attributevalue">&quot;below&quot;</span>/&gt;</span></div>
<p class="schema">im Schema: controlevents_fermata, check_fermata_place, check_fermata_form_shape</p>
</div>
<div class="sub_2">
<h4 id="x98f43989-437a-4b2e-9c05-a79c517b7f89">2.4. Oktavierung</h4>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden 8va-Zeichen nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/octave.html">&lt;octave&gt;</a></span> codiert
</li>
<li class="item">Es gibt keine Angaben zur Linienform</li>
<li class="item">8va-Zeichen werden mit <span class="att">@startid</span> an Noten oder Akkorde geknüpft
</li>
<li class="item"><span class="att">@tstamp</span> ist nicht erlaubt
</li>
<li class="item"><span class="att">@oct.ges</span> muss an betreffenden Noten bzw. Akkorden ergänzt werden
</li>
</ul>
</div>
<div class="sub_2">
<h4 id="x9c043f6a-546b-4c88-9686-3ece733ea71c">2.5. Artikulation</h4>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> wird Artikulation nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/dir.html">&lt;dir&gt;</a></span> codiert
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;dir <span class="attribute">xml:id=</span><span class="attributevalue">&quot;xb45e5d31&quot;</span> <span class="attribute">layer=</span><span class="attributevalue">&quot;1&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;3&quot;</span> <span class="attribute">place=</span><span class="attributevalue">&quot;below&quot;</span> <span class="attribute">tstamp=</span><span class="attributevalue">&quot;1&quot;</span>&gt;</span>sempre staccato<span data-indentation="1" class="element">&lt;/dir&gt;</span></div>
<p class="schema">im Schema: check_dir</p>
</div>
<div class="sub_2">
<h4 id="x7c531aa3-595c-44a9-8279-7697907ff5ef">2.6. Tempoangaben</h4>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Tempoangaben nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/dir.html">&lt;dir&gt;</a></span> codiert
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;dir <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x926d2a72&quot;</span> <span class="attribute">tstamp=</span><span class="attributevalue">&quot;1&quot;</span> <span class="attribute">place=</span><span class="attributevalue">&quot;above&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;1&quot;</span>&gt;</span>Allegretto<span data-indentation="1" class="element">&lt;/dir&gt;</span></div>
<p class="schema">im Schema: check_dir</p>
</div>
<div class="sub_2">
<h4 id="xfa88c5ae-9faf-48d9-9c66-db6556034220">2.7. Studierzeichen</h4>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Studierzeichen nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/reh.html">&lt;reh&gt;</a></span> codiert
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;reh <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x07512ac9&quot;</span> <span class="attribute">tstamp=</span><span class="attributevalue">&quot;1&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;1&quot;</span> <span class="attribute">place=</span><span class="attributevalue">&quot;above&quot;</span>&gt;</span>A<span data-indentation="1" class="element">&lt;/reh&gt;</span></div>
<p class="schema">im Schema: check_reh</p>
</div>
<div class="sub_2">
<h4 id="xc00ee2dc-9177-40db-943c-f1732102a5a6">2.8. Triller</h4>
<ul>
<li class="item">In <span class="name">Beethovens Werkstatt</span> werden Triller nach Vorlage mit dem Element <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/trill.html">&lt;trill&gt;</a></span> codiert
</li>
<li class="item">Triller werden mit <span class="att">@startid</span> mit einer Note verknüpft
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;trill <span class="attribute">xml:id=</span><span class="attributevalue">&quot;x885bc&quot;</span> <span class="attribute">staff=</span><span class="attributevalue">&quot;1&quot;</span> <span class="attribute">startid=</span><span class="attributevalue">&quot;#note_xcv6 &quot;</span> <span class="attribute">place=</span><span class="attributevalue">&quot;above&quot;</span>/&gt;</span></div>
<p class="schema">im Schema: controlevents_trill</p>
</div>
</div>
<div class="sub_1">
<h3 id="m9a5088c3-2099-481e-9c0a-b75400e7bf92">3. Editorische Entscheidungen</h3>
<div class="sub_2">
<h4 id="xf48025ff-793c-4a99-9c78-1c215f7c0e4e">3.1. Abgekürzte und alte Schreibweisen</h4>
<ul>
<li class="item">werden aufgelöst und/oder normalisiert</li>
<li class="item">z.B. <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/btrem.html">&lt;bTrem&gt;</a></span>, <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/multirpt.html">&lt;multiRpt&gt;</a></span>, <span class="element"><a href="https://music-encoding.org/guidelines/v4/elements/beatrpt.html">&lt;beatRpt&gt;</a></span> etc. sind nicht erlaubt
</li>
</ul>
<p class="schema">im Schema: mei_cmn</p>
</div>
<div class="sub_2">
<h4 id="x677b52ff-e693-4abe-abe9-86e44e7a9efd">3.2. Fehler</h4>
<div class="sub_3">
<h5 id="x77edf5b2-2a62-458b-8157-195584afa94b">3.2.1. Gravierende Fehler/Inkonsistenzen</h5>
<ul>
<li class="item">Fehler, die Folgefehler produzieren, z.B. fehlender Notenschlüssel, werden korrigiert,
in den Daten markiert und mit der betreffenden Stelle verknüpft
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;annot <span class="attribute">type=</span><span class="attributevalue">&quot;sic&quot;</span> <span class="attribute">resp=</span><span class="attributevalue">&quot;#BW&quot;</span> <span class="attribute">plist=</span><span class="attributevalue">&quot;#note_x0a0ks359b3e&quot;</span>&gt;</span>missing clef change in the first edition; corrected<span data-indentation="1" class="element">&lt;/annot&gt;</span></div>
</div>
<div class="sub_3">
<h5 id="xff1c89cc-bbba-4039-a007-a9a5a89adeba">3.2.2. Lokale, offensichtliche Fehler</h5>
<ul>
<li class="item">Fehler, die keine Folgefehler hervorrufen (z.B. fehlende Pause, Punkt oder Vorzeichen)
werden nicht korrigiert, aber in den Daten markiert
</li>
</ul>
<div class="indent1 indent"><span data-indentation="1" class="element">&lt;annot <span class="attribute">type=</span><span class="attributevalue">&quot;sic&quot;</span> <span class="attribute">resp=</span><span class="attributevalue">&quot;#BW&quot;</span> <span class="attribute">plist=</span><span class="attributevalue">&quot;#note_49ee-b5a1&quot;</span>&gt;</span>Wrong duration of the last note, it should be 8 instead of 4; not corrected<span data-indentation="1" class="element">&lt;/annot&gt;</span></div>
</div>
</div>
</div>
</div>
</div>
