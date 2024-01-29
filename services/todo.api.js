import axios from "axios";

const fetchTodos = async () => {
  let resp = await axios.get("https://full-stack-crud-nextjs.vercel.app/api/todos");
  let data = await resp.data;
  return data;
};

export default fetchTodos;
