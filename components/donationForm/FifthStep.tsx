import WarningIcon from "@/icons/WarningIcon";
import { type FunctionComponent } from "react";
import { type FieldErrors, type FieldValues, type UseFormRegister } from "react-hook-form";

interface FifthStepInterface {
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>
}

const FifthStep: FunctionComponent<FifthStepInterface> = ({ register, errors }) => {
    return (
        <div className="md:mx-24">
            <h1 className="text-[1.37rem] my-4 text-left">Agregá una descripción</h1>
            <p className="mb-6 text-xs">Escribí una breve descripción de tu producto. Podés incluir colores, medidas, lo que quieras.</p>
            <form>
                <label className={` {errors.description_&&_"text-[#FF0000]_relative"} flex flex-col gap-2 text-[11px] font-medium text-black col-auto lg:col-start-2`} htmlFor="description">Escribir descripción 0/640
                    <textarea
                        maxLength={640}
                        rows={8}
                        {...register("description", { required: true })}
                        className={` {errors.description_&&_"border-[1.5px]_border-[#FF0000]"} resize-none border rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`}
                    />

                    {errors.description && <div
                        className="absolute right-1 bottom-1"
                    >
                        <WarningIcon />
                    </div>}
                </label>
            </form>
        </div>
    );
}

export default FifthStep;