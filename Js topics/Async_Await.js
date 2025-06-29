const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async Data Received!");
    }, 2000);
  });
};

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();
