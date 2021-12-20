export function countBs (majB) {
    return (majB.split("B").length - 1)
}

export function countChar (word, letter) {
    return (word.split(letter).length - 1)
}
