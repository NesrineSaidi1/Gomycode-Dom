function somme() {
  var sum = document.getElementsByClassName("price");
  var quant = document.getElementsByClassName("Quant");
  for (let i = 0; i < sum.length; i++) {
    for (let j = i; j <= i; j++) {
      var result = parseInt(sum[i].innerText) * quant[j].value;
    }
    sum[i].innerText = result;
  }
}

var likes = document.getElementsByClassName("like");
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.firstChild.style.color == "red") {
      like.firstChild.style.color = "black";
    } else {
      like.firstChild.style.color = "red";
    }
  });
}

var plus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plus.length; i++) {
  let oneplus = plus[i];
  oneplus.addEventListener("click", function () {
    oneplus.previousElementSibling.value++;
    somme();
    TotalPrice();
  });
}

var minus = document.getElementsByClassName("minus-btn");

for (let i = 0; i < minus.length; i++) {
  let oneminus = minus[i];
  oneminus.addEventListener("click", function () {
    if (oneminus.nextElementSibling.value > 1) {
      oneminus.nextElementSibling.value--;
    }
    somme();
    TotalPrice();
  });
}

var deletes = document.getElementsByClassName("delete");
console.log(deletes);
for (let i = 0; i < deletes.length; i++) {
  let onedelete = deletes[i];
  onedelete.addEventListener("click", function () {
    onedelete.parentElement.remove();
  });
}
function TotalPrice() {
  var ItemContainer = document.getElementsByClassName("items")[0];
  var cartItems = document.getElementsByClassName("Item");
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i];
    var priceElement = cartItem.getElementsByClassName("price")[0];
    var quantityElement = cartItem.getElementsByClassName("Quant")[0];
    var price = parseFloat(priceElement.innerText);
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementById("finalPrice").value = total;
}
