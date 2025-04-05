document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');
    const eventsContainer = document.getElementById('events-container');

    // Load events from local storage
    let events = JSON.parse(localStorage.getItem('events')) || [];

    // Display existing events
    displayEvents();

    // Add event listener for form submission
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('event-name').value;
        const date = document.getElementById('event-date').value;
        const time = document.getElementById('event-time').value;
        const location = document.getElementById('event-location').value;
        const description = document.getElementById('event-description').value;

        // Create new event object
        const newEvent = {
            name,
            date,
            time,
            location,
            description
        };

        // Add new event to the array
        events.push(newEvent);

        // Save to local storage
        localStorage.setItem('events', JSON.stringify(events));

        // Clear form fields
        eventForm.reset();

        // Update displayed events
        displayEvents();
    });

    function displayEvents() {
        eventsContainer.innerHTML = '';

        events.forEach((event, index) => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Description:</strong> ${event.description}</p>
                <button onclick="deleteEvent(${index})">Delete</button>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }

    // Add this function to the global scope
    window.deleteEvent = function(index) {
        events.splice(index, 1);
        localStorage.setItem('events', JSON.stringify(events));
        displayEvents();
    }
});