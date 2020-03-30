document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-total-cases')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 100}

    var u = []
//    const getCountry = (data,width,param) => {
//        var n = width/param
//        n = Math.round(n)
//        console.log(n)
//        console.log(data[n-1]['Country'])
//        return data[n-1]['Country']
//    }
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.TotalConfirmed)])
                .range([0,height-margin.top-margin.bottom])
//        const xScale = d3.scaleLinear()
//            .domain([0, d3.max(data,d => d.TotalConfirmed)])
//            .range([0,width-margin.left-margin.right])
//        const yScale = d3.scaleBand()
//            .domain(data.map(d => d.Country))
//            .range([0,height-margin.top-margin.bottom])
//            .padding(0.1)
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        const mouseoverEvent = () => {
            console.log(d3.select(this))
        }
        const mouseoutEvent = () => {
            d3.select(this).attr('fill', 'lightblue')
        }
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'blue')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.TotalConfirmed))
                .on('mouseover', mouseoverEvent)
                .on('mouseout', mouseoutEvent)

        // console.log(M)
        // console.log()

        g.append('g').call(d3.axisLeft(yScale))
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
            data.sort((a,b)=>{
                return b.TotalConfirmed - a.TotalConfirmed
            })
            data = data.slice(0, 5)
            render(data)
        })


    // const request = new XMLHttpRequest()
    // request.open('GET','/api')
    // request.onload = () => {
    //     const data = (request.responseText)
    //     console.log(data)
    // }
    // request.send()
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-new-cases')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 100}

    var u = []
//    const getCountry = (data,width,param) => {
//        var n = width/param
//        n = Math.round(n)
//        console.log(n)
//        console.log(data[n-1]['Country'])
//        return data[n-1]['Country']
//    }
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.NewConfirmed)])
                .range([0,height-margin.top-margin.bottom])
//        const xScale = d3.scaleLinear()
//            .domain([0, d3.max(data,d => d.TotalConfirmed)])
//            .range([0,width-margin.left-margin.right])
//        const yScale = d3.scaleBand()
//            .domain(data.map(d => d.Country))
//            .range([0,height-margin.top-margin.bottom])
//            .padding(0.1)
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        const mouseoverEvent = () => {
            console.log(d3.select(this))
        }
        const mouseoutEvent = () => {
            d3.select(this).attr('fill', 'lightblue')
        }
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'blue')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.NewConfirmed))
                .on('mouseover', mouseoverEvent)
                .on('mouseout', mouseoutEvent)

        // console.log(M)
        // console.log()

        g.append('g').call(d3.axisLeft(yScale))
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
                d.NewConfirmed = +d.NewConfirmed
                //console.log(d.TotalConfirmed)
            })
            data.sort((a,b)=>{
                return b.NewConfirmed - a.NewConfirmed
            })
            data = data.slice(0, 5)
            render(data)
        })


    // const request = new XMLHttpRequest()
    // request.open('GET','/api')
    // request.onload = () => {
    //     const data = (request.responseText)
    //     console.log(data)
    // }
    // request.send()
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-total-deaths')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 100}

    var u = []
//    const getCountry = (data,width,param) => {
//        var n = width/param
//        n = Math.round(n)
//        console.log(n)
//        console.log(data[n-1]['Country'])
//        return data[n-1]['Country']
//    }
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.TotalDeaths)])
                .range([0,height-margin.top-margin.bottom])
//        const xScale = d3.scaleLinear()
//            .domain([0, d3.max(data,d => d.TotalConfirmed)])
//            .range([0,width-margin.left-margin.right])
//        const yScale = d3.scaleBand()
//            .domain(data.map(d => d.Country))
//            .range([0,height-margin.top-margin.bottom])
//            .padding(0.1)
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        const mouseoverEvent = () => {
            console.log(d3.select(this))
        }
        const mouseoutEvent = () => {
            d3.select(this).attr('fill', 'lightblue')
        }
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'red')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.TotalDeaths))
                .on('mouseover', mouseoverEvent)
                .on('mouseout', mouseoutEvent)

        // console.log(M)
        // console.log()

        g.append('g').call(d3.axisLeft(yScale))
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
                d.TotalDeaths = +d.TotalDeaths
                //console.log(d.TotalConfirmed)
            })
            data.sort((a,b)=>{
                return b.TotalDeaths - a.TotalDeaths
            })
            data = data.slice(0, 5)
            render(data)
        })


    // const request = new XMLHttpRequest()
    // request.open('GET','/api')
    // request.onload = () => {
    //     const data = (request.responseText)
    //     console.log(data)
    // }
    // request.send()
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-total-recovered')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 100}

    var u = []
//    const getCountry = (data,width,param) => {
//        var n = width/param
//        n = Math.round(n)
//        console.log(n)
//        console.log(data[n-1]['Country'])
//        return data[n-1]['Country']
//    }
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.TotalRecovered)])
                .range([0,height-margin.top-margin.bottom])
//        const xScale = d3.scaleLinear()
//            .domain([0, d3.max(data,d => d.TotalConfirmed)])
//            .range([0,width-margin.left-margin.right])
//        const yScale = d3.scaleBand()
//            .domain(data.map(d => d.Country))
//            .range([0,height-margin.top-margin.bottom])
//            .padding(0.1)
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        const mouseoverEvent = () => {
            console.log(d3.select(this))
        }
        const mouseoutEvent = () => {
            d3.select(this).attr('fill', 'lightblue')
        }
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'green')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.TotalRecovered))
                .on('mouseover', mouseoverEvent)
                .on('mouseout', mouseoutEvent)

        // console.log(M)
        // console.log()

        g.append('g').call(d3.axisLeft(yScale))
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
                d.TotalRecovered = +d.TotalRecovered
                //console.log(d.TotalConfirmed)
            })
            data.sort((a,b)=>{
                return b.TotalRecovered - a.TotalRecovered
            })
            data = data.slice(0, 5)
            render(data)
        })


    // const request = new XMLHttpRequest()
    // request.open('GET','/api')
    // request.onload = () => {
    //     const data = (request.responseText)
    //     console.log(data)
    // }
    // request.send()
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-new-recovered')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 100}

    var u = []
//    const getCountry = (data,width,param) => {
//        var n = width/param
//        n = Math.round(n)
//        console.log(n)
//        console.log(data[n-1]['Country'])
//        return data[n-1]['Country']
//    }
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.NewRecovered)])
                .range([0,height-margin.top-margin.bottom])
//        const xScale = d3.scaleLinear()
//            .domain([0, d3.max(data,d => d.TotalConfirmed)])
//            .range([0,width-margin.left-margin.right])
//        const yScale = d3.scaleBand()
//            .domain(data.map(d => d.Country))
//            .range([0,height-margin.top-margin.bottom])
//            .padding(0.1)
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        const mouseoverEvent = () => {
            console.log(d3.select(this))
        }
        const mouseoutEvent = () => {
            d3.select(this).attr('fill', 'lightblue')
        }
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'green')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.NewRecovered))
                .on('mouseover', mouseoverEvent)
                .on('mouseout', mouseoutEvent)

        // console.log(M)
        // console.log()

        g.append('g').call(d3.axisLeft(yScale))
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
                d.NewRecovered = +d.NewRecovered
                //console.log(d.TotalConfirmed)
            })
            data.sort((a,b)=>{
                return b.NewRecovered - a.NewRecovered
            })
            data = data.slice(0, 5)
            render(data)
        })


    // const request = new XMLHttpRequest()
    // request.open('GET','/api')
    // request.onload = () => {
    //     const data = (request.responseText)
    //     console.log(data)
    // }
    // request.send()
});
document.addEventListener('DOMContentLoaded', () => {

    const svg = d3.select('#svg-new-deaths')
    const width = 350
    const height = 250
    svg.attr('height', height)
        .attr('width', width)
        .attr('style', 'margin-left: 50px')
    const margin = {top: 40, right: 0, bottom: 40, left: 100}

    var u = []
//    const getCountry = (data,width,param) => {
//        var n = width/param
//        n = Math.round(n)
//        console.log(n)
//        console.log(data[n-1]['Country'])
//        return data[n-1]['Country']
//    }
    const render = data => {
        const xScale = d3.scaleBand()
                .domain(data.map(d => d.Country))
                .range([0,width-margin.left-margin.right])
                .padding(0.1)
        const yScale = d3.scaleLinear()
                .domain([0, d3.max(data,d => d.NewDeaths)])
                .range([0,height-margin.top-margin.bottom])
//        const xScale = d3.scaleLinear()
//            .domain([0, d3.max(data,d => d.TotalConfirmed)])
//            .range([0,width-margin.left-margin.right])
//        const yScale = d3.scaleBand()
//            .domain(data.map(d => d.Country))
//            .range([0,height-margin.top-margin.bottom])
//            .padding(0.1)
        const g = svg.append('g').
        attr('transform', `translate(${margin.left},${margin.top})`)
        const mouseoverEvent = () => {
            console.log(d3.select(this))
        }
        const mouseoutEvent = () => {
            d3.select(this).attr('fill', 'lightblue')
        }
        g.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('fill', 'red')
                .attr('x',d => xScale(d.Country))
                .attr('width',xScale.bandwidth())
                .attr('height',d => yScale(d.NewDeaths))
                .on('mouseover', mouseoverEvent)
                .on('mouseout', mouseoutEvent)

        // console.log(M)
        // console.log()

        g.append('g').call(d3.axisLeft(yScale))
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
                d.NewDeaths = +d.NewDeaths
                //console.log(d.TotalConfirmed)
            })
            data.sort((a,b)=>{
                return b.NewDeaths - a.NewDeaths
            })
            data = data.slice(0, 5)
            render(data)
        })


    // const request = new XMLHttpRequest()
    // request.open('GET','/api')
    // request.onload = () => {
    //     const data = (request.responseText)
    //     console.log(data)
    // }
    // request.send()
});