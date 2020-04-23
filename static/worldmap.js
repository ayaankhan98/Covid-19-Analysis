const svg = d3.select('#svg2')
const total = d3.select('#iop')
const projection = d3.geoNaturalEarth1();
const pathGenerator = d3.geoPath().projection(projection)

const g = svg.append('g')
g.append('path')
    .attr('class','sphere')
    .attr('d',pathGenerator({type: 'Sphere'}))


svg.call(d3.zoom().on('zoom', () => {
    g.attr("transform", d3.event.transform);
}));


Promise.all([
    d3.json('/world-map-data'),
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'),
    d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/110m.tsv')
]).then(([apiData,topoJSONdata,tsvData]) => {

    const worldMapData = {}

    apiData.Countries.forEach(d => {
        tsvData.forEach(d1 => {
            if ((d1.name === d.Country) || (d1.name === "United States" && d.Country === "United States of America")) {
                worldMapData[d1.iso_n3] = `${d.Country}
                New Confirmed ${d.NewConfirmed}
                Total Confirmed ${d.TotalConfirmed}
                New Deaths ${d.NewDeaths}
                Total Deaths ${d.TotalDeaths}
                New Recovered ${d.NewRecovered}
                Total Recovered ${d.TotalRecovered}
                `
            }
        })

    })
   
    const countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries)
        g.selectAll('path').data(countries.features)
            .enter().append('path')
            .attr('class','country')
            .attr('d',pathGenerator)
        .append('title')
            .text(d => worldMapData[d.id])
})
document.addEventListener('DOMContentLoaded', () => {
    var width = total.node().getBoundingClientRect().width
    var t = document.getElementById('map')
        console.log(width)
    if(t)
    {
        if (width <= 480)
    {
        console.log(width)
        t.parentNode.removeChild(t)
    }
    }



})