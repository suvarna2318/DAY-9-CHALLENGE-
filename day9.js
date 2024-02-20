document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    
    const eventList = document.getElementById('event-listing');
    const eventElement = document.createElement('div');
    eventElement.innerHTML = `<h3>${title}</h3><p>${date} at ${time}</p><p>Location: ${location}</p><p>${description}</p>`;
    
    eventList.appendChild(eventElement);
    
    // Clear the form
    this.reset();
});

function searchEvents() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const events = document.getElementById('event-listing').getElementsByTagName('div');
    
    for (let i = 0; i < events.length; i++) {
        let title = events[i].getElementsByTagName('h3')[0];
        if (title) {
            let textValue = title.textContent || title.innerText;
            if (textValue.toLowerCase().indexOf(input) > -1) {
                events[i].style.display = "";
            } else {
                events[i].style.display = "none";
            }
        }       
    }
}
