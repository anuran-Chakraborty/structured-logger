import { createWebHistory, createRouter } from "vue-router";
import LogSpaces from "../components/LogSpaces";
import Logs from "../components/Logs";

const routes = [
  {
    path: "/logspaces",
    name: "LogSpaces",
    component: LogSpaces
  },
  {
    path: "/logs",
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
