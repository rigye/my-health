// Function to navigate to a different page
function navigateTo(page) {
    window.location.href = page;
}

// Add event listener to the button
document.getElementById('navigateButton').addEventListener('click', function() {
    navigateTo('about.html'); // Change 'about.html' to the desired page
});