function selectTabs() {
  const tabs = document.querySelector('.tabs');
  tabs.addEventListener('click', (e) => {
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.toggle('tabs-active');

    let dataTab = e.target.dataset.tab;
    document.querySelector('.is-active').classList.remove('is-active');
    document.getElementById(dataTab).classList.toggle('is-active');
  });
}

selectTabs();

// Our Amazing Work
const filterAmazing = document.querySelector('.filter-amazing');
const filterImg = document.querySelectorAll('.img-filter-amazing img');

filterAmazing.addEventListener('click', (e) => {
  let filterClass = e.target.dataset['filter'];

  filterImg.forEach((el) => {
    el.classList.remove('hide');
    if (!el.classList.contains(filterClass) && filterClass !== 'all') {
      el.classList.add('hide');
    }
  });
});

const btn = document.querySelector('.button-load');

btn.addEventListener('click', () => {
  filterImg.forEach((el) => {
    el.classList.remove('no-active');
  });
  btn.style.display = 'none';
  document.querySelector('.our-amazing').style.height = 1600 + 'px';
});

// Breaking News

function changeColor() {
  const gridNews = document.querySelector('.grid-news');

  gridNews.addEventListener('mouseover', (e) => {
    if (
      e.target.classList.contains('img-breaking-news') ||
      e.target.classList.contains('h2-breaking-news')
    ) {
      let changeColor = e.target.dataset.color;
      document.getElementById(changeColor).style.backgroundColor = '#13cba6';
    }
  });

  gridNews.addEventListener('mouseout', (e) => {
    if (
      e.target.classList.contains('img-breaking-news') ||
      e.target.classList.contains('h2-breaking-news')
    ) {
      let changeColor = e.target.dataset.color;
      document.getElementById(changeColor).style.backgroundColor = '#203E38';
    }
  });
}

changeColor();

// $(function () {
//    $('.slider-for').slick({
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      arrows: false,
//      fade: true,
//      asNavFor: '.slider-inner',
//    });

//   $('.slider-inner').slick({

//     arrows: true,
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//   });
// });


$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
});


