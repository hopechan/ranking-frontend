import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Estudiantes";
import Maps from "views/Nota.jsx";
// import UserPage from "views/User.jsx";
import Evaluaciones from "views/Evaluaciones";
import Materias from "views/Materias";

var routes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: "nc-icon nc-layout-11",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/estudiantes",
    name: "Estudiantes",
    icon: "nc-icon nc-hat-3",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/nota",
    name: "Notas",
    icon: "nc-icon nc-paper",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/materias",
    name: "Materias",
    icon: "nc-icon nc-paper",
    component: Materias,
    layout: "/admin"
  },
  {
    path: "/evaluaciones",
    name: "Evaluaciones",
    icon: "nc-icon nc-bell-55",
    component: Evaluaciones,
    layout: "/admin"
  },
  // {
  //   path: "/table",
  //   name: "Usuarios",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },
];
export default routes;
