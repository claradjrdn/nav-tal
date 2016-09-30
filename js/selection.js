$(document).ready( function() {
	
          $(".filter-list__item").click(function(){
            var id=$(this).attr("id");
            $("#list").toggleClass(id);
/*            $("#liste").removeClass().addClass(id);*/
	            

	            /*
	            if ($('.filtres').attr("id") == id) {
	            	$(this).hide();
	            };
	            */
          });

          $(".filter-list__item").click(function(){
          		$(this).siblings('.filter-list__item').toggleClass("hide");
/*          		$(this).siblings('.filtres').removeClass().addClass("hide");*/

          		/* $(this).siblings('.filtres').toggle("slide");*/
          });

});
