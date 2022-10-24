const DICTIONNARY = [
	'concurrence',
	'marché',
	'monopole',
	'consommateur',
	'client',
	'produit',
	'clientèle',
	'entreprise',
	'acheteur',
	'cible',
	'publicité',
	'offre',
	'négocier',
	'part',
	'marketing',
	'transaction',
	'producteur',
	'vente',
	'vendre',
	'vendeur',
	'négociation',
	'spéculation',
	'capitalisme',
	'consommation',
	'marchand',
	'magasin',
	'appareil',
	'test',
	'acheter',
	'outil',
	'marchandage',
	'export',
	'avion',
	'négociant',
	'trader',
	'clé',
	'consommer',
	'voiture',
	'verrou',
	'patient',
	'contrat',
	'pack',
	'annonce',
	'consumérisme',
	'promouvoir',
	'objet',
	'occasion',
	'promotion',
	'import',
	'roue',
	'action',
	'constitution',
	'carte',
	'bourse'
];


const trigger = document.getElementById('puzzle-num');
const summary = document.getElementById('cemantix-summary');
const helpMeButton = document.createElement('button');

helpMeButton.id = 'help-me-button';
helpMeButton.innerHTML = 'Help Me Obi Wan Kenobi!'
summary.appendChild(helpMeButton);
helpMeButton.addEventListener('click', helpMe); 
const form = document.getElementById('cemantix-form');
const guessInput = document.getElementById('cemantix-guess');
const guessButton = document.getElementById('cemantix-guess-btn');
function helpMe() {
	DICTIONNARY.forEach(element => {
		guessInput.value = element;
		guessButton.click();
		setTimeout(function(){
			console.log("sending " + element);
		}, 10000);
	});
}