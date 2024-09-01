document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('nameInput').value;
    var greetingMessage = 'Hello, ' + name + '! Welcome to my simple website.';
    
    var greetingDiv = document.getElementById('greetingMessage');
    greetingDiv.innerText = greetingMessage;
    greetingDiv.classList.add('show'); // Add 'show' class to trigger fade-in effect
});
