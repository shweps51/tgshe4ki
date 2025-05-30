// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    
    // Загрузка всех музеев при старте
    renderMuseums(searchMuseums());

    // Поиск при вводе
    searchInput.addEventListener('input', () => {
        renderMuseums(searchMuseums(searchInput.value));
    });
});

function renderMuseums(museums) {
    const container = document.getElementById('museumsContainer');
    container.innerHTML = '';

    museums.forEach(museum => {
        container.innerHTML += `
            <div class="museum-item">
                <img src="${museum.image}" alt="${museum.title}" class="museum-image">
                <div class="museum-title">${museum.title}</div>
                <div class="museum-description">${museum.description}</div>
            </div>
        `;
    });
}