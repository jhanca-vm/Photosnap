import { Context } from "https://deno.land/x/oak@v6.5.0/context.ts";
import { Application, log, oakCors } from "./deps.ts";
import router from "./router.ts";

const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

log.info("Listening on http://localhost:8080");

await app.listen({ port: 8080 });
