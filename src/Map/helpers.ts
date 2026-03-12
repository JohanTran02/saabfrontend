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