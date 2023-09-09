import { Elysia, t } from "elysia";
import { html } from '@elysiajs/html'
import * as elements from 'typed-html';
import { db } from "./db";
import { Entry, entries, NewEntry } from "./db/schema";

const app = new Elysia()
  .use(html())
  .get("/index.html", () => Bun.file("./src/index.html"))
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .get("/", ({ set }: { set:any }) => {
    set.redirect = "/index.html"
  })
  .get("/entries", async () => {
        const data = await db.select().from(entries).all();
        console.log("GET ENTRIES")
        return <CommonPlaceList entries={data}/>;
  })
  .get("/add", () => <AddEntry/>)
  // .post(
  //     "/entries",
  //     async ({ body }: { body: NewEntry}) => {
  //         if (body.content.length == 0) {
  //             throw new Error("Content cannot be empty");
  //         }

  //         if (body.notes.length == 0) {
  //           throw new Error("Notes cannot be empty");
  //         }

  //         const newEntry = await db.insert(entries).values(body).returning().get();
  //         return <CommonPlaceEntry { ... newEntry } />
  //     },
  //     {
  //         body: t.Object({
  //             content: t.String(),
  //             notes: t.String()
  //         })
  //     }
  // )
  .get("/canceladd", () => <div id="add"></div>)
  .listen(3000);

const CommonPlaceEntry = ({ content, notes, id }: Entry) => {
  return (
    <div id={`${id}`} class="w-full h-full m-2 flex gap-2">
      <p class="text-black w-full h-full">
      {content}
      </p>
      <p class="text-black w-full h-full">
      {notes}
      </p>
    </div>
  );
}

const CommonPlaceList = ({ entries }: { entries: Entry[] }) => {
    return (
        <div>
            {entries.map((entry: Entry) => (
                <CommonPlaceEntry { ... entry} />
            ))}
        </div>
    );
}

const AddEntry = () => {
  return (
    <div id="add" class="w-screen h-screen m-0 absolute x-0 y-0 bg-neutral-900 opacity-50 flex justify-center">
      <div class="bg-white text-black w-96 h-96 m-auto p-4">
        <form
          class="grid grid-rows-8 grid-cols-2 gap-2 h-full w-full"
          hx-post="/entries"
          hx-target="#entries"
          hx-swap="beforeend"
        >
          <h2 class="col-span-2 text-center">
            Add Entry
          </h2>
          <h3 class="text-center">Entry</h3>
          <h3 class="text-center">Notes</h3>
          <input type="text" name="content" class="row-span-4 bg-amber-200 border-2 border-black h-full w-full"/>
          <input type="text" name="notes" class="row-span-4 bg-amber-200 border-2 border-black h-full w-full"/>
          <button type="submit" class="bg-neutral-900 text-white border-2 radius-6">Add</button>
          <button type="reset" class="bg-neutral-900 text-white border-2 radius-6" hx-get="/canceladd" hx-target="#add" hx-swap="outterHTML">Cancel</button>
        </form>
      </div>
    </div>
  );
};
