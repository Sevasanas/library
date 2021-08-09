import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Chats } from './pages/Chats';


export  const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/profile',
        component: Profile,
        exact: true
    },
    {
        path: '/chats/:chatId?',
        component: Chats,
        exact: true
    },
    {
        path: '*',
        component: Home,
        exact: true
    },
]

