jQuery('#dateDeNaissance').parents('.col-md-12').after('<div class="csBirthDay"/>');


jQuery('.csBirthDay').append('<select  id="jour" class="picker" ></select>')
jQuery('.csBirthDay').append('<select  id="mois" class="picker"></select>')
jQuery('.csBirthDay').append('<select  id="annee" class="picker"></select>')

jQuery('#annee').wrap('<div class="picker" style="float:left;height:30px;width:120px"></div>');
jQuery('#mois').wrap('<div class="picker" style="float:left;height:30px;width:100px"></div>');
jQuery('#jour').wrap('<div class="picker" style="float:left;height:30px;width:100px"></div>');


jQuery('#annee').append('<option value disabled selected = "selected" >Années *  </option>' );
jQuery('#mois').append('<option value disabled selected = "selected" >Mois *   </option>' );
jQuery('#jour').append('<option value disabled selected = "selected" >Jours *   </option>' );


var years;
var months;
var tabYear = [];
var tabMonth = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var tabMonthString = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}


for(var i = 1930; i < 2017; i++){
	tabYear.push(i);	
}

//Ajouts des options du Sélect "Année"
for(var i = 0; i<tabYear.length;i++){
	jQuery('#annee').append('<option value="'+ tabYear[i] +'">'+ tabYear[i] +'</option>' )
};

//Ajouts des options du Sélect "Mois"
jQuery('#annee').on('change', function(){
	jQuery('#mois').find('option').remove().end();
	years = jQuery(this).val();
	for(var i = 0; i<tabMonth.length;i++){
		jQuery('#mois').append('<option value="'+ tabMonth[i] +'">'+ tabMonth[i]+ ' : ' + tabMonthString[i]+ '</option>' );
	}
});

//Ajouts des options du Sélect "Jours"
jQuery('#mois').on('change', function(){
	jQuery('#jour').find('option').remove().end();
	months = jQuery(this).val();
	var allDaysInMonth =  daysInMonth(parseInt(months), parseInt(years));
	for(var i = 1; i < allDaysInMonth + 1;i++){
		jQuery('#jour').append('<option value="'+ [i] +'">'+ [i] +'</option>' );
	}
});


//Bind de la valeur email vers le sélect "confirmation E-mail"
jQuery('#jour').on('change', function(){
	jours = jQuery(this).val();
	if(jours < 10){
		jours = 0 + jours;
	}
	if(months < 10){
		months = 0 + months;
	}
	jQuery('input[name="dateDeNaissance"]').attr('value', jours + '/'+ months + '/' + years);
	jQuery('#editForm>section> div> #sub-step1> div> div>div>div>div.form-line.form-inline').addClass('success');
});


/////////////////////////////////////////////////////////////////////////////////////////

jQuery('#validateLogin').click(function(){
	confirmMail = jQuery('input[name="email"]').val();
	jQuery('#confirmationEmail').attr("value", confirmMail);
});

////////////////////////////////////////////////////////////////////////////////////////

jQuery('#telephonePortable').parents('.col-md-6').append('<input type="tel" id="phoneMobile" class="phone-group error-field" value tabindex="11" aria-invalid="false" name="telephone" placeholder="Telephone *"/>');
jQuery('#phoneMobile').wrap('<div class="input-append manual"></div>');
jQuery('.manual').wrap('<div class="form-line label-inside"></div>'); 

