var winH,
	winW,
	uA = navigator.userAgent.toLowerCase(),
	doc = document.documentElement;

// Setting os specific attribute to html
doc.setAttribute('data-useragent', uA);

$(window).on({
	load: function(){
		initOnLoad();
	},
	resize: function(){
		initOnResize();
	}
});

$(document).on({
	ready: function(){
		initOnReady();
	}
})

function initOnLoad() {
	// onLoad interactions

}

function initOnReady() {
	// onReady interactions
	
	getWindowDimensions();
	centerPlaceholder();
	
}

function initOnResize() {
	// onResize interactions
	getWindowDimensions();
	centerPlaceholder();
	
}

function getWindowDimensions(){
	
	winW = $(window).width();
	winH = $(window).height();
	
}

// Custom functions

function centerPlaceholder() {
	
	var ph = $("#placeholder"),
		phH = ph.height(),
		mT = (winH/4)-(phH/2);
		
	ph.css({ marginTop: mT+"px" });
	
}