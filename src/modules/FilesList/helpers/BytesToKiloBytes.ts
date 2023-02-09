
export const bytesToKiloBytes = (number: number): string => {
    return (number * 0.00097656).toFixed(2)
}