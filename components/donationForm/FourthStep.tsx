import { type FunctionComponent } from "react";
import { type FieldValues, type UseFormRegister } from "react-hook-form";


interface FourthStepInterface {
    register: UseFormRegister<FieldValues>,
}

const FourthStep: FunctionComponent<FourthStepInterface> = ({ register }) => {
    return (<div className="">
        <h1 className="text-[1.37rem] my-4 text-left md:ml-64">Elegí una categoría</h1>
        <p className="mb-6 text-sm md:text-center">Elegí una categoría que ayude a identificar y agrupar facilmente tu producto.</p>

        <form>
            <label className={` {errors.title_&&_"text-[#FF0000]_relative"} md:mx-auto md:w-2/5 flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2`} htmlFor="title">Categoría del producto
                {/* <input
                    {...register("category", { required: true })}
                    className={` {errors.title_&&_"border-[1.5px]_border-[#FF0000]"} h-10 border rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`}
                    type="text" /> */}

                <select
                    {...register("category", { required: true })}
                    className={`h-10 border rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`}
                    id="category"
                >
                    <option value="">Seleccionar categoría</option>
                    <option value="ropa">Ropa</option>
                    <option value="juguetes">Juguetes</option>
                    <option value="alimentos-no-perecederos">Alimentos no perecederos</option>
                    <option value="utiles-escolares">Útiles escolares</option>
                    <option value="calzado">Calzado</option>
                </select>

            </label>
        </form>
    </div>);
}

export default FourthStep;