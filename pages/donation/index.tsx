import FormIndex from "@/components/donationForm/formIndex";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

function Donation() {

    const [donationStep, setDonationStep] = useState<number>(1)
    const [responseId, setResponseId] = useState<string>()

    const {
        register,
        reset,
        formState,
        formState: { errors },
        getValues,
        setValue,
        watch
    } = useForm();

    const onSubmit = (data: FieldValues) => {

        const productData = {
            title: data.title,
            description: data.description,
            code: data.code.join(','),
            category: data.category,
            status: data.status,
            thumbnail: data.thumbnail
        };

        // fetch
        fetch('http://localhost:3030/api/products/add', {
            method: 'POST',
            body: JSON.stringify(productData),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((result) => {
            if (result.ok) {
                result.json().then(res => {
                    setResponseId(res.message._id)
                })

                // mensaje de confirmación
                reset();
                return;
            }
            // mensaje de error
            console.log(result);
            alert('No se pudo crear el producto!');
        });
        //
    };

    return (

        <FormIndex
            donationStep={donationStep}
            setDonationStep={setDonationStep}
            register={register}
            errors={errors}
            formState={formState}
            getValues={getValues}
            onSubmit={onSubmit}
            setValue={setValue}
            watch={watch}
            responseId={responseId}
        />
    )
}

export default Donation;