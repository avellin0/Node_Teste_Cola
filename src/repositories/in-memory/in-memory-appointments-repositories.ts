import { areIntervalsOverlapping } from "date-fns";
import { appointment } from "../../entities/appointment";
import { AppointmetsRepositories } from "../appointments-Repositories";

export class InMemoryAppointmentsRepositories implements AppointmetsRepositories {
    public items: appointment[] = []

    async create(appointment: appointment): Promise<void> {
        this.items.push(appointment)
    }

    async Findoverlapping(startAt: Date, endsAt: Date): Promise<appointment | null> {
        const Overlapping = this.items.find(props => {
            return areIntervalsOverlapping(
                { end: endsAt, start: startAt },
                { end: props.endsAt, start: props.startAt },
                { inclusive: true }
            )
        })
        if (!Overlapping) {
            return null
        }

        return Overlapping
    }

}