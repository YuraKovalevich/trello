import Admin from "./pages/Admin";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, TRELLO_ROUTE} from "./utils/consts";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Trello from "./pages/Trello";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: MAIN_ROUTE,
        Component: Main,
    }
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component:Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: TRELLO_ROUTE,
        Component: Trello,
    }
]