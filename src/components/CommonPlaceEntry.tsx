import * as elements from 'typed-html';
import { Entry } from "../db/schema";

const CommonPlaceEntry = ({ id, content, notes}: Entry) => {
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

export default CommonPlaceEntry;
