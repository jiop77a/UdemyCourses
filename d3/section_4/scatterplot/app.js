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

let svg = d3.select("#chart")
            .append('svg')
            .attr('width', chart_width)
            .attr('height', chart_height);

//circles
svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => d[0])
  .attr('cy', d => d[1])
  .attr('r', d => d[1] / 10)
  .attr('fill', '#D1AB0E');

//labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => d.join(','))
  .attr('x', d => d[0])
  .attr('y', d => d[1]);
