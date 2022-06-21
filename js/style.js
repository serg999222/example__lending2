//==Burger menu=====================================//
document.querySelector('.header__burger').onclick = function(){
	document.querySelector('.header__menu').classList.toggle('active')
	document.querySelector('.header__burger').classList.toggle('active')
}

//==slider1====================================//



// function currentSlide(n){
// 	showSlides(slideIndex = n)
// }

// function showSlides(n){
// 	//let i
// 	let slides = document.getElementsByClassName("slider1__fade")
// 	// let dots = document.getElementsByClassName("dot")

// 	if (n > slides.length){
// 		slideIndex = 1
// 	}
// 	if  (n < 1 ){
// 		slideIndex = slides.length
// 	}

// 	for (let i = 0; i < slides.length; i++){
// 		slides[i].style.display='none'
// 	}

// 	// for (i = 0; i < dots.length; i++){
// 	// 	dots[i].className = dots[i].className.replace('active',"")
// 	// }
// 	slides[slideIndex+1].style.display='block'
// 	// dots[slideIndex-1].className +='active'
// }

// var slideIndex = 1
// showSlides(slideIndex)

// function plusSlides(n){
// 	showSlides(slideIndex += n)	
// }
// let current = 0
// let allSlides = document.querySelectorAll('.slider1__image')
// function showSlides(){
// for (let i = 0; i < allSlides.length; i++){
// 	allSlides[i].classList.add('opacity0')
// 	}
// 	allSlides[current].classList.remove('opacity0')

// }
// function plusSlides1(){
// 	if (current -1 == -1){
// 		current = allSlides.length -1
// 	}
// 	else{
// 		current--
// 	}
// 	showSlides()
// }
//=================================new trying==========================//
let current = 0
let allSlides = document.querySelectorAll('.slider1__image')
let nextSlide = document.getElementById('right').onclick = fRight
let prevSlide = document.getElementById('left').onclick = fleft

function fRight(){
	for (let i = 0; i < allSlides.length; i++){
		allSlides[i].classList.add('opacity0')
	}
	allSlides[current].classList.remove('opacity0')
	current++
	if (current >= allSlides.length){
		return current = 0
	}
}

function fleft(){
	for (let i = 0; i < allSlides.length; i++){
		allSlides[i].classList.add('opacity0')
	}
	allSlides[current].classList.remove('opacity0')
	current--
	if (current < 0){
		return current = allSlides.length -1
	}
}

function currentSlide(n){
	let radialActyve = document.querySelectorAll('.actyveButtoms')
	let buttomsRadius = document.querySelectorAll('.dot')
	for (let i = 0; i < allSlides.length; i++){
		allSlides[i].classList.add('opacity0')
	}
	current = n
	allSlides[current].classList.remove('opacity0')
	for (let i = 0; i < buttomsRadius.length; i++){
		buttomsRadius[i].classList.remove('actyveButt')
	}
	 buttomsRadius[current].classList.add('actyveButt')
	// radialActyve[current].classList.add('radialActyve')

}
//console.log(nextSlide)