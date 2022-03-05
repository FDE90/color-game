let numero =6
let tarjetas = document.querySelectorAll(".square")
let colors = generateRandomColors(numero)
let pickedColor = pickColor()
let h1 = document.querySelector("h1")
let colorDisplay = document.querySelector("#colorDisplay")
colorDisplay.textContent = pickedColor
let message = document.querySelector("#message")
let reset = document.querySelector (".reset")
let facil = document.querySelector ("#botonFacil")
let dificil = document.querySelector ("#botonDificil")



for (let i = 0; i < tarjetas.length; i++) {
	reset.textContent ="¿Nuevos colores?"
	tarjetas[i].style.backgroundColor = colors[i]
	tarjetas[i].addEventListener("click", function () {
		let clickedColor = this.style.backgroundColor
		if (clickedColor === pickedColor) {
			message.textContent = "Correcto"
			 reset.textContent = "Jugar otra vez"
			changeColors(pickedColor)
			h1.style.backgroundColor = pickedColor
		}
		else {
			this.style.backgroundColor = "#232323"
			message.textContent = "Intenta otra vez"
		}
	})
}

// Cambia los colores de todas las tarjetas y el H1 si ganas
function changeColors(color) {
	for (let i = 0; i < tarjetas.length; i++) {
		tarjetas[i].style.backgroundColor = color

	}
}

//Elige un color de colors
function pickColor() {
	let num = Math.floor(Math.random() * colors.length)
	return colors[num]
}

// Crea un array con los colores que generamos
function generateRandomColors(num) {
	let arr=[]
	for(let i=0; i< num;i++){
	arr[i]=randomColor()
}
	return arr
}

//Genera colores random en RGB
function randomColor () {

	let r = Math.floor(Math.random()*256)
	let g = Math.floor(Math.random()*256)
	let b = Math.floor(Math.random()*256)
     
	return "rgb("+r+ ", "+ g+ ", "+b+")"
}

//genera colores aleatorios nuevos
reset.addEventListener ("click", function () {
	colors = generateRandomColors (numero)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	reset.textContent ="¿Nuevos colores?"
	for(let i=0; i<tarjetas.length;i++){
	tarjetas[i].style.backgroundColor = colors[i]}

	h1.style.backgroundColor= "cadetblue"

	message.textContent = ""

	
})

//Si clickea facil borra los ultimos 3 bloques ya que numero=3 y los colores son creados en base al numero
facil.addEventListener ("click", function () {
	dificil.classList.remove("seleccionado")
	facil.classList.add("seleccionado")
	numero =3
	colors = generateRandomColors (numero)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	reset.textContent ="¿Nuevos colores?"
	for(let i=0; i<tarjetas.length;i++){
		if (colors[i]){
			tarjetas[i].style.backgroundColor= colors[i]
		}
		else{
			tarjetas[i].style.display = "none"
		}
	
		h1.style.backgroundColor= "cadetblue"
	
		message.textContent = ""
}})

//Si clickea dificil vuelve a mostrar los 3 bloques del final ya que numero =6
dificil.addEventListener ("click", function () {
	dificil.classList.add("seleccionado")
	facil.classList.remove("seleccionado")
	numero =6
	colors = generateRandomColors (numero)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	reset.textContent ="¿Nuevos colores?"
	for(let i=0; i<tarjetas.length;i++){
		tarjetas[i].style.backgroundColor =colors[i]
		tarjetas[i].style.display = "block"}
})


