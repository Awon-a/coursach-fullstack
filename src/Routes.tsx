import { Paths } from "./common/constants/Paths";
import Login from "./components/LoginForm";
import Registration from "./components/RegistrationForm";
import Tasks from "./components/Tasks";

export const authRoutes = [

  {
    path: Paths.TASKS,
    Component: Tasks,
  }

]

export const publicRoutes = [

  {
    path: Paths.LOGIN,
    Component: Login,
  },

  {
    path: Paths.REGISTRATION,
    Component: Registration,
  }

]