import axios from "axios";

const fetchTodos = async () => {
  let resp = await axios.get("http://localhost:3000/api/todos");
  let data = await resp.data;
  return data;
};

export default fetchTodos;
