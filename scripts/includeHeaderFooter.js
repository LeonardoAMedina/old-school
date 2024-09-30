async function loadHTML(file, tagName) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementsByTagName(tagName)[0].innerHTML = text;
}

loadHTML('commons/header.html', 'header');
loadHTML('commons/footer.html', 'footer');
