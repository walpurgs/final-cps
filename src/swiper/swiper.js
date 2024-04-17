import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

if (window.innerWidth < 768){
    
    // Бренды
    const swiperBrands = new Swiper('.swiperBrands', {
      // Optional parameters
      direction: 'horizontal',
      loop: "true",
      slidesPerView: "auto",
      spaceBetween: 16,
      watchOverflow: true,
      pagination: {
        el: '.swiper-paginationBrands',
        clickable: true,
      },
      grabCursor: true, 
 
      keyboard: { 
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      mousewheel: { 
        sensitivity: 1,
      },


      breakpoints: {
          240: {
            slidesPerView: 0.7,
          },
          320: {
            slidesPerView: 1.2,
          },
          380: {
            slidesPerView: 1.5,
          },
          440: {
            slidesPerView: 1.8,
          },
          520: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 2.2,
          },
          576: {
            enabled: false,
            pagination: {
              enabled: false,
            },
          },
        }
    });

    // Техника
    const swiperTech = new Swiper('.swiperTech', {
      // Optional parameters
      direction: 'horizontal',
      loop: "true",
      slidesPerView: "auto",
      spaceBetween: 16,
      watchOverflow: true,
      pagination: {
        el: '.swiper-paginationTech',
        clickable: true,
      },
      grabCursor: true, 
 
      keyboard: { 
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      mousewheel: { 
        sensitivity: 1,
      },


      breakpoints: {
          240: {
            slidesPerView: 0.7,
          },
          320: {
            slidesPerView: 1.2,
          },
          380: {
            slidesPerView: 1.5,
          },
          440: {
            slidesPerView: 1.8,
          },
          520: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 2.2,
          },
          576: {
            enabled: false,
            pagination: {
              enabled: false,
            },
          },
      }
    });

      // Цены

      const swiperPrice = new Swiper('.swiperPrice', {
        // Optional parameters
        direction: 'horizontal',
      loop: "true",
      slidesPerView: "auto",
      spaceBetween: 16,
      watchOverflow: true,
      pagination: {
        el: '.swiper-paginationPrice',
        clickable: true,
      },
      grabCursor: true, 
 
      keyboard: { 
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      mousewheel: { 
        sensitivity: 1,
      },


      breakpoints: {
          240: {
            slidesPerView: 0.7,
          },
          320: {
            slidesPerView: 1.2,
          },
          380: {
            slidesPerView: 1.5,
          },
          440: {
            slidesPerView: 1.8,
          },
          520: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 2.2,
          },
          576: {
            enabled: false,
            pagination: {
              enabled: false,
            },
          },
      }
    });
}
