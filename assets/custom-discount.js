document.addEventListener('DOMContentLoaded', function(){
  if (window.CustomDiscountInnited !== undefined) {
    return;
  }

  CustomDiscountInnited = true;
  let discountForms = document.querySelectorAll('.custom-discount-form');

  discountForms.forEach(form => {
    let settingsId = form.dataset.settings;
    if (settingsId == null || settingsId == undefined) {
      return;
    }
    let discountsJson = JSON.parse(document.querySelector('.promocodes[data-id="'+settingsId+'"]').innerText);
    let discountedProducts = JSON.parse(document.querySelector('.discounted_product_ids[data-id="'+settingsId+'"]').innerText);
    let formBtn = form.querySelector('[type="submit"]');
    let errorMessage = form.querySelector('.error');

    if (discountsJson.length && discountedProducts.length) {
      formBtn.removeAttribute('disabled');
      
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        formBtn.classList.add('loading');
        formBtn.querySelector('.loading-overlay__spinner').classList.remove('hidden');
        let codeField = form.querySelector('[name="code"]');
  
        if (discountsJson.includes(codeField.value)) {
          if (errorMessage) {
            errorMessage.classList.add('hidden');
          }
          
          addToCartWithADiscount(codeField.value, discountedProducts);
        } else {
          formBtn.classList.remove('loading');
          formBtn.querySelector('.loading-overlay__spinner').classList.add('hidden');

          if (errorMessage) {
            errorMessage.classList.remove('hidden');
          }
        }
        
      });
    }
  });

  function addToCartWithADiscount(discount, discountedProducts) {
    
    fetch(window.Shopify.routes.root + 'discount/' + discount, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    }).then(response => {
    
      let items = [];
      discountedProducts.map(function(id) {
        items.push({
          'id': id,
          'quantity': 1
        });
      });
      
      
      let formData = {
       'items': items
      };
      fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        console.log('code applied');
        location.href = window.Shopify.routes.root + 'cart';
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    });
  }
  
});