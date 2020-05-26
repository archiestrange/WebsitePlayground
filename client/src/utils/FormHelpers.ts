function isInvalidString(text: string | null | undefined): boolean {
    return text === undefined || text === null || text === '';
}

function isInvalidInt(num: number | null | undefined): boolean {
    return num === undefined || num === null || num < 1;
}

export function isFormInvalid<T>(form: T): boolean {
    const keys = Object.keys(form);
    const results: boolean[] = [];
    for (let [key, value] of Object.entries(form)) {
        if (typeof value === "string") {
            results.push(isInvalidString(value));
        } else if (typeof value === "number") {
            results.push(isInvalidInt(value));
        }
    }

    return results.includes(true);
}