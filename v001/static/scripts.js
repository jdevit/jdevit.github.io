


// Functions to call when page loads
document.addEventListener('DOMContentLoaded', function(){
	
	var navbar = document.getElementById('the-navbar');
	var sections = document.querySelectorAll('section.is-fullheight-with-navbar');

	for (let i=0; i < sections.length; i++){
		
		// Set colours of page section background
		if (i & 1){ 	// Odd
			sections[i].classList.add('is-dark');
		}
		else{ 			// Even
			sections[i].classList.add('is-light');
		}

		// Add link of section to navbar
		var node = document.createElement('a');
		var name = sections[i].getAttribute('name');
		var textNode = document.createTextNode(name.charAt(0).toUpperCase() + name.slice(1));
		node.appendChild(textNode);	// Add text
		node.classList.add('navbar-item','level-item');	// Add classes
		node.setAttribute('onclick', 'scrollToAnchor(\"'+name+'\")');
		navbar.appendChild(node);

	}
	
}, false);





function test(){
	alert("Test alert.")
}


// // Project section

function updateControlActive(project){
	var allControlDots = document.getElementsByClassName('dot');
	
	for (let i=0; i < allControlDots.length; i++){
		let done = 0;
			// Make current dot inactive
		if (allControlDots[i].classList.contains('active')){
			allControlDots[i].classList.remove('active');
			done++;
		}
			// Make new dot active
		if (i.toString() == project.replace('project','')){
			allControlDots[i].classList.add('active');
			done++;
		}
		if (done > 1) { // Quick break;
			break;
		}
	}

}


// Contact form - if submitting empty field
function updateContactFormHighlights() {
	for (let i=0; i<document.getElementsByName('contact_form').length; i++) {
		var input_field = document.getElementsByName('contact_form')[i];
		if ( input_field.value == "") {
			if (!input_field.classList.contains('is-danger')) {
				input_field.classList.add('is-danger');
			}
			if (input_field.classList.contains('is-success')) {
				input_field.classList.remove('is-success');
			}
		}
		else {
			if (input_field.classList.contains('is-danger')) {
				input_field.classList.remove('is-danger');
			}
			if (!input_field.classList.contains('is-success')) {
				input_field.classList.add('is-success');
			}
		}
	}
}

function sendMail() {	
	updateContactFormHighlights();

	if (!document.getElementById('contact_name_input').value == "" && !document.getElementById('contact_message_input').value == "") {
		// Send email
		var link = 'mailto:jeeecontact@gmail.com' 
		+ '&subject='+encodeURIComponent(document.getElementById('contact_name_input').value + " sent you a message on your website")
		+ '&body=' +encodeURIComponent(document.getElementById('contact_message_input').value);

		window.location.href = link;
	}

}


function scrollToAnchor(anchor){
	document.getElementById(anchor).scrollIntoView({behavior: 'smooth'});
}

function scrollToAnchorHorizontal(anchor){
	document.getElementById(anchor).scrollIntoView({behavior: 'smooth', block:"nearest"});
}


function scroll_Next(x){
	var allDots = document.getElementsByClassName('dot');
	var id = 0;

	for (let i = 0; i < allDots.length; i++){
		if (allDots[i].classList.contains('active')){
			if (i+x < 0){
				id = allDots.length-1;
			}
			else if (i+x == allDots.length){
				id = 0;
			}
			else {
				id = i + x;
			}
			break;
		}
	}
	var project = 'project'+id;
	scrollToAnchorHorizontal(project);
}

function scroll_Right(){
	var container = document.getElementById('project-container');
	container.scrollLeft += 500;
}

function scroll_Left(){
	var container = document.getElementById('project-container');
	container.scrollLeft -= 500;
}