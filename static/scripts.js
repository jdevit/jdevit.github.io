





function test(){
	alert("Test alert.")
}

function isScrolled(){
		var currentX = document.getElementById('project-container').scrollLeft - document.getElementById('project1').scrollLeft;
		
		var style = document.getElementById('project1').currentStyle || window.getComputedStyle(document.getElementById('project1'));
		var cItemMarginR = parseFloat(style.marginRight);
		var cItemWidth = document.getElementById('project1').offsetWidth + cItemMarginR*2;

		updateControlActive(currentX, cItemWidth);
}


function updateControlActive(currentX, itemWidth){
	// Function to get index of item that was scrolled to
	function getProjIndex(currentX, itemWidth, allDots){
		for (let i=0; i<allDots.length; i++){
			if (currentX == 0) {
				return i;
			}
			if ( currentX > (i*itemWidth)-(itemWidth/10) && currentX < (i*itemWidth)+(itemWidth/10) ){
				return i;
			}
		}
	}

	var allDots = document.getElementsByClassName('dot');
	
	// Make old dot inactive
	for (let i = 0; i < allDots.length; i++){
		if (allDots[i].classList.contains('active')){
			allDots[i].classList.remove('active');
			break;
		}
	}

	// Make dot active
	var id = getProjIndex(currentX, itemWidth, allDots);
	allDots[id].classList.add('active');

}

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