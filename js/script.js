
// popup to show eggs item

$('#add-eggs').click(
	function(){
$('#add-eggs-popup').css("display", "block");
})

// popup to show works item

$('#add-olivesworks').click(
	function(){
$('#add-works-popup').css("display", "block");
})

//close popup 

$('.close-add-menu').click(
	function(){
		$('.add-item-popup').css("opacity", "0");
		// pop up display none after fade out
		setTimeout(hide_after_fadeout, 100);	
})

//add item and close popup
//eggs on toast
$('#add-eggs-from-popup').click(
	function(){
		$('.add-item-popup').css("opacity", "0");
		//show the check your order button
		$('.footer-cart').css("display", "block");
		// pop up display none after fade out
		setTimeout(hide_after_fadeout, 100);	
})
//works
$('#add-works-from-popup').click(
	function(){
		$('.add-item-popup').css("opacity", "0");
		//show the check your order button
		$('.footer-cart').css("display", "block");
		// pop up display none after fade out
		setTimeout(hide_after_fadeout, 100);	
})

//timer to set display none after showing fade out animation
var hide_after_fadeout = function(){
  $('.add-item-popup').css("display", "none");
  $('.add-item-popup').css("opacity", "1");
};
