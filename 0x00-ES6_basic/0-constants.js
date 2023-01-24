export function taskFirst() {
    const task = 'I prefer const when i can.';
    return task;
}

export function getLast() {
    return 'is Okay';
}

export function taskNext() {
    let combintion = 'But sometimes let';
    combintion += getLast();

    return combintion;
}
