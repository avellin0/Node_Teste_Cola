import { setYear, parseISO } from "date-fns"

export function GetFutureDate(date: string) {
    return setYear(parseISO(date), new Date().getFullYear() + 1)
}