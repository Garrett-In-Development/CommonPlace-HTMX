import Html from '@kitajs/html';
import AddEntry from './AddEntry';

const Page = () => {
  return (
    <body class="overflow-hidden w-screen h-screen">
      <AddEntry/>
      <div class="w-screen h-full p-4 bg-neutral-800">
       <div class="flex flex-col mx-8 my-0 text-white gap-4">
        <h1 class="m-auto text-4xl text-center">Common Place</h1>
        <button
          class="m-auto bg-gray-800 border-2 border-black rounded-md w-28 hover:bg-gray-300 hover:text-black"
          _='on click show #add'
        >
          Add Entry
        </button>
        <div id="entries" class="w-full h-screen p-4 overflow-scroll" hx-get="/entries" hx-swap="innerHTML" hx-trigger="load">
          Loading...
        </div>
       </div>
      </div>
    </body>
  );
};

export default Page;
