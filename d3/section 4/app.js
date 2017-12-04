/* globals d3 */
let chart_width = 800;
let chart_height = 400;
let bar_padding = 5;
let data = [];

for (let i = 0; i < 5; i++) {
  let num = Math.floor(Math.random() * 50);
  data.push(num);
}
const generate = (data) => {
  //create svg element
  let svg = d3.select('#chart')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);

  //bind data and create bars
    svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (chart_width / data.length))
    .attr('y', d => chart_height - d * 5)
    .attr('width', chart_width / data.length - bar_padding)
    .attr('height', d => d * 5)
    .attr('fill', '#7ED26D');

    //create labels
    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d)
      .attr('x', (d, i) => i * (chart_width / data.length) + (chart_width / data.length - bar_padding) / 2)
      .attr('y', d => chart_height - d * 5 + 15)
      .attr('font-size', '14')
      .attr('fill', '#fff')
      .attr('text-anchor', 'middle');

};

generate(data);
