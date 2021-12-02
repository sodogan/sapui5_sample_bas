const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
};
