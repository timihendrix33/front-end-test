$(document).ready(function(){
	$("nav").on("click", "li", function() {
		var dataRel = $(this).attr('data-rel');
		console.log(dataRel);
		$.getJSON('stats.json', function(json){
			var data = json[0];
			$('.container #visits .data').html('<h1>' + data[0].count + '</h1>');
			$('.container #visits .data').append('<h3>'+ data[0].countTxt +'</h3>');
			$('.container #visits .data').append('<p>'+ data[0].participantsTxt +'</p>');
			$('.container #visits .data').append('<h2>'+ data[0].participantCount +'</h2>');
		});
	});

});

