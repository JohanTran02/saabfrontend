import type { Base } from "./types";

export async function fetchAllBases() {
    try {
        const response = await fetch('http://localhost:5051/get-all-air-bases');
        const bases = await response.json() as Base[];
        console.log(bases);
        return bases;
    }
    catch (error) {
        console.error(error);
    }
}