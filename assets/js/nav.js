
$(window).on('load', function(){
	// Disable all active links on navbar
	// disable_active_links();

	// Set hide animation status to hide
	var hideEvent = 1;
	var scroll = 0;  

	// Toggle active classes on the URL clicked
	$('#rv-header').on('click', '.nav-link', function(event){
		// Prevent some button clicks
		if(this.id != "home" && this.id != "director" && this.id != "gallery"){
			event.preventDefault();
		}

		// Reset active classes
		disable_active_links();

		// DIV to go to
		var section = "#" + this.id + "Div"; 
		console.log(scroll);

		try{
			if (scroll == 0) {
				// Auto scroll to that div
				$('html, body').animate({
				    scrollTop: ($(section).offset().top - 170)
				},500);	
			}
			else{
				// Auto scroll to that div
				$('html, body').animate({
				    scrollTop: ($(section).offset().top - 70)
				},500);
			}
			


			// Set active class to the link clicked
			$(this).closest('li').attr('class', 'nav-item active');	
		}
		catch(err){
			window.location = "home#" + this.id + "Div"; 
		}
		
	}); 
		

	// For footer links
	$('.footerLinks').on('click', 'a', function(event){
			// Reset active classes
		disable_active_links();
		
		// Only prevent button clicks if the button's not home
		if(this.id != "home" && this.id != "director" && this.id != "gallery"){
			event.preventDefault();
		}
		

		// DIV to go to
		var section = "#" + this.id + "Div"; 


		try{
			// Auto scroll to that div
			$('html, body').animate({
			    scrollTop: ($(section).offset().top - 100)
			},500);	

			// Set active class to the link clicked
			$('#' + this.id).closest('li').attr('class', 'nav-item active');	
		}
		catch(err){
			window.location = "home#" + this.id + "Div";
		}
		
	}); 	




	var height = 0; 

	$('.thumbnail').hover(function() {


		var elem = $(this).find('.caption'); 		
		elem.slideUp(200);
	}, function() {		
		var elem = $(this).find('.caption');
		elem.closest('thumbnail::before').css('background', 'white');
		
		elem.fadeIn(200);
	});

	// Show navbar on scroll
	// Navbar visible on scroll
	$(window).scroll(function (event) {
		// Get scroll data
	    scroll = $(window).scrollTop();	
	  	

	  	// Stay non fixed initially
		if(scroll == 0){
			hideEvent = 1;
			$('#navbar').attr({
	    		class: 'navbar navbar-expand-md navbar-light bg-white navbar-shadow'	    		
	    	});
		}

		// If scrolled show navbar with fixed navbar
		else if (scroll > 300) {	    		 
    		$('#navbar').attr({
    			class: 'navbar navbar-fixed navbar-expand-md navbar-light bg-white navbar-shadow'    		
    		});			    		
	    			
	    }

	    // Scrolled on any area except top, show white navbar
	    else{		    	
	    	$('#navbar').attr({
	    		class: 'navbar navbar-expand-md navbar-light'	    		
	    	});	    	
	    }
	       
	    
	});

	// Disable all active class (indicator) on links
	function disable_active_links(){
		$('.nav-item').each(function(index, el) {				
			$(el).attr('class', 'nav-item');
		});		
	}


	// Hover action for director's links
	$('.director-link').hover(function() {
		var elem = $(this); 
		elem.attr('class', 'col-sm-3 text-center bg-dark text-white director-link');
	}, function() {
		var elem = $(this); 
		
		elem.attr('class', 'col-sm-3 text-center bg-light text-muted director-link');
	});







}); 
