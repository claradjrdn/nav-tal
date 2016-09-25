$(document).ready( function() {
	
          $(".filtres").click(function(){
            var id=$(this).attr("id");
            $("#liste").toggleClass(id);
/*            $("#liste").removeClass().addClass(id);*/
	            

	            /*
	            if ($('.filtres').attr("id") == id) {
	            	$(this).hide();
	            };
	            */
          });

          $(".filtres").click(function(){
          		$(this).siblings('.filtres').toggleClass("hide");
/*          		$(this).siblings('.filtres').removeClass().addClass("hide");*/

          		/* $(this).siblings('.filtres').toggle("slide");*/
          });

});
