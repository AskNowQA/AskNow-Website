(function(){
	fetch_data("publications", load_people);

	function load_people(data){
		var target = "publications",
			html = document.getElementById('publications-html').innerHTML,
			replaced_html,
			authors;

	    for(var i = 0; i < data.length; i++){
			replaced_html = html.replace("${publication}", data[i].publication)
	    						.replace("${year}", "("+data[i].year+")")
	    						.replace("${venue}", data[i].venue);
	    	if(data[i].link && data[i].link.url != ""){
	    		replaced_html = replaced_html.replace("${url}", data[i].link.url)
	    							.replace("${label}", " ["+data[i].link.label+"]");
	    	} else {
	    		replaced_html = replaced_html.replace("${url}", "")
	    							.replace("${label}", "");
	    	}

	    	authors = "";
	    	for(var j = 0; j < data[i].authors.length; j++){
          		authors += data[i].authors[j] + ", ";
	    	}
	    	replaced_html = replaced_html.replace("${authors}", authors);

	    	if(i%2 == 1){
	    		replaced_html = replaced_html.replace("${even}", "list-group-item-info");
			}
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
