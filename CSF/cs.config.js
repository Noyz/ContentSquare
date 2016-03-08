cs.modifDom = function (){

	/////////////////////////////////////////////////Gestion des modificaitons DOM///////////////////////////////////////////
	function daysInMonth(month,year) {
    	return new Date(year, month, 0).getDate();
	}

	for(var i = 1930; i < 2017; i++){
		tabYear.push(i);	
	}

	for(var i = 0; i<tabYear.length;i++){
		cs.$('#annee').append('<option value="'+ tabYear[i] +'">'+ tabYear[i] +'</option>' )
	};

	cs.$('#dateDeNaissance').parents('.col-md-12').after('<div class="csBirthDay"/>');

	cs.$('.csBirthDay').append('<select  id="jour" class="picker" ></select>');
	cs.$('.csBirthDay').append('<select  id="mois" class="picker"></select>');
	cs.$('.csBirthDay').append('<select  id="annee" class="picker"></select>');

	cs.$('#annee').append('<option value disabled selected = "selected" >Années *  </option>' );
	cs.$('#mois').append('<option value disabled selected = "selected" >Mois *   </option>' );
	cs.$('#jour').append('<option value disabled selected = "selected" >Jours *   </option>' );

	cs.$('#annee').wrap('<div class="picker" style="float:left;height:30px;width:120px"></div>');
	cs.$('#mois').wrap('<div class="picker" style="float:left;height:30px;width:100px"></div>');
	cs.$('#jour').wrap('<div class="picker" style="float:left;height:30px;width:100px"></div>');	
};
console.log(window.location.pathname)

/////////////////////////////////////////////////Gestion des évenements///////////////////////////////////////////
cs.triggerEvent  = function (){
	//Ajouts des options du Sélect "Mois"
	cs.$('#annee').on('change', function(){
		cs.$('#mois').find('option').remove().end();
		years = cs.$(this).val();
		for(var i = 0; i<tabMonth.length;i++){
			cs.$('#mois').append('<option value="'+ tabMonth[i] +'">'+ tabMonth[i]+ ' : ' + tabMonthString[i]+ '</option>' );
		}
	});

	//Ajouts des options du Sélect "Jours"
	cs.$('#mois').on('change', function(){
		cs.$('#jour').find('option').remove().end();
		months = cs.$(this).val();
		var allDaysInMonth =  daysInMonth(parseInt(months), parseInt(years));
		for(var i = 1; i < allDaysInMonth + 1;i++){
			cs.$('#jour').append('<option value="'+ [i] +'">'+ [i] +'</option>' );
		}
	});


	//Bind de la valeur email vers le sélect "confirmation E-mail"
	cs.$('#jour').on('change', function(){
		jours = cs.$(this).val();
		if(jours < 10){
			jours = 0 + jours;
		};
		if(months < 10){
			months = 0 + months;
		};
		cs.$('input[name="dateDeNaissance"]').attr('value', jours + '/'+ months + '/' + years);
		cs.$('#editForm>section> div> #sub-step1> div> div>div>div>div.form-line.form-inline').addClass('success');
	});
};