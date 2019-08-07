// INSERT THIS CODE INTO YOUR SCRIPTS.JS FILE


// Favorite Functionality for SEARCH RESULTS Pages
$('.favorite > i').click(function() {
    $(this).toggleClass('active');
    $('.header__favorite').attr('data-title', 'Added to shortlist!').attr('data-value', 'favorite');
});	

// Reset to Default for SEARCH RESULTS Pages
$('.favorite > i').click(function() {
    if( ! $(this).hasClass('active')) {
        $('.header__favorite').removeClass('active').attr('data-title', 'Click to add this boat to your shortlist!').removeAttr('data-value', 'favorite');
    }
});	


// 	Favorite Functionality for DETAIL Pages
$('.favorite xs--1of10 xs--align-right > i').click(function() {
    $(this).toggleClass('active');
    $('#header__favorite').attr('data-title', 'Added to shortlist!').attr('data-value', 'favorite');
});	

// 	Reset to Default for DETAIL Pages
$('.favorite xs--1of10 xs--align-right > i').click(function() {
    if( ! $(this).hasClass('active')) {
        $('#header__favorite').removeClass('active').attr('data-title', 'Click to add this boat to your shortlist!').removeAttr('data-value', 'favorite');
    }
});	

// SHORTLIST MODAL (can be converted to jquery)
// 
// Get the modal
let modal = document.getElementById("shortlist-modal");

// Get the button that opens the modal
let btn = document.getElementById("shortlist-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal 
btn.onclick = () => {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}