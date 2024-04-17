const showMoreTextInfo = document.querySelector('.sec-info__text:nth-child(2)');
const showMoreBtnInfo = document.querySelector('.sec-info__btn');
const btnTextInfo = showMoreBtnInfo.querySelector('.sec-info__btn-text');
const btnImgInfo = showMoreBtnInfo.querySelector('.sec-info__btn-img');

showMoreBtnInfo.addEventListener('click', function() {
  if (btnTextInfo.textContent === 'Читать далее') {
      showMoreTextInfo.classList.remove('hide');
      btnImgInfo.classList.add('rotate');
      btnTextInfo.textContent = 'Скрыть';
    } else {
      showMoreTextInfo.classList.add('hide');
      btnImgInfo.classList.remove('rotate');
      btnTextInfo.textContent = 'Читать далее';
    }
});


const showMoreTextBrand = document.querySelector('.brand__list');
const showMoreBtnBrand = document.querySelector('.brand__btn-show-more');
const btnTextBrand = showMoreBtnBrand.querySelector('.brand__btn-text');
const btnImgBrand = showMoreBtnBrand.querySelector('.brand__btn-sm-img');

showMoreBtnBrand.addEventListener('click', function() {
  if (btnTextBrand.textContent === 'Показать всё') {
      showMoreTextBrand.classList.add('shown');
      btnImgBrand.classList.add('rotate');
      btnTextBrand.textContent = 'Скрыть';
    } else {
      showMoreTextBrand.classList.remove('shown');
      btnImgBrand.classList.remove('rotate');
      btnTextBrand.textContent = 'Показать всё';
    }
});

const showMoreTextTech = document.querySelector('.technic__list');
const showMoreBtnTech = document.querySelector('.technic__btn-show-more');
const btnTextTech = showMoreBtnTech.querySelector('.technic__btn-text');
const btnImgTech = showMoreBtnTech.querySelector('.technic__btn-sm-img');

showMoreBtnTech.addEventListener('click', function() {
  if (btnTextTech.textContent === 'Показать всё') {
      showMoreTextTech.classList.add('shown');
      btnImgTech.classList.add('rotate');
      btnTextTech.textContent = 'Скрыть';
    } else {
      showMoreTextTech.classList.remove('shown');
      btnImgTech.classList.remove('rotate');
      btnTextTech.textContent = 'Показать всё';
    }
});