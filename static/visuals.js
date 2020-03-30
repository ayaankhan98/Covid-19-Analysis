document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-total-cases')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 40}

    var u = []
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.TotalConfirmed)])
                .range([0,height-margin.top-margin.bottom])
        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
            .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
            .text('Total Cases');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', '#db3958')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.TotalConfirmed))
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)

    }
    d3.json('/api')
        .then(data => {
            data.forEach(d => {
                d.TotalConfirmed = +d.TotalConfirmed
            })
            data.sort((a,b)=>{
                return b.TotalConfirmed - a.TotalConfirmed
            })
            data = data.slice(0, 5)
            render(data)
        })
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-new-cases')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 40}

    var u = []
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.NewConfirmed)])
                .range([0,height-margin.top-margin.bottom])
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('New Cases');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', '#db3958')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.NewConfirmed))
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }

    d3.json('/api')
        .then(data => {
        
            data.forEach(d => {
                d.NewConfirmed = +d.NewConfirmed
            })
            data.sort((a,b)=>{
                return b.NewConfirmed - a.NewConfirmed
            })
            data = data.slice(0, 5)
            render(data)
        })
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-total-deaths')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 40}

    var u = []
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.TotalDeaths)])
                .range([0,height-margin.top-margin.bottom])
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('Total Deaths');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', '#bf0000')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.TotalDeaths))
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    d3.json('/api')
        .then(data => {
            data.forEach(d => {
                d.TotalDeaths = +d.TotalDeaths
            })
            data.sort((a,b)=>{
                return b.TotalDeaths - a.TotalDeaths
            })
            data = data.slice(0, 5)
            render(data)
        })
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-total-recovered')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 40}

    var u = []
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.TotalRecovered)])
                .range([0,height-margin.top-margin.bottom])
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('Total Recovered');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'green')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.TotalRecovered))
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    d3.json('/api')
        .then(data => {
            data.forEach(d => {
                d.TotalRecovered = +d.TotalRecovered
            })
            data.sort((a,b)=>{
                return b.TotalRecovered - a.TotalRecovered
            })
            data = data.slice(0, 5)
            render(data)
        })
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-new-recovered')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 40}

    var u = []
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.NewRecovered)])
                .range([0,height-margin.top-margin.bottom])
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)

        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('New Recovered');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'green')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.NewRecovered))
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    d3.json('/api')
        .then(data => {
            data.forEach(d => {
                d.NewRecovered = +d.NewRecovered
            })
            data.sort((a,b)=>{
                return b.NewRecovered - a.NewRecovered
            })
            data = data.slice(0, 5)
            render(data)
        })
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-new-deaths')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 40}

    var u = []
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.NewDeaths)])
                .range([0,height-margin.top-margin.bottom])
        const g = svg.append('g')
         .attr('transform', `translate(${margin.left},${margin.top})`)

        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('New Deaths');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', '#bf0000')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.NewDeaths))
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    d3.json('/api')
        .then(data => {
            data.forEach(d => {
                d.NewDeaths = +d.NewDeaths
            })
            data.sort((a,b)=>{
                return b.NewDeaths - a.NewDeaths
            })
            data = data.slice(0, 5)
            render(data)
        })
});