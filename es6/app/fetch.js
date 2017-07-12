const root = 'https://www.reddit.com/user/Kijafa/submitted.json';

fetch(root, { method: "GET"})
  .then(response => response.json())
  .then(json => console.log(json.data.children));
