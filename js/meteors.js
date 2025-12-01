function createMeteor() {
    const meteorsContainer = document.getElementById('meteors');
    if (!meteorsContainer) return;

    const meteor = document.createElement('div');
    meteor.className = 'meteor';
    
    // Random starting position
    meteor.style.left = (Math.random() * 120 - 20) + '%';  // -20% to 100%
    meteor.style.top = (Math.random() * 120 - 20) + '%';   // -20% to 100%
    
    // Random animation duration (speed)
    const duration = Math.random() * 2 + 1; // 1-3 seconds
    meteor.style.animationDuration = duration + 's';
    
    meteorsContainer.appendChild(meteor);
    
    // Remove meteor after animation completes
    setTimeout(() => {
        meteor.remove();
    }, duration * 1000);
}

// Create meteors at random intervals
function startMeteors() {
    setInterval(() => {
        createMeteor();
    }, 15);
}

// Start when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startMeteors);
} else {
    startMeteors();
}