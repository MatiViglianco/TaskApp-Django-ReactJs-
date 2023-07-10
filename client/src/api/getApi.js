import axios from "axios";

const taskApi = axios.create({
  baseURL: "http://127.0.0.1:8000/tasks/apiv1/tasks/",
});

export const getApi = () => {
  return taskApi.get("/").catch((error) => {
    // Manejar el error en caso de que la solicitud falle
    console.error(error);
  });
};

export const getOneApi = (id) => {
  return taskApi.get(`/${id}/`).catch((error) => {
    // Manejar el error en caso de que la solicitud falle
    console.error(error);
  });
};

export const PostApi = (task) => {
  return taskApi.post("/", task);
};

export const deleteApi = (id) => {
  taskApi.delete(`/${id}`);
};

export const updateApi = (id, task) => {
  return taskApi.put(`/${id}/`, task);
};
