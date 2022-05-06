  let size = 0;
  const sliderItemsNode = document.querySelector('.header__content-items--js')
  let arrowleftNode = document.querySelector('.arrow-left--js')
  let arrowrightNode = document.querySelector('.arrow-right--js')
  const dotsNode = document.querySelectorAll(".dots--js")
  let index = 0;



  arrowleftNode.addEventListener('click', function() {
      size += 589
      if (size > 1767) {
          size = 0
      }

      sliderItemsNode.style.left = -size + 'px';

  })
  arrowrightNode.addEventListener('click', function() {
      size += -589
      if (size < 0) {
          size = 1767
      }

      sliderItemsNode.style.left = -size + 'px';


  })