import { createWebHistory, createRouter } from "vue-router";
import LogSpaces from "../views/LogSpaces";
import Logs from "../views/Logs";

const routes = [
  {
    path: "/logspaces",
    name: "LogSpaces",
    component: LogSpaces
  },
  {
    path: "/logs/:id",
    name: "Logs",
    component: Logs
  },
  { path: "/", redirect: "/logspaces" }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
