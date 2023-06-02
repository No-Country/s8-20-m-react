import FormIndex from "@/components/donationForm/formIndex";
import { useState } from "react";

function Donation() {

    const initialState = {
        photos: [],
        coverImg: '',
        title: '',
        categories: {
            catName: '',
            type: '',
            size: '',
            product: '',
            state: ''
        },
        description: '',
    }

    const [donationState, setDonationState] = useState<typeof initialState>(initialState)
    const [donationStep, setDonationStep] = useState<number>(1)

    return (

        <FormIndex donationStep={donationStep} setDonationStep={setDonationStep} />
    )
}

export default Donation;