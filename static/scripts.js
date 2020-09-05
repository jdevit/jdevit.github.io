

$('#project-container').scroll(function(e) {
	alert("Hi");
	var currentX = document.getElementById('project-container').scrollLeft - document.getElementById('project1').scrollLeft;
	var cItemMarginR = parseFloat(style.marginRight);
	var cItemWidth = document.getElementById('project1').offsetWidth + cItemMarginR*2;

	updateControlActive(currentX, cItemWidth);

} );


function test(){
	alert("Test alert.")
}



function updateControlActive(currentX, itemWidth){
	alert("currentX"+currentX+" low:"+itemWidth-(itemWidth/10) + " high:"+itemWidth+(itemWidth/10));
	if (currentX > itemWidth-(itemWidth/10) && currentX < itemWidth+(itemWidth/10)) {
		document.getElementById('project2').add("active");
	}

}
function show_x(){
	var style = document.getElementById('project1').currentStyle || window.getComputedStyle(document.getElementById('project1'));

	var containerWidth = document.getElementById('project-container').scrollWidth;



	var numCarouselItems = $('.carousel-item').length;
	var x = parseInt(document.getElementById('project-container').scrollLeft - document.getElementById('project1').scrollLeft);
	alert("Container-width:"+containerWidth +"scrollLeft-position:"+x + "num-items:"+numCarouselItems + " item-width:" + cItemWidth);



}



function scrollToAnchor(anchor){
	document.getElementById(anchor).scrollIntoView({behavior: 'smooth'});
}

function scrollToAnchorHorizontal(anchor){
	document.getElementById(anchor).scrollIntoView({behavior: 'smooth', block:"nearest"});
}





function scroll_Right(){
	alert("Right");
	var container = document.getElementById('#project-container');
	container.scrollLeft += 500;
	alert("Right finished");
}

function scroll_Left(){
	alert("Left");
	var container = document.getElementById('#project-container');
	container.scrollLeft -= 500;
	alert("Left finished");
}