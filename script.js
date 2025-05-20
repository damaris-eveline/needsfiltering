document.getElementById('searchBtn').addEventListener('click', function() {
    const disease = document.getElementById('diseaseInput').value.trim();
    if (disease) {
        fetchDiseaseData(disease);
    }
});

function fetchDiseaseData(disease) {
    // In a real implementation, you would call an API here
    // For now, we'll use mock data
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h3>Loading data for ' + disease + '...</h3>';
    
    // Simulate API delay
    setTimeout(() => {
        // Mock data - in a real app, replace with actual API calls
        const mockData = {
            name: disease,
            incidenceRate: Math.floor(Math.random() * 1000) + 50 + " per 100,000 people",
            prevalence: Math.floor(Math.random() * 50000) + 1000 + " cases worldwide",
            marketSize: "$" + (Math.floor(Math.random() * 50) + 1) + " billion",
            mortalityRate: Math.floor(Math.random() * 50) + 1 + "%"
        };
        
        displayResults(mockData);
    }, 1000);
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <h2>${data.name}</h2>
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Incidence Rate</h5>
                        <p class="card-text">${data.incidenceRate}</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Prevalence</h5>
                        <p class="card-text">${data.prevalence}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Market Size</h5>
                        <p class="card-text">${data.marketSize}</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Mortality Rate</h5>
                        <p class="card-text">${data.mortalityRate}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="alert alert-info">
            Note: This demo shows mock data. For real data, you would need to connect to a disease statistics API.
        </div>
    `;
}
