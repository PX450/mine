// Wait for the entire page to load before running the script
document.addEventListener("DOMContentLoaded", function() {

    // --- TODO: SET YOUR MAGIC WORD HERE ---
    // This is the *correct* answer she needs to type.
    // Make it all lowercase for easier checking.
    const correctMagicWord = "sankari"; // e.g., "sir-fluffington" or "paris2024"

    // Get all the elements we need to work with
    const lockForm = document.getElementById("lock-form");
    const magicWordInput = document.getElementById("magic_word");
    const errorMessage = document.getElementById("error-message");
    
    const lockScreen = document.getElementById("lock-screen");
    const giftScreen = document.getElementById("gift-screen");
    const footer = document.getElementById("footer");

    // --- 1. Set the copyright year automatically ---
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // --- 2. Listen for the form to be submitted ---
    lockForm.addEventListener("submit", function(event) {
        // Stop the form from actually submitting and reloading the page
        event.preventDefault();

        // Get the word she typed, make it lowercase, and remove extra spaces
        const typedWord = magicWordInput.value.trim().toLowerCase();

        // --- 3. Check if the word is correct ---
        if (typedWord === correctMagicWord) {
            // CORRECT!
            
            // Add a "fading out" animation to the lock screen
            lockScreen.style.transition = "opacity 0.5s ease-out";
            lockScreen.style.opacity = "0";

            // After the fade-out, hide it and show the gift
            setTimeout(() => {
                lockScreen.style.display = "none";
                
                // Show the gift screen and footer with a "fade in" effect
                giftScreen.style.display = "block";
                footer.style.display = "block";
                
                // We use a tiny delay to ensure the 'display' change
                // registers before we add the opacity animation.
                setTimeout(() => {
                    giftScreen.style.transition = "opacity 0.5s ease-in";
                    giftScreen.style.opacity = "1";
                    footer.style.transition = "opacity 0.5s ease-in";
                    footer.style.opacity = "1";
                }, 20);

            }, 500); // 500ms matches the transition time

        } else {
            // INCORRECT!
            errorMessage.textContent = "That's not it, silly! Try again. ❤️";
            
            // Clear the error message after 3 seconds
            setTimeout(() => {
                errorMessage.textContent = "";
            }, 3000);
        }
    });

    // --- 4. Prepare the gift screen for its fade-in ---
    // (We set its opacity to 0 so it can fade in)
    giftScreen.style.opacity = "0";
    footer.style.opacity = "0";
});