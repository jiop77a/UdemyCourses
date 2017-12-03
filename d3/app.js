var dataset = [10, 20, 30, 40, 50];



var el = d3.select('body')
          .selectAll('p')
          .data(dataset)
          .enter()
          .append('p')
          .text("Hello World");
            // .append('p')
            // .classed('foo', true)
            // .classed('bar', true)
            // .attr( 'class', 'foo' )
            // .text('hello world')
            // .style('color', 'blue');
console.log(el);
