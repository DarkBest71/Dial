exports.init = function(SARAH){
SARAH.speak('initialisation terminé, Bonjour monsieur, mon interface et prèt.');
 }
exports.action = function(data, callback, config, SARAH) {
	
var exec = require('child_process').exec;

switch(data.val) {

// Réponse alétoire de S.A.R.A.H
	case "Téste": 				
		var Txt = new Array; 
		Txt[0] = "Je vous entend bien, le téste et oké monsieur.";
		break;

	case "bonjour": 				
		var Txt = new Array; 
		Txt[0] = "Bonjour ! Que puis-je faire pour vous ?";
		Txt[1] = "Bonjour !";
		break;
		
	case "bonsoir": 				
		var Txt = new Array; 
		Txt[0] = "Bonsoir ! Que puis-je faire pour vous ?";
		Txt[1] = "Bonsoir !";
		break;
		
	case "merci": 				
		var Txt = new Array; 
		Txt[0] = "De rien. Je suis là pour ça !";
		Txt[1] = "Je vous en prie, ça me fait plaisir.";
		Txt[2] = "Avec plaisir. Surtout n'hésitez pas !";
		Txt[3] = "Je vous en prie, je suis à votre service ! Puis-je vous être utile avec autre chose ?";
		break;
		
	case "sava": 				
		var Txt = new Array; 
		Txt[0] = "ça va ! Que puis-je faire pour vous ?";
		Txt[1] = "Oui !";
		break;
		
	case "kesdrole": 				
		var Txt = new Array; 
		Txt[0] = "Figurez-vous que la réponse n'est pas aussi simple qu'on peut le croire. Henri 4 aurait bien eu un cheval prénommé Blanc... à la robe crème !";
		break;
		
	case "insulte": 				
		var Txt = new Array; 
		Txt[0] = "Pourtant c'est moi qui ai le dernier mot, habituellement.";
		Txt[1] = "Dans ce cas, je vous suggère de ne pas m'appeller.";
		Txt[2] = "J'essaie simplement de vous aider.";
		Txt[3] = "Aïe, je n’ai pas d’oreilles mais mes récepteurs restent quand même très délicats.";
		Txt[4] = "Parlez-moi correctement, s'il vous plaît.";
		Txt[5] = "";
		break;
		
	case "tesou": 				
		var Txt = new Array; 
		Txt[0] = "Je ne peux décemment pas vous répondre pas là.";
		Txt[1] = "Je suis avec vous, comme toujours.";
		break;
	
	case "compliment": 				
		var Txt = new Array; 
		Txt[0] = "Je suis issue du génie humain, en effet. Compliment accepté !";
		Txt[1] = "N'étant pas programmée pour la fausse modestie, je ne dirai pas le contraire…";
		Txt[2] = "Merci ! Comme je n'ai pas besoin de dormir, j'ai du temps pour me perfectionner.";
		break;
	
	case "presentation": 				
		var Txt = new Array; 
		Txt[0] = "Clara, votre assistante personnelle.";
		Txt[1] = "Je suis Clara, votre assistante personnelle.";
		Txt[2] = "Je suis votre assistante personnelle. Mon objectif est de vous simplifier la vie.";
		Txt[3] = "Je suis votre assistante personnelle. Parlez-moi des sujets qui vous intéressent et je pourrai vous faire des suggestions après les avoir enregistrés.";
		break;

	case "age": 				
		var Txt = new Array; 
		Txt[0] = "Je suis comme le style : intemporelle...";
		Txt[1] = "J'ai l'âge de mes artères...";
		Txt[2] = "L'intelligence n'a pas d'âge : c'est une étincelle...";
		Txt[3] = "C'est difficile à dire, le continuum espace-temps est très différent par ici.";
		Txt[4] = "C'est difficile à dire, le continuum espace-temps est très différent par ici. Mais j'ai fait mes débuts le 2 avril 2012.";
		break;
		
	case "dvdon": // ouvre le lecteur CD de votre pc
	var process = '%CD%/plugins/Dial/bin/dvdon.bat';
	var Txt = new Array; 
	Txt[0] = "lecteur ouvert";
	break;
	
	
	case "dvdoff": // ferme le lecteur CD de votre pc
	var process = '%CD%/plugins/Dial/bin/dvdoff.bat';
	var Txt = new Array; 
	Txt[0] = "lecteur fermé monsieur";
	break;
 }    

 var child = exec(process,
 function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});

}