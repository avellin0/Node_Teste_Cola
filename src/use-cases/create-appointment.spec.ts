import { describe, expect, it } from "vitest";
import { createAppointment } from "./create-appointment";
import { appointment } from "../entities/appointment";

describe('create appointment', () => {

    it('should be able to create an appointment', () => {

        const sut = new createAppointment()

        const endsAt = new Date()
        const startAt = new Date()

        startAt.setDate(startAt.getDate() + 2)
        endsAt.setDate(endsAt.getDate() + 4)


        expect(sut.execute({
            customer: "john doe",
            endsAt,
            startAt
        })
        ).resolves.toBeInstanceOf(appointment)
    })
})



// resolves == porque é uma promise
// describe serve para "guiar" os programadores na leitura do teste