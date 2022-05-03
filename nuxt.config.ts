import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// Just as the name of the file states, here is where we are going to configure my NUXT application
export default defineNuxtConfig({
    // For now all I want to do is add a LINK tag to all of my components
    // (This will  be the way I import bootstrap into my app)
    meta: {
        link: [
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            }
        ]
    }
})
