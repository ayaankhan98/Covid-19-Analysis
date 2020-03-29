// when the DOM is done loading run this
document.addEventListener('DOMContentLoaded', () => {
    const request = new XMLHttpRequest()
    request.open('GET','/home')
    request.onload = () => {
        const data = JSON.parse(request.responseText)
        
    }
    request.send()
})