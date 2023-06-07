import LoadingImg from "@/icons/loadingImg";
import Image from "next/image";
import { type FunctionComponent } from "react";
import { type FieldErrors, type FieldValues, type UseFormRegister } from "react-hook-form";


interface FirstStepInterface {
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>
}

const FirstStep: FunctionComponent<FirstStepInterface> = ({ register }) => {
    return (
        <div className="">
            <h1 className="text-[1.37rem] my-4 text-left">Subí fotos de tu producto</h1>
            <form>
                <div className="my-3 border-[3px] border-[#7C7C7C] rounded-2xl border-dashed h-[178px] md:h-[22rem] md:w-4/5 md:mx-auto m px-8 py-4 flex flex-col justify-center ">
                    <div className='relative mx-auto w-[65px] h-[56px] overflow-hidden'>
                        <Image src='/uploadImg.png' alt='upload img' fill className="object-cover" />
                    </div>
                    <p className="text-sm text-center mb-1 px-2">Arrastrá las fotos acá o <span className="underline font-bold">elegí archivos</span> desde tu ordenador</p>
                    <p className="text-xs text-center text-[#585858]">Formatos permitidos: .png y .jpg. Hasta 4 MB</p>
                </div>
                <div className="my-3 flex flex-wrap gap-3 mx-auto w-fit justify-left">
                    {[...Array(5)].map((e, idx) => (
                        <div key={idx} className="min-w-[95px] min-h-[90px] md:min-w-[156px] md:min-h-[152px] rounded-[10px] bg-[#E8E8E8] flex justify-center items-center">
                            <LoadingImg />
                        </div>
                    ))}
                </div>

            </form>
        </div>
    );
}

export default FirstStep;