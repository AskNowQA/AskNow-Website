(function(){
	fetch_data("people", load_people);

	function load_people(data){
		var target = "people",
			html = document.getElementById('people-html').innerHTML,
			replaced_html;

	    for(var i = 0; i < data.length; i++){
	    	replaced_html = html.replace("${name}", data[i].name)
	    						.replace("${role}", data[i].role)
	    						.replace("${img}", data[i].img)
	    						.replace("${email}", data[i].email);
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
