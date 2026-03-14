type Base = {
    guid: string,
    name: string,
    position: {
        latitude: number,
        longitude: number
    },
    status: number,
    permanenceId: string,
}

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