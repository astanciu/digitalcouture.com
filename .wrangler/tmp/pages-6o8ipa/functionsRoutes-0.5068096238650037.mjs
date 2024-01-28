import { onRequest as __contactform_js_onRequest } from "/Users/alex/projects/digitalcouture/digitalcouture.com/functions/contactform.js"

export const routes = [
    {
      routePath: "/contactform",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__contactform_js_onRequest],
    },
  ]