const list = document.querySelector('.sidebar-nav')
list.addEventListener('click',function (e) {
  const top = document.querySelector(`.img_${e.target.dataset.name}`).offsetTop
  document.documentElement.scrollTop = top

})

const newsItems = document.querySelectorAll('.news-item');

window.addEventListener('scroll', function() {
  const activeHeight = window.innerHeight / 2;

  for (let i = 0; i < newsItems.length; i++) {
    const item = newsItems[i];
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop - activeHeight < 0) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  }
});


