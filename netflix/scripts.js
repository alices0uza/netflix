// Lista de filmes por categorias
const moviesData = {
    action: [
        { title: 'Filme Ação 1', imgUrl: 'https://via.placeholder.com/200x300?text=Ação+1', description: 'Descrição do Filme Ação 1' },
        { title: 'Filme Ação 2', imgUrl: 'https://via.placeholder.com/200x300?text=Ação+2', description: 'Descrição do Filme Ação 2' },
        { title: 'Filme Ação 3', imgUrl: 'https://via.placeholder.com/200x300?text=Ação+3', description: 'Descrição do Filme Ação 3' }
    ],
    drama: [
        { title: 'Filme Drama 1', imgUrl: 'https://via.placeholder.com/200x300?text=Drama+1', description: 'Descrição do Filme Drama 1' },
        { title: 'Filme Drama 2', imgUrl: 'https://via.placeholder.com/200x300?text=Drama+2', description: 'Descrição do Filme Drama 2' },
        { title: 'Filme Drama 3', imgUrl: 'https://via.placeholder.com/200x300?text=Drama+3', description: 'Descrição do Filme Drama 3' }
    ],
    series: [
        { title: 'Série 1', imgUrl: 'https://via.placeholder.com/200x300?text=Série+1', description: 'Descrição da Série 1' },
        { title: 'Série 2', imgUrl: 'https://via.placeholder.com/200x300?text=Série+2', description: 'Descrição da Série 2' },
        { title: 'Série 3', imgUrl: 'https://via.placeholder.com/200x300?text=Série+3', description: 'Descrição da Série 3' }
    ]
};

// Função para criar os filmes dentro de cada categoria
function buildMovies(category, containerId) {
    const container = document.getElementById(containerId);
    moviesData[category].forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="${movie.imgUrl}" alt="${movie.title}" onclick="showPopup('${movie.title}', '${movie.imgUrl}', '${movie.description}')">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            </div>
        `;
        container.appendChild(movieItem);
    });
}

// Função para mover os cards para a esquerda/direita
function moveCards(category, direction) {
    const container = document.getElementById(`${category}-movies`);
    const scrollAmount = 220;  // Quantos pixels mover de cada vez
    container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
    });
}

// Função para exibir o popup
function showPopup(title, imgUrl, description) {
    document.getElementById('movie-popup').style.display = 'flex';
    document.getElementById('popup-img').src = imgUrl;
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('movie-popup').style.display = 'none';
}

// Inicializa a página
window.onload = function() {
    // Preencher as categorias com filmes
    buildMovies('action', 'action-movies');
    buildMovies('drama', 'drama-movies');
    buildMovies('series', 'series-movies');

    // Configuração do banner
    const banner = document.getElementById('banner-section');
    banner.style.backgroundImage = "url('https://via.placeholder.com/1200x500?text=Banner+do+Filme')";
    document.getElementById('banner-title').textContent = 'Nome do Filme';
    document.getElementById('banner-info').textContent = 'Trending | 2023 | Ação';
    document.getElementById('banner-overview').textContent = 'Breve descrição do filme...';
};
