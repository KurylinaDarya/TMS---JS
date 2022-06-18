// const aggregateUsersAndTodos = async () => {
//   const usersUrl = "https://jsonplaceholder.typicode.com/users";
//   const todosUrl = "https://jsonplaceholder.typicode.com/todos";

//   try {
//     const data = await fetch(usersUrl).then((response) => {
//       return response.json();
//     });
//     const data2 = await fetch(todosUrl).then((response) => {
//       return response.json();
//     });
//     console.log(data, data2);

//     const getFieldTodo = (users, todos) => {
//       return users.map((element) => {
//         const todosList = todos.filter((element2) => {
//           return element2.userId === element.id;
//         });
//         return {
//           ...element,
//           todo: todosList,
//         };
//       });
//     };
//     console.log(getFieldTodo(data, data2));
//   } catch (error) {}
// };
// console.log(aggregateUsersAndTodos());

const aggregateUsersAndTodos2 = async () => {
  const USERS_URL = "https://jsonplaceholder.typicode.com/users";
  const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

  try {
    const newData1 = fetch(USERS_URL).then((response) => {
      return response.json();
    });
    const newData2 = fetch(TODOS_URL).then((response) => {
      return response.json();
    });
    const [users, todos] = await Promise.all([newData1, newData2]);
    console.log(users, todos);

    const aggregate = todos.reduce((acc, todo) => {
      (acc[todo.userId] = acc[todo.userId] || []).push(todo);
      return acc;
    }, {});
    console.log(aggregate);

    const aggregate2 = users.map((user) => ({
      ...user,
      todo: aggregate[user.id],
    }));
    console.log(aggregate2);
  } catch (error) {}
};
console.log(aggregateUsersAndTodos2());
