import { appointment } from "../entities/appointment"
import { AppointmetsRepositories } from "../repositories/appointments-Repositories"


interface createAppointmentRequest {
    customer: string,
    startAt: Date,
    endsAt: Date
}

type createAppointmentResponse = appointment

export class createAppointment {

    constructor(private appointmentsRepository: AppointmetsRepositories) {

    }

    async execute({ customer, endsAt, startAt }: createAppointmentRequest): Promise<createAppointmentResponse> {

        const OverlappingRepositories = await this.appointmentsRepository.Findoverlapping(startAt, endsAt)

        if(OverlappingRepositories){
            throw new Error("another appointment already exist")
        }

        const app = new appointment({ customer, startAt, endsAt })

        await this.appointmentsRepository.create(app)

        return app
    }
}