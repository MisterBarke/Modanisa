    const portfolioContainer = document.querySelector('.portfolio-container');
import { hijabsChiffon, hijabsJersey, hijabsKhimar, hijabsSport, hijabsWoven } from "./datas.js";
const isJersey = localStorage.getItem('isJersey');
const isWoven = localStorage.getItem('isWoven');
const isKhamar = localStorage.getItem('isKhamar');
const isSport = localStorage.getItem('isSport');
const isChiffon = localStorage.getItem('isChiffon');

let cartArr=[]
const Order = (hijab) => {
    const orderButtons = document.querySelectorAll('.orderBtn');
    orderButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          let id =parseInt(button.getAttribute("data-id"));
          console.log(id);
          const boutique = hijab.find(el=> el.id === id)
          console.log("boutique",boutique);
            const existingCartItem = cartArr.find(cart => cart.id === id);
            if (!existingCartItem && boutique) {
                const cartObject = {
                    item: boutique.name,
                    price: boutique.price,
                    image: boutique.img
                };
                cartArr.push(cartObject);
                localStorage.setItem('cartArr', JSON.stringify(cartArr));
            }
          
        })
    })

};


const DisplayHijabs = (hijab) => {
            for (let i = 0; i < hijab.length; i++) {
                const elementIt = hijab[i];
                const element = `<div class="col-lg-4 col-md-6 portfolio-item filter-${elementIt.filter}">
                <div class="portfolio-content h-100">
                  <img src="${elementIt.img}" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>${elementIt.name}</h4>
                    <p style="color: pink; font-weight: bolder; font-size: 22px;">${elementIt.price}</p>
                    <a href="${elementIt.img}" title="${elementIt.name}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="#" title="order" class="details-link orderBtn" data-id=${elementIt.id} ><i class="bi bi-cart-fill" ></i></a>
                  </div>
                </div>
              </div>`;
                portfolioContainer.innerHTML += element;
            }
            Order(hijab)
    /*  const orderButtons = document.querySelectorAll('.orderBtn');
   orderButtons.forEach((button) => {
     button.addEventListener('click', () => {
       const color = button.getAttribute('data-color');
       const index = parseInt(button.getAttribute('data-index'), 10);
       const element = hijab[color] && hijab[color][index];
       
       if (element) {
         Order(element);
       } else {
         console.error('Element not found or undefined.');
       }
     });
   }); */
}





const ulDropdown = document.querySelector('.ulDropdown');
ulDropdown.addEventListener('click', (e) => {
    if (e.target.id === 'sportBtn') {
        localStorage.setItem('isSport', true);
        localStorage.setItem('isJersey', false);
        localStorage.setItem('isWoven', false);
        localStorage.setItem('isKhamar', false);

    } else if (e.target.id === 'jerseyBtn') {
        localStorage.setItem('isJersey', true);
        localStorage.setItem('isSport', false);
        localStorage.setItem('isWoven', false);
        localStorage.setItem('isKhamar', false);

    } else if (e.target.id === 'wovenBtn') {
        localStorage.setItem('isWoven', true);
        localStorage.setItem('isSport', false);
        localStorage.setItem('isJersey', false);
        localStorage.setItem('isKhamar', false);

    } else if (e.target.id === 'khamarBtn') {
        localStorage.setItem('isKhamar', true)
        localStorage.setItem('isSport', false);
        localStorage.setItem('isJersey', false);
        localStorage.setItem('isWoven', false);

    }

})


// const DisplayHijabsType = (hijabs) => {
//     for (const color in hijabs) {
//         if (hijabs.hasOwnProperty(color)) {
//             // Itérer sur chaque élément de la couleur
//             for (let i = 0; i < hijabs[color].length; i++) {
//                 const elementIt = hijabs[color][i];
//                  Order(elementIt)
//             }
//         }
//     }
// }

if (isWoven && isWoven === 'true') {
    DisplayHijabs(hijabsWoven);
    // DisplayHijabsType(hijabsWoven);
} else
    if (isJersey && isJersey === 'true') {
        DisplayHijabs(hijabsJersey)
        // DisplayHijabsType(hijabsJersey)
    } else

        if (isChiffon && isChiffon === 'true') {
            DisplayHijabs(hijabsChiffon)
            // DisplayHijabsType(hijabsChiffon)
        } else

            if (isSport && isSport === 'true') {
                DisplayHijabs(hijabsSport)
                // DisplayHijabsType(hijabsSport)
            } else
                if (isKhamar && isKhamar === 'true') {
                    DisplayHijabs(hijabsKhimar)
                    // DisplayHijabsType(hijabsKhimar)
                } else

                    if (!(isChiffon || isJersey || isKhamar || isWoven)) {
                        // DisplayHijabs(hijabsKhimar)
                    }





const checkCart = document.getElementById('checkCart');

