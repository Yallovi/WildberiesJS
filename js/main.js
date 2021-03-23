'use strict';
const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});


//cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');


const openModal = function(){
	modalCart.classList.add('show');
}

const closeModal = function(){
	modalCart.classList.remove('show');
}

modalCart.addEventListener('click', function(e){
	const target = e.target;

	if(target.classList.contains('overlay') || target.classList.contains('modal-close')){
		closeModal();
	}
});

buttonCart.addEventListener('click', openModal);

modalCart.addEventListener('clicl', function(e){
	const target = e.target;

	if(target.classList.contains('ovarlay') || target.classList.contains('modal-close')){
		closeModal();
	}
});

//scrole smoth

{
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (let i = 0; i < scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click',function(e){
			e.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: "smooth",
				block: "start",
			})
			
		});
		
	}
}

