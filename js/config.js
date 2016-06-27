/**
 * Created by tobias.albert on 27.06.2016.
 */

var questions = [
    ['var f = function g(){ return 23; }; typeof g();','Error','"number"','"undefined"','"function"'],
    ['(function(){return typeof arguments;})();','"object"','"array"','"arguments"','"undefined"'],
    ['var y = 1, x = y = typeof x; x;','"undefined"','1','"number"','undefined'],
    ['var x = [typeof x, typeof y][1]; typeof typeof x;','"string"','"number"','"undefined"','"object"'],
    ['with (function(x, undefined){}) length;','2','1','undefined','Error'],
    ['Was ist eine Regel in CSS?','Die Selektoren und die dahinter stehenden geschweiften Klammern.','Die Kombination aus Eigenschaft und Werten.','Alles,was zwischen den geschweiften Klammern {} steht.','nein3'],
    ['Wo müssen die Links auf externe Stylesheets stehen?','Innerhalb des Elementes HEAD.','Innerhalb des Elementes BODY.','Zwischen den Elementen HEAD und BODY.','nein3'],
    ['Welche Form ist richtig?','a. P { color: red; }','b. P { color: "red"; }','c. P { color="red"; }','nein3'],
    ['Was ist der Inhalt eines Stylesheets?','Formatangaben zur Darstellung eines Webdokuments.','Ersatzangaben für die font-Tags.','Angaben, die verschiedene Inhalte der Website miteinander verbinden.','nein3'],
    ['Welche Typen von Längeneinheiten gibt es in CSS?','Absolute und relative Längeneinheiten.','Längenwerte und Prozentwerte.','Metrische und nicht-metrische Längeneinheiten.','nein3'],
    ['Was bedeutet die Bezeichnung "EM"?','Es entspricht der Höhe des großen "M" der aktuellen Schriftart.','Es ist eine Sektmarke.','Es entspricht der Breite des kleinen "m" der aktuellen Schriftart.','nein3'],
    ['Welche Möglichkeiten gibt es in CSS, Farbwerte zu definieren?','Schlüsselworte, hexadezimale Werte und RGB-Werte.','X-11-Farben, hexadezimale Werte und RGB-Werte','Die Gammakorrektion und den sRGB-Wert.','nein3'],
    ['Welchen Zweck hat der Dokumentstammbaum?','Er definiert, wie die Elemente eines Webdokuments voneinander abstammen.','Er legt fest, wo die Elemente auf dem Bildschirm dargestellt werden.','Er ordnet die Klassen den Elementen zu.','nein3'],
    ['Von welchem MIME-Type sind CSS-Dateien?','text/css','css/text','html/css','nein3'],
    ['Welchen Platz hat die @import-Regel innerhalb eines Stylesheets?','Vor allen anderen Regeln und nicht innerhalb von Deklarationsblocks.','Ganz am Ende des Stylesheets.','Sie darf nicht innerhalb eines Stylesheets auftreten.','nein3'],
    ['Wie werden Konflikte zwischen sich widersprechenden Deklarationen gelöst?','Durch die Regeln der Kaskade.','Durch die Vererbungsregeln.','Mit Hilfe des Dokumententyps.','nein3'],
    ['Welche CSS-Selektoren haben die höchste Spezifizität?','Mit dem Attribut style im Quelltext angebrachte Regeln.','Klassenselektoren','Elemente','nein3'],
    ['Welcher der folgenden Kommentare darf niemals in CSS auftauchen?','Ein Kommentar, der mit */ beginnt und mit /* endet.','Ein Kommentar, der mit <!-- beginnt und mit --> endet.','Ein Kommentar, der mit /* beginnt und mit */ endet.','nein3'],
    ['Für welche Elemente steht der Begriff "Replaziertes Element"?','Für Elemente, deren Inhalt durch andere Inhalte ersetzt wird.','Für Elemente, die per float seitlich verschoben werden.','Für Elemente, die gleichzeitig fixed und static positioniert sind.','nein3'],
    ['test20','ja','nein1','nein2','nein3'],
    ['test21','ja','nein1','nein2','nein3'],
    ['test22','ja','nein1','nein2','nein3'],
    ['test23','ja','nein1','nein2','nein3'],
    ['test24','ja','nein1','nein2','nein3'],
    ['test25','ja','nein1','nein2','nein3'],
    ['test26','ja','nein1','nein2','nein3'],
    ['test27','ja','nein1','nein2','nein3'],
    ['test28','ja','nein1','nein2','nein3'],
    ['test29','ja','nein1','nein2','nein3'],
    ['test30','ja','nein1','nein2','nein3'],
    ['test31','ja','nein1','nein2','nein3'],
    ['test32','ja','nein1','nein2','nein3'],
    ['test33','ja','nein1','nein2','nein3'],
    ['test34','ja','nein1','nein2','nein3'],
    ['test35','ja','nein1','nein2','nein3'],
    ['test36','ja','nein1','nein2','nein3'],
    ['test37','ja','nein1','nein2','nein3'],
    ['test38','ja','nein1','nein2','nein3'],
    ['test39','ja','nein1','nein2','nein3']
];

var quest_per_page = 20;