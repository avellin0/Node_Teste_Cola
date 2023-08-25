import { expect, test } from "vitest"
import { appointment } from "./appointment"
import { GetFutureDate } from "../utils/GetFutureDate"

test('create an appointment', () => {
        const startAt = GetFutureDate("2023-08-24")
        const endsAt = GetFutureDate("2023-08-26")


        const app = new appointment({
                customer: "john Doe",
                startAt,
                endsAt
        })

        expect(app).toBeInstanceOf(appointment);
        expect(app.costumer).toEqual("john Doe");
})


test('cannot create a appointment with end date before the start date', () => {

        const startAt = GetFutureDate("2023-08-24")
        const endsAt = GetFutureDate("2023-08-23")

        expect(() => {
                return new appointment({
                        customer: "john doe",
                        startAt,
                        endsAt
                })
        }).toThrow()
})

test('cannot create a appointment with start date before now', () => {
        const startAt = new Date()
        const endsAt = new Date()

        startAt.setDate(startAt.getDate() - 2)
        endsAt.setDate(endsAt.getDate() + 2)

        expect(() => {
                return new appointment({
                        customer: "john doe",
                        startAt,
                        endsAt
                })
        }).toThrow()
})