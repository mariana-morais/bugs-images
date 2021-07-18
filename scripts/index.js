function initTabNav() {
  const tabMenu = document.querySelectorAll('.tabmenu li');
  const tabContent = document.querySelectorAll('.tabcontent section');
  tabContent[0].classList.add('active');
  
  if(tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active')
      })
      tabContent[index].classList.add('active');
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}

initTabNav();

function initAcordion() {
  const accordionList = document.querySelectorAll('.accordion dt');
  const activeClass = 'active'

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

initAcordion();

const sections = document.querySelectorAll('.scroll');

function sectionScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < 0) {
      section.classList.add('active');
    }
  })

}

window.addEventListener('scroll', sectionScroll);

