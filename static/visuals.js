document.addEventListener('DOMContentLoaded', () => {

    const svg1 = d3.select('#svg-total-cases')
    const svg2 = d3.select('#svg-new-cases')
    const svg3 = d3.select('#svg-total-deaths')
    const svg4 = d3.select('#svg-total-recovered')
    const svg5 = d3.select('#svg-new-recovered')
    const svg6 = d3.select('#svg-new-deaths')
    const width = 350
    const height = 250
    svg1.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    svg2.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    svg3.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    svg4.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    svg5.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    svg6.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 50}
    const render1 = data => {
        const maxi = d3.max(data,d => d.TotalConfirmed)
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([maxi, 0])
                .range([0, height-margin.top-margin.bottom])
        const g = svg1.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('Total Cases');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', '#db3958')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(maxi-d.TotalConfirmed))
                .attr('transform', d => `translate(0,${height-margin.top-margin.bottom - yScale(maxi-d.TotalConfirmed)})`)
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)

    }
    const render2 = data => {
        const maxi = d3.max(data,d => d.NewConfirmed)
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([maxi, 0])
                .range([0,height-margin.top-margin.bottom])
        const g = svg2.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('New Cases');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', '#db3958')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(maxi-d.NewConfirmed))
                .attr('transform', d => `translate(0 , ${height-margin.top-margin.bottom - yScale(maxi-d.NewConfirmed)})`)
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    const render3 = data => {
        const maxi = d3.max(data,d => d.TotalDeaths)
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([maxi, 0])
                .range([0,height-margin.top-margin.bottom])
//        const xScale = d3.scaleLinear()
//            .domain([0, d3.max(data,d => d.TotalConfirmed)])
//            .range([0,width-margin.left-margin.right])
//        const yScale = d3.scaleBand()
//            .domain(data.map(d => d.Country))
//            .range([0,height-margin.top-margin.bottom])
//            .padding(0.1)
        const g = svg3.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('Total Deaths');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', '#bf0000')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(maxi-d.TotalDeaths))
                .attr('transform', d => `translate(0 , ${height-margin.top-margin.bottom - yScale(maxi-d.TotalDeaths)})`)
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    const render4 = data => {
        const maxi = d3.max(data,d => d.TotalRecovered)
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([maxi, 0])
                .range([0,height-margin.top-margin.bottom])
        const g = svg4.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('Total Recovered');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'green')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(maxi-d.TotalRecovered))
                .attr('transform', d => `translate(0 , ${height-margin.top-margin.bottom - yScale(maxi-d.TotalRecovered)})`)
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    const render5 = data => {
        const maxi = d3.max(data,d => d.NewRecovered)
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([maxi, 0])
                .range([0,height-margin.top-margin.bottom])
        const g = svg5.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)

        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('New Recovered');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'green')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(maxi-d.NewRecovered))
                .attr('transform', d => `translate(0 , ${height-margin.top-margin.bottom - yScale(maxi-d.NewRecovered)})`)
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    const render6 = data => {
        const maxi = d3.max(data,d => d.NewDeaths)
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([maxi, 0])
                .range([0,height-margin.top-margin.bottom])
        const g = svg6.append('g')
         .attr('transform', `translate(${margin.left},${margin.top})`)
        g.append('text')
         .attr('transform', `translate(${(width-margin.left-margin.right-50)/2},${height-margin.top-margin.bottom+38})`)
         .text('New Deaths');
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', '#bf0000')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(maxi-d.NewDeaths))
                .attr('transform', d => `translate(0 , ${height-margin.top-margin.bottom - yScale(maxi-d.NewDeaths)})`)
        g.append('g').call(d3.axisLeft(yScale))
        g.append('g').call(d3.axisBottom(xScale))
         .attr('transform', `translate(0,${height-margin.top-margin.bottom})`)
    }
    d3.json('/api')
        .then(data => {
            data.forEach(d => {
                d.TotalConfirmed = +d.TotalConfirmed;
                d.TotalDeaths = +d.TotalDeaths;
                d.TotalRecovered = +d.TotalRecovered;
                d.NewDeaths = +d.NewDeaths;
                d.NewConfirmed = +d.NewConfirmed;
                d.NewRecovered = +d.NewRecovered;
            })
            var data1 = data;
            var data2 = data;
            var data3 = data;
            var data4 = data;
            var data5 = data;
            var data6 = data;
            data1.sort((a,b)=>{
               return b.TotalConfirmed - a.TotalConfirmed
            })
            data1 = data1.slice(0, 5)
            render1(data1)
            data2.sort((a,b)=>{
               return b.NewConfirmed - a.NewConfirmed
            })
            data2 = data2.slice(0, 5)
            render2(data2)
            data3.sort((a,b)=>{
               return b.TotalDeaths - a.TotalDeaths
            })
            data3 = data3.slice(0, 5)
            render3(data3)
            data4.sort((a,b)=>{
               return b.TotalRecovered - a.TotalRecovered
            })
            data4 = data4.slice(0, 5)
            render4(data4)
            data5.sort((a,b)=>{
               return b.NewRecovered - a.NewRecovered
            })
            data5 = data5.slice(0, 5)
            render5(data5)
            data6.sort((a,b)=>{
               return b.NewDeaths - a.NewDeaths
            })
            data6 = data6.slice(0, 5)
            render6(data6)
        })
});
