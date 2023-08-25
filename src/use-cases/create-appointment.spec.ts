import { describe, expect, it } from "vitest";
import { createAppointment } from "./create-appointment";
import { appointment } from "../entities/appointment";
import { GetFutureDate } from "../utils/GetFutureDate";
import { InMemoryAppointmentsRepositories } from "../repositories/in-memory/in-memory-appointments-repositories";

describe('create appointment', () => {


    it('should be able to create an appointment', () => {

        const appointmentsRepository = new InMemoryAppointmentsRepositories()
        const sut = new createAppointment(appointmentsRepository)
    
    
        const startAt = GetFutureDate("2023-08-10")
        const endsAt = GetFutureDate("2023-08-15")
    
     sut.execute({
            customer: "tanto faz",
            endsAt,
            startAt
        })
    
        expect(sut.execute({
            customer: "teste",
            endsAt,
            startAt
        })).resolves.toBeInstanceOf(appointment)
    })
    
    

    it('should not  be able to create an appointment with overlapping dates', async () => {

        const appointmentsRepository = new InMemoryAppointmentsRepositories()
        const sut = new createAppointment(appointmentsRepository)


        const startAt = GetFutureDate("2023-08-24")
        const endsAt = GetFutureDate("2023-08-28")


        await sut.execute({
            customer: "john doe",
            endsAt,
            startAt
        })

        expect(sut.execute({
            customer: "john doe",
            startAt: GetFutureDate("2023-08-25"),
            endsAt: GetFutureDate("2023-08-29")
        })
        ).rejects.toBeInstanceOf(Error);

        expect(sut.execute({
            customer: "fulano",
            startAt: GetFutureDate("2023-08-23"),
            endsAt: GetFutureDate("2023-08-25"),
        })).rejects.toBeInstanceOf(Error);


        expect(sut.execute({
            customer: "ciclano",
            startAt: GetFutureDate("2023-08-25"),
            endsAt: GetFutureDate("2023-08-27"),
        })).rejects.toBeInstanceOf(Error);
    })
})




// resolves == porque é uma promise
// describe serve para "guiar" os programadores na leitura do teste