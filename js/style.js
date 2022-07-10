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

document.querySelector('.butNext').onclick = 
function(){
	
 	 for(let i=0; i < slides.length; i++){
	  slideSrc[i] = slides[i]
	  //slides[i].classList.add('opasity0')
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

//let f3 = function(){
// 	slideSrc[currentS - 1].classList.remove('opasity0')
// 	slideSrc[currentS].classList.remove('opasity0')
//   slideSrc[currentS + 1].classList.remove('opasity0')
 // }
 //slides[i].style.opacity = '0'
 // setTimeout(f3(), 5000)



//  let f3 = function(){
	//setTimeout(f4(), 2000)
// }
function f4(){
 	slideSrc[currentS - 1].style.opacity = '1'
	slideSrc[currentS].style.opacity = '1'
  slideSrc[currentS + 1].style.opacity = '1'
  
}
setTimeout(f4, 500)

}



