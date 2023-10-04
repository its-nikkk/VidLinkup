document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results-container');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query !== '') {
            searchYouTube(query);
        }
    });

    function searchYouTube(query) {
        const apiKey = 'AIzaSyDOSfbIB04GWW3Gv6daCFfJu24HSdFZp5E';
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}&part=snippet&type=video`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayResults(data.items);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function displayResults(videos) {
        resultsContainer.innerHTML = '';

        videos.forEach(video => {
            const videoTitle = video.snippet.title;
            const videoId = video.id.videoId;
            const videoThumbnail = video.snippet.thumbnails.medium.url;

            const videoLink = document.createElement('a');
            videoLink.href = `https://www.youtube.com/watch?v=${videoId}`;
            videoLink.target = '_blank';

            const thumbnailImage = document.createElement('img');
            thumbnailImage.src = videoThumbnail;
            thumbnailImage.alt = videoTitle;

            videoLink.appendChild(thumbnailImage);
            resultsContainer.appendChild(videoLink);
        });
    }
});
