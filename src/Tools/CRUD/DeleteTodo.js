import PropTypes from "prop-types";

import { deleteTodoDbJson } from "../../JsonCrud/JsonCrud";

export const deleteTodo = (
  { id },
  { todos, setTodos, filters, setFilters }
) => {
  deleteTodosTodo(id, todos, setTodos);

  deleteFiltersTodo(id, filters, setFilters);

  deleteTodoDbJsonHandler(id);
};

// filter todos when id equal todos todo id
const deleteTodosTodo = (id, todos, setTodos) => {
  const deleteTodosTodo = todos.filter((todo) => todo.id !== id);
  setTodos(deleteTodosTodo);
};

// filter todos when id equal filters todo id
const deleteFiltersTodo = (id, filters, setFilters) => {
  const deleteFiltersTodo = filters.filter((todo) => todo.id !== id);
  setFilters(deleteFiltersTodo);
};

// filter db.json todos when id equal todos todo id
const deleteTodoDbJsonHandler = (id) => {
  deleteTodoDbJson(id);
};

deleteTodo.propTypes = {
  id: PropTypes.number,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};
