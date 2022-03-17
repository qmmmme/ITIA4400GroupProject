$(document).ready( function (){

	$("#searchbtn").click( function(e){
		//prevent reloading the Web page
		e.preventDefault();

		let queryString = $("#searchquery").val();
		let url = "https://api.thenewsapi.com/v1/news/top?api_token=4RKR8wJk5ifkY3DboIh9YjGha8jesJ2RmMcHR34n&search="+queryString+"";

		if(queryString !== "") {
			console.log(url);
			$.ajax({
				url: url,
				method: "GET",
				dataType: "json",
				//show the loader indicator when waiting
				beforeSend: function() {
					//console.log("wait");
					$("#loader").show(); 
				},
				// hide the loader indicator
				complete: function () {
					//console.log("complete");
					$("#loader").hide();
				},
				// when the response is fully received
				success: function(info) {
					//console.log(info);
					let output = "";
					let latestNews = info.data;

					for(var i in  latestNews) {
						output += `
							<div class="output">
							<h4>${latestNews[i].title}</h4>
							<img src="${latestNews[i].image_url}"></img>
							<p>Language: ${latestNews[i].language}</p>
							<p>${latestNews[i].description}</p>
							<p>Published on: ${latestNews[i].published_at}<br>
							<p>Source: ${latestNews[i].source}</p>
							<a href="${latestNews[i].url}">Read more</a></p>
							
							</div>
						`;
					}
					if(output !== "") {
						//console.log("here");
						$("#news").html(output);

					}
					else {
						//console.log("not found");
						let newsNotFound = "This  news isn't available. Sorry for that";
						$("#news").html(newsNotFound);
					}
				},
				error: function() {
					console.log("error");
				}
			});
		}
		else {

		};
	});

});