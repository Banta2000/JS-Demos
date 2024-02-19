const input = document.getElementById('input')

function revereString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = revereString(value)
    
    if (value === reverse) {
        alert('Palindrome')
    } else {
        alert('Not a palindrome')
    }
    
    input.value = ""
}
