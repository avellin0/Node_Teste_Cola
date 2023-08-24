import { expect, test } from "vitest"
import { appointment } from "./appointment"

test('create an appointment', () => {
        const endsAt = new Date()
        const startAt = new Date()

        startAt.setDate(startAt.getDate() + 1)
        endsAt.setDate(endsAt.getDate() + 2)

        const app = new appointment({
                customer: "john Doe",
                startAt,
                endsAt
        })

        expect(app).toBeInstanceOf(appointment);
        expect(app.costumer).toEqual("john Doe");
})


test('cannot create a appointment with end date before the start date', () => {
        const startAt = new Date()
        const endsAt = new Date()

        startAt.setDate(startAt.getDate() + 2)
        endsAt.setDate(endsAt.getDate() + 1)

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