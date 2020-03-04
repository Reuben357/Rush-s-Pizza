var size, crust, toppings, number;
$(document).ready(function () {
    $("#order").click(function (event) {
        event.preventDefault();
        size = parseInt(document.getElementById('sizes').value);
        crust = parseInt(document.getElementById('crusts').value);
        toppings = parseInt(document.getElementById('toppings').value);
        number = parseInt(document.getElementById('number').value);

        var total = size + crust + toppings;
        var grandTotal = total * number;
        console.log(toppings);
        console.log(grandTotal)

        $("ul#list").append(

            "<li>" + "Your pizza size is : " + $("#sizes option:selected").text() + "</li>" +
            "<li>" + "Your pizza crust is : " + $("#crusts option:selected").text() + "</li>" +
            "<li>" + "Your pizza topping is : " + $("#toppings option:selected").text() + "</li>" +
            "<li>" + "Number of pizza ordered is : " + number + "</li>" +
            "<li>" + "Total amount to be paid is : Ksh" + grandTotal + "</li>");

    })

    $(".deliver").click(function () {
        var fields = prompt("Enter your address")
        prompt("Enter your name")
        prompt("Enter your location")
        alert("Your order will be delivered at" + fields)
        alert("Delivery cost is Kshs 100")
    })
    $(".delivernot").click(function () {
        alert("Pick your order in our nearest shop")
    })
});