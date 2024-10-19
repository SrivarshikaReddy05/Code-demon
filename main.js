// scripts.js

const mentors = [
    {
        name: 'Dr. Alice Smith',
        experience: '10 years',
        expertise: 'Data Science, Machine Learning',
        availableSlots: ['10:00 AM - 11:00 AM', '1:00 PM - 2:00 PM']
    },
    {
        name: 'Prof. John Doe',
        experience: '8 years',
        expertise: 'Software Engineering, Full Stack Development',
        availableSlots: ['11:00 AM - 12:00 PM', '2:00 PM - 3:00 PM']
    },
    {
        name: 'Dr. Jane Davis',
        experience: '12 years',
        expertise: 'Artificial Intelligence, Robotics',
        availableSlots: ['9:00 AM - 10:00 AM', '3:00 PM - 4:00 PM']
    }
];

// Populate mentor profiles
const mentorList = document.getElementById('mentorList');
mentors.forEach(mentor => {
    let mentorDiv = document.createElement('div');
    mentorDiv.classList.add('mentor');
    mentorDiv.innerHTML = `
        <h3>${mentor.name}</h3>
        <p><strong>Experience:</strong> ${mentor.experience}</p>
        <p><strong>Expertise:</strong> ${mentor.expertise}</p>
        <p><strong>Available Slots:</strong> ${mentor.availableSlots.join(', ')}</p>
    `;
    mentorList.appendChild(mentorDiv);
});

// Populate mentor dropdown in booking form
const mentorSelect = document.getElementById('mentorSelect');
mentors.forEach(mentor => {
    let option = document.createElement('option');
    option.value = mentor.name;
    option.text = mentor.name;
    mentorSelect.appendChild(option);
});

// Populate available slots based on mentor selection
mentorSelect.addEventListener('change', function() {
    const selectedMentor = mentors.find(mentor => mentor.name === mentorSelect.value);
    const availableSlots = document.getElementById('availableSlots');
    availableSlots.innerHTML = ''; // Clear previous slots
    selectedMentor.availableSlots.forEach(slot => {
        let option = document.createElement('option');
        option.value = slot;
        option.text = slot;
        availableSlots.appendChild(option);
    });
});

// Handle booking
const bookSessionButton = document.getElementById('bookSession');
bookSessionButton.addEventListener('click', function() {
    const selectedMentor = mentorSelect.value;
    const selectedSlot = document.getElementById('availableSlots').value;
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Simple confirmation message
    confirmationMessage.textContent = Session booked with ${selectedMentor} at ${selectedSlot}.;

    // Show confirmation
    document.getElementById('confirmation').style.display = 'block';

    // Remove the booked slot from the list
    const mentor = mentors.find(mentor => mentor.name === selectedMentor);
    mentor.availableSlots = mentor.availableSlots.filter(slot => slot !== selectedSlot);
    const availableSlots = document.getElementById('availableSlots');
    availableSlots.innerHTML = ''; // Clear previous slots
    mentor.availableSlots.forEach(slot => {
        let option = document.createElement('option');
        option.value = slot;
        option.text = slot;
        availableSlots.appendChild(option);
    });
});