import Image from "next/image";
import { useState, type FunctionComponent } from "react";
import {
    // type FieldErrors, 
    type FieldValues,
    type UseFormGetValues,
    type UseFormRegister
} from "react-hook-form";

interface SecondStepInterface {
    register: UseFormRegister<FieldValues>,
    // errors: FieldErrors<FieldValues>,
    getValues: UseFormGetValues<FieldValues>
}

const SecondStep: FunctionComponent<SecondStepInterface> = ({
    register,
    // errors, 
    getValues }) => {

    const { code } = getValues()

    const [selectedRadio, setSelectedRadio] = useState('');

    const handleRadioChange = (value: string) => {
        setSelectedRadio(value);
    };

    return (
        <div className="">
            <h1 className="text-[1.37rem] my-4 text-left md:ml-64 ">Elegí una portada</h1>
            <p className="mb-6 text-sm md:px-80 ">Seleccioná una de las fotos que subiste como portada para tu producto. Será lo primero que vean las personas interesadas. Te recomendamos que elijas una <span className="font-semibold">imagen clara y de buena calidad.</span></p>

            <div className="my-3 flex flex-wrap gap-3 mx-auto w-fit justify-left">
                {code.split(',').map((e: string, idx: number) => (
                    <label key={idx} htmlFor={`${idx}thumbnail`} className={`${selectedRadio === e ? 'border-2 border-red-500' : ''}`} >
                        <div className="min-w-[95px] min-h-[90px] md:min-w-[156px] md:min-h-[152px] rounded-[10px] bg-[#E8E8E8] flex justify-center items-center relative overflow-hidden">
                            <Image src={e} alt="" fill className="object-cover" />
                            <input type="radio" name={`thumbnail`} id={`${idx}thumbnail`} value={e} hidden onClick={() => handleRadioChange(e)} />
                        </div>
                    </label>
                ))}

                <input type="text" hidden {...register('thumbnail')} value={selectedRadio} />

            </div>
        </div>
    );
}

export default SecondStep;