import Home from "../components/Layouts/Home/Home";
import DailyRecord from "../components/Layouts/DailyRecord/DailyRecord";
import CashOut from "../components/Layouts/Cashout/Cashout";

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
