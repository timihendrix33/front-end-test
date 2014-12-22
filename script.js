$(document).ready(function(){
	$("nav").on("click", "li", function() {
		$("nav li").removeClass("active");
		$(this).addClass("active");
		var dataRel = $(this).attr('data-rel');
		if (dataRel == 0) {
			$('body').removeClass("member").addClass("summary");
		} else {
			$('body').removeClass("summary").addClass("member");
		}
		$.getJSON('stats.json', function(json){
			var data = json[dataRel],
				dataLength = data.length;
			var	output = "";
			for (i = 0; i < data.length; i++) {
				output += "<section>";
				output += 	"<div class='wrap'>";
				output += 	"<div class='icon-wrap'>";
				output += 		"<div class='icon'></div>";
				output += 	"</div>";
				output += 	"<div class='data'>";
				if(data[i].count.indexOf("min") == -1) {
				output += 		 "<h1 class='count'>" + data[i].count +"</h1>";
				} else {
				output += 		 "<h1 class='count'>" + data[i].count +"</h1><span>min</span>";
				}	
				output += 		"<h3>" + data[i].countTxt + "</h3>";
				output += 		"<p>"+ data[i].participantsTxt +"</p>";
				output += 		"<h2 class='count'>"+ data[i].participantCount +"</h2>";
				output += 	"</div>";
				output += 	"</div>";
				output += "</section>";

				var dataCount = data[i].count;
				console.log(dataCount);
				var removeMin = function(datacount) {
					newDataCount = datacount.replace(/(min)/g, 'anything');
					
					// console.log(datacount);					
				}
				removeMin(dataCount);
	
			}
			$(".content section").hide();
			$(".content")
				.html(output)
				.fadeIn(1000);
			// $(".content:contains('mins')").html(function(_, html){
			// 	return html.replace(/(mins)/g, '<span>mins</span>');
			// });				
			// $(".content:contains('min')").html(function(_, html){
			// 	return html.replace(/(min)/g, '<span>min</span>');
			// });
			// if(".count")
			// $(".count").counterUp();




			// $('.count').each(function () {
			//   var $this = $(this);
			//   jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
			//     duration: 500,
			//     easing: 'swing',
			//     step: function () {
			//       $this.text(Math.ceil(this.Counter));
			//     }
			//   });
			// });		

		});
	});

});

