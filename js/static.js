  let size = 0;
  const sliderItemsNode = document.querySelector('.header__content-items--js')
  let arrowleftNode = document.querySelector('.arrow-left--js')
  let arrowrightNode = document.querySelector('.arrow-right--js')
  const dotsNode = document.querySelectorAll(".dots--js")
  let contentNode = document.querySelectorAll('.header__slider-elements--js')
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
  for (let i = 0; i < dotsNode.length; i++) {
      dotsNode[i].addEventListener('click', function() {
          let index = this.dataset.id
          for (let d = 0; d < dotsNode.length; d++) {
              dotsNode[d].classList.remove('dots--background-white')
          }
          this.classList.add('dots--background-white')
      })
  }