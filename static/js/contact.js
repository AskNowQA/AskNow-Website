(function(){
	fetch_data("contact", load_people);

	function load_people(data){
		var target = "contact",
			contact_html = document.getElementById('contact-html').innerHTML,
			people_html = document.getElementById('people-html').innerHTML,
			replaced_html,
			addresses,
			people = "people";

		replaced_html = contact_html.replace("${institute}", data.institute)
    								.replace("${url}", data.url);

    	addresses = "";
    	for(var i = 0; i < data.address.length; i++){
      		addresses += "- " + data.address[i] + "<br/>";
    	}
    	replaced_html = replaced_html.replace("${addresses}", addresses)

    	$("#"+target).append(replaced_html);

	    for(var i = 0; i < data.people.length; i++){
      		replaced_html = people_html.replace("${name}", data.people[i].name)
      									.replace("${role}", data.people[i].role)
      									.replace("${email}", data.people[i].email)
      									.replace("${phone}", data.people[i].phone)
      									.replace("${img}", data.people[i].img)

    		$("#"+people).append(replaced_html);
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
