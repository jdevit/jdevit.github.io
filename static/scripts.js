

$(document).ready(function() {
	alert("Hi")
	$('#project-container').scroll(function() {
		alert("Hi");
		
		// var currentX = document.getElementById('project-container').scrollLeft - document.getElementById('project1').scrollLeft;
		
		// var style = document.getElementById('project1').currentStyle || window.getComputedStyle(document.getElementById('project1'));
		// var cItemMarginR = parseFloat(style.marginRight);
		// var cItemWidth = document.getElementById('project1').offsetWidth + cItemMarginR*2;

		// updateControlActive(currentX, cItemWidth);

	} );
} );




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

	// // Make carousel arrows hidden on either end
	// if (id == 0){
	// 	document.getElementsByClassName('c-a-left')[0].style.visibility = "hidden";
	// }
	// else if (id == allDots.length-1){
	// 	document.getElementsByClassName('c-a-right')[0].style.visibility = "hidden";
	// }
	// else if (id != 0 || id != allDots.length-1){
	// 	document.getElementsByClassName('carousel-arrows')[0].style.visibility = "visible";
	// 	document.getElementsByClassName('carousel-arrows')[1].style.visibility = "visible";
	// }

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