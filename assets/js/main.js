(function displayNone(){
	/*GetElementsById me retorna una coleccion de htmlelementos en esta coleccion no se puede 
	hacer for each por la que la transforma a un arreglo con array.form*/  
	var cajas = Array.from(document.getElementsByClassName('caja'));
	console.log(cajas);
	cajas.forEach(function(e){
		//poner sombrero a e;
		e.addEventListener("click", function(){
			this.classList.add('no');
		});
	});
	document.getElementById('mostrar').addEventListener('click', function(el){
		//previene el comportamiento por defecto
		//evita que me haga el salto de pagina
		el.preventDefault(); 
		cajas.forEach(function(e){
			e.classList.remove("no");
		})
	})
})()