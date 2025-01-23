import Home from "../Layouts/Home";
import DailyRecord from "../Layouts/DailyRecord";
import CashOut from "../Layouts/CashOut";

export const routes = Object.freeze([
  {
    path: "/",
    pageName: "Home",
    title: "Home",
    component: <Home />
  },
  {
    path: "/profile/:profileId",
    pageName: "Profile",
    title: "Profile",
    component: <DailyRecord />
  },
  {
    path: "/profile/:profileId/cash-out",
    pageName: "Cash out",
    title: "Cash out",
    component: <CashOut />
  }
]);
