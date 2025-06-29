const getUser = (id) => {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve({ id, name: "Aryan" });
    } else {
      reject("Invalid ID!");
    }
  });
};

async function displayUser() {
  try {
    const user = await getUser(1);
    console.log("User:", user);
  } catch (error) {
    console.log("Error:", error);
  }
}

displayUser();
