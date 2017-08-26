$(document).ready(function(){

    $(this).scrollTop(0);

	//set tool tips to appropriate position
	$('[data-toggle="tooltip"]').tooltip();  
	//code for search dropdown
	$("#search").click(function() {;

		 var scroll = $(window).scrollTop();		
		 if (scroll > 200) {

  				$("input").focus();
	  			setTimeout( function(){
				$("#nav-bar").css("background-color" , "#ffffff");
				$("#nav-bar").css("height" , "450px");
				$(".navbar-nav li > a").css("color" , "#a2a2a2");
		        $(".fa-search").css("color" , "#000000");		
		        $(".main_logo").attr('src', 'res/Hublot_logo.png');
		        $(".main_logo3").attr('src', 'res/Hublot-logo-219x286.png');		     
		        $(".main_logo").addClass('changed');
				}, 200); 
   			    $("form").toggleClass("show").slideDown();

		 }else{
			 
		     if (!$(".main_logo").hasClass('changed')) {
		 	 
  				$("input").focus();
		     	setTimeout( function(){
		 	    $("form").toggleClass("show").slideDown();
		 	    }, 500);
		 	    $("#nav-bar").css("background-color" , "#ffffff");
				$("#nav-bar").css("height" , "450px");
				$(".navbar-nav li > a").css("color" , "#a2a2a2");
		        $(".fa-search").css("color" , "#000000");	
		        $(".main_logo").attr('src', 'res/Hublot_logo.png');
		        $(".main_logo3").attr('src', 'res/Hublot-logo-219x286.png');		
		        $(".main_logo").addClass('changed');   
		     }else{
		     	$("form").toggleClass("show").slideDown();
	  			$("#nav-bar").css("background-color" , "transparent");
		    	$("#nav-bar").css("height" , "70px");
				$(".navbar-nav li > a").css("color" , "#ffffff");
			  	$(".fa-search").css("color" , "#ffffff");
		        $(".main_logo").attr('src', 'res/Hublot_logo_white.png');
		        $(".main_logo3").attr('src', 'res/Hublot-logo-white.png');		       
		        $(".main_logo").removeClass('changed');
		     }
		 }
	});

	var check1=false;

	//code for search dropdown mobile
	$("#search-mobile").click(function() {;

		 var scroll = $(window).scrollTop();	

		 if (scroll > 200) {
  				$("input").focus();
				$("#nav-bar").css("height" , "350px");		     
			    $(".main_logo").attr('src', 'res/Hublot_logo.png');
	            $(".main_logo").addClass('changed');   
			    $("form").toggleClass("show").slideDown();
		 }else{
			 
		     if (!$(".main_logo").hasClass('changed')) {
		     	$("input").focus();
				$("#nav-bar").css("height" , "300px");
		        $(".main_logo").addClass('changed');     
     	    	$("form").toggleClass("show").slideDown();
		     }else{
		     	$("form").toggleClass("show").slideDown();
	  			$("#nav-bar").css("height" , "40px");
		        $(".main_logo").removeClass('changed');
		     }
		 }
		 	    //toggle dropdown	
			    if (check1==true) { 	
		  		     $( "#navbar-toggle" ).click();
      	 		}
	});

	//check screen size
	var windowsize = $(window).width();
	//code for scrolling effect when not in mobile
    if(windowsize >= 768){
		$(window).scroll(function(){
		   var scroll = $(window).scrollTop();
			  if (scroll > 200) {
		        $("form").removeClass('show');
			  	$("#nav-bar").css("height", "70px")
			    $("#nav-bar").css("background-color" , "#ffffff");
			  	$(".navbar-nav li > a").css("color" , "#a2a2a2");
			  	$(".fa-search").css("color" , "#000000");	
			  	$(".main_logo3").attr('src', 'res/Hublot-logo-219x286.png');
				$(".main_logo").attr('src', 'res/Hublot_logo.png').addClass('changed'); 
			  }
			  else{
				$("#nav-bar").css("background-color" , 'transparent');
				$(".navbar-nav li > a").css("color" , "#ffffff");
			  	$(".fa-search").css("color" , "#ffffff");
			  	$(".main_logo3").attr('src', 'res/Hublot-logo-white.png');				     
				$(".main_logo").attr('src', 'res/Hublot_logo_white.png').removeClass('changed');		
			  }
	 	})

	}else{
		$(window).scroll(function(){
		   var scroll = $(window).scrollTop();
			  if (scroll > 200) {
		        $("form").removeClass('show');
			  	$("#nav-bar").css("height", "40px")
			    $(".main_logo").attr('src', 'res/Hublot_logo.png').addClass('changed'); 
			  }
	 	})
	}

	//prevent overlapping with dorpdown
	$("#navbar-toggle").click(function() {;	
		if ($("form").hasClass('show')) {
			$("form").toggleClass("show").slideDown();
	  			$("#nav-bar").css("height" , "40px");
		        $(".main_logo").removeClass('changed');
		}

		if(check1==false){
			check1=true;
		}else{
			check1=false;
		}	
	});
});
