import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TasksPage from "../pages/TasksPage";
import TaskFormPage from "../pages/TaskFormPage";
import Navigation from "../components/Navigation";
import { Toaster } from "react-hot-toast";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Navigate to="tasks" />} />
        <Route exact path="/tasks" element={<TasksPage />} />
        <Route exact path="/task-create" element={<TaskFormPage />} />
        <Route exact path="/tasks/:id" element={<TaskFormPage />} />
        <Route exact path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};
export default Router;
