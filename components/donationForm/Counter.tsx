import { FunctionComponent } from "react";

interface CounterProps {
    currentStep: number
}

const Counter: FunctionComponent<CounterProps> = ({ currentStep }) => {
    return (
        <div>
            <ul className="flex justify-between overflow-hidden max-w-[678px] mx-auto">
                <li className={`${currentStep === 1 ? "bg-transparent" : "bg-primary"} border-2 border-primary w-[22px] h-[22px] text-center leading-[20px] text-sm rounded-full relative transition z-0`}>
                    <span className={`${currentStep === 1 ? "text-primary" : "text-white"} transition`}>1</span>
                    <span id="line" className={`${currentStep > 1 ? "border-primary" : "border-[#D6D6D6]"} border-[1.88px] absolute w-[20vw] top-[7px] left-[20px] transition -z-10`}></span>
                </li>
                <li className={`${currentStep === 2 ? "bg-white border-primary" : currentStep > 2 ? "bg-primary border-primary" : "bg-[#D6D6D6] border-[#D6D6D6]"} border-2 w-[22px] h-[22px] text-center leading-[20px] text-sm rounded-full relative transition z-0`}>
                    <span className={`${currentStep === 2 ? "text-primary" : "text-white"} transition`}>2</span>
                    <span id="line" className={`${currentStep > 2 ? "border-primary" : "border-[#D6D6D6]"} border-[1.88px] absolute w-[20vw] top-[7px] left-[20px] transition -z-10`}></span>
                </li>
                <li className={`${currentStep === 3 ? "bg-white border-primary" : currentStep > 3 ? "bg-primary border-primary" : "bg-[#D6D6D6] border-[#D6D6D6]"} border-2 w-[22px] h-[22px] text-center leading-[20px] text-sm rounded-full relative transition z-0`}>
                    <span className={`${currentStep === 3 ? "text-primary" : "text-white"} transition`}>3</span>
                    <span id="line" className={`${currentStep > 3 ? "border-primary" : "border-[#D6D6D6]"} border-[1.88px] absolute w-[20vw] top-[7px] left-[20px] transition -z-10`}></span>
                </li>
                <li className={`${currentStep === 4 ? "bg-white border-primary" : currentStep > 4 ? "bg-primary border-primary" : "bg-[#D6D6D6] border-[#D6D6D6]"} border-2 w-[22px] h-[22px] text-center leading-[20px] text-sm rounded-full relative transition z-0`}>
                    <span className={`${currentStep === 4 ? "text-primary" : "text-white"} transition`}>4</span>
                    <span id="line" className={`${currentStep > 4 ? "border-primary" : "border-[#D6D6D6]"} border-[1.88px] absolute w-[20vw] top-[7px] left-[20px] transition -z-10`}></span>
                </li>
                <li className={`${currentStep === 5 ? "bg-white border-primary" : currentStep > 5 ? "bg-primary border-primary" : "bg-[#D6D6D6] border-[#D6D6D6]"} border-2 w-[22px] h-[22px] text-center leading-[20px] text-sm rounded-full z-0`}>
                    <span className={`${currentStep === 5 ? "text-primary" : "text-white"} transition`}>5</span>
                </li>
            </ul>
        </div>
    );
}

export default Counter;