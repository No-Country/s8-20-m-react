import Image from "next/image";

function FinalStep() {
    return (
        <div className="">

            <h1 className="text-4xl font-bold my-4 text-center">¡Felicitaciones!</h1>
            <p className="mb-6 text-center text-xl px-4 md:font-bold">Tu producto se publicó de manera exitosa.</p>
            <div className="relative overflow-hidden h-52 w-2/3 mx-auto">
                <Image className=" object-contain " src="/donationFormFinalImg.png" alt="" fill ></Image>
            </div>
            <p className="text-center text-sm md:text-xl md:font-bold">Cada donación hace la diferencia.</p>
            <p className="text-center text-sm md:text-xl md:font-bold">¡Gracias por tu compromiso y solidaridad!</p>
        </div>
    );
}

export default FinalStep;