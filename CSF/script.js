/*
	Champs anniversaire
*/
var tabMonth = ["Janvier","Février","Mars","Avril","Mai","Juin", "Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];

function getDaysInMonth(month, year) {
     var date = new Date(year, month, 1);
     var days = [];
     while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
     }
     return days;
}

var tabYear = [];
for(var i = 1969;i<2016.i++){
	tabYear.push(i);
	console.log
}

var checkMyBirthday = function(){

	//si au moins une des trois valeurs est void return false
	//sinon tu récupéres la valeur des trois select et tu remplis le champs
	//remonter les erreurs (bordure rouge)
	if()
}


var createMyBirthday = function(){
	//création du dom des trois selects
	//Selectionner #dateDeNaissance pour remonter jusqu'a son parent et créer une row perso juste après ce parent
	//jQuery('#dateDeNaissance').parents('.col-md-12').after('<div class="csBirthDay" />');


	// div.picker > select * 3 jour mois année (2016 - 1930)
	// 
	$('champsFormulaire').append('<select id="selectJour"></select>');
	$('champsFormulaire').append('<select id="selectMois"></select>');
	$('champsFormulaire').append('<select id="selectAnnee"></select>');

}

/*
	Champs Email
*/
var fieldConfirm = function(){
	// detecter un moment ou on peut venir remplir le chps de confirmation dynamquement en allant chercher la valeur du champs #email
}
		jQuery.validator.addMethod("telephoneMobileFormat", function(e, d) {
                if (e == "") {
                	console.log("Mobile")
                    return true
                }
                return /^0[6-7][0-9]{8}$/.test(e)
            }, "");
		jQuery.validator.addMethod("telephoneMobileFormat", function(e, d) {
                if (e == "") {
                	console.log("Mobile")
                    return true
                }
                return /^0[6-7][0-9]{8}$/.test(e)
            }, "");

/*
	Chps investiguer pour savoir comment on peut récupérer la validation d'un numéro de tel
	function en utlisant la validation pour savoir si tu remplis le champs mobile ou domicile.
*/
