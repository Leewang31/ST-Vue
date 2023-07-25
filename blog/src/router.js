import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home'
import List from './components/List'
import Detail from './components/Detail'
import Comment from './components/detail/Comment'
import Author from './components/detail/Author'
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/detail/:id",
        component: Detail,
        children:[
            {
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;