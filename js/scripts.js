$(document).ready(function(){
//Click form submit
	$('#trackForm').submit(function(event){
		//assign survey answers to variable names
	    var frontOrBack = $("#fEvBE").val();
	    var compSize = $("#size").val();
	    var droid =$("#android").val();
	    var wind = $("#windows").val();
	    var des =$("#design").val();
	    event.preventDefault();
	   	if(frontOrBack === "Front End"){
	   		if (des === "Yes") {
	   			$(".css").show();
	   		}else{
	   			$(".js").show();
	   		}
	 	}else if(size === "Small Companies and Start-ups"){
	 		$(".ruby").show();
	   	}else if(droid === "Yes"){
	   		$(".java").show();
	   	}else if(wind === "Yes"){
	   		$(".c").show();
	   	}else{
	   		$(".ruby").show();
	   	}
	   	$('.reset').show();
	   	$("#trackForm").hide();
	});
	$('.reset').click(function(){
		$('.reset').hide();
	   	$("#trackForm").show();
	   	$(".choices > div").hide();
	})

});