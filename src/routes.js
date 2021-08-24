import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Chats } from './pages/Chats';
import { News } from './pages/News';
import { Login } from './pages/Login';


export  const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/profile',
        component: Profile,
        exact: true,
        isPrivate: true,
        to: '/login'
    },
    {
        path: '/chats/:chatId?',
        component: Chats,
        exact: true,
        isPrivate: true,
        to: '/login'
    },
    {
        path: '/news',
        component: News,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
        to: '/'
    },
    {
        path: '*',
        component: Home,
        exact: true
    },
]

