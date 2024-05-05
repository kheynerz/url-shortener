export const getDomainFromUrl = (full_url: string) => {
    const url = new URL(full_url)
    return url.hostname
}