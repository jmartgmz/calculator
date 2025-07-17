// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded successfully!');
    
    // Get references to DOM elements
    const clickBtn = document.getElementById('clickBtn');
    const message = document.getElementById('message');
    
    // Counter for button clicks
    let clickCount = 0;
    
    // Array of random messages
    const messages = [
        'Hello from JavaScript!',
        'Great job clicking!',
        'JavaScript is working perfectly!',
        'Keep clicking for more fun!',
        'You\'re getting the hang of this!',
        'Awesome! The magic of web development!',
        'Click count is growing!',
        'Web development is fun!'
    ];
    
    // Add click event listener to button
    clickBtn.addEventListener('click', function() {
        clickCount++;
        
        // Get random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Update message with click count and random text
        message.textContent = `${randomMessage} (Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''})`;
        
        // Add some visual feedback
        clickBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickBtn.style.transform = 'scale(1)';
        }, 100);
        
        // Change message color based on click count
        if (clickCount <= 3) {
            message.style.color = '#27ae60'; // Green
        } else if (clickCount <= 6) {
            message.style.color = '#f39c12'; // Orange
        } else {
            message.style.color = '#e74c3c'; // Red
        }
        
        console.log(`Button clicked ${clickCount} times`);
    });
    
    // Add hover effects programmatically
    clickBtn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    
    clickBtn.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
    
    // Example of a simple utility function
    function getCurrentTime() {
        return new Date().toLocaleTimeString();
    }
    
    // Log current time when page loads
    console.log(`Page loaded at: ${getCurrentTime()}`);
    
    // Example of working with arrays and objects
    const projectInfo = {
        name: 'HTML/CSS/JavaScript Boilerplate',
        version: '1.0.0',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        created: getCurrentTime()
    };
    
    console.log('Project Info:', projectInfo);
});
