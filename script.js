$(document).ready(function(){
	$("nav").on("click", "li", function() {
		var dataRel = $(this).attr('data-rel');
		console.log(dataRel);
		$.getJSON('stats.json', function(json){
			var data = json[dataRel];
			$('.container #visits .data').html('<h1>' + data[0].count + '</h1>');
			$('.container #visits .data').append('<h3>'+ data[0].countTxt +'</h3>');
			$('.container #visits .data').append('<p>'+ data[0].participantsTxt +'</p>');
			$('.container #visits .data').append('<h2>'+ data[0].participantCount +'</h2>');
			$('.container #uniques .data').html('<h1>' + data[1].count + '</h1>');
			$('.container #uniques .data').append('<h3>'+ data[1].countTxt +'</h3>');
			$('.container #uniques .data').append('<p>'+ data[1].participantsTxt +'</p>');
			$('.container #uniques .data').append('<h2>'+ data[1].participantCount +'</h2>');
			$('.container #time .data').html('<h1>' + data[2].count + '</h1>');
			$('.container #time .data').append('<h3>'+ data[2].countTxt +'</h3>');
			$('.container #time .data').append('<p>'+ data[2].participantsTxt +'</p>');
			$('.container #time .data').append('<h2>'+ data[2].participantCount +'</h2>');						
		});
	});

});

