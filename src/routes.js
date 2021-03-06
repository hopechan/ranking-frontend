import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Estudiantes";
import Maps from "views/Nota.jsx";
import UserPage from "views/User.jsx";
import Evaluaciones from "views/Evaluaciones";
import Materias from "views/Materias";
import Alumnos3 from "views/Alumnos3";
import RankingTabla from "views/RankingTabla";
import CentroEscolar from "views/CentroEscolar";


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
  {
    path: "/alumnos3",
    name: "Alumnos 3°",
    icon: "nc-icon nc-bell-55",
    component: Alumnos3,
    layout: "/admin"
  },
  {
    path: "/CentroEscolar",
    name: "Centro Escolar",
    icon: "nc-icon nc-bell-55",
    component: CentroEscolar,
    layout: "/admin"
  },
  {
    path: "ranking tabla",
    name: "ranking tabla",
    icon: "nc-icon nc-bell-55",
    component: RankingTabla,
    layout: "/admin"
  },
  {
    path: "/r",
    name: "Ranking",
    icon: "nc-icon nc-bell-55",
    component: UserPage,
    layout: "/ranking"
  },

];
export default routes;
