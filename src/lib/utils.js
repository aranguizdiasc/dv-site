import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

// Utility function to combine class names using clsx and tailwind-merge

export const cn = (...inputs) => {
    return twMerge(clsx(...inputs));
};