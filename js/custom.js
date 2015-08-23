$(document).ready(function(){	 
	 /*
	 * JQuery Events
	 */
	$('.menu').mouseover(function(){
		$('.menuImg').css("width","60px");
		$('.nav').toggle();
	});
	$('.menu').mouseout(function(){
		$('.nav').toggle();
		$('.menuImg').css("width","30px");		
	});
	$('.nav li').click(function(){
		var linkTag = $(this).attr('title');
		navLink(linkTag);
	});	
});

/*
 * List of Functions
 */
 
 //---Start Site Navigation---//
 function navLink(linkTag){
 	if(linkTag == 'blog'){
 		//window.location.replace() --- Just for note as it keeps no history
 		window.location.href = "blog.html";
 	}
 }
 
 //---Start BrandTag Min---//
 function brandTagMin(){
 	var brandTag = $('.brandTag');
 	brandTag.animate({
 		width: '300px',
 		left: '5px'
 	},200,'linear');
 }
 //---End of BrandTag Min---//
 
 //---Start Background Image---//
 function bgImg(){
 	$('html').css({"background": "url(img/bg_center.png) no-repeat center center fixed", 
					"-webkit-background-size": "cover",
					"-moz-background-size": "cover",
					"-o-background-size": "cover",
					"background-size": "cover"	 	
 	});
 	
 	//Show background and menu
 	$('.bannerStrip').show();
 	$('.menu').show();
 	brandTagMin();
 	$(".initBlind").show();

 	
 }
 //---End Background Image---//

//---Start PreBrandTag---//
function preBrandTag(){
	var paths = document.querySelectorAll('.path');
	var ltrNo = 0;
	var myanime = setInterval( function(){  
		if(ltrNo < paths.length){
			brandTagAnimation(ltrNo);
			ltrNo++; 
		} else{
			clearInterval(myanime);
			$(".path").animate({
			   	fillOpacity: '1'
			},1200,'linear', function(){
				$(".path").css("text-shadow", "1px 1px 1px #8C92AC");
				bgImg();					
			});
		}
	}, 700);
}
//---End of PreBrandTag---//
 
//---Start Initial Background Animation---//
function initBgAnim(){
    $(".bg1").animate({
	   	opacity: '0'
	},3000,'linear',function(){
		$(".bg1").hide();
		$(".main").toggle();
		preBrandTag()}
	);
}
//---End Initial Background Animation---//

//---Begin glow Effect--//
function glowEffect(){
	$(".glow").show(1000);
	$(".glow").animate({
		left: '-=200px',
		top: '-=200px',
		height: '+=400px',
        width: '+=400px'
    	},1000,'linear'
    );
}
//---End of Glow Effect---//

//---Start Brand Tag Animation---//
function brandTagAnimation(chngI){
	var paths = document.querySelectorAll('.path');
	
	//for(var chngI = 0; chngI < paths.length; chngI++){
	if(chngI < paths.length){
		//Get length of letter
		var lFontSize = window.getComputedStyle(paths[chngI], null).getPropertyValue("font-size");
		var length = parseInt(lFontSize,10) * 15;
		
		// Clear any previous transition
		paths[chngI].style.transition = paths[chngI].style.WebkitTransition =
		  'none';
		// Set up the starting positions
		paths[chngI].style.strokeDasharray = length + ' ' + length;
		paths[chngI].style.strokeDashoffset = length;
		paths[chngI].style.visibility = 'visible';
		
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		paths[chngI].getBoundingClientRect();
		// Define our transition
		paths[chngI].style.transition = paths[chngI].style.WebkitTransition = paths[chngI].style.MozTransition =
		  'stroke-dashoffset 1.5s ease-in-out';

		// Go!
		paths[chngI].style.strokeDashoffset = '0';
		
	}
}
//---End Brand Tag Animation---// 

/*
 * BLOG FUNCTIONS
 */
 
 function processBlog(){
 	$('.path').css({"visibility": "visible",
 				    "text-shadow": "1px 1px 1px #8C92AC",
 				    "fill-opacity": "1"
 				   });
 	$('.bannerStrip').css("background-color", "blue");
 	$('.bannerStrip').show();
 	brandTagMin();
 }
