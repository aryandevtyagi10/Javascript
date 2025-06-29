const p1 = new Promise(resolve => setTimeout(() => resolve("One"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Two"), 2000));

async function loadAll() {
  const results = await Promise.all([p1, p2]);
  console.log("Results:", results);
}

loadAll();
