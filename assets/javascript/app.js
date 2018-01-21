$(document).ready(function() {
	var unanswered = 5;
	var correct = 0;
	var incorrect = 0;
	var count = 20;
	$(".timer:first").text(count);


		$(".btn-success").click( function(){
		var count = 20;
		var counter = setInterval(timer, 1000); 

		function timer(){
		  count = count - 1;
		  $(".timer:first").text(count);

		  if (count === 0){
		  	clearInterval(counter);
		  	$("#questions").hide("slow");
		  	$("#correct").html("Correct: " + correct);
			$("#incorrect").html("Incorrect: " + incorrect);
			$("#unanswered").html("Unanswered: " + unanswered);
		  	return;
		  }
		 }
		});

		//q1
		$("#q1-true").on("click", function(){
			incorrect++;
			unanswered--;
			$("#q1-true").attr("disabled", true);
			$("#q1-false").attr("disabled", true);


		})

		$("#q1-false").on("click", function(){
			correct++
			unanswered--;
			$("#q1-false").attr("disabled", true);
			$("#q1-true").attr("disabled", true);

		})

		//q2
		$("#q2-true").on("click", function(){
			incorrect++;
			unanswered--;
			$("#q2-true").attr("disabled", true);
			$("#q2-false").attr("disabled", true);
		})

		$("#q2-false").on("click", function(){
			correct++
			unanswered--;
			$("#q2-false").attr("disabled", true);
			$("#q2-true").attr("disabled", true);
		})

		//q3
		$("#q3-true").on("click", function(){
			correct++;
			unanswered--;
			$("#q3-true").attr("disabled", true);
			$("#q3-false").attr("disabled", true);
		})

		$("#q3-false").on("click", function(){
			incorrect++;
			unanswered--;
			$("#q3-false").attr("disabled", true);
			$("#q3-true").attr("disabled", true);
		})	
		//q4	
		$("#q4-true").on("click", function(){
			correct++;
			unanswered--;
			$("#q4-true").attr("disabled", true);
			$("#q4-false").attr("disabled", true);
		})

		$("#q4-false").on("click", function(){
			incorrect++
			unanswered--;
			$("#q4-false").attr("disabled", true);
			$("#q4-true").attr("disabled", true);
		})
		//q5
		$("#q5-true").on("click", function(){
			correct++;
			unanswered--;
			$("#q5-true").attr("disabled", true);
			$("#q5-false").attr("disabled", true);
		})

		$("#q5-false").on("click", function(){
			incorrect++
			unanswered--;
			$("#q5-false").attr("disabled", true);
			$("#q5-true").attr("disabled", true);

		})



});










