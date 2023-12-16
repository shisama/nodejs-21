fetch('https://example.com/data').then(function(response) {
  return response.text();
}).then(function(data) {
  console.log(data);
});