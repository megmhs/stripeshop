window.onload = function() {
    var stripe = Stripe('pk_test_fe6gv7RUYh4bKEWyrozSk3x1'); 
    function purchase(event){
        console.log(event.target.className)
        stripe.redirectToCheckout({
        items: [
          {sku: event.target.className, quantity: 1}
          
        ],
        successUrl: 'http://localhost:8000/success.html',
        cancelUrl: 'http://localhost:8000/cancel.html',
      }).then(function (result) {
          console.log(result.error.message)
        }
        )
      }
    document.getElementById("clickme").addEventListener("click", purchase);
    document.getElementById("clickme2").addEventListener("click", purchase);
  }
