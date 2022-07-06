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
