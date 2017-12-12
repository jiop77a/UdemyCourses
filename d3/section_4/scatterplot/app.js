/* eslint camelcase: 0 */
/* globals d3 */

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

let time_parse = d3.timeParse('%m/%d/%Y');
let time_format = d3.timeFormat('%b %e');
let chart_width     =   800;
let chart_height    =   400;
let padding = 50;

//loop through dates
data.forEach((e, i) => {
  data[i].date = time_parse(e.date);
})

//svg
let svg = d3.select("#chart")
            .append('svg')
            .attr('width', chart_width)
            .attr('height', chart_height);

//scales

let x_scale = d3.scaleTime()
        .domain([d3.min(data, d => d.date), d3.max(data, d => d.date)])
        .range([padding, chart_width - padding * 2]);

let y_scale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.num)])
        .range([chart_height - padding, padding]);

// let r_scale = d3.scaleLinear()
//         .domain([0, d3.max(data, d => d[1])])
//         .range([5, 30]);

let a_scale = d3.scaleSqrt()
        .domain([0, d3.max(data, d => d.num)])
        .range([0, 25]);

//axis
let x_axis = d3.axisBottom(x_scale);
                // .ticks(6)
                // .tickValues([0, 150, 250, 600, 700]);


svg.append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0,' + (chart_height - padding) + ')')
  .call(x_axis);

let y_axis = d3.axisLeft(y_scale)
  .ticks(5);
  // .tickFormat(d => d + '%')


svg.append('g')
  .attr('class', 'y-axis')
  .attr('transform', 'translate(' + padding + ', 0)')
  .call(y_axis);

//circles
svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => x_scale(d.date))
  .attr('cy', d => y_scale(d.num))
  .attr('r', d => a_scale(d.num))
  .attr('fill', '#D1AB0E');

//labels
svg.append('g')
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => time_format(d.date))
  .attr('x', d => x_scale(d.date))
  .attr('y', d => y_scale(d.num));
