$(document).ready(function() {

	var count = 30;
	$(".timer:first").text(count);


		$(".btn-success").click( function(){
		var count = 3;
		var counter = setInterval(timer, 1000); 

		function timer(){
		  count = count - 1;
		  $(".timer:first").text(count);

		  if (count === 0){
		  	clearInterval(counter);
		  	$("#questions").hide("slow");
		  	return;
		  }
		 }
		});

	var right = 0;
	var wrong = 0;
	var unanswered = 0;

	









	});










