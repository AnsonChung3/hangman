const routes = [
    {
        path: '/',
        component: () => import('layouts/SolarizedDarkLayout.vue'),
        children: [
            { path: '', redirect: 'hangman' },
            { path: 'hangman', component: () => import('pages/hangman.vue') }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes
