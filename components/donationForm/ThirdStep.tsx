
function ThirdStep() {
    return (
        <div className="">
            <h1 className="text-[1.37rem] my-4 text-left">Escribí un título</h1>
            <p className="mb-6 text-sm">Agregá un título breve que describa las características principales de tu producto. Ej.: “Pantalón de jean negro”.</p>

            <form>
                <label className={` {errors.title_&&_"text-[#FF0000]_relative"} flex flex-col gap-2 text-xs text-gray col-auto lg:col-start-2`} htmlFor="title">Título del producto
                    <input
                        // {...register("title", { required: true })} 
                        className={` {errors.title_&&_"border-[1.5px]_border-[#FF0000]"} h-10 border rounded py-2 px-4 placeholder:text-neutro placeholder:text-base hover:shadow-[0px_4px_8px_3px_rgba(0,_0,_0,_0.1),_0px_1px_3px_rgba(0,_0,_0,_0.02)] transition-all focus:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]`}
                        type="text" />

                    {/* {errors.title && <div
                        className="absolute right-1 bottom-1"
                    >
                        <WarningIcon />
                    </div>} */}

                </label>

            </form>

        </div>
    );
}

export default ThirdStep;