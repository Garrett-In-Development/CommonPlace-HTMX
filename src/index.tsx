import { Elysia, t } from "elysia";
import * as elements from 'typed-html';
import AddEntry from "./components/AddEntry";
import CommonPlaceEntry from "./components/CommonPlaceEntry";
import CommonPlaceList from "./components/CommonPlaceList";
import { db } from "./db";
import { entries } from "./db/schema";

const app = new Elysia()
  .get("/index.html", () => Bun.file("./src/index.html"))
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .get("/", ({ set }) => {
    set.redirect = "/index.html"
  })
  .get("/entries", async () => {
        const data = await db.select().from(entries).all();
        return <CommonPlaceList entries={data}/>
  })
  .get("/add", () => <AddEntry/>)
  .post(
      "/newentry",
      async ({ body }) => {
          if (body.content.length == 0) {
              throw new Error("Content cannot be empty")
          }
          await db.insert(entries).values(body).returning().get();
      },
      {
          body: t.Object({
              content: t.String(),
              notes: t.String()
          })
      }
  )
  .get("/canceladd", () => <div id="add"></div>)
  .listen(3000);
