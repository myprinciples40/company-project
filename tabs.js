/* On sale products display */
document.querySelector("#OnSale").style.display = 'block';

function openProduct(event, proStatus) {
    var i, tabContent, tabButton;

    /* Menu deactivation */
    tabContent = document.getElementsByClassName('tabContent');
    for (i = 0; i < tabContent.length; i++) {
       tabContent[i].style.display = 'none';
    }
    /* Activate page when the button has clicked */
    tabButton = document.getElementsByClassName('tabButton');
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace("active", "");
    }
    document.getElementById(proStatus).style.display = "block";
    event.currentTarget.className += "active";
}


