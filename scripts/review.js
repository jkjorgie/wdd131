function setVisitCount() {
    if(localStorage.getItem('visits')) {
        let priorVisits = parseInt(localStorage.getItem('visits'));
        let visits = priorVisits + 1;
        localStorage.setItem('visits', visits);
    } else {
        // If it doesn't exist, set it to 1
        localStorage.setItem('visits', 1);
    }
    
    // Get the number of visits from localStorage and display it
    let count = localStorage.getItem('visits');
    document.querySelector('#review-count').textContent = count;
}

setVisitCount();