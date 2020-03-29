// when the DOM is done loading run this


document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('svg')


    const margin = {top: 20, right: 20, bottom: 70, left: 40}
    const width = +svg.attr('width')
    const height = +svg.attr('height')

    const render = data => {
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data,d => d.TotalConfirmed)])
            .range([0,width])
        
        const yScale = d3.scaleBand()
            .domain(data.map(d => d.Country))
            .range([0,height])

        svg.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('y',d => yScale(d.Country))
                .attr('width',d => xScale(d.TotalConfirmed))
                .attr('height',yScale.bandwidth())

    }
    d3.json('/api')
        .then(data => {
         //   console.log(data) 
            data.forEach(d => {
                d.TotalConfirmed = +d.TotalConfirmed
            })
            render(data)
        })


    // const request = new XMLHttpRequest()
    // request.open('GET','/api')
    // request.onload = () => {
    //     const data = (request.responseText)
    //     console.log(data)
    // }
    // request.send()
})