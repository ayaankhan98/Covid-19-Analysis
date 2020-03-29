// when the DOM is done loading run this


document.addEventListener('DOMContentLoaded', () => {

    const request = new XMLHttpRequest()
    request.open('GET','/api')
    request.onload = () => {
        const data = request.responseText
        console.log(data)
        const svg = d3.select('svg')
        const bar = svg.append('rect')
            .attr('x','200')
            .attr('y','200')
            .attr('height','500')
            .attr('width','70')
            .style('fill','steelblue')
    }
    request.send()
})