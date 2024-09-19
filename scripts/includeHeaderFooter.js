async function loadHTML(file, elementId) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
}

loadHTML('commons/header.html', 'header');
loadHTML('commons/footer.html', 'footer');
