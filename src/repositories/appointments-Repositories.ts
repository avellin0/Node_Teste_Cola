import { appointment } from "../entities/appointment";

export interface AppointmetsRepositories {
    create(appointment: appointment): Promise<void>;
    Findoverlapping(startAt: Date, endsAt: Date): Promise<appointment | null>;
}