window.onload = function () {

    var url = new URLSearchParams(window.location.search);
    var fullName = url.get("FullName");
    document.getElementById("FullName").textContent = fullName;
    var phoneNumbere = url.get("PhoneNumber");
    document.getElementById("PhoneNumber").textContent = phoneNumbere;
    var email = url.get("Email");
    document.getElementById("Email").textContent = email;
    var address = url.get("Address");
    document.getElementById("Address").textContent = address;

    var product1 = url.get("ProductNo1");
    document.getElementById("ProductNo1").textContent = product1;
    var quantity1 = url.get("QuantityNo1");
    document.getElementById("QuantityNo1").textContent = quantity1;

    var product2 = url.get("ProductNo2");
    document.getElementById("ProductNo2").textContent = product2;
    var quantity2 = url.get("QuantityNo2");
    document.getElementById("QuantityNo2").textContent = quantity2;

    var product3 = url.get("ProductNo3");
    document.getElementById("ProductNo3").textContent = product3;
    var quantity3 = url.get("QuantityNo3");
    document.getElementById("QuantityNo3").textContent = quantity3;

    var product4 = url.get("ProductNo4");
    document.getElementById("ProductNo4").textContent = product4;
    var quantity4 = url.get("QuantityNo4");
    document.getElementById("QuantityNo4").textContent = quantity4;

    var product5 = url.get("ProductNo5");
    document.getElementById("ProductNo5").textContent = product5;
    var quantity5 = url.get("QuantityNo5");
    document.getElementById("QuantityNo5").textContent = quantity5;

    //Calculated total for each selection
    var total1 = extractNumber(product1) * parseInt(quantity1);
    document.getElementById("totalPrice1").textContent = "$" + total1;
    var total2 = extractNumber(product2) * parseInt(quantity2);
    document.getElementById("totalPrice2").textContent = "$" + total2;
    var total3 = extractNumber(product3) * parseInt(quantity3);
    document.getElementById("totalPrice3").textContent = "$" + total3;
    var total4 = extractNumber(product4) * parseInt(quantity4);
    document.getElementById("totalPrice4").textContent = "$" + total4;
    var total5 = extractNumber(product5) * parseInt(quantity5);
    document.getElementById("totalPrice5").textContent = "$" + total5;
    //etracts the number only from the string product chosen
    function extractNumber(string) {
        let str = string;
        let numbers = str.match(/\d+/);
        for (var i = 0; i < 5; i++) {
            if (numbers) {
                return parseInt(numbers[i]);
            }
        }        
    }
    var grandTotal = total1 + total2 + total3 + total4 + total5;
    document.getElementById("GrandTotal").textContent = "$" + grandTotal;

    var PhonePay = url.get("PhonePay");
    document.getElementById("PhonePay").textContent = PhonePay;
    var EmailPay = url.get("EmailPay");
    document.getElementById("EmailPay").textContent = EmailPay;
    var check = url.get("check");
    document.getElementById("check").textContent = check;
    var comments = url.get("comments");
    document.getElementById("comments").textContent = comments;
}