(function(){
	fetch_data("projects", load_people);

	function load_people(data){
		var target = "projects",
			html = document.getElementById('projects-html').innerHTML,
			replaced_html,
			links = "links-",
			link,
			icons = { "github": "fa-github", "website": "fa-globe", "twitter": "fa-twitter"};

	    for(var i = 0; i < data.length; i++){
	    	replaced_html = html.replace("${name}", data[i].name)
	    						.replace("${text}", data[i].text)
	    						.replace("${img}", data[i].img)
	    						.replace("${i}", i);
	    	$("#"+target).append(replaced_html);

	    	for(var j = 0; j < data[i].links.length; j++){
          		link = '<a href="'+ data[i].links[j].url+'" target="_blank" class="margin-right-7">'
          				+'<i class="fa '+ icons[data[i].links[j].type] +' margin-icon" aria-hidden="true"> '
          				+  data[i].links[j].label
          				+'</i>'
          				+'</a>';
          		$("#" + links + i).append(link);
	    	}
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
