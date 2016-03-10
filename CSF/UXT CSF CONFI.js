cs = {
	$   : jQuery_cs,
	id  : '546',
	imgPath : 'ergotest/csf/',
	css     : '',
	cssMobile     : '',
	debbug  : true,
	pathName : window.location.pathname
};

cs.cookies = {create:function(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var i="; expires="+r.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"},read:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},erase:function(e){this.create(e,"",-1)},check:function(e,t){var n=this.read(e);return"undefined"!=typeof n&&n===t?!0:!1}};

cs.log = function(test){
	if(cs.debbug && typeof window.console != 'undefined'){
	window.console.log(test);
	}
};

cs.addCss = function(css){
	theCss = typeof css != 'undefined' ? css : cs.css;
	cs.$('head').append(
	cs.$('<style />').attr('type','text/css').text( theCss )
	);

};

cs.setImgPath = function(){
	if( cs.debbug === false ){
	cs.imgPath = '//d2yp9b3a29g3i2.cloudfront.net/' + cs.imgPath;
	cs.tplPath = '//d2yp9b3a29g3i2.cloudfront.net/ergotest/_tpl_/';
	} else {
	cs.imgPath = window.location.pathname + '//s3-eu-west-1.amazonaws.com/static.content-square.net/' + cs.imgPath;
	cs.tplPath = '//s3-eu-west-1.amazonaws.com/static.content-square.net/ergotest/_tpl_/';
	}
};

cs.setTplClass = function(argument){
	switch(argument){
		case "formulaire" :
			cs.Content = cs.$('#jca_27576_0_jca_27575_0_jca_27572_1_jca_27571_0_jca_27570_0_jca_27568_1').addClass('cscontent');
			cs.Aside = cs.$('#jca_27576_0_jca_27575_0_jca_27572_1_mbo_198_1').addClass('csaside');
		break;
		case "simulation" :
			cs.Content = cs.$('.row-item').addClass('cscontent');
			cs.Aside = cs.$('.wysiwyg').addClass('csaside');
		break;
	}
};



var createClassContent = cs.$('#jca_27576_0_jca_27575_0_jca_27572_1_jca_27571_0_jca_27570_0_jca_27568_1').addClass('cscontent');
var createClassAside = cs.$('#jca_27576_0_jca_27575_0_jca_27572_1_mbo_198_1').addClass('csaside');
var elem;
var row;

jQuery('#codePostal').parents('.col-xs-12')

/////////////////////////////////////////////// FORMULAIRE PROFIL ///////////////////////////////////////////////////////////////////////////////////
cs.formProfil = function(){
	https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/cschemin-der.png
	cs.css += '.chemin-etapes div.etape-der div{background:url("https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/CSetapes-last.png")}.chemin-etapes div.etape-der{background:url("https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/cschemin-der.png") no-repeat center 5px;}.chemin-etapes div[class^="etape-n"]{text-align:center;display: table-cell;background:url("https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/cschemin.png")repeat-x left 5px;}.chemin-etapes div[class^="etape-n"] div{background:url("https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/csetapes-n.png")}.chemin-etapes .etape-prem.act{background:url("https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/cschemin-prem.png")no-repeat center 5px;}.chemin-etapes .etape-prem.act div{background:url("https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/csetapes-first-act.png")}.csphoneToHide{display:none}.csadresseToHide{display:none}#adresse{border-radius:6px !important}#csChpsTel{margin:0px}.csTelBoot3 p{display:none}#csInput{height:40px;width:452px}.csDateDeNaissance{display:none}.cscoordonnes{clear:both}.labelBirthDay{margin:0 0 6px; color:#727272;font-size:1.6em}#confirmationEmail{display:none}section.csf-form .form-content>section .form-line.label-inside label{display:block !important}.cspicker{float:left;width:32.5%;padding-right:5px;height:36px;margin-bottom:12px;}.cstitreChamps{color:grey;font-weight:bold;}';
	cs.$('#sub-step1 > div > div:nth-child(2)').addClass('cscoordonnes'); //A changer
	cs.$('#dateDeNaissance').parents('.col-xs-12.col-sm-12.col-md-12').addClass('csDateDeNaissance');
	cs.$('.row').parents('.col-xs-12.col-sm-6.col-md-6').addClass('col-md-8 col-sm-8').removeClass('col-md-6 col-sm-6');
	jQuery('.include').prepend('<div class="form-line"><label class="consigne">Merci de remplir ces informations</label></div>')
	jQuery('.consigne').wrap('<div class="col-md-8 col-xs-8 col-sm-8"></div>');
};

cs.birthday = function (){
	var years;
	var months;
	var tabYear = [];
	var tabMonth = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	var tabMonthString = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];


	var daysInMonth = function (month,year) {
		return new Date(year, month, 0).getDate();
	};

	cs.$('.normalspace').append('<div class="csBirthDay"/>');
	cs.$('.csBirthDay').wrap('<div class="col-xs-12 col-sm-12 col-md-12" />');
	cs.$('.csBirthDay').before('<label for="Date de naissance" class="labelBirthDay">Date de naissance</label>')
	cs.$('.csBirthDay').append('<select  id="jour" class="picker cspicker"></select>');
	cs.$('.csBirthDay').append('<select  id="mois" class="picker cspicker"></select>');
	cs.$('.csBirthDay').append('<select  id="annee" class="picker cspicker"></select>');

	cs.$('#annee').append('<option value disabled selected = "selected" >Années </option>' );
	cs.$('#mois').append('<option value disabled selected = "selected" >Mois    </option>' );
	cs.$('#jour').append('<option value disabled selected = "selected" >Jour   </option>' );

	cs.$('#annee').wrap('<div class="picker cspicker"></div>');
	cs.$('#mois').wrap('<div class="picker cspicker"></div>');
	cs.$('#jour').wrap('<div class="picker cspicker"></div>');

	for(var i = 1930; i < 2017; i++){
		tabYear.push(i);
	}

	for(var i = 0; i<tabYear.length;i++){
		cs.$('#annee').append('<option value="'+ tabYear[i] +'">'+ tabYear[i] +'</option>' );
	};
		

	//Ajouts des options du Sélect "Mois"
	cs.$('#annee').on('change', function(){
		cs.$('#mois').find('option').remove().end();
		years = cs.$(this).val();
		for(var i = 0; i<tabMonth.length;i++){
			cs.$('#mois').append('<option value="'+ tabMonth[i] +'">'+ tabMonth[i] + ' : ' + tabMonthString[i] + '</option>' );
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
		cs.$('#editForm>section> div> #sub-step1> div> div>div>div>div.form-line.form-inline').addClass('success'); //A changer
	});	

};

cs.civilite = function(){
	cs.$('#civilite').parents('.col-xs-6').addClass('col-xs-7 col-sm-12 col-md-12');
	cs.$('#civilite').parents('.col-xs-6').removeClass('col-xs-6 col-sm-6 col-md-6');
};

cs.confirmMail = function(){
	cs.$('#validateLogin').click(function(){
		confirmMail = cs.$('input[name="email"]').val();
		cs.$('.toggle_email label').text('');
		cs.$('#confirmationEmail').attr("value", confirmMail);
	});
};

cs.detectFormat = function(str){
	cs.$('#telephonePortable').val('');
	cs.$('#telephone').val('');
	if( jQuery.validator.methods.telephoneFixeFormat(str) ){
		jQuery('#telephone').val(jQuery('#csInput').val())
		return cs.$('#telephone');
	} else if( jQuery.validator.methods.telephoneMobileFormat(str) ){
		jQuery('#telephonePortable').val(jQuery('#csInput').val())
		return cs.$('#telephonePortable');
	} else {
		return false;
	}
};

cs.detectError = function(){
	if(jQuery(csInput).val() == '' || jQuery(csInput).val().length > 10 ){
		elem = false;
	}
};

cs.telephonie = function(){

  	var csTelControl = cs.$('<div class="row csTelControl"/>').append('<div class="col-xs-12 col-sm-8 col-md-8 csTelBoot" />');
	var csInput = cs.$('<input />').attr({'type':'text','name':'csChpsTel','placeholder':'Ex : 0102030405','id':'csInput'}).addClass('picker').on('blur',function(){
		elem = cs.detectFormat( cs.$(this).val() );
		cs.detectError();
		if(!elem){
			cs.$('#telephoneCheck').parents('p').css('display',"block");
			cs.$('.csTelBoot2').addClass('error-field').removeClass('success');
			cs.$('.csTelBoot3 label').addClass('error-label');
			cs.$('#csInput').addClass('error-field')
		} else {
			cs.$('#telephoneCheck').parents('p').css('display','none');
			cs.$('.csTelBoot2').addClass('success').removeClass('error-field');
			cs.$('.csTelBoot3 label').removeClass('error-label');
		}
	});
	cs.$('.cscontent h2').text('COMPLÉTEZ VOTRE PROFIL').parents('.row');
	row = cs.$('#sub-step2 > .row:first-child').after(csTelControl).addClass('csTitreSub2');
	cs.$('.csTelBoot').append('<div class="form-line csTelBoot2"/>');
	cs.$('.csTelBoot2').append('<div class="input-append csTelBoot3"/>');
	cs.$('.csTelBoot3').append('<label for="Téléphone">Téléphone</label>');
	cs.$('.csTelBoot3').append(csInput);
	cs.$('.csTelBoot3').append('<p><label id="telephoneCheck" class="form-error error-label" for="telephoneCheck" style="display: inline-block;">Le champ Télephone n´est pas un numéro de téléphone portable valide.</label></p>');

};

cs.complementAdresse = function(){

	var adresseEnter = cs.$('<input />').attr({'type':'text','name':'adresseEnter','autocomplete':'on','aria-required':'true','placeholder':'Ex : 50 avenue Montaigne, 75008 paris','id':'adresse'}).addClass('picker has-help');
	var complement = cs.$('<input />').attr({'type':'text','name':'complement_adresse','placeholder':'Ex : Appartement, résidence, tour...','id':'csChpsAdresseEnter'}).addClass('picker');
	cs.$('.csTelControl + div').addClass('csAdressePays');
	// cs.$('.csAdressePays > .col-xs-12').addClass('col-md-8 col-sm-8').removeClass('col-md-12 col-xs-12');


	// cs.$('.csAdressePays').before('<div class="row csComplementAdresse"><div class="col-xs-12 col-md-8 col-sm-8"><div class="form-line"><div class="input-append csliving"><label for="Adresse">Adresse postal</label></div></div></div></div>');
	// cs.$('.csliving').append(adresseEnter);


	// cs.$('.csAdressePays + div').addClass('csAdressePostal');
	// cs.$('.csAdressePostal').insertAfter('.csTelControl');
	// cs.$('.csAdressePostal > .col-xs-12').addClass('col-md-8 col-sm-8').removeClass('col-md-12 col-xs-12');
	// cs.$('.add-on').remove();
	// cs.$('.csAdressePostal').after('<div class="row csComplementAdresse"><div class="col-xs-12 col-md-8 col-sm-8"><div class="form-line"><div class="input-append csliving"><label for="complementAdresse">Complément d\'adresse</label></div></div></div></div>');
	// cs.$('.csliving').append(complement);

	// cs.$('.csadresseBis').after('<div class="row csadresseBis2"/>');
	// cs.$('.csadresseBis > div').addClass('col-md-8 col-sm-8 csChampsAdresse').removeClass('col-md-12 col-sm-12');
	// cs.$('.csChampsAdresse > div.form-line').remove();
	// cs.$('.csadresseBis2 + div').addClass('csadresseOriginal');
	// var test = cs.$('.csadresseOriginal > .input-append');
	// cs.$('.csChampsAdresse').append(test);

	// // cs.$('.csChampsAdresse').append('<div class="form-line csChampsAdresse2"></div>');
	// // cs.$('.csChampsAdresse2').append('<label for="Adresse">Votre adresse</label>').append(adresseEnter);
	// // cs.$('.csadresseBis2').append('<div class="col-xs-12 col-md-8 col-sm-8 csadresseBis3"/>');

	// cs.$('.csadresseBis3').append('<div class="form-line "/>');
	// cs.$('.csadresseBis3 > .form-line').append('<div class="input-append "/>');
	// cs.$('.csadresseBis3 > .form-line > .input-append').append('<label for="Adressebis">Complément d\'adresse</label>');
	// cs.$('.csadresseBis3 > .form-line > .input-append').append(complement);
	// // cs.$('.csadresseBis2 + .row').addClass('csadresseToHide');
	// cs.$('.csadresseToHide + .row').addClass('csphoneToHide');

};
// cs.pays = function(){
// 	var champsAdresse = '<div class="col-xs-6 col-md-8 col-sm-8"><div class="form-line "><label for="pays">Pays ou DOM TOM</label><div class="field"><div class="picker "><select id="pays" name="pays" tabindex="8"><option value="AF">AFGHANISTAN</option><option value="ZA">AFRIQUE DU SUD</option><option value="AL">ALBANIE</option><option value="DZ">ALGERIE</option><option value="DE">ALLEMAGNE</option><option value="AD">ANDORRE</option><option value="AO">ANGOLA</option><option value="AI">ANGUILLA</option><option value="AQ">ANTARCTIQUE</option><option value="AG">ANTIGUA-ET-BARBUDA</option><option value="AN">ANTILLES NEERLANDAISES</option><option value="SA">ARABIE SAOUDITE</option><option value="AR">ARGENTINE</option><option value="AM">ARMENIE</option><option value="AW">ARUBA</option><option value="AU">AUSTRALIE</option><option value="AT">AUTRICHE</option><option value="AZ">AZERBAIDJAN</option><option value="BS">BAHAMAS</option><option value="BH">BAHREIN</option><option value="BD">BANGLADESH</option><option value="BB">BARBADE</option><option value="BY">BELARUS</option><option value="BE">BELGIQUE</option><option value="BZ">BELIZE</option><option value="BJ">BENIN</option><option value="BM">BERMUDES</option><option value="BT">BHOUTAN</option><option value="BO">BOLIVIE</option><option value="BA">BOSNIE-HERZEGOVINE</option><option value="BW">BOTSWANA</option><option value="BV">BOUVET, ILE</option><option value="BR">BRESIL</option><option value="BN">BRUNEI DARUSSALAM</option><option value="BG">BULGARIE</option><option value="BF">BURKINA FASO</option><option value="BI">BURUNDI</option><option value="KY">CAIMANES, ILES</option><option value="KH">CAMBODGE</option><option value="CM">CAMEROUN</option><option value="CA">CANADA</option><option value="CV">CAP-VERT</option><option value="CF">CENTRAFRICAINE, REPUBLIQUE</option><option value="CL">CHILI</option><option value="CN">CHINE</option><option value="CX">CHRISTMAS, ILE</option><option value="CY">CHYPRE</option><option value="CC">COCOS (KEELING), ILES</option><option value="CO">COLOMBIE</option><option value="KM">COMORES</option><option value="CG">CONGO</option><option value="CD">CONGO, LA REPUBLIQUE DEMOCRATIQUE DU</option><option value="CK">COOK, ILES</option><option value="KR">COREE, REPUBLIQUE DE</option><option value="KP">COREE, REPUBLIQUE POPULAIRE DEMOCRATIQUE DE</option><option value="CR">COSTA RICA</option><option value="CI">COTE D\'IVOIRE</option><option value="HR">CROATIE</option><option value="CU">CUBA</option><option value="DK">DANEMARK</option><option value="DJ">DJIBOUTI</option><option value="DO">DOMINICAINE, REPUBLIQUE</option><option value="DM">DOMINIQUE</option><option value="EG">EGYPTE</option><option value="SV">EL SALVADOR</option><option value="AE">EMIRATS ARABES UNIS</option><option value="EC">EQUATEUR</option><option value="ER">ERYTHREE</option><option value="ES">ESPAGNE</option><option value="EE">ESTONIE</option><option value="US">ETATS-UNIS</option><option value="ET">ETHIOPIE</option><option value="FK">FALKLAND, ILES (MALVINAS)</option><option value="FO">FEROE, ILES</option><option value="FJ">FIDJI</option><option value="FI">FINLANDE</option><option selected="selected" value="FR">FRANCE</option><option value="GA">GABON</option><option value="GM">GAMBIE</option><option value="GE">GEORGIE</option><option value="GS">GEORGIE DU SUD ET LES ILES SANDWICH DU SUD</option><option value="GH">GHANA</option><option value="GI">GIBRALTAR</option><option value="GR">GRECE</option><option value="GD">GRENADE</option><option value="GL">GROENLAND</option><option value="GP">GUADELOUPE</option><option value="GU">GUAM</option><option value="GT">GUATEMALA</option><option value="GN">GUINEE</option><option value="GQ">GUINEE EQUATORIALE</option><option value="GW">GUINEE-BISSAU</option><option value="GY">GUYANA</option><option value="GF">GUYANE FRANCAISE</option><option value="HT">HAITI</option><option value="HM">HEARD, ILE ET MCDONALD, ILES</option><option value="HN">HONDURAS</option><option value="HK">HONG-KONG</option><option value="HU">HONGRIE</option><option value="UM">ILES MINEURES ELOIGNEES DES ETATS-UNIS</option><option value="VG">ILES VIERGES BRITANNIQUES</option><option value="VI">ILES VIERGES DES ETATS-UNIS</option><option value="IN">INDE</option><option value="ID">INDONESIE</option><option value="IR">IRAN, REPUBLIQUE ISLAMIQUE D\'</option><option value="IQ">IRAQ</option><option value="IE">IRLANDE</option><option value="IS">ISLANDE</option><option value="IL">ISRAEL</option><option value="IT">ITALIE</option><option value="JM">JAMAIQUE</option><option value="JP">JAPON</option><option value="JO">JORDANIE</option><option value="KZ">KAZAKHSTAN</option><option value="KE">KENYA</option><option value="KG">KIRGHIZISTAN</option><option value="KI">KIRIBATI</option><option value="KW">KOWEIT</option><option value="AX">?LAND, ILES</option><option value="LA">LAO, REPUBLIQUE DEMOCRATIQUE POPULAIRE</option><option value="LS">LESOTHO</option><option value="LV">LETTONIE</option><option value="LB">LIBAN</option><option value="LR">LIBERIA</option><option value="LY">LIBYENNE, JAMAHIRIYA ARABE</option><option value="LI">LIECHTENSTEIN</option><option value="LT">LITUANIE</option><option value="LU">LUXEMBOURG</option><option value="MO">MACAO</option><option value="MK">MACEDOINE, L\'EX-REPUBLIQUE YOUGOSLAVE DE</option><option value="MG">MADAGASCAR</option><option value="MY">MALAISIE</option><option value="MW">MALAWI</option><option value="MV">MALDIVES</option><option value="ML">MALI</option><option value="MT">MALTE</option><option value="MP">MARIANNES DU NORD, ILES</option><option value="MA">MAROC</option><option value="MH">MARSHALL, ILES</option><option value="MQ">MARTINIQUE</option><option value="MU">MAURICE</option><option value="MR">MAURITANIE</option><option value="YT">MAYOTTE</option><option value="MX">MEXIQUE</option><option value="FM">MICRONESIE, ETATS FEDERES DE</option><option value="MD">MOLDOVA, REPUBLIQUE DE</option><option value="MC">MONACO</option><option value="MN">MONGOLIE</option><option value="MS">MONTSERRAT</option><option value="MZ">MOZAMBIQUE</option><option value="MM">MYANMAR</option><option value="NA">NAMIBIE</option><option value="NR">NAURU</option><option value="NP">NEPAL</option><option value="NI">NICARAGUA</option><option value="NE">NIGER</option><option value="NG">NIGERIA</option><option value="NU">NIUE</option><option value="NF">NORFOLK, ILE</option><option value="NO">NORVEGE</option><option value="NC">NOUVELLE-CALEDONIE</option><option value="NZ">NOUVELLE-ZELANDE</option><option value="IO">OCEAN INDIEN, TERRITOIRE BRITANNIQUE DE L\'</option><option value="OM">OMAN</option><option value="UG">OUGANDA</option><option value="UZ">OUZBEKISTAN</option><option value="PK">PAKISTAN</option><option value="PW">PALAOS</option><option value="PS">PALESTINIEN OCCUPE, TERRITOIRE</option><option value="PA">PANAMA</option><option value="PG">PAPOUASIE-NOUVELLE-GUINEE</option><option value="PY">PARAGUAY</option><option value="NL">PAYS-BAS</option><option value="PE">PEROU</option><option value="PH">PHILIPPINES</option><option value="PN">PITCAIRN</option><option value="PL">POLOGNE</option><option value="PF">POLYNESIE FRANCAISE</option><option value="PR">PORTO RICO</option><option value="PT">PORTUGAL</option><option value="QA">QATAR</option><option value="RE">REUNION</option><option value="RO">ROUMANIE</option><option value="GB">ROYAUME-UNI</option><option value="RU">RUSSIE, FEDERATION DE</option><option value="RW">RWANDA</option><option value="EH">SAHARA OCCIDENTAL</option><option value="SH">SAINTE-HELENE</option><option value="LC">SAINTE-LUCIE</option><option value="KN">SAINT-KITTS-ET-NEVIS</option><option value="SM">SAINT-MARIN</option><option value="PM">SAINT-PIERRE-ET-MIQUELON</option><option value="VA">SAINT-SIEGE (ETAT DE LA CITE DU VATICAN)</option><option value="VC">SAINT-VINCENT-ET-LES GRENADINES</option><option value="SB">SALOMON, ILES</option><option value="WS">SAMOA</option><option value="AS">SAMOA AMERICAINES</option><option value="ST">SAO TOME-ET-PRINCIPE</option><option value="SN">SENEGAL</option><option value="CS">SERBIE-ET-MONTENEGRO</option><option value="SC">SEYCHELLES</option><option value="SL">SIERRA LEONE</option><option value="SG">SINGAPOUR</option><option value="SK">SLOVAQUIE</option><option value="SI">SLOVENIE</option><option value="SO">SOMALIE</option><option value="SD">SOUDAN</option><option value="LK">SRI LANKA</option><option value="SE">SUEDE</option><option value="CH">SUISSE</option><option value="SR">SURINAME</option><option value="SJ">SVALBARD ET ILE JAN MAYEN</option><option value="SZ">SWAZILAND</option><option value="SY">SYRIENNE, REPUBLIQUE ARABE</option><option value="TJ">TADJIKISTAN</option><option value="TW">TAIWAN, PROVINCE DE CHINE</option><option value="TZ">TANZANIE, REPUBLIQUE-UNIE DE</option><option value="TD">TCHAD</option><option value="CZ">TCHEQUE, REPUBLIQUE</option><option value="TF">TERRES AUSTRALES FRANCAISES</option><option value="TH">THAILANDE</option><option value="TL">TIMOR-LESTE</option><option value="TG">TOGO</option><option value="TK">TOKELAU</option><option value="TO">TONGA</option><option value="TT">TRINITE-ET-TOBAGO</option><option value="TN">TUNISIE</option><option value="TM">TURKMENISTAN</option><option value="TC">TURKS ET CAIQUES, ILES</option><option value="TR">TURQUIE</option><option value="TV">TUVALU</option><option value="UA">UKRAINE</option><option value="UY">URUGUAY</option><option value="VU">VANUATU</option><option value="VE">VENEZUELA</option><option value="VN">VIET NAM</option><option value="WF">WALLIS ET FUTUNA</option><option value="YE">YEMEN</option><option value="ZM">ZAMBIE</option><option value="ZW">ZIMBABWE</option></select></div></div></div></div>';
// 	cs.$('.csadresseBis3').after(champsAdresse);
// };

/////////////////////////////////////////////// FORMULAIRE DEMANDE ///////////////////////////////////////////////////////////////////////////////////
cs.formDemande = function(){
	cs.css += '.span{display:none}header h1{text-align:left}.csclear{clear:both}';
	cs.$('#situationDeLogement').parents('.step1').addClass('cspart1');
	// cs.$('.step1:first-child').addClass('cspart1');
	cs.$('.cspart1 h2').text('VOTRE SIMULATION').addClass('line');
	cs.$('#situationDeLogement').parents('.form-line').removeClass('label-inside');
	cs.$('#situationDeLogement').parents('.col-xs-12').addClass('col-md-8 col-sm-8').removeClass('col-md-6 col-sm-6');
	cs.$('#situationMatrimoniale').parents('.form-line').removeClass('label-inside');
	cs.$('#situationMatrimoniale').parents('.col-xs-12').addClass('col-md-8 col-sm-8').removeClass('col-md-6 col-sm-6');
	cs.$('#nbDePersonnesAuFoyer').parents('.form-line').removeClass('label-inside');
	cs.$('#nbDePersonnesAuFoyer').parents('.col-xs-12').addClass('csclear');
	cs.$('#nbDePersonnesAuFoyer').parents('.col-xs-12').addClass('col-md-8 col-sm-8').removeClass('col-md-6 col-sm-6');

	cs.$('#montantDesRevenus').parents('.step1').addClass('cspart2');
	cs.$('.cspart2 h2').text('VOS REVENUS ET CHARGES').addClass('line');
	cs.$('#montantDesRevenus').parents('.col-xs-12').addClass('col-md-8 col-sm-8').removeClass('col-md-6 col-sm-6');
	cs.$('#montantDesCharges').parents('.col-xs-12').addClass('col-md-8 col-sm-8 csclear').removeClass('col-md-6 col-sm-6');

	cs.$('#montantPretsImmo').parents('.step1').addClass('cspart3');
	cs.$('.cspart3 h2').text('VOS PRÊTS IMMOBILIERS').addClass('line');
	cs.$('#montantPretsImmo').parents('.input-append ').children('.col-md-3').remove();
	cs.$('#montantPretsConso').parents('.input-append ').children('.col-md-3').remove();
	cs.$('#montantNouveauProjet').parents('.input-append ').children('.col-md-3').remove();
	cs.$('#montantPretsImmo').before('<label for="montantPretsImmo">Vos prêts immobiliers</label>');
	cs.$('#montantPretsConso').before('<label for="montantPretsConso">Vos prêts à la consommation</label>');
	cs.$('#montantNouveauProjet').before('<label for="montantNouveau Projet">Le montant de votre nouveau projet</label>');
	cs.$('#montantPretsImmo').parents('.col-sm-6').addClass('col-sm-8 col-md-8').removeClass('col-sm-6 col-md-6');
	cs.$('#montantPretsConso').parents('.col-sm-6').addClass('col-sm-8 col-md-8').removeClass('col-sm-6 col-md-6');
	cs.$('#montantNouveauProjet').parents('.col-sm-6').addClass('col-sm-8 col-md-8').removeClass('col-sm-6 col-md-6');

};

/////////////////////////////////////////////// FORMULAIRE RECAPITULATIF ///////////////////////////////////////////////////////////////////////////////////


cs.formRecapitulatif = function(){
	cs.css += '.cscontent > header > h1 {color:white}.cscontent > header::after{content:"";width:186px;height:44px;background:url("../plugins/FormManagerPlugin/img/header-triangle-blue-dark.png") no-repeat;top:159px;right:250px;position:absolute;margin-bottom:10px}.cscontent > header{padding:12px 15px;font-size:2em;text-align:center;border-top-left-radius:10px;border-top-right-radius:10px;background:#0d5ea8;background-color:#0d5ea8;color:white}.csRecap1{padding:15px;width:700px;margin:auto;color:black;background-color: #ebebeb;margin-top:60px;}.csRecap2{padding:15px;width:700px;margin:auto;color:black;border:1px solid grey}.form-content{background:rgb(251,251,251);background-color:white;color:black;padding:10px 0 10px;margin:0;border:1px solid #ebebeb}'
	cs.$('#jca_27576_0_jca_27575_0_jca_27572_1_jca_27571_0_jca_27570_0_jca_27568_1_lp_44958_0').addClass('form-content');
	cs.$('#divForms').wrap("<section class='container-fluid section '></section>");

	var start = 0;
	var end = jQuery('.cscontent .wysiwyg.csf').find('hr').first().index();
	jQuery('.cscontent .wysiwyg.csf p').slice(start,end).wrapAll('<div class="csRecap1" />');
	cs.$('.cscontent .wysiwyg.csf > p').wrapAll('<div class="csRecap2" />');

	cs.$('.wysiwyg p:nth-child(2) ').wrap('<span></span>') // A changer
	cs.$('.chemin-etapes').after('<header><h1>Votre récapitulatif</h1></header>');
};
	

/////////////////////////////////////////////// TEMPLATE FORMULAIRE GLOBAL ///////////////////////////////////////////////////////////////////////////////////
cs.templateForm = function(){
	 cs.css += '.secure{margin-bottom:15px}#validateLogin{background-color:grey;color:white}.cscontent > header > h1{text-align:center;}.cscadenas{margin-top:45px}section.csf-form.form-credit > header{background-color:#0d5ea8;text-align:center}section.csf-form.form-credit > header:after{background:url("../plugins/FormManagerPlugin/img/header-triangle-blue-dark.png") no-repeat}#greyWrap{background-color:#ebebeb;border-radius:5px;padding:5px;margin: 30px 0;height:170px;width:380px;}.recapitulatif{height:170px;width:380px;border:2px solid #0d5ea8}.titre{line-height:30px;border:3px solid #0d5ea8;color:white;text-align:center;background-color:#0d5ea8}.titreContent{padding:10px}.eKomiPortlet{padding-top:0px}.CTA_TLV{margin:15px 0;height:auto;width:380px}#jca_27576_0_jca_27575_0_jca_27572_1_mbo_198_1_lead_11809_0{display:none}#jca_27576_0_jca_27575_0_jca_27572_1_mbo_198_1_pro1_49597_1{background:none}.col-md-12{padding-left:0px}'
	 cs.$('#jca_27576_0_jca_27575_0_jca_27572_1_mbo_198_1_pro1_49597_1').remove();

	 'https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/csetapes-first-act.png'
	 

	cs.cadenas = function(){
		cs.$('.csaside').prepend('<img src="https://s3-eu-west-1.amazonaws.com/static.content-square.net/uxt/csf/cadenas.jpg" alt="cadenas" title="Sécurisation des données" class="secure"/>');
	};
	cs.contactMoi = function(){
		var html =  '<div class="CTA_TLV hidden-xs col-xs-12"> <h3>Vous préférez contacter un conseiller ? <span>“Je suis à votre écoute”</span></h3> <pclass="numTel">01 53 34 44 17 <span>Prix d’un appel local</span></p><p class="horaires">Du lundi au vendredi - de 8h30 à 19h<br>Le samedi de 9h à13h</p></div>'
		cs.$('.csaside').append(html);
	};
	
	cs.recapitulatif = function(){
		cs.$('.CTA_TLV').before('<div class="recapitulatif"><div class="titre">Récapitulatif de votre simulation</div></div>');
		cs.$('.titre').after('<div class="titreContent"><p><b>MENSUALITÉS</></p>' + '<p class="csmensualite">218,42 €/mois/TAEG fixe 7%</p>' + '<p><b>DURÉE DU PRÊT</b></p>' + '<p class="csDureePret"> 55 mois</p></div>');
	};

	cs.labelQualite = function(){
		cs.$('.CTA_TLV').after('<div id="jca_27576_0_jca_27575_0_jca_27572_1_mbo_198_1_pro1_49597_1" class="Outter PortletImage ID_pro1_49597 box-responsive ajax-refresh-div Portlet PortletSkinable col-md-12 Inner eKomiPortlet" style="vertical-align: middle; text-align: left;"><script></script><style data-elementquery-processed="">#ekomi{width: 280px;}#ekomi img{margin : auto; padding: 0; text-align: center;}</style> <div id="eKomiWidget_default"><a id="eKomiWidget_05F41BCC88AC70F_eKomiWidget_default" href="https://www.ekomi.fr/avis-clients-csf.html" title="Avis consommateur: *** a traité mon dossier de projet de construction avec professionnalisme et rapidité. Je le remercie pour son efficacité."><img border="0" src="https://connect.ekomi.de/widget/05F41BCC88AC70F-5.gif" alt="Avis consommateur: *** a traité mon dossier de projet de construction avec professionnalisme et rapidité. Je le remercie pour son efficacité."></a></div></div>');
		cs.$('#eKomiWidget_default').wrap('<div id="greyWrap"></div>');
	};


	cs.cadenas();
	cs.contactMoi();
	cs.recapitulatif();
	cs.labelQualite();
	
};

/* variation */
cs.$(document).ready(function(){
	
	//simu
	// cs.setTplClass('simulation');

	//fonctions gobal formulaire
	cs.setTplClass('formulaire');
	cs.templateForm();
	
	//fonctions profil
	if(/votre-identite/.test(cs.pathName)){
		
		cs.formProfil();
		cs.birthday();
		cs.civilite();
		cs.confirmMail();
		cs.telephonie();
		cs.complementAdresse();
		// cs.pays();
	}
	//fonction demandes
	if(/votre-demande/.test(cs.pathName)){
		cs.formDemande();
	}

	//fonction recapitulatif
	if(/recapitulatif/.test(cs.pathName)){
		cs.formRecapitulatif();
	}
	cs.addCss();
});