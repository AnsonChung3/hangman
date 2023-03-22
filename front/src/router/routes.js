const routes = [
    {
        path: '/hangman',
        component: () => import('layouts/SolarizedDarkLayout.vue'),
        children: [
            { path: '', component: () => import('pages/hangman.vue') }
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
