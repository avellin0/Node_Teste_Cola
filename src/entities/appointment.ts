interface AppointmetProps {
    customer: string;
    startAt: Date;
    endsAt: Date;
}


export class appointment {
    private props: AppointmetProps;


    get costumer() {
        return this.props.customer
    }

    get startAt() {
        return this.props.customer
    }

    get endsAt() {
        return this.props.customer
    }

    constructor(props: AppointmetProps) {

        const { startAt, endsAt } = props

        if (startAt <= new Date()) {
            throw new Error("invalide date")
        }

        if (endsAt <= startAt) {
            throw new Error("invalid date")
        }


        this.props = props;
    }

}