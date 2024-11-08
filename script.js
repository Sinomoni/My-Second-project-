
/*THSI IS THE CHAT BOT SIMULATIONS STRATEGIES*/
// Check if the chat elements exist before adding event listeners
if (document.getElementById('chatInput')) {
    // Chat bot simulation strategies
    const councilResponses = {
        // Greetings
        "hello": "Hello! How can we assist you today?",
        "hi": "Hi there! How can we help you?",
        "hey": "Hey! How can we assist you today?",
        "good morning": "Good morning! Hope you're doing well. How can we help you today?",
        "good afternoon": "Good afternoon! How can we support you today?",
        "good evening": "Good evening! We're here to help. What can we do for you?",
        "good night": "Good night! Remember, we're always here if you need us.",
        "greetings": "Greetings! How may we assist you today?",
    
        // General Help
        "help": "We're here to help! Please tell us what you need assistance with.",
        "support": "Support is here! What do you need help with today?",
        "assistance": "We are here to assist you with any concerns you might have. What can we do for you?",
    
        // Mental Health Issues
        "stress": "It's normal to feel stressed, especially during busy times. Have you tried our stress management tools, or would you like to talk to a counselor?",
        "anxiety": "Anxiety can be tough to manage. We recommend trying some breathing exercises or speaking with a counselor. Would you like more information?",
        "depression": "Depression is a serious issue. Please know that you are not alone and there are resources available to help you. Would you like to speak to a counselor or learn more about coping strategies?",
        "loneliness": "Feeling lonely can be difficult. Remember, you're not alone. Would you like to join one of our student support groups or talk to someone about how you're feeling?",
        "bullying": "Bullying is not acceptable, and we're here to support you. Would you like to report the bullying or speak with someone who can help?",
        "relationship issues": "Relationship issues can be challenging. Talking to a counselor might help you navigate through this. Would you like more information?",
        "academic stress": "Academic stress is common, especially during exams or project deadlines. Would you like to explore some study tips or speak to a counselor about managing stress?",
        "panic attacks": "Panic attacks can be frightening, but there are techniques that can help you manage them. Would you like to learn more about these or speak to a counselor?",
    
        // Specific Concerns
        "self-harm": "If you’re feeling like self-harm, please reach out to someone. We have resources and people ready to help. Would you like to speak to a counselor?",
        "suicide": "If you are thinking about suicide, please reach out immediately. You are not alone, and there is help available. Would you like to speak to someone now?",
        "eating disorders": "Eating disorders are serious, and support is available. Would you like information on resources or to speak to a counselor?",
        "addiction": "Addiction can be challenging, but you don’t have to face it alone. Would you like to explore some resources or speak to a counselor?",
    
        // Encouragement and Resources
        "resources": "You can find various resources in the Resources section of our app, including contact information for counselors, support groups, and mental health tools.",
        "tips": "We have tips on managing stress, anxiety, and other concerns in our app's Resources section. Would you like to check them out?",
        "counselor": "Would you like to schedule a session with a counselor? We’re here to help you through whatever you’re facing.",
        "group support": "We offer group support sessions that can help you connect with others who understand what you're going through. Would you like more information on joining a group?",
    
        // Farewells
        "bye": "Goodbye! Remember, we're always here if you need support.",
        "goodbye": "Goodbye! Take care, and reach out if you need anything.",
        "see you": "See you later! Don’t hesitate to contact us if you need help.",
        "talk later": "Talk to you later! Remember, we’re here for you anytime.",
    
        // Default response for unrecognized inputs
        "default": "I'm not sure I understand. Could you please provide more details or try rephrasing your request?"
    };
    

    // Initialize chat messages from local storage
    let chatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    // Function to render chat messages
    function renderChat() {
        const chatHistory = document.getElementById('chatHistory');
        chatHistory.innerHTML = ''; // Clear previous messages
        chatMessages.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.textContent = `${msg.user}: ${msg.message}`;
            chatHistory.appendChild(messageElement);
        });
    }

    // Function to simulate Student Council responses
    function getCouncilResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        for (const key in councilResponses) {
            if (lowerCaseMessage.includes(key)) {
                return councilResponses[key];
            }
        }
        return "I'm sorry, I didn't understand that. Can you please elaborate?";
    }

    // Function to handle message sending
    function sendMessage() {
        const messageInput = document.getElementById('chatInput');
        const message = messageInput.value.trim();
        if (message) {
            const newMessage = { user: 'Anonymous', message: message };
            chatMessages.push(newMessage);
            localStorage.setItem('chatMessages', JSON.stringify(chatMessages)); // Save to local storage
            renderChat(); // Re-render chat
            messageInput.value = ''; // Clear input

            // Simulate Student Council response after a delay
            setTimeout(() => {
                const councilMessage = getCouncilResponse(message);
                const councilResponse = { user: 'Student Counselor', message: councilMessage };
                chatMessages.push(councilResponse);
                localStorage.setItem('chatMessages', JSON.stringify(chatMessages)); // Save to local storage
                renderChat(); // Re-render chat
            }, 1000); // 1 second delay for response
        }
    }

    // Function to show the modal
    function showModal() {
     document.getElementById('clearChatModal').style.display = 'block';
    }

    // Function to clear chat
    function clearChat() {
        chatMessages = []; // Clear the chatMessages array
        localStorage.removeItem('chatMessages'); // Remove chat history from local storage
        renderChat(); // Re-render chat to show empty state
        closeModal(); // Close the modal after clearing
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById('clearChatModal').style.display = 'none';
    }

    // Event listeners for chat functionality
    document.getElementById('sendMessage').addEventListener('click', sendMessage);
    document.getElementById('chatInput').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
    document.getElementById('clearChat').addEventListener('click', showModal);
    document.getElementById('confirmClearChat').addEventListener('click', clearChat);
    document.getElementById('cancelClearChat').addEventListener('click', closeModal);
    document.querySelector('.close').addEventListener('click', closeModal);

    // Initial render
    renderChat();
}

// Mood Tracker Functionality (if applicable)
if (document.getElementById('moodForm')) {
    document.getElementById('moodForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const mood = document.getElementById('mood').value;
        const notes = document.getElementById('moodNotes').value;
        alert(`Mood: ${mood}\nNotes: ${notes}`);
        // You can save the data to a database or local storage here
    });
}

// Breathing Exercise Functionality (if applicable)
if (document.getElementById('breathingInstructions')) {
    function startBreathingExercise() {
        const instructions = document.getElementById('breathingInstructions');
        instructions.textContent = "Inhale slowly... Hold... Exhale slowly...";
        setTimeout(() => {
            instructions.textContent = "Repeat the breathing exercise until you feel calm.";
        }, 10000); // 10-second breathing exercise
    }
}

/**Navigations Highlight active section selected by the user */
document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});


/* script.js
document.getElementById('moodForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mood = document.getElementById('mood').value;
    const notes = document.getElementById('moodNotes').value;
    alert(`Mood: ${mood}\nNotes: ${notes}`);
    // You can save the data to a database or local storage here
});

function startBreathingExercise() {
    const instructions = document.getElementById('breathingInstructions');
    instructions.textContent = "Inhale slowly... Hold... Exhale slowly...";
    setTimeout(() => {
        instructions.textContent = "Repeat the breathing exercise until you feel calm.";
    }, 10000); // 10-second breathing exercise
}

*/

/*MOOD TRACKER SECTION */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('moodForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('moodDate').value;
        const moodLevel = document.getElementById('moodLevel').value;
        const notes = document.getElementById('moodNotes').value;

        if (date && moodLevel) {
            // Example: Save the mood log (in a real app, you would send this data to a server)
            const moodLogs = document.querySelector('.mood-logs');
            const moodLog = document.createElement('div');
            moodLog.classList.add('mood-log');
            moodLog.innerHTML = `
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Mood Level:</strong> ${moodLevel}</p>
                <p><strong>Notes:</strong> ${notes}</p>
            `;
            moodLogs.appendChild(moodLog);

            // Clear form fields
            form.reset();
        }
    });
});
