import * as elements from 'typed-html';

const AddEntry = () => {
  return (
    <div id="add" class="w-screen h-screen m-0 absolute x-0 y-0 bg-neutral-900 opacity-50 flex justify-center">
      <div class="bg-white text-black w-96 h-96 m-auto p-4">
        <form
          class="grid grid-rows-8 grid-cols-2 gap-2 h-full w-full"
          hx-post="/newentry"
        >
          <h2 class="col-span-2 text-center">
            Add Entry
          </h2>
          <h3 class="text-center">Entry</h3>
          <h3 class="text-center">Notes</h3>
          <input type="text" name="content" class="row-span-4 bg-amber-200 border-2 border-black h-full w-full"/>
          <input type="text" name="notes" class="row-span-4 bg-amber-200 border-2 border-black h-full w-full"/>
          <div class="col-span-2 grid grid-cols-2 grid-rows-1 gap-1">
            <button type="submit">Add</button>
            <button type="reset" hx-get="/canceladd" hx-target="#add" hx-swap="outterHTML">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntry;
