document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const container = document.getElementById('museumsContainer');

    // Загрузка всех музеев при старте
    fetchMuseums('');

    // Поиск при нажатии кнопки
    searchButton.addEventListener('click', () => {
        fetchMuseums(searchInput.value);
    });

    // Поиск при вводе (реализуйте debounce для оптимизации)
    searchInput.addEventListener('input', () => {
        fetchMuseums(searchInput.value);
    });
});

async function fetchMuseums(query) {
    try {
        const response = await fetch(`http://localhost:8000/api/museums?q=${encodeURIComponent(query)}`);
        const museums = await response.json();
        renderMuseums(museums);
    } catch (error) {
        console.error('Ошибка:', error);
        container.innerHTML = '<p class="no-results">Ошибка загрузки данных</p>';
    }
}

function renderMuseums(museums) {
    const container = document.getElementById('museumsContainer');
    container.innerHTML = '';

    museums.forEach(museum => {
        container.innerHTML += `
            <div class="museum-item">
                <img src="${museum.image}" alt="${museum.title}" class="museum-image">
                <div class="museum-title">${museum.title}</div>
                <div class="museum-description">
                    ${museum.description}
                </div>
            </div>
        `;
    });
}