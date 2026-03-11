---
layout: default
title: Team
permalink: /team/
parent: Projekt
parent_url: /projekt
---

<style>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.team-card {
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-photo-wrapper {
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem;
}

.team-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #9d1d20;
  display: block;
}

.team-initials {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #666;
  background-color: #ededed;
  border: 1px solid #ccc;
}

.team-card h3 {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
}

.team-card .position {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.team-card .location {
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 0.5rem;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 2rem;
  border: 1px solid #888;
  width: 80%;
  max-width: 700px;
  border-radius: 8px;
  position: relative;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #9d1d20;
}

.modal-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #9d1d20;
}

.modal-initials {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: #666;
  background-color: #ededed;
  border: 1px solid #ccc;
}

.modal-info h2 {
  margin: 0 0 0.5rem 0;
}

.modal-info .position {
  color: #666;
  margin-bottom: 0.5rem;
}

.modal-info .location {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.modal-info .contact-detail {
  margin: 0.3rem 0;
  font-size: 0.9rem;
}

.modal-info .contact-detail a {
  color: #9d1d20;
  text-decoration: none;
}

.modal-info .contact-detail a:hover {
  text-decoration: underline;
}

.modal-body {
  line-height: 1.8;
  font-size: 1rem;
  color: #333;
  text-align: left;
}

.modal-body p {
  margin-bottom: 1rem;
}

.modal-body p:last-child {
  margin-bottom: 0;
}

.close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
}

/* Former Members List */
.former-members {
  margin-top: 4rem;
}

.former-members h2 {
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #9d1d20;
  padding-bottom: 0.5rem;
}

.former-members .former-list p {
  margin: 0.4rem 0;
  line-height: 1.6;
}

.former-members .name {
  font-weight: bold;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
  }
  
  .modal-content {
    width: 95%;
    margin: 10% auto;
    padding: 1.5rem;
  }
  
  .modal-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>

# {{ page.title }}

<div class="team-grid">
  {% include team-card.html 
     name="Prof. Dr. Bernhard R. Appel"
     position="Projektleitung"
     location="Bonn"
     photo="bra.jpg"
     email="appel@beethovens-werkstatt.de"
     gnd="112794300"
     bio="Studium der Schulmusik an der Musikhochschule des Saarlandes sowie Musikwissenschaft, Germanistik, Linguistik und Philosophie an der Universität des Saarlandes in Saarbrücken. 1977 bis 1984 wissenschaftlicher Mitarbeiter, dann Assistent am Institut für Musikwissenschaft der Universität des Saarlandes; 1981 Promotion mit einer Arbeit über Robert Schumanns Humoreske op. 20; 1985 bis 1986 DFG-Projekt <em>Standortermittlungen zu Schumann-Autographen</em> an der Universität Köln; 1986 bis 2006 Mitarbeiter der Robert-Schumann-Forschungsstelle in Düsseldorf und Gründungsredakteur der Neuen Schumann-Gesamtausgabe; 2000 Habilitation an der Universität Dortmund; 2003 Ernennung zum Professor durch die Landesregierung Nordrhein-Westfalen; zahlreiche Lehraufträge, vornehmlich zur Musikphilologie, an den Universitäten Saarbrücken, Marburg, Bonn und an der Musikhochschule in Düsseldorf. Ab 2007 Leiter des Beethoven-Archivs und des Verlags Beethoven-Haus, Bonn. Herausgeber der <em>Neuen Beethoven-Gesamtausgabe</em>, der <em>Bonner Beethoven-Studien</em> und der Skizzenbuch-Editionsreihe <em>Beethoven. Skizzen und Entwürfe</em>. Seit ca. 2000 Entwicklung einer musikbezogenen „genetischen Textkritik“."
  %}
  
  {% include team-card.html 
     name="Dr. Susanne Cox"
     position="Wissenschaftliche Mitarbeiterin"
     location="Bonn"
     photo="sc.jpg"
     email="cox@beethovens-werkstatt.de"
     orcid="0009-0002-3252-0986"
     gnd="1012676102"
     github="susannecox"
     bio="Studium der Musikwissenschaft mit den Nebenfächern Geschichte und Wirtschaftswissenschaften an der Universität Koblenz. Magister Artium 2012 mit einer Edition der <em>Lieder verschiedener Völker</em> WoO 158 von Ludwig van Beethoven als Magisterarbeit (erschienen als Bd. 3, Abt. XI der Beethoven-Gesamtausgabe). 2012 bis 2013 wissenschaftliche Assistentin im Lektorat des G. Henle Verlags in München. Seit Juni 2014 wissenschaftliche Mitarbeiterin im Projekt <em>Beethovens Werkstatt</em>. Februar 2020 Promotion zum Thema „Das Skizzenbuch ‚Engelmann‘ – Untersuchungen zu Skizzen Beethovens aus dem Frühjahr 1823“."
  %}
  
  {% include team-card.html 
     name="Maximilian Greshake, M.A."
     position="Wissenschaftlicher Mitarbeiter"
     location="Bonn"
     email="greshake@beethovens-werkstatt.de"
     orcid="0009-0009-4809-2956"
     bio="Studium der Musikwissenschaft, Kunstgeschichte und Digital Humanities an der Universität Münster. Master of Arts im Fach Musikwissenschaft mit den Schwerpunkten Musikgeschichte des 19. Jahrhunderts und quantitative Auswertung musikwissenschaftlicher Daten. Mitarbeit im Forschungsprojekt „Der Musikverein zu Münster in der zweiten Hälfte des 19. Jahrhunderts“ als Erfasser von Konzertprogrammen in der Datenbank <em>musiconn.performance</em> (SLUB Dresden). 2025 Masterabschluss: <em>Die Doppelte Exposition in Klavierkonzerten des 19. Jahrhunderts: Ein Auslaufmodell? Statistische Betrachtungen zur Entwicklung der Kopfsatzform.</em>"
  %}
  
  {% include team-card.html 
     name="Kristin Herold, M.A."
     position="Wissenschaftliche Mitarbeiterin"
     location="Paderborn"
     photo="kh.jpg"
     email="herold@beethovens-werkstatt.de"
     orcid="0000-0003-2915-353X"
     gnd="1321032242"
     github="krHERO"
     bio="Studium der Musikwissenschaft mit den Nebenfächern Philosophie und VWL an der TU Berlin. Von 2011–2016 an der Universität Paderborn, 2011–2016 im Projekt <a href='https://de.dariah.eu/'>DARIAH-DE</a> und 2016 im <a href='https://hoftheater-detmold.de/'>Hoftheater-Projekt</a> als Wissenschaftliche Mitarbeiterin, 2012 freie Mitarbeiterin bei der digitalen <a href='https://weber-gesamtausgabe.de'>Carl-Maria-von-Weber-Gesamtausgabe</a>. 2013–2016 Wissenschaftliche Mitarbeiterin im <a href='https://sarti-edition.zenmem.de/'>Sarti-Projekt</a> an der UdK Berlin.  2016–2018 wissenschaftliche Mitarbeiterin bei der <em>B. A. Zimmermann-Gesamtausgabe</em> an der BBAW in Berlin. Seit 2018 an der Universität Paderborn als Wissenschaftliche Mitarbeiterin, 2018–2020 im Projekt <a href='https://pasticcio-project.zenmem.de/'>Pasticcio. Ways of arranging attractive operas</a>, 2024–2027 <a href='https://www.uni-paderborn.de/projekt/1332'>Edirom Online Reloaded</a> und seit 2018 im Projekt <em>Beethovens Werkstatt</em>."
  %}
  
  {% include team-card.html 
     name="Prof. Dr. Johannes Kepper"
     position="Projektleitung"
     location="Paderborn"
     photo="jk.jpg"
     email="kepper@beethovens-werkstatt.de"
     orcid="0000-0003-4891-260X"
     gnd="174032757"
     github="kepper"
     bio="Studium der Musikwissenschaft, Medienwissenschaft und Informatik am Musikwissenschaftlichen Seminar Detmold / Paderborn und der Universität Paderborn. 2003 bis 2012 Mitarbeiter im DFG-Projekt <em>Digitale Musikedition</em> („Edirom“). Seit 2006 aktive Mitarbeit an der Formatentwicklung der <a href='http://music-encoding.org/'>Music Encoding Initiative</a> (MEI), seit Ende 2014 Administrative Chair des MEI Boards. 2009 Promotion mit einer Arbeit zu <em>Musikedition im Zeichen neuer Medien</em>. 2010 bis 2013 Leitung des Projekts <em>Digital Music Notation Data Model and Prototype Delivery System</em>. 2012 bis 2014 Mitarbeiter im BMBF-Projekt <em>Freischütz Digital</em>."
  %}
  
  {% include team-card.html 
     name="Prof. Dr. Andreas Münzmay"
     position="Akademieprofessur"
     location="Paderborn"
     photo="am.jpg"
     email="andreas.muenzmay@uni-paderborn.de"
     orcid="0000-0002-8373-4055"
     gnd="1025471857"
     github="AndreasMunzmay"
     bio="Studium der Fächer Schulmusik, Romanistik, Posaune (Jazz- und Popularmusik) und Musikwissenschaft in Stuttgart. 2006 bis 2009 Lehraufträge im Fach Musikwissenschaft an der Hochschule für Musik Stuttgart, Universität der Künste Berlin und Universität Potsdam; Gymnasiallehrer; Musikschullehrer. 2008 Promotion an der Universität der Künste Berlin mit einer Arbeit über französisch-deutsche Kulturtransfers im Musiktheater des 19. Jahrhunderts. 2009 bis 2014 Wissenschaftlicher Redakteur im Akademieprojekt OPERA – Spektrum des europäischen Musiktheaters in Einzeleditionen an den Universitäten Bayreuth und Frankfurt/M. 2012 Verleihung des Hermann-Abert-Preises durch die Gesellschaft für Musikforschung. 2014 bis 2016 Assistent im Institut für Musikwissenschaft der Goethe-Universität Frankfurt. 2016 Ernennung zum Universitätsprofessor für Musikwissenschaft/Digitale Musikedition/Digital Humanities (Akademie-Professur) der Universität Paderborn."
  %}
  
  {% include team-card.html 
     name="Lisa Rosendahl, M.A. M.A."
     position="Wissenschaftliche Mitarbeiterin"
     location="Bonn"
     email="rosendahl@beethovens-werkstatt.de"
     orcid="0000-0002-4826-4553"
     gnd="1246783738"
     github="LisaRosendahl"
     bio="Studium der Musikwissenschaft, Geschichte und Digital Humanities an Westfälischer Wilhelms-Universität Münster, Robert Schumann Hochschule und Heinrich-Heine-Universität Düsseldorf. 2021–2023 Tätigkeiten als wissenschaftliche Hilfskraft im Projekt Beethoven in the House am Musikwissenschaftlichen Institut Detmold/Paderborn sowie in der Beethoven-Gesamtausgabe am Beethoven-Haus Bonn. 2023–2024 Wissenschaftliche Mitarbeiterin Beethovens Werkstatt in Vertretung für Elisa Novara. 2024–2025 Wissenschaftliche Mitarbeiterin im Projekt Tanz/Musik digital an der Akademie der Wissenschaften und der Literatur Mainz. Seit April 2025 Wissenschaftliche Mitarbeiterin Beethovens Werkstatt. Stipendiatin der Studienstiftung mit einem Dissertationsprojekt zum Diskurs über den Rang der Musik unter den Künsten im 18. und frühen 19. Jahrhundert."
  %}
  
  {% include team-card.html 
     name="Richard Sänger, M.A."
     position="Wissenschaftlicher Mitarbeiter"
     location="Bonn"
     photo="rs.jpg"
     email="saenger@beethovens-werkstatt.de"
     orcid="0009-0002-8649-543X"
     github="richardsaenger"
     bio="Studium der Musikwissenschaft, Germanistik und Psychologie an der Universität Koblenz. Magister Artium 2014 in Koblenz mit einer historisch-kritischen Edition der „Biographischen Notizen über Ludwig van Beethoven“ von Franz Gerhard Wegeler und Ferdinand Ries als Magisterarbeit. Von 2012–2014 im Beethoven-Archiv tätig; seit Juli 2014 wissenschaftlicher Mitarbeiter im Projekt „Beethovens Werkstatt. Genetische Textkritik und Digitale Musikedition“. Promoviert aktuell mit einer Arbeit über Beethovens Bonner Skizzen."
  %}
  
  {% include team-card.html 
     name="Agnes Seipelt, M.A."
     position="Wissenschaftliche Mitarbeiterin"
     location="Paderborn"
     photo="as.jpg"
     email="seipelt@beethovens-werkstatt.de"
     orcid="0000-0002-4250-6937"
     gnd="1173748865"
     github="aseipelt"
     bio="Studium der Musikwissenschaft am Musikwissenschaftlichen Seminar Detmold/Paderborn und an der Universität Paderborn. 2017 Masterabschluss: <em>Die Wiener Erstaufführung des Freischütz. Versuch einer MEI-basierten Codierung und Darstellung aufführungs- und zensurbedingter Veränderungen im Manuskript</em>. 2017 bis 2019 Wissenschaftliche Mitarbeiterin bei Prof. Andreas Münzmay sowie im Projekt <em>Digitale Musikanalyse mit MEI am Beispiel von Kompositionsstudien Anton Bruckners</em> in Kooperation mit der Österreichischen Akademie der Wissenschaften unter der Leitung von Robert Klugseder. Seit April 2019 bei <em>Beethovens Werkstatt</em> angestellt."
  %}
  
  {% include team-card.html 
     name="Sophie Stremel, B.A."
     position="Wissenschaftliche Hilfskraft"
     location="Paderborn"
     orcid="0009-0007-8264-6882"
     gnd="1386050946"
     bio="Studium der Musikwissenschaft, Medienwissenschaft und Gender Studies am Musikwissenschaftlichen Seminar Detmold / Paderborn und der Universität Paderborn. 2021–2024 Studentische/Wissenschaftliche Hilfskraft im DFG-Projekt „Henze Digital“. 2024–2025 Wissenschaftliche Hilfskraft im KreativInstitut.OWL. Seit September 2025 Wissenschaftliche Hilfskraft bei Beethovens Werkstatt."
  %}
  
  {% include team-card.html 
     name="Prof. Dr. Joachim Veit"
     position="Projektleitung"
     location="Paderborn"
     photo="jv.jpg"
     email="veit@weber-gesamtausgabe.de"
     orcid="0000-0002-1234-5678"
     gnd="103988327"
     github="cmvweber"
     bio="Musikwissenschaftsstudium an der Universität des Saarlandes und der Universität GH Paderborn sowie Schulmusik an der Hochschule für Musik Detmold. 1988 Promotion mit <em>Studien zum Frühwerk Carl Maria von Webers. Untersuchungen zum Einfluß Abbé Voglers und Franz Danzis</em>. 1988 Wiss. Mitarbeiter im DFG-Projekt Weber-Briefedition, seit 1996 Wiss. Mitarbeiter des Akademieprojekts Carl-Maria-von-Weber-Gesamtausgabe und seit 2005 deren Editionsleiter. 2004 Veranstaltung des Symposions „Musikalisches Erbe im Digitalen Zeitalter – Chancen und Probleme neuer Techniken“. 2005 Verleihung einer Honorarprofessur durch die Kulturwissenschaftliche Fakultät der Universität Paderborn. Seit 2003 Leitung diverser Projekte im Umfeld Digitaler Musikedition, darunter das DFG-Projekt <em>Digitale Musikedition</em> („Edirom“) und <em>Freischütz Digital</em> sowie Leitung von Teilprojekten im TextGrid- und DARIAH-DE-Verbund. Seit 2014 Koordinator des BMBF-Projekts „Zentrum Musik – Edition – Medien. Musik und nicht-textuelle Medien im Kontext digitaler Editionen“. Mitglied u.a. der Editorial Boards des OPERA-Projekts und der Advisory-Boards der Digitalen Mozart-Edition und des Danish Center for Music Publication. Vorstandsmitglied des Verbands Digital Humanities im deutschsprachigen Raum."
  %}
  
  {% include team-card.html 
     name="Jan-Peter Voigt, M.S."
     position="Wissenschaftlicher Mitarbeiter"
     location="Paderborn"
     photo="jpv.jpg"
     email="jpv@beethovens-werkstatt.de"
     orcid="0009-0006-9881-197X"
     github="jpvoigt"
     bio="Studium der Musikwissenschaft an der Universität Hamburg, Studium der Informatik an der Fernuniversität in Hagen. Master of Science 2024 in Hagen mit einer Arbeit über das Thema „Lernen, Vorhersagen und Erzeugen von Notensequenzen“.
    1999-2010 Entwicklung von Informationssystemen für Werbungtreibende.
    Seit 2011 selbstständiger Notengrafiker, dabei unter anderem: 2016 Notengrafik der Markus-Passion von Johann Sebastian Bach (BWV 247, Ortus Verlag Berlin). 2019 Notengrafik für „Ihr sollt die Wahrheit erben“ von Hermann Keller, 2020 „Best-Edition“ Auszeichnung dafür."
  %}
</div>

<div class="former-members">
  <h2>Ehemalige Mitarbeitende</h2>
  <div class="former-list">
    <p><span class="name">Mark Saccomano</span> (Wissenschaftlicher Mitarbeiter, 2025)</p>
    <p><span class="name">Elisa Novara</span> (Wissenschaftliche Mitarbeiterin, Dezember 2014 – Januar 2025)</p>
    <p><span class="name">Ran Mo</span> (Wissenschaftliche Mitarbeiterin, September 2019 – Oktober 2023 und Dezember 2023 – Juni 2024)</p>
    <p><span class="name">René Pauls</span> (Wissenschaftliche Hilfskraft, Januar 2022 – Dezember 2023)</p>
    <p><span class="name">Salome Obert</span> (Studentische Hilfskraft, Wintersemester 2018/19 – Juni 2021)</p>
    <p><span class="name">Jonathan Markert</span> (Studentische Hilfskraft, August – Dezember 2021)</p>
    <p><span class="name">Federica Rovelli</span> (Wissenschaftliche Mitarbeiterin, Oktober 2014 – Oktober 2018)</p>
    <p><span class="name">Maja Hartwig</span> (Wissenschaftliche Mitarbeiterin, Februar 2014 – Juli 2018)</p>
    <p><span class="name">Sebastian Schlicht</span> (Studentische Hilfskraft, Wintersemester 2016/17 – Sommer 2018)</p>
    <p><span class="name">Chaoling Zhang</span> (Studentische Hilfskraft, 2014 – 2017)</p>
    <p><span class="name">Franziska Scheffler</span> (Studentische Hilfskraft, 2014 – Mitte 2017)</p>
  </div>
</div>

<!-- Modal Structure -->
<div id="teamModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div id="modalContent"></div>
  </div>
</div>

<script>
// Modal functionality
const modal = document.getElementById('teamModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementsByClassName('close')[0];

function openTeamModal(card) {
  const personId = card.dataset.id;
  const name = card.dataset.name;
  const position = card.dataset.position;
  const location = card.dataset.location;
  const photo = card.dataset.photo;
  const email = card.dataset.email;
  const orcid = card.dataset.orcid;
  const gnd = card.dataset.gnd;
  const github = card.dataset.github;
  const bio = card.dataset.bio;
  
  // Generate initials - filter out academic titles (words with dots)
  const nameClean = name.replace(/,/g, '');
  const nameParts = nameClean.split(' ');
  const realNames = nameParts.filter(part => !part.includes('.'));
  let initials = realNames.length >= 2 
    ? realNames[0].charAt(0) + realNames[realNames.length - 1].charAt(0)
    : realNames[0].charAt(0);
  // Handle SS and SA exceptions - use first two letters of last name
  if (initials === 'SS' || initials === 'SA') {
    const lastName = realNames[realNames.length - 1];
    initials = lastName.charAt(0).toUpperCase() + (lastName.charAt(1) || '').toLowerCase();
  }
  
  let photoHTML = '';
  if (photo && photo !== 'undefined' && photo !== '') {
    photoHTML = `
      <img src="{{ '/assets/images/team/' | relative_url }}${photo}" 
           alt="${name}" 
           class="modal-photo"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="modal-initials" style="display: none;">
        ${initials}
      </div>
    `;
  } else {
    photoHTML = `
      <div class="modal-initials">
        ${initials}
      </div>
    `;
  }
  
  // Build contact details as text
  let contactHTML = '';
  if (email && email !== 'undefined' && email !== '') {
    contactHTML += `<div class="contact-detail"><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></div>`;
  }
  if (orcid && orcid !== 'undefined' && orcid !== '') {
    contactHTML += `<div class="contact-detail"><strong>ORCID:</strong> <a href="https://orcid.org/${orcid}" target="_blank">${orcid}</a></div>`;
  }
  if (gnd && gnd !== 'undefined' && gnd !== '') {
    contactHTML += `<div class="contact-detail"><strong>GND:</strong> <a href="https://d-nb.info/gnd/${gnd}" target="_blank">${gnd}</a></div>`;
  }
  if (github && github !== 'undefined' && github !== '') {
    contactHTML += `<div class="contact-detail"><strong>GitHub:</strong> <a href="https://github.com/${github}" target="_blank">${github}</a></div>`;
  }
  
  const bioText = bio && bio !== 'undefined' && bio !== '' ? bio : '';
  const locationHTML = location && location !== 'undefined' && location !== '' ? `<div class="location">${location}</div>` : '';
  
  modalContent.innerHTML = `
    <div class="modal-header">
      ${photoHTML}
      <div class="modal-info">
        <h2>${name}</h2>
        <div class="position">${position}</div>
        ${locationHTML}
        ${contactHTML}
      </div>
    </div>
    <div class="modal-body">
      ${bioText}
    </div>
  `;
  
  // Update URL hash
  history.pushState(null, null, '#' + personId);
  
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  // Remove hash from URL
  history.pushState(null, null, window.location.pathname);
}

// Close modal when clicking X
closeBtn.onclick = closeModal;

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

// Open modal from URL hash on page load
window.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash.substring(1);
  if (hash) {
    const card = document.querySelector(`[data-id="${hash}"]`);
    if (card) {
      openTeamModal(card);
    }
  }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
  const hash = window.location.hash.substring(1);
  if (hash) {
    const card = document.querySelector(`[data-id="${hash}"]`);
    if (card) {
      openTeamModal(card);
    }
  } else {
    modal.style.display = 'none';
  }
});
</script>
