import { Home } from "./pages/home/home";
import { Patients } from "./pages/patients/patients";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/patients",
    element: <Patients />,
  },
];

export default AppRoutes;
