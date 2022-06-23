//==Burger menu=====================================//
document.querySelector('.header__burger').onclick = function(){
	document.querySelector('.header__menu').classList.toggle('active')
	document.querySelector('.header__burger').classList.toggle('active')
}

//==slider1====================================//


let current = 0
let allSlides = document.querySelectorAll('.slider1__image')
let nextSlide = document.getElementById('right').onclick = fRight
let prevSlide = document.getElementById('left').onclick = fleft
let buttomsRadius = document.querySelectorAll('.dot')
buttomsRadius[current].classList.add('actyveButt')
for (let i = 0; i < allSlides.length; i++){
	allSlides[i].classList.add('opacity0')
}
allSlides[0].classList.remove('opacity0')
 current+=1
function fRight(){
	for (let i = 0; i < allSlides.length; i++){
		allSlides[i].classList.add('opacity0')
	}
	allSlides[current].classList.remove('opacity0')
	for (let i = 0; i < allSlides.length; i++){
		buttomsRadius[i].classList.remove('actyveButt')
	}
	buttomsRadius[current].classList.add('actyveButt')
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
	// for (let i = 0; i < allSlides.length; i++){
	// 	buttomsRadius[i].classList.remove('actyveButt')
	// }
	// buttomsRadius[current].classList.add('actyveButt')
	// current--
	// if (current < 0){
	// 	return current = allSlides.length -1
	// }
}

function currentSlide(n){
	let radialActyve = document.querySelectorAll('.actyveButtoms')
	//let buttomsRadius = document.querySelectorAll('.dot')
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
