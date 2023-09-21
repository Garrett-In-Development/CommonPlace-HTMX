import { Elysia, t } from "elysia";
import { html } from '@elysiajs/html';
import Html from "@kitajs/html";
import { db } from "./db";
import { Entry, entries, NewEntry } from "./db/schema";
import { eq } from "drizzle-orm";
import CommonPlaceEntryList from "./components/CommonPlaceEntryList";
import Page from "./components/Page";

const app = new Elysia()
  .use(html())
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .get("/", ({ html }: { html: any }) =>
    html(
      <BaseHtml>
        <Page/>
      </BaseHtml>
    )
  )
  .get("/entries", async () => {
        const data: Entry[] = await db.select().from(entries).all();
        return <CommonPlaceEntryList entries={data}/>;
  })
  .post(
    "/entries",
    async ({ body }: { body: NewEntry }) => {
      if (body.content.length == 0) {
        throw new Error("Content cannot be empty");
      }

      if (body.notes.length == 0) {
        throw new Error("Notes cannot be empty");
      }

      db.insert(entries).values(body).run();

      const data: Entry[] = await db.select().from(entries).all();
      return <CommonPlaceEntryList entries={data}/>;
    },
    {
      body: t.Object({
        content: t.String(),
        notes: t.String()
      })
    }
  )
  .delete(
    "/entries/:id",
    async ({ params }: { params: any }) => {
      await db.delete(entries).where(eq(entries.id, params.id)).run();
    },
    {
      params: t.Object({
        id: t.Numeric(),
      })
    })
  .listen(3000);

const BaseHtml = ({ children }: { children: Html.Children }) => `
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
      <link href="styles.css" rel="stylesheet">
      <title>Common Place</title>
    </head>
  ${children}`
;
