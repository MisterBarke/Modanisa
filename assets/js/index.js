

const DisplayRedProducts = ()=>{
    const portfolioContainer = document.querySelector('.portfolio-container');
 for (let i = 0; i < hijabsByColors.length; i++) {
    const elementIt =  hijabsByColors[i]
    const element = `<div class="col-lg-4 col-md-6 portfolio-item filter-rouge">
    <div class="portfolio-content h-100">
      <img src="${elementIt.img}" class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${elementIt.name}</h4>
        <p style="color: pink; font-weight: bolder; font-size: 22px;">${elementIt.price}</p>
        <a href="${elementIt.img}" title="${elementIt.name}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
        <a href="#" title="order" class="details-link"><i class="bi bi-cart-fill"></i></a>
      </div>
    </div>
  </div>`;

  portfolioContainer.innerHTML += element;
    
 }
}
/* DisplayRedProducts();
const DisplayGreenProducts = ()=>{  
    const portfolioContainer = document.querySelector('.portfolio-container');
 for (let i = 0; i < hijabsByColors.length; i++) {
    const elementIt =  hijabsByColors[i]
    const element = `<div class="col-lg-4 col-md-6 portfolio-item filter-Vert">
    <div class="portfolio-content h-100">
      <img src="${elementIt.img}" class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${elementIt.name}</h4>
        <p style="color: pink; font-weight: bolder; font-size: 22px;">${elementIt.price}</p>
        <a href="${elementIt.img}" title="${elementIt.name}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
        <a href="#" title="order" class="details-link"><i class="bi bi-cart-fill"></i></a>
      </div>
    </div>
  </div>`;

  portfolioContainer.innerHTML += element;
    
 }
}
DisplayGreenProducts();
const DisplayPinkProducts = ()=>{
    const portfolioContainer = document.querySelector('.portfolio-container');
 for (let i = 0; i < hijabsByColors.pink.length; i++) {
    const elementIt =  hijabsByColors.pink[i]
    const element = `<div class="col-lg-4 col-md-6 portfolio-item filter-rose">
    <div class="portfolio-content h-100">
      <img src="${elementIt.img}" class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${elementIt.name}</h4>
        <p style="color: pink; font-weight: bolder; font-size: 22px;">${elementIt.price}</p>
        <a href="${elementIt.img}" title="${elementIt.name}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
        <a href="#" title="order" class="details-link"><i class="bi bi-cart-fill"></i></a>
      </div>
    </div>
  </div>`;

  portfolioContainer.innerHTML += element;
    
 }
}
DisplayPinkProducts();
const DisplayAllProducts = ()=>{
    const portfolioContainer = document.querySelector('.portfolio-container');
 for (let i = 0; i < hijabsByColors.allColors.length; i++) {
    const elementIt =  hijabsByColors.allColors[i]
    const element = `<div class="col-lg-4 col-md-6 portfolio-item filter-autres">
    <div class="portfolio-content h-100">
      <img src="${elementIt.img}" class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${elementIt.name}</h4>
        <p style="color: pink; font-weight: bolder; font-size: 22px;">${elementIt.price}</p>
        <a href="${elementIt.img}" title="${elementIt.name}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
        <a href="#" title="order" class="details-link"><i class="bi bi-cart-fill"></i></a>
      </div>
    </div>
  </div>`;

  portfolioContainer.innerHTML += element;
    
 }
}
DisplayAllProducts(); */

const ulDropdown = document.querySelector('.ulDropdown');
ulDropdown.addEventListener('click', (e)=>{
    console.log(e.target);
    if (e.target.id === 'sportBtn') {
        localStorage.setItem('isSport', true);
        localStorage.setItem('isJersey', false);
        localStorage.setItem('isWoven', false);
        localStorage.setItem('isKhamar', false);
        console.log('sport');
    }else if(e.target.id === 'jerseyBtn'){
        localStorage.setItem('isJersey', true);
        localStorage.setItem('isSport', false);
        localStorage.setItem('isWoven', false);
        localStorage.setItem('isKhamar', false);
        console.log('jersey');
    }else if (e.target.id === 'wovenBtn') {
        localStorage.setItem('isWoven', true);
        localStorage.setItem('isSport', false);
        localStorage.setItem('isJersey', false);
        localStorage.setItem('isKhamar', false);
        console.log('woven');
    }else if(e.target.id === 'khamarBtn'){
        localStorage.setItem('isKhamar', true)
        localStorage.setItem('isSport', false);
        localStorage.setItem('isJersey', false);
        localStorage.setItem('isWoven', false);
        console.log('khamar');
    }

})

import {hijabsByColors} from "./datas.js";