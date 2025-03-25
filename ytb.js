document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-btn');
    const actionButtons = document.querySelectorAll('.action-btn');

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchYouTube();
        }
    });

    searchButton.addEventListener('click', searchYouTube);

    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            goToLink('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        });
    });

    function searchYouTube() {
        const query = searchInput.value;
        if (query) {
            const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            window.location.href = searchUrl;
        }
    }

    function goToLink(url) {
        window.location.href = url;
    }
});