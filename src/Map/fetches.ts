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

export async function addBase(base: Base) {
    try {
        const response = await fetch('http://localhost:5051/create-air-base', {
            method: "POST",
            body: JSON.stringify({ base: base }),
        });

        console.log(response.status);
    }
    catch (error) {
        console.error(error);
    }
}

export async function deleteBase(baseId: string) {
    try {
        const response = await fetch(`http://localhost:5051/delete-air-base/${baseId}`, {
            method: "DELETE"
        });

        console.log(response.status);
    }
    catch (error) {
        console.error(error);
    }
}

export async function getBase(baseId: string) {
    try {
        const response = await fetch(`http://localhost:5051/get-air-base/${baseId}`, {
            method: "GET"
        });

        console.log(response.status);
    }
    catch (error) {
        console.error(error);
    }
}

export async function updateBase(base: Base | Base[]) {
    try {
        const response = await fetch(`http://localhost:5051/update-air-base`, {
            method: "UPDATE",
            body: JSON.stringify({ base: base })
        });

        console.log(response.status);
    }
    catch (error) {
        console.error(error);
    }
}