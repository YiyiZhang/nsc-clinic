 $(function() {

	var $slide = $('.slide'),
		$tray = $('#tray'),
		slideWidth = $('.slide').width(),
		slideCount = $('.slide').size();
		pos = 0;

	//set width of the tray to match the width of all the sides
	$tray.width(slideWidth * slideCount);

	//next and previous event listeners

	//next
	$('#next').click(function(event){
		event.preventDefault();//prevents default browser behavior
		if (pos < slideCount-1) {
			pos += 1; //same as pos=pos+1 or pos++
			} else {
			pos = 0;
		}
		var pushAmount = pos * slideWidth; //amount we want to push it is the number of position times the width of the slide
		$tray.animate({'right':pushAmount},400);//animate selects two elements
	});

	//previous
	$('#prev').click(function(event){
		event.preventDefault();//prevents default browser behavior
		if (pos > 0) {
		pos -= 1; //same as pos=pos+1 or pos++
		} else {
		pos = slideCount-1;
		}
		var pushAmount = pos * slideWidth; //amount we want to push it is the number of position times the width of the slide
		$tray.animate({'right':pushAmount},400);//animate selects two elements, 400 is 400 milliseconds
	});

});