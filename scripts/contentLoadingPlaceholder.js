document.addEventListener("DOMContentLoaded", function() {
    // Code to show a loading spinner or message while content is being loaded
    const mainContent = document.querySelector("main");
    mainContent.innerHTML = "<p>Loading content...</p>";

    // Simulate content loading delay
    setTimeout(function() {
        // Replace the loading message with actual content
        mainContent.innerHTML = `
            <h1>Bienvenido a la Página de Inicio</h1>
            <p>Este es el contenido principal de la página de inicio.</p>
        `;
    }, 2000); // Simulate a 2-second delay
});