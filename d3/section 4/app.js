/* globals d3 */
let chart_width = 800;
let chart_height = 400;
let data = [];

for (let i = 0; i < 10; i++) {
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
    .attr('x', (d, i) => i * (800 / data.length)) // 0 - 0, 1 - 30, 2, 60
    .attr('y', 0)
    .attr('width', 25)
    .attr('height', 100);

};

generate(data);
