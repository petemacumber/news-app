document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('portable_newssearch-input');
    var resultsArea = document.querySelector('.portable_newssearch-results');
    var proxyApiUrl = '/././wp-content/plugins/news-search/portable-newssearch-proxy.php'; // needs fixing

    searchInput.addEventListener('input', function() {
        var searchTerm = searchInput.value.trim();
        
        if (searchTerm !== '') {
            var apiUrl = proxyApiUrl + '?query=' + encodeURIComponent(searchTerm);

            fetch(apiUrl)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    displayResults(data.response.results);
                })
                .catch(function(error) {
                    console.error('Error fetching data:', error);
                });
        } else {
            resultsArea.innerHTML = '';
        }
    });

    function displayResults(results) {
        var resultHTML = '';

        results.forEach(function(result) {
            resultHTML += '<div class="news-result">';
            resultHTML += '<h4><a href="' + result.webUrl + '">' + result.webTitle + '</a></h4>';
            resultHTML += '<p>' + result.webPublicationDate + '</p>';
            resultHTML += '<label><input type="checkbox"> Pin</label>';
            resultHTML += '</div>';
        });

        resultsArea.innerHTML = resultHTML;
    }
});
