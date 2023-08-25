import { expect, it } from "vitest"
import { GetFutureDate } from "./GetFutureDate"


it('should create one type Date', () => {

    const year = new Date().getFullYear()

    expect(GetFutureDate(`${year}-08-10`).getFullYear()).toEqual(2024)
})