function openCart() {
    const x = document.querySelector(".cart");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    var nodelist = document.getElementsByClassName("item").length;
  if (nodelist > 3) {
    maxhght = 0
    for (i = 0; i < 3; i++) {
      var elmnt = document.getElementById('cart-items').children[i];
      maxhght += elmnt.offsetHeight;
    }

    document.getElementById("cart-items").setAttribute(
      "style", `height:${maxhght}px;overflow: auto;overflow: hidden;width:100%`);

  var buttonUp = document.getElementById('cart-list-prev');
  var buttonDown = document.getElementById('cart-list-next');

  buttonUp.onclick = function () {
    document.getElementById('cart-items').scrollTop -= 87;
  };
  buttonDown.onclick = function () {
    document.getElementById('cart-items').scrollTop += 87;
  };
  }
  
  }