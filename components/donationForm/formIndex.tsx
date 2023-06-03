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
        <div className="mx-auto p-4 min-h-screen flex flex-col">

            <Counter currentStep={donationStep} />

            {donationStep === 1 && <FirstStep />}
            {donationStep === 2 && <SecondStep />}
            {donationStep === 3 && <ThirdStep />}
            {donationStep === 4 && <FourthStep />}
            {donationStep === 5 && <FifthStep />}

            <div className="flex gap-2 mt-16 mb-14">
                {donationStep > 1 && <button className="w-full text-primary text-sm px-12 py-3 rounded-2xl transition-all border border-black active:border-[#d25c5c] hover:bg-white hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]" onClick={handlePrev}>Atrás</button>}
                {donationStep !== 5 && <button className=" w-full bg-primary text-white text-sm px-12 py-3 rounded-2xl transition-all active:bg-[#d25c5c] hover:bg-[#a22424] hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]" onClick={handleNext}>Siguiente</button>}
            </div>

        </div>
    );
}

export default FormIndex;