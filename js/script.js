new WOW().init();

$(function(){
	$('.project-slider').slick({
        arrows: false,
		dots: true,
        infinite: true,
  
	});
  	
});

const btns = document.querySelectorAll('.hero-btn');
const modalOverlay = document.querySelector(".modal-overlay");
const modalWindow = document.querySelectorAll('.modal-window');

btns.forEach((el) => {
	el.addEventListener('click', (event) => {
		let path = event.currentTarget.getAttribute('data-path')
		modalOverlay.classList.add('modal-overlay--visible') 
		document.querySelector(`[data-target="${path}"]`).classList.add('modal-window--add')
	})
})

modalOverlay.addEventListener('click', (e) => {
	if(e.target == modalOverlay){
		modalOverlay.classList.remove('modal-overlay--visible')
		modalWindow.forEach((el) => {
			el.classList.remove('modal-window--add')
		})
	}
	
	
})