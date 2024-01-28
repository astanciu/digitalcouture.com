				import worker, * as OTHER_EXPORTS from "/Users/alex/projects/digitalcouture/digitalcouture.com/.wrangler/tmp/pages-6o8ipa/functionsWorker-0.9129530260046981.mjs";
				import * as __MIDDLEWARE_0__ from "/Users/alex/projects/digitalcouture/digitalcouture.com/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/Users/alex/projects/digitalcouture/digitalcouture.com/.wrangler/tmp/pages-6o8ipa/functionsWorker-0.9129530260046981.mjs";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;