// when the DOM is done loading run this
document.addEventListener('DOMContentLoaded', () => {
    const request = new XMLHttpRequest()
    request.open('GET','/api')
    request.onload = () => {
        const data = request.responseText
        console.log(data)
    }
    request.send()
})