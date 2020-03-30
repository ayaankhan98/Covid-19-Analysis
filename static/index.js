// when the DOM is done loading run this


document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('svg')


    const margin = {top: 20, right: 20, bottom: 70, left: 80}
    const width = +svg.attr('width')
    const height = +svg.attr('height')
    var u = []
//    const getCountry = (data,width,param) => {
//        var n = width/param
//        n = Math.round(n)
//        console.log(n)
//        console.log(data[n-1]['Country'])
//        return data[n-1]['Country']
//    }
    const render = data => {
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data,d => d.TotalConfirmed)])
            .range([0,width-margin.left-margin.right])
        const yScale = d3.scaleBand()
            .domain(data.map(d => d.Country))
            .range([0,height-margin.top-margin.bottom])
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        const t = d3.select('.op')


        const mouseoverHandler = (d) =>{
            t.transition().style('opacity', 0.8);
            t.html(`<h4>${d.Country}</h4> -- <h5>Total Confirmed Cases = ${d.TotalConfirmed}</h5>`);
            d3.select(this).style('background-color', 'red');
        }
        const mouseleaveHandler = (d) =>{
            t.html("")
        }
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'lightblue')
                .attr('y',d => yScale(d.Country))
                .attr('width',d => xScale(d.TotalConfirmed))
                .attr('height',yScale.bandwidth())
                .on('mouseenter', mouseoverHandler)
                .on('mouseleave', setTimeout(mouseleaveHandler, 30))

        var i = yScale.bandwidth()
        const c = yScale.bandwidth()
        data.forEach(d => {
            u.push([i-(c/2),d.TotalConfirmed])
            i += yScale.bandwidth()
        }
         )
        var M = `M${u[0][1]} ${u[0][0]}`
        // console.log(M)
        var id = 1
        u.forEach((i) => {
            g.append('circle')
                .attr('cx', `${xScale(i[1])}`)
                .attr('cy', `${i[0]}`)
                .attr('r', '2')
                .attr('fill', 'red')
                //.attr('class', `popover-${id}`)
            M += ` L${xScale(i[1])} ${i[0]}`
        })
        // console.log(M)
        // console.log()

        g.append('path')
            .attr('fill', 'none')
            .attr('d', M )
            .attr('stroke', 'black')
            .attr('stroke-length', '20')
            .attr('stroke-linejoin', 'arcs')
        //g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))

//        data.forEach( i => {
//        var popover = document.querySelector(`.popover-${i.Country}`)
//        if(popover)
//        {
//            popover.addEventListener('click', () =>{
//            console.log("Hello")
//        })
//        }
//    })
    }
    //var popover = document.querySelector('')
    d3.json('/api')
        .then(data => {
         //   console.log(data)
            data.forEach(d => {
                //console.log(d)
                d.TotalConfirmed = +d.TotalConfirmed
                //console.log(d.TotalConfirmed)
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