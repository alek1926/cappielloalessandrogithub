import { arrayStates } from "./arrayStates";

export const nascondiButton = () => {
    arrayStates.forEach(state => state[1](false));
}