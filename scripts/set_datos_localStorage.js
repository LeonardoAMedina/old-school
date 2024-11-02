fetch('./assets/data.json')
.then(response => {
   return response.json();
})
.then(data => {
    localStorage.setItem('cursos', JSON.stringify(data));
});