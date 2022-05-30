$(function(){
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show'); 			// appliqué au ul
    $(this).parent().toggleClass('show'); 	// appliqué au li parent

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass('show'); 	// appliqué au ul
      $('.dropdown-submenu.show').removeClass('show'); 		// appliqué au li parent
    });
    return false;
  });
}); 









    jQuery(function ($) {
        $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    
    autoplay: true,
    autoplaySpeed: 2000,
  });
});



		function reveal() {
			var reveals = document.querySelectorAll(".reveal");
		  
			for (var i = 0; i < reveals.length; i++) {
			  var windowHeight = window.innerHeight;
			  var elementTop = reveals[i].getBoundingClientRect().top;
			  var elementVisible = 150;
		  
			  if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
			  } else {
				reveals[i].classList.remove("active");
			  }
			}
		  }
		  
		  window.addEventListener("scroll", reveal);
		
		  const counters = document.querySelectorAll('.value');
		const speed = 200;
		
		counters.forEach( counter => {
		   const animate = () => {
			  const value = +counter.getAttribute('akhi');
			  const data = +counter.innerText;
			 
			  const time = value / speed;
			 if(data < value) {
				  counter.innerText = Math.ceil(data + time);
				  setTimeout(animate, 500);
				}else{
				  counter.innerText = value;
				}
			 
		   }
		   
		   animate();
		});


