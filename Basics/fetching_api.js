// This fetches a list of posts from a sample API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json(); // Parse JSON data from the response
  })
  .then(data => {
    console.log("Fetched Posts:", data); // Do something with the data
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });