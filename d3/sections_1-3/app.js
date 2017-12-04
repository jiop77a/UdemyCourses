/* globals d3 */

d3.csv('table_test.csv', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  // generate(data.columns);
});

// d3.json('data.json', (err, data) => {
//   if(err) {
//     return console.log(err);
//   }
//   console.log(data);
//   generate(data);
// });


const generate = (dataset) => {

  // var dataset = [10, 20, 30, 40, 50];

  var el = d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter()
  .append('p')
  .text((d) => `This paragraph is bound to the number ${d}`)
  .attr( 'class', (d) => {
    if (d > 25) {
      return 'foo';
    } else {
      return null;
    }
  })
  .classed('bar', d => d < 25)
  // .text('hello world')
  .style('color', (d) => {
    if (d > 25) {
      return 'red';
    } else {
      return 'blue';
    }
  });
  console.log(el);

};
