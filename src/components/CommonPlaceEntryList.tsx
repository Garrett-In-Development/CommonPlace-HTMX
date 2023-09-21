import Html from "@kitajs/html";
import { Entry } from "../db/schema";

const CommonPlaceEntry = ({ content, notes, id }: Entry) => {
  return (
    <div id={`${id}`} class="m-2 gap-2 grid grid-rows-10 grid-cols-2 entry bg-amber-50 border-black-2 rounded-3xl p-4">
      <div class="col-span-2 row-span-1">
        <button
          class="h-4 w-4 bg-red-700 hover:bg-red-400 text-white row"
          hx-delete={`/entries/${id}`}
          hx-swap="none"
          _="on click remove closest .entry"
        >
        X
        </button>
      </div>
      <div class="bg-orange-50 text-center col-span-1 row-span-8">
        <p class="text-black">
        {content}
        </p>
      </div>
      <div class="bg-orange-50 text-center col-span-1 row-span-8">
        <p class="text-black">
        {notes}
        </p>
      </div>
    </div>
  );
}

const CommonPlaceEntryList = ({ entries }: { entries: Entry[] }) => {
    return (
        <div class="p-2 flex flex-col gap-2 overflow-scroll">
            {entries.map((entry: Entry) => (
                <CommonPlaceEntry {...entry} />
            ))}
        </div>
    );
}

export default CommonPlaceEntryList;
