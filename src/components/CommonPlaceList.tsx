import * as elements from "typed-html";
import { Entry } from "../db/schema";
import CommonPlaceEntry from "./CommonPlaceEntry";

const CommonPlaceList = ({ entries }: { entries: Entry[] }) => {
    return (
        <div>
            {entries.map((entry) => (
                <CommonPlaceEntry { ... entry} />
            ))}
        </div>
    );
}

export default CommonPlaceList;
