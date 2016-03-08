window.onload = function(){
	$('.right').append("<select id='formSelect'></select>");
	$('.left p').each(function(){
		$('#formSelect').append( '<option value="'+ $(this).find('input[name=csRadio]').val() +'">'+ $(this).text() +'</option>' )
	});
	$('#formSelect').on('change', function(){
		$('.left p').find('input[value='+ $(this).val() +']').prop('checked',true);
	});
	/*
	var maSelection = document.getElementById('formSelect')
	var monTableau = [];
	var allRadio = monTableau.push($('.left p'));
	for(var i = 1; i < monTableau.length; i++) {
	    var option = document.createElement("option");
	    option.value = i ;
	    option.text = "Radio" + i;
	    maSelection.appendChild(option);
	}
	*/
};