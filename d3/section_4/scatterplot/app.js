let data            =   [
    [ 400, 200 ],
    [ 210,140 ],
    [ 722,300 ],
    [ 70,160 ],
    [ 250,50 ],
    [ 110,280 ],
    [ 699,225 ],
    [ 90, 220 ]
];

let chart_width     =   800;
let chart_height    =   400;
let padding = 50;

//svg
let svg = d3.select("#chart")
            .append('svg')
            .attr('width', chart_width)
            .attr('height', chart_height);

//scales

let x_scale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[0])])
        .range([padding, chart_width - padding * 2]);

let y_scale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[1])])
        .range([chart_height - padding, padding]);

let r_scale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[1])])
        .range([5, 30]);

//axis
let x_axis = d3.axisBottom(x_scale)
                // .ticks(6)
                .tickValues([0, 150, 250, 600, 700]);


svg.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0,' + (chart_height - padding) + ')')
  .call(x_axis);



//circles
svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => x_scale(d[0]))
  .attr('cy', d => y_scale(d[1]))
  .attr('r', d => d[1] / 10)
  .attr('fill', '#D1AB0E');

//labels
svg.append('g')
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => d.join(','))
  .attr('x', d => x_scale(d[0]))
  .attr('y', d => y_scale(d[1]));
