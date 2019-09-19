(function(){
	fetch_data("videosdemos", load_people);

	function load_people(data){
		var target = "videosdemos",
			html = document.getElementById('videosdemos-html').innerHTML,
			replaced_html,
			authors;

	    for(var i = 0; i < data.length; i++){
			replaced_html = html.replace("${title}", data[i].title)
	    						.replace("${text}", data[i].text)
	    						.replace("${videoURL}", data[i].videoURL)
	    						.replace("${demoURL}", data[i].demoURL);
	    	$("#"+target).append(replaced_html);
	    }
	}

	function fetch_data(type, callback) {
		$.ajax({
			method: 'POST',
			url: document.location.origin+'/data', 
			headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'text/plain'
		    },
			data: JSON.stringify({"type": type}),
			success: function(result){
				callback(JSON.parse(result));
			},
			error: function(result){
				alert("Error! Could not fetch data.");
			}, 
			fail: function(result){
				alert("Error! Could not fetch data.");
			}
		});
	}
})();
