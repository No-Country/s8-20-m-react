import CheckIcon from "@/icons/checkIcon";
import Image from "next/image";
import { type FunctionComponent } from "react";
import {
    type FieldValues,
    type UseFormGetValues,
    type UseFormRegister,
    type UseFormSetValue,
    type UseFormWatch
} from "react-hook-form";

interface SecondStepInterface {
    register: UseFormRegister<FieldValues>,
    getValues: UseFormGetValues<FieldValues>,
    setValue: UseFormSetValue<FieldValues>,
    watch: UseFormWatch<FieldValues>
}

const SecondStep: FunctionComponent<SecondStepInterface> = ({
    register,
    getValues,
    setValue,
    watch
}) => {

    const values = getValues()
    const selectedImg = watch('thumbnail')
    const element = values.code


    return (
        <div className="">
            <h1 className="text-[1.37rem] my-4 text-left md:ml-64 ">Elegí una portada</h1>
            <p className="mb-6 text-sm md:px-80 ">Seleccioná una de las fotos que subiste como portada para tu producto. Será lo primero que vean las personas interesadas. Te recomendamos que elijas una <span className="font-semibold">imagen clara y de buena calidad.</span></p>

            <div className="my-3 flex flex-wrap gap-3 mx-auto w-fit justify-left">
                {element.map((e: string, idx: number) => (
                    <label key={idx} htmlFor={`${idx}thumbnail`}  >
                        <div className={` ${selectedImg === e ? 'bg-red-500 ' : ''} min-w-[95px] min-h-[90px] md:min-w-[156px] md:min-h-[152px] rounded-[10px] bg-[#E8E8E8] flex justify-center items-center relative overflow-hidden transition`}>
                            <Image src={e} alt="" fill className={`${selectedImg === e ? 'opacity-30 ' : ''} object-cover transition`} />
                            <input type="radio" name={`thumbnail`} id={`${idx}thumbnail`} value={e} onClick={() => setValue('thumbnail', e)} hidden />
                            {selectedImg === e && <CheckIcon className="opacity-100 z-10" />}
                        </div>
                    </label>
                ))}

                <input type="text" {...register('thumbnail')} hidden />

            </div>
        </div>
    );
}

export default SecondStep;