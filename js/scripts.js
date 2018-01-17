$(document).ready(function(){

	$('#trackForm').submit(function(event){
	    var frontOrBack = $("#fEvBE").val();
	    var compSize = $("#size").val();
	    var droid =$("#android").val();
	    var wind = $("#windows").val();
	    var des =$("#design").val();
	    alert(frontOrBack);
	    event.preventDefault();
	});

});