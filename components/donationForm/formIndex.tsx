import { type Dispatch, type FunctionComponent, type SetStateAction } from "react";
import Counter from "./Counter";
import FifthStep from "./FifthStep";
import FirstStep from "./FirstStep";
import FourthStep from "./FourthStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

interface FormStep1Props {
    donationStep: number,
    setDonationStep: Dispatch<SetStateAction<number>>,
}

const FormIndex: FunctionComponent<FormStep1Props> = ({ donationStep, setDonationStep }) => {

    const handleNext = () => {
        setDonationStep(donationStep + 1)
    }

    const handlePrev = () => {
        setDonationStep(donationStep - 1)
    }



    return (
        <div className="border mx-auto p-4 min-h-screen flex flex-col">

            <Counter currentStep={donationStep} />

            <h2>PASO {donationStep}</h2>

            {donationStep === 1 && <FirstStep />}
            {donationStep === 2 && <SecondStep />}
            {donationStep === 3 && <ThirdStep />}
            {donationStep === 4 && <FourthStep />}
            {donationStep === 5 && <FifthStep />}

            <div className="flex">

                {donationStep > 1 && <button className="border w-1/2 p-2" onClick={handlePrev}>Atras</button>}
                {donationStep !== 5 && <button className="border w-1/2 p-2" onClick={handleNext}>Siguiente</button>}
            </div>

        </div>
    );
}

export default FormIndex;