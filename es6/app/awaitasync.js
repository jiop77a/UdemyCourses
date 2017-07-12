async function async_one() {
  return "one";
}

async function async_two() {
  return setTimeout(() => "two", 6000);
}

// async function async_three() {
//   const one = await async_one();
//   console.log(one);
//   const two = await async_two();
//   console.log(two);
// }

async function async_four() {
  const [res_one, res_two] = await Promise.all(
    [async_one(), async_two()]
  )
  console.log(res_one, res_two)
}

async_four();
