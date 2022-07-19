//==Burger menu=====================================//
document.querySelector('.header__burger').onclick = function(){
	document.querySelector('.header__menu').classList.toggle('active')
	document.querySelector('.header__burger').classList.toggle('active')
	document.querySelector('.header__logo').classList.toggle('active')
 //	document.querySelector('.main').classList.toggle('active')
	// document.querySelector('.footer').classList.toggle('active')
	document.querySelector('.header__search').classList.toggle('active')
	document.querySelector('body').classList.toggle('active')
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
	for (let i = 0; i < allSlides.length; i++){
		buttomsRadius[i].classList.remove('actyveButt')
	}
	
	
	buttomsRadius[current].classList.add('actyveButt')
	current--
	if (current < 0){
		return current = allSlides.length -1
	}
}

function currentSlide(n){
	let radialActyve = document.querySelectorAll('.actyveButtoms')
	for (let i = 0; i < allSlides.length; i++){
		allSlides[i].classList.add('opacity0')
	}
	current = n
	allSlides[current].classList.remove('opacity0')
	for (let i = 0; i < buttomsRadius.length; i++){
		buttomsRadius[i].classList.remove('actyveButt')
	}
	 buttomsRadius[current].classList.add('actyveButt')

}


//touch scrin---/////////
document.querySelector('.main__slider1').addEventListener('touchstart', handleTouchStart, false)
document.querySelector('.main__slider1').addEventListener('touchmove', handleTouchMove, false)

let x1 = null
let y1 = null

function handleTouchStart(event){
	const firstTouch = event.touches[0]
	x1 = firstTouch.clientX
	y1 = firstTouch.clientY
}

function handleTouchMove(event){
	if( !x1 || !y1){
		return false;
	}
	let x2 = event.touches[0].clientX;
	let y2 = event.touches[0].clientY;


	let xDiff = x2 - x1
	let yDiff = y2 - y1

	if(Math.abs(xDiff) > Math.abs(yDiff)){
		if(xDiff > 0) fleft()
		else fRight()
	}

	x1 = null
	y1 = null

}

//========latest works======================================//

let itemAll = document.querySelectorAll('.latest-project__window-wrapper > div')
for(let i = 0; i < itemAll.length; i++){
	itemAll[i].classList.add('display-none')
	itemAll[i].style.position = 'absolute'
}
document.querySelector('.window-all').classList.remove('display-none')
document.querySelector('.window-all').style.position = 'relative'



 document.querySelector('.button__all').onclick = function(){
let itemAll = document.querySelectorAll('.latest-project__window-wrapper > div')
for(let i = 0; i < itemAll.length; i++){
	itemAll[i].classList.add('display-none')
	itemAll[i].style.position = 'absolute'
}
document.querySelector('.window-all').classList.remove('display-none')
document.querySelector('.window-all').style.position = 'relative'
}

 document.querySelector('.button__web-design').onclick = function(){
	let itemAll = document.querySelectorAll('.latest-project__window-wrapper > div')
	for(let i = 0; i < itemAll.length; i++){
		itemAll[i].classList.add('display-none')
		itemAll[i].style.position = 'absolute'
	}
	document.querySelector('.latest-project__window-web-design').classList.remove('display-none')
	document.querySelector('.latest-project__window-web-design').style.position = 'relative'
	}

	document.querySelector('.button__mobile-app').onclick = function(){
		let itemAll = document.querySelectorAll('.latest-project__window-wrapper > div')
		for(let i = 0; i < itemAll.length; i++){
			itemAll[i].classList.add('display-none')
			itemAll[i].style.position = 'absolute'
		}
		document.querySelector('.latest-project__window-mobile-app').classList.remove('display-none')
		document.querySelector('.latest-project__window-mobile-app').style.position = 'relative'
		}

		document.querySelector('.button__illustration').onclick = function(){
			let itemAll = document.querySelectorAll('.latest-project__window-wrapper > div')
			for(let i = 0; i < itemAll.length; i++){
				itemAll[i].classList.add('display-none')
				itemAll[i].style.position = 'absolute'
			}
			document.querySelector('.latest-project__window-illustration').classList.remove('display-none')
			document.querySelector('.latest-project__window-illustration').style.position = 'relative'
			}

			document.querySelector('.button__photography').onclick = function(){
				let itemAll = document.querySelectorAll('.latest-project__window-wrapper > div')
				for(let i = 0; i < itemAll.length; i++){
					itemAll[i].classList.add('display-none')
					itemAll[i].style.position = 'absolute'
				}
				document.querySelector('.latest-project__window-photography').classList.remove('display-none')
				document.querySelector('.latest-project__window-photography').style.position = 'relative'
				}

//=======video-player=======================================//


let playerBlock = document.querySelector('.video__button')

playerBlock.onclick =  ()  => {
	let videoP = document.querySelector('.video-mp4')
	videoP.controls = 'controls'
	videoP.play()
	document.querySelector('.video__items').classList.add('display-none')
}

//====slider2==================================================//

let slides = document.querySelectorAll('.slider-item__slide')
let slideSrc = []
let currentS = 1
let offsetS = 0

for(let i=0; i < slides.length; i++){
	slideSrc[i] = slides[i]
}

slideSrc[currentS +1].style.left = 390 + 'px'
slideSrc[currentS - 1].style.left = -390 + 'px'

let positionSl0 = -390
let positionSl1 = 0
let positionSl2 = 390

document.querySelector('.butPrev').onclick = swLeft
function swLeft(){
	
 	 for(let i=0; i < slides.length; i++){
	  slideSrc[i] = slides[i]
	  slides[i].style.opacity = '0'
 }

positionSl0 += 390
if(positionSl0 > 390){
	positionSl0 = -390
}

positionSl1 += 390
if(positionSl1 > 390){
	positionSl1 = -390
}
positionSl2 += 390
if(positionSl2 > 390){
	positionSl2 = -390
}

function f5(){
let slide0 = slideSrc[currentS - 1].style.left = positionSl0 + 'px'
let slide1 = slideSrc[currentS].style.left = positionSl1 + 'px'
let slide2 = slideSrc[currentS + 1].style.left = positionSl2 + 'px'
}
setTimeout(f5, 500)

function f4(){
	slideSrc[currentS - 1].style.opacity = '1'
  slideSrc[currentS].style.opacity = '1'
 slideSrc[currentS + 1].style.opacity = '1'
 
}
setTimeout(f4, 500)

}

document.querySelector('.butNext').onclick = swRight
function swRight(){
	
 	 for(let i=0; i < slides.length; i++){
	  slideSrc[i] = slides[i]
	  slides[i].style.opacity = '0'
 }

positionSl0 -= 390
if(positionSl0 < -390){
	positionSl0 = 390
}

positionSl1 -= 390
if(positionSl1 < -390){
	positionSl1 = 390
}
positionSl2 -= 390
if(positionSl2 < -390){
	positionSl2 = 390
}

function f5(){
let slide0 = slideSrc[currentS - 1].style.left = positionSl0 + 'px'
let slide1 = slideSrc[currentS].style.left = positionSl1 + 'px'
let slide2 = slideSrc[currentS + 1].style.left = positionSl2 + 'px'
}
setTimeout(f5, 500)


function f4(){
 	slideSrc[currentS - 1].style.opacity = '1'
	slideSrc[currentS].style.opacity = '1'
  slideSrc[currentS + 1].style.opacity = '1'
  
 
}
setTimeout(f4, 500)


}
//============================touch in slider2===========================//
document.querySelector('.posts__items').addEventListener('touchstart' , swipe1Start , false)
document.querySelector('.posts__items').addEventListener('touchmove' , swipe1Move , false)

let sx1 = null
let sy1 = null

function swipe1Start(event){
	const firstTouch = event.touches[0]
	sx1 = firstTouch.clientX
	sy1 = firstTouch.clientY

}

function swipe1Move(event){
	if( !sx1 || !sy1){
		return false;
	}
	let sx2 = event.touches[0].clientX;
	let sy2 = event.touches[0].clientY;

	let sxDiff = sx2 - sx1
	let syDiff = sy2 - sy1

	if(Math.abs(sxDiff) > Math.abs(syDiff)){
		if(sxDiff > 0) swLeft()
		else swRight()
	}

	sx1 = null
	sy1 = null

}
