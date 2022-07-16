window.onload = function () {

    var url = new URLSearchParams(window.location.search);
    var fullName = url.get("FullName");
    document.getElementById("FullNameResponse").textContent = fullName;
    var product1 = url.get("product1");
    document.getElementById("product1").textContent = product1;
    var quantity1 = url.get("quantity1");
    document.getElementById("quantity1").textContent = quantity1;
    //Calculated total for each selection
    var total1 = extractNumber(product1) * parseInt(quantity1);
    document.getElementById("total1").textContent = "$" + total1;
    //etracts the number only from the string product chosen
    function extractNumber(string) {
        let str = string;
        let numbers = str.match(/\d+/);
        if (numbers) {
            return parseInt(numbers[0]);
        }
    }
}
