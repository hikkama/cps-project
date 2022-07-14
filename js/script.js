//  Button 'показать все' brands
const cont = document.querySelector('.brands__items')
const brandsItems = document.querySelectorAll('.box-link--notmobile')
const btnShowMoreBrands = document.querySelector('#brands__btn-more')
const btnCloseBrands = document.querySelector('#brands__btn-more--close')

btnShowMoreBrands.addEventListener('click', function () {
  cont.classList.toggle('brands__items--expanded')
	const expanded = cont.classList.contains('brands__items--expanded');
	if (expanded) {
		btnCloseBrands.style.display = 'block';
		btnShowMoreBrands.style.display = 'none'
	} else {
		btnCloseBrands.style.display = 'none';
		btnShowMoreBrands.style.display = 'block'
	}
})

btnCloseBrands.addEventListener('click', function () {

	cont.classList.toggle('brands__items--expanded')
	const expanded = cont.classList.contains('brands__items--expanded');
	if (expanded) {
		btnCloseBrands.style.display = 'block';
		btnShowMoreBrands.style.display = 'none'
	} else {
		btnCloseBrands.style.display = 'none';
		btnShowMoreBrands.style.display = 'block'
	}
	})
	

// for (let i = 6; i < brandsItems.length; i++) {
//   brandsItems[i].style.display = 'none'
// }
// let countItem = 	8
// btnShowMoreBrands.addEventListener('click', function () {
// 	countItem += brandsItems.length - countItem
// 	for (let i = 0; i < brandsItems.length; i++) {
// 		brandsItems[i].style.display = 'flex'
// 	}
// 	btnCloseBrands.style.display = 'block'
// 	btnShowMoreBrands.style.display = 'none'
// })

// btnCloseBrands.addEventListener('click', function () {

// 	for (let i = 8; i < brandsItems.length; i++) {
// 		brandsItems[i].style.display = 'none'
// 	}
// 	btnCloseBrands.style.display = 'none'
// 	btnShowMoreBrands.style.display = 'block'
// })

// Swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: -10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
