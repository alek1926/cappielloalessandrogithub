export let contaRepos = -1;

export const incrementaCounter = () => {
    contaRepos += 0.5;
}

export const resetCounter = () => {
    contaRepos = -1;
}

export let userCorrente = "";

export const cambiaUserCorrente = (user) => {
    userCorrente = user;
}