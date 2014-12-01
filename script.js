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
				output += 		 "<h1 class='count'>" + data[i].count +"</h1>";
				output += 		"<h3>" + data[i].countTxt + "</h3>";
				output += 		"<p>"+ data[i].participantsTxt +"</p>";
				output += 		"<h2 class='count'>"+ data[i].participantCount +"</h2>";
				output += 	"</div>";
				output += 	"</div>";
				output += "</section>";
			}

			$(".content")
				.hide()
				.html(output)
				.fadeIn(300);
			$(".content:contains('mins')").html(function(_, html){
				return html.replace(/(mins)/g, '<span>mins</span>');
			});				
			$(".content:contains('min')").html(function(_, html){
				return html.replace(/(min)/g, '<span>min</span>');
			});
			$('.count').each(function () {
			  var $this = $(this);
			  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
			    duration: 500,
			    easing: 'swing',
			    step: function () {
			      $this.text(Math.ceil(this.Counter));
			    }
			  });
			});		

		});
	});

});

