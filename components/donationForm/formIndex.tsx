import { useRouter } from "next/router";
import { type Dispatch, type FunctionComponent, type SetStateAction } from "react";
import { type FieldErrors, type FieldValues, type FormState, type SubmitHandler, type UseFormGetValues, type UseFormRegister, type UseFormSetValue, type UseFormWatch } from "react-hook-form";
import Counter from "./Counter";
import FifthStep from "./FifthStep";
import FinalStep from "./FinalStep";
import FirstStep from "./FirstStep";
import FourthStep from "./FourthStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

interface FormStep1Props {
    donationStep: number,
    setDonationStep: Dispatch<SetStateAction<number>>,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    formState: FormState<FieldValues>,
    getValues: UseFormGetValues<FieldValues>,
    onSubmit: SubmitHandler<FieldValues>,
    setValue: UseFormSetValue<FieldValues>,
    watch: UseFormWatch<FieldValues>,
    responseId: string | undefined
}

const FormIndex: FunctionComponent<FormStep1Props> = ({
    donationStep,
    setDonationStep,
    register,
    errors,
    getValues,
    onSubmit,
    setValue,
    watch,
    responseId
}) => {

    const router = useRouter()

    const handleNext = () => {

        if (donationStep === 2) {
            const values = getValues()
            console.log(values)
        }

        if (donationStep === 5) {
            const values = getValues()
            void onSubmit(values)
        }

        setDonationStep(donationStep + 1)
    }

    const handlePrev = () => {
        setDonationStep(donationStep - 1)
    }

    const handleGoToStart = () => {
        router.push('/')
    }
    const handleGoToPost = () => {
        // actualizar segun api
        router.push(`/product/${responseId}`)
    }



    return (
        <div className="mx-auto p-4 min-h-screen flex flex-col">

            {donationStep < 6 && <Counter currentStep={donationStep} />}

            {donationStep === 1 && <FirstStep
                register={register}
                errors={errors}
                getValues={getValues}
                setValue={setValue}
            />}
            {donationStep === 2 && <SecondStep
                register={register}
                setValue={setValue}
                getValues={getValues}
                watch={watch}
            />}
            {donationStep === 3 && <ThirdStep
                register={register}
                errors={errors}
            />}
            {donationStep === 4 && <FourthStep
                register={register}
            />}
            {donationStep === 5 && <FifthStep
                register={register}
                errors={errors}
            />}
            {donationStep === 6 && <FinalStep />}

            <div className="flex gap-2 mt-16 mb-14 md:justify-center">
                {donationStep > 1 && donationStep < 6 && <button className={`${donationStep === 5 ? "w-full mx-auto md:mx-0 md:w-[15%]" : "w-full md:w-[15%]"} w-full text-primary text-sm px-12 py-3 rounded-[20px] transition-all border border-black active:border-[#d25c5c] hover:bg-white hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]`} onClick={handlePrev}>Atrás</button>}
                {donationStep !== 6 && <button className={`${donationStep === 1 ? "w-full mx-auto md:w-[15%] px-2" : "w-full md:w-[15%]"} bg-primary text-white text-sm px-4 py-3 rounded-[20px] transition-all active:bg-[#d25c5c] hover:bg-[#a22424] hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]`} onClick={handleNext}>Siguiente</button>}



                {donationStep === 6 && <button className={` md:w-[15%] w-full text-primary text-sm px-7 py-3 rounded-[20px] transition-all border border-black active:border-[#d25c5c] hover:bg-white hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]`} onClick={handleGoToStart}>Volver al inicio</button>}
                {donationStep === 6 && responseId && <button className={` md:w-[15%] w-full bg-primary text-white text-sm px-7 py-3 rounded-[20px] transition-all active:bg-[#d25c5c] hover:bg-[#a22424] hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)]`} onClick={handleGoToPost}>Ver publicación</button>}

            </div>

        </div>
    );
}

export default FormIndex;