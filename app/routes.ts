import { type RouteConfig, index, layout, route, prefix } from "@react-router/dev/routes";

export default [
    //Home
    index("routes/home.tsx"),
    
    //Auth
    ...prefix('/auth', [
        layout('layouts/auth-layouts.tsx',[
            route('login', 'routes/auth/login-page.tsx'),
            route('register', 'routes/auth/register-page.tsx'),
            route('testing', 'routes/auth/testing-page.tsx'),
            route('testing-args/:id/:name/:age', 'routes/auth/testing-args-page.tsx'),

            route('logout', 'auth/actions/logout.actions.ts')
        ]),
    ]),

    //Chat
    ...prefix('/chat', [
        layout('layouts/chat-layouts.tsx' , [
            index('routes/chat/no-chat-selected-page.tsx'),
            route('client/:id', 'routes/chat/client-chat-page.tsx')
        ])

    ])


] satisfies RouteConfig;
