

window.addEventListener("load", function () {
document.querySelector('button').addEventListener("click", function () {

    var artyom = new Artyom();
	
	
    artyom.addCommands({
        indexes: ["Hilfe"],
        action: function (i) {
            console.log("Hier ist eine Liste aller Sprachbefehle");
			artyom.say("Hier ist eine Liste aller Sprachbefehle");
        }
		});
		
	artyom.addCommands({
        indexes: ["Öffne Einstellungen"],
        action: function (i) {
            console.log("(Einstellungsoptionen)");
        }
		});
		

	artyom.addCommands({
        indexes: ["Guten Morgen Intranet", "guten Morgen Intranet"],
        action: function (i) {
            console.log("Guten Morgen, soll ich dir alle heutigen Kurse vorlesen oder nur die nächsten zwei?");
			artyom.say("Guten Morgen, soll ich dir alle heutigen Kurse vorlesen oder nur die nächsten zwei?");
        }
		});
		
		
	artyom.addCommands({
        indexes: ["Hallo Intranet"],
        action: function (i) {
            console.log("Wie kann ich dir helfen?");
			artyom.say("Wie kann ich dir helfen?");
        }
		});
		
		
		artyom.addCommands({
        indexes: ["Was gibt's neues", "Was ist neu", "Was gibt es neues"],
        action: function (i) {
            console.log("Es gibt (Nummer) neue Dateien im Kurs (Kursname), (Nummer) neue Nachrichten im Kurs (Kursname) und (Nummer) neue Emails");
			artyom.say("Es gibt (Nummer) neue Dateien im Kurs (Kursname), (Nummer) neue Nachrichten im Kurs (Kursname) und (Nummer) neue Emails");
        }
		});
		

	artyom.addCommands({
        indexes: ["Was für Kurse habe ich heute", "Welche Kurse habe ich heute"],
        action: function (i) {
            console.log("Soll ich dir alle heutigen Kurse vorlesen oder nur die nächsten zwei?");
			artyom.say("Soll ich dir alle heutigen Kurse vorlesen oder nur die nächsten zwei?");
        }
		// if (indexes: ["Alle"]) {
			// action: function (i) {
            // console.log("Deine heutigen Kurse sind: (Zeitraum): (Kurs) und (Zeitraum): (Kurs)");
			// artyom.say("Deine heutigen Kurse sind: (Zeitraum): (Kurs) und (Zeitraum): (Kurs)");
			// }
		// if (indexes: ["Die nächsten zwei"]) {
			// action: function (i) {
            // console.log("Deine nächsten zwei Kurse sind: (Zeitraum): (Kurs) und (Zeitraum): (Kurs)");
			// artyom.say("Deine nächsten zwei Kurse sind: (Zeitraum): (Kurs) und (Zeitraum): (Kurs)");
			// }
		// }
		});
		

	artyom.addCommands({
        indexes: ["Alle", "alle"],
        action: function (i) {
            console.log("Deine heutigen Kurse sind: (Zeitraum): (Kurs) und (Zeitraum): (Kurs)");
			artyom.say("Deine heutigen Kurse sind: (Zeitraum): (Kurs) und (Zeitraum): (Kurs)");
        }
		});
		

	artyom.addCommands({
        indexes: ["Die nächsten zwei"],
        action: function (i) {
            console.log("Deine nächsten zwei Kurse sind: (Zeitraum): (Kurs) und (Zeitraum): (Kurs)");
			artyom.say("Deine nächsten zwei Kurse sind: (Zeitraum): (Kurs) und (Zeitraum): (Kurs)");
        }
		});
		

	artyom.addCommands({
        indexes: ["In welchem Raum findet * statt"],
        smart: true,
        action: function (i, kursname) {
            console.log(kursname + "findet in Raum (Raumnummer) statt");
			artyom.say(kursname + "findet in Raum (Raumnummer) statt");
        }
		});
		

	artyom.addCommands({
        indexes: ["Was sind meine nächsten Abgaben"],
        action: function (i) {
            console.log("Die Abgaben für diese Woche sind am (Datum) (Abgabenname/Kurs) und am (Datum) (Abgabenname/Kurs)");
			artyom.say("Die Abgaben für diese Woche sind am (Datum) (Abgabenname/Kurs) und am (Datum) (Abgabenname/Kurs)");
        }
		});
		

	artyom.addCommands({
        indexes: ["Öffne Datei * in (Kursname)"],
        smart: true,
        action: function (i, dateiname) {
            console.log(dateiname + "wurde geöffnet");
        }
		});
		
		
	artyom.addCommands({
        indexes: ["Öffne *"],
        smart: true,
        action: function (i, kursname) {
            console.log(kursname + "wurde geöffnet");
        }
		});
		
		
	artyom.addCommands({
        indexes: ["Stopp", "Intranet stopp", "Stopp Intranet"],
        action: function (i) {
            console.log("gestoppt");
			artyom.say("gestoppt");
        }
		});
		

	artyom.addCommands({
        indexes: ["vsfjgcyhkdb"],
        action: function (i) {
            console.log("Leider habe ich deine Frage nicht verstanden. Sag Hilfe, um alle möglichen Sprachbefehle angezeigt zu bekommen");
			artyom.say("Leider habe ich deine Frage nicht verstanden. Sag Hilfe, um alle möglichen Sprachbefehle angezeigt zu bekommen");
        }
    });
	
	
	
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
});
//# sourceMappingURL=playgroud-artyom-script.js.map