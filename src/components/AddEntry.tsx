import Html from "@kitajs/html";

const AddEntry = () => {
  return (
    <div
      id="add"
      class="absolute w-screen h-screen m-auto flex justify-center backdrop-blur-sm bg-black/15"
      _="on load hide me"
    >
      <div class="bg-white text-black w-1/2 h-1/2 m-auto p-4 border-white border-4 rounded-lg">
        <form
          class="grid grid-rows-8 grid-cols-2 gap-2 h-full w-full"
          hx-boost="true"
          hx-post="/entries"
          hx-target="#entries"
          hx-swap="innerHTML"
        >
          <h2 class="col-span-2 text-center">
            Add Entry
          </h2>
          <h3 class="text-center">Entry</h3>
          <h3 class="text-center">Notes</h3>
          <textarea
            name="content"
            class="row-span-4 bg-amber-200 border-2 border-black h-full w-full"
          />
          <textarea
            name="notes"
            class="row-span-4 bg-amber-200 border-2 border-black h-full w-full"
          />
          <button
            type="submit"
            class="bg-neutral-900 text-white border-2 radius-6"
            _="on click hide #add"
          >
            Add
          </button>
          <button
            type="reset"
            class="bg-neutral-900 text-white border-2 radius-6"
            hx-trigger="click delay:250ms"
            hx-get="/entries"
            hx-target="#entries"
            _="on click hide #add"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

      // <div class="w-screen h-screen m-0 absolute x-0 y-0 bg-neutral-900 opacity-50">
      // </div>

export default AddEntry;
