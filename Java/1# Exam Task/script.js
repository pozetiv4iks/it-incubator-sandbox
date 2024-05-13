document.getElementById('check-btn').addEventListener('click', function() {
    let inputText = document.getElementById('text-input').value.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
    if (inputText === '') {
        alert('Please input a value');
        return;
    }

    // Updated code to handle punctuation marks, spaces, and underscores
    inputText = inputText.replace(/[\W_]/g, ''); // Remove non-word characters and underscores

    let isPalindrome = true;
    for (let i = 0; i < inputText.length / 2; i++) {
        if (inputText[i] !== inputText[inputText.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        document.getElementById('result').innerText = document.getElementById('text-input').value + ' is a palindrome';
    } else {
        document.getElementById('result').innerText = document.getElementById('text-input').value + ' is not a palindrome';
    }
});
