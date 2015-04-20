$(document).ready(function() {
	new app.HomeView({
		model: new app.Home()
	}); 

	// to allow the header to remain at the top of the viewport
	setVerticalLayout(); 
});

function setVerticalLayout() {
	// var windowHeight = $(window).height();  
	var headerHeight = 
		parseFloat($('header').height()) + 
		parseFloat($('header').css('paddingTop')) + 
		parseFloat($('header').css('paddingBottom'));  
	/* var footerHeight = 
		parseFloat($('footer').height()) +   
		parseFloat($('footer').css('paddingTop')) + 
		parseFloat($('footer').css('paddingBottom'));  */
	var articlePaddingTop = 
		parseFloat($('article').css('paddingTop')); /* + 
		parseFloat($('article').css('paddingBottom')); */

	// console.log('windowHeight: ', windowHeight); 
	// console.log('headerHeight: ', headerHeight); 
	// console.log('footerHeight: ', footerHeight); 
	// console.log('articlePadding: ', articlePadding); 

	$('article').css('paddingTop', headerHeight + articlePaddingTop); 
}