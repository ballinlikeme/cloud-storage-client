
export const getLastModifiedTime = (timestamp: string): string => {
    return timestamp.split('T')[0].split('-').reverse().join('.')
}