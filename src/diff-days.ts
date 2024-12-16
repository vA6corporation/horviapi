export const diffDays = function (sd: string, ed: string): number {
    const startDate = new Date(sd)
    const endDate = new Date(ed)
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays % 10 == 0) {
        return diffDays
    } else {
        return diffDays + (10 - diffDays % 10)
    }
}