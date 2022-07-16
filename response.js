var FullNameResponse = document.querySelector("#FullNameResponse").value;
FullNameResponse = localStorage.getItem("FullName");
document.querySelector("#FullNameResponse").textContent = "Full name: " + this.FullNameResponse;

var PhoneNumberResponse = document.querySelector("#PhoneNumberResponse").value;
PhoneNumberResponse = localStorage.getItem("PhoneNumber");
document.querySelector("#PhoneNumberResponse").textContent = "Phone No: " + this.PhoneNumberResponse;

var EmailResponse = document.querySelector("#EmailResponse").value;
EmailResponse = localStorage.getItem("Email");
document.querySelector("#EmailResponse").textContent = "Email: " + this.EmailResponse;

var AddressResponse = document.querySelector("#AddressResponse").value;
AddressResponse = localStorage.getItem("Address");
document.querySelector("#AddressResponse").textContent = "Address: " + this.AddressResponse;


if (localStorage.getItem("PhonePay") == "PhonePay") {
var PhonePay = document.querySelector("#PhonePay");
PhonePay = localStorage.getItem("PhonePay");
    document.querySelector("#PhonePay").textContent = "The selected payment option: " + this.PhonePay;
} 
else {
var EmailPay = document.querySelector("#EmailPay");
EmailPay = localStorage.getItem("EmailPay");
    document.querySelector("#EmailPay").textContent = "The selected payment option: " + this.EmailPay;
}

var check = document.querySelector("#check");
check = localStorage.getItem("check");
document.querySelector("#check").textContent = "I have read and understood the purchase and return policies: Checked";

var commentsResponse = document.querySelector("#commentsResponse").value;
commentsResponse = localStorage.getItem("comments");
document.querySelector("#commentsResponse").textContent = this.commentsResponse;

var ProductNo1Response = localStorage.getItem("ProductNo1");
var ProductNo2Response = localStorage.getItem("ProductNo2");
var ProductNo3Response = localStorage.getItem("ProductNo3");
var ProductNo4Response = localStorage.getItem("ProductNo4");
var ProductNo5Response = localStorage.getItem("ProductNo5");

/* Information of the first row in the table */
if (ProductNo1Response !== 'Select a product') {

    ProductNo1Response = document.querySelector("#ProductNo1Response").value;
    ProductNo1Response = localStorage.getItem("ProductNo1");
    document.querySelector("#ProductNo1Response").textContent = this.ProductNo1Response;

    var QuantityNo1Response = document.querySelector("#QuantityNo1Response").value;
    QuantityNo1Response = localStorage.getItem("QuantityNo1");
    document.querySelector("#QuantityNo1Response").textContent = this.QuantityNo1Response;

    var productPrice1 = parseInt(ProductNo1Response.replace(/\D/g, ''));
    var quantity1 = parseInt(QuantityNo1Response);
    var totalPrice1 = productPrice1 * quantity1;
    document.querySelector("#totalPrice1").textContent = "$" + this.totalPrice1;

    var grandTotal = totalPrice1;
    document.querySelector("#GrandTotal").textContent = "$" + this.grandTotal;

    /* Information of the second row in the table */
    if (ProductNo2Response !== 'Select a product') {

        ProductNo2Response = document.querySelector("#ProductNo2Response").value;
        ProductNo2Response = localStorage.getItem("ProductNo2");
        document.querySelector("#ProductNo2Response").textContent = this.ProductNo2Response;

        var QuantityNo2Response = document.querySelector("#QuantityNo2Response").value;
        QuantityNo2Response = localStorage.getItem("QuantityNo2");
        document.querySelector("#QuantityNo2Response").textContent = this.QuantityNo2Response;

        var productPrice2 = parseInt(ProductNo2Response.replace(/\D/g, ''));
        var quantity2 = parseInt(QuantityNo2Response);
        var totalPrice2 = productPrice2 * quantity2;
        document.querySelector("#totalPrice2").textContent = "$" + this.totalPrice2;

        var grandTotal = totalPrice1 + totalPrice2;
        document.querySelector("#GrandTotal").textContent = "$" + this.grandTotal;

        /* Information of the third row in the table */
        if (ProductNo3Response !== 'Select a product') {

            ProductNo3Response = document.querySelector("#ProductNo3Response").value;
            ProductNo3Response = localStorage.getItem("ProductNo3");
            document.querySelector("#ProductNo3Response").textContent = this.ProductNo3Response;

            var QuantityNo3Response = document.querySelector("#QuantityNo3Response").value;
            QuantityNo3Response = localStorage.getItem("QuantityNo3");
            document.querySelector("#QuantityNo3Response").textContent = this.QuantityNo3Response;

            var productPrice3 = parseInt(ProductNo3Response.replace(/\D/g, ''));
            var quantity3 = parseInt(QuantityNo3Response);
            var totalPrice3 = productPrice3 * quantity3;
            document.querySelector("#totalPrice3").textContent = "$" + this.totalPrice3;

            var grandTotal = totalPrice1 + totalPrice2 + totalPrice3;
            document.querySelector("#GrandTotal").textContent = "$" + this.grandTotal;

            /* Information of the fourth row in the table */
            if (ProductNo4Response !== 'Select a product') {

                ProductNo4Response = document.querySelector("#ProductNo4Response").value;
                ProductNo4Response = localStorage.getItem("ProductNo4");
                document.querySelector("#ProductNo4Response").textContent = this.ProductNo4Response;

                var QuantityNo4Response = document.querySelector("#QuantityNo4Response").value;
                QuantityNo4Response = localStorage.getItem("QuantityNo4");
                document.querySelector("#QuantityNo4Response").textContent = this.QuantityNo4Response;

                var productPrice4 = parseInt(ProductNo4Response.replace(/\D/g, ''));
                var quantity4 = parseInt(QuantityNo4Response);
                var totalPrice4 = productPrice4 * quantity4;
                document.querySelector("#totalPrice4").textContent = "$" + this.totalPrice4;

                var grandTotal = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4;
                document.querySelector("#GrandTotal").textContent = "$" + this.grandTotal;

                /* Information of the fifth row in the table */
                if (ProductNo5Response !== 'Select a product') {

                    ProductNo5Response = document.querySelector("#ProductNo5Response").value;
                    ProductNo5Response = localStorage.getItem("ProductNo5");
                    document.querySelector("#ProductNo5Response").textContent = this.ProductNo5Response;

                    var QuantityNo5Response = document.querySelector("#QuantityNo5Response").value;
                    QuantityNo5Response = localStorage.getItem("QuantityNo5");
                    document.querySelector("#QuantityNo5Response").textContent = this.QuantityNo5Response;

                    var productPrice5 = parseInt(ProductNo5Response.replace(/\D/g, ''));
                    var quantity5 = parseInt(QuantityNo5Response);
                    var totalPrice5 = productPrice5 * quantity5;
                    document.querySelector("#totalPrice5").textContent = "$" + this.totalPrice5;

                    var grandTotal = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4 + totalPrice5;
                    document.querySelector("#GrandTotal").textContent = "$" + this.grandTotal;
                }
                else {
                    document.querySelector("#ProductNo5Response").textContent = "-";
                    document.querySelector("#QuantityNo5Response").textContent = "-";
                    document.querySelector("#totalPrice5").textContent = "-";
                }
            }
            else {
                    document.querySelector("#ProductNo4Response").textContent = "-";
                    document.querySelector("#QuantityNo4Response").textContent = "-";
                document.querySelector("#totalPrice4").textContent = "-";

                    document.querySelector("#ProductNo5Response").textContent = "-";
                    document.querySelector("#QuantityNo5Response").textContent = "-";
                document.querySelector("#totalPrice5").textContent = "-";
            }
        }
        else {
            document.querySelector("#ProductNo3Response").textContent = "-";
            document.querySelector("#QuantityNo3Response").textContent = "-";
            document.querySelector("#totalPrice3").textContent = "-";

            document.querySelector("#ProductNo4Response").textContent = "-";
            document.querySelector("#QuantityNo4Response").textContent = "-";
            document.querySelector("#totalPrice4").textContent = "-";

            document.querySelector("#ProductNo5Response").textContent = "-";
            document.querySelector("#QuantityNo5Response").textContent = "-";
            document.querySelector("#totalPrice5").textContent = "-";
        }
    }
    else {
        document.querySelector("#ProductNo2Response").textContent = "-";
        document.querySelector("#QuantityNo2Response").textContent = "-";
        document.querySelector("#totalPrice2").textContent = "-";

        document.querySelector("#ProductNo3Response").textContent = "-";
        document.querySelector("#QuantityNo3Response").textContent = "-";
        document.querySelector("#totalPrice3").textContent = "-";

        document.querySelector("#ProductNo4Response").textContent = "-";
        document.querySelector("#QuantityNo4Response").textContent = "-";
        document.querySelector("#totalPrice4").textContent = "-";

        document.querySelector("#ProductNo5Response").textContent = "-";
        document.querySelector("#QuantityNo5Response").textContent = "-";
        document.querySelector("#totalPrice5").textContent = "-";
    }
}