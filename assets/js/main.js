$(document).ready(function(){
	$("#previous").on("click", function(){
		var currentIm = $(".image-shown");
		var nextIm = currentIm.next();
		/*removemos clase shown y la reemplazamos por clase hidden, para cambiar la imagen que se muestra o saca*/
		currentIm.removeClass("image-shown").addClass("image-hidden").css("z-index",-10);//así la primera será la última en la lista de imágenes
		nextIm.addClass("image-shown").removeClass("image-hidden").css("z-index", 20)//este quedará al principio de la pila de imágenes	
		$(".carousel-inner img").not([currentIm, nextIm]).css("z-index",1);//seleccionamos todas las imagenes excepto current y next
	
		//para prevenir que fonawesomes me lleven a algún lugar
		e.preventDefault();
	});
});