var prodcont = document.getElementById('prod-conts');
var search = document.getElementById('search');
var prodlist = prodcont.querySelectorAll("div");

search.addEventListener('keyup', function(event) {
    var entervalue = event.target.value.toUpperCase();
    for (var count = 0; count < prodlist.length; count = count + 1) {
        var prodname = prodlist[count].querySelector("p").textContent;
        if (prodname.toUpperCase().indexOf(entervalue) === -1) {
            prodlist[count].style.display = "none";
        } else {
            prodlist[count].style.display = "block";
        }
    }
});
function addToCart(name, image, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: name, image: image, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

