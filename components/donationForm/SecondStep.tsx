import LoadingImg from "@/icons/loadingImg";
import { type FunctionComponent } from "react";
import { type FieldErrors, type FieldValues, type UseFormRegister } from "react-hook-form";

interface SecondStepInterface {
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>
}

const SecondStep: FunctionComponent<SecondStepInterface> = ({ register, errors }) => {
    return (
        <div className="">
            <h1 className="text-[1.37rem] my-4 text-left md:ml-64 ">Elegí una portada</h1>
            <p className="mb-6 text-sm md:px-80 ">Seleccioná una de las fotos que subiste como portada para tu producto. Será lo primero que vean las personas interesadas. Te recomendamos que elijas una <span className="font-semibold">imagen clara y de buena calidad.</span></p>

            <div className="my-3 flex flex-wrap gap-3 mx-auto w-fit justify-left">
                {[...Array(5)].map((e, idx) => (
                    <div key={idx} className="min-w-[95px] min-h-[90px] md:min-w-[156px] md:min-h-[152px] rounded-[10px] bg-[#E8E8E8] flex justify-center items-center">
                        <LoadingImg />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SecondStep;