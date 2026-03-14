import type { Resources } from "./types";

export const increaseResources = (current: Resources, removed: Resources): Resources => {
    return Object.keys(current).reduce((acc, key) => {
        const k = key as keyof Resources;
        acc[k] = {
            ...current[k],
            amount: Math.max(0, current[k].amount + removed[k].amount)
        };
        return acc;
    }, {} as Resources);
};

export const decreaseResources = (current: Resources, removed: Resources): Resources => {
    return Object.keys(current).reduce((acc, key) => {
        const k = key as keyof Resources;
        acc[k] = {
            ...current[k],
            amount: Math.max(0, current[k].amount + removed[k].amount)
        };
        return acc;
    }, {} as Resources);
};

export const checkPermanence = (id: number) => {
    if (id === 1) {
        return 'Permanent'
    }
    else if (id === 2) {
        return 'FOB'
    }
    else if (id === 3) {
        return 'Rotating'
    }
    return 'Unknown';
}
export const checkStatus = (id: number) => {
    if (id === 1) {
        return 'Active'
    }
    else if (id === 2) {
        return 'Maintenance'
    }
    else if (id === 3) {
        return 'Retired'
    }
    return 'Unknown';
}