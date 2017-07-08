$(document).ready(function(){

	$("#next").on("click", function(e){
		var currentIm = $(".image-shown");
		var nextIm = currentIm.next();

		//para que no muestre un espacio en blanco
		if(nextIm.length ==0){
			nextIm = $(".carousel-inner img").first();
		}

		/*removemos clase shown y la reemplazamos por clase hidden, para cambiar la imagen que se muestra o saca*/
		currentIm.removeClass("image-shown").addClass("image-hidden").css("z-index",-10);//así la primera será la última en la lista de imágenes
		nextIm.addClass("image-shown").removeClass("image-hidden").css("z-index", 20)//este quedará al principio de la pila de imágenes	
		$(".carousel-inner img").not([currentIm, nextIm]).css("z-index",1);//seleccionamos todas las imagenes excepto current y next
	
		//para prevenir que fonawesomes me lleven a algún lugar
		e.preventDefault();
	});
	$("#previous").on("click", function(e){
		var currentIm = $(".image-shown");
		var nextIm = currentIm.prev();

		if(nextIm.length == 0){
			nextIm = $(".carousel-inner img").last();
		}

		currentIm.removeClass("image-shown").addClass("image-hidden").css("z-index", 20);
		nextIm.addClass("image-shown").removeClass("image-hidden").css("z-index",-10);
		$(".carousel-inner img").not([currentIm,nextIm]).css("z-index",1);

		e.preventDefault();
	})
	$("#c1").on("click", function(e){
		var imShown= $(".image-shown");
		imShown.removeClass("image-shown").addClass("image-hidden");
		$("#i1").addClass("image-shown").removeClass("image-hidden");
		e.preventDefault();
	});
	$("#c2").on("click", function(e){
		var imShown= $(".image-shown");
		imShown.removeClass("image-shown").addClass("image-hidden");
		$("#i2").addClass("image-shown").removeClass("image-hidden");
		e.preventDefault();
	});
	$("#c3").on("click", function(e){
		var imShown= $(".image-shown");
		imShown.removeClass("image-shown").addClass("image-hidden");
		$("#i3").addClass("image-shown").removeClass("image-hidden");
		e.preventDefault();
	});
	$("#c4").on("click", function(e){
		var imShown= $(".image-shown");
		imShown.removeClass("image-shown").addClass("image-hidden");
		$("#i4").addClass("image-shown").removeClass("image-hidden");
		e.preventDefault();
	});
	$("#c5").on("click", function(e){
		var imShown= $(".image-shown");
		imShown.removeClass("image-shown").addClass("image-hidden");
		$("#i5").addClass("image-shown").removeClass("image-hidden");
		e.preventDefault();
	});
});