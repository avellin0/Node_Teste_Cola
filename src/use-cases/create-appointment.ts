import { appointment } from "../entities/appointment"

interface createAppointmentRequest {
    customer: string,
    startAt: Date,
    endsAt: Date
}

type createAppointmentResponse = appointment

export class createAppointment {
    async execute({ customer, endsAt, startAt }: createAppointmentRequest): Promise<createAppointmentResponse> {

        const app = new appointment({ customer, startAt, endsAt })

        return app
    }
}