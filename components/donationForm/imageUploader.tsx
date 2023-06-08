import { Client, type PickerResponse } from "filestack-js";
import { useEffect, useState, type Dispatch, type FunctionComponent, type ReactNode, type SetStateAction } from "react";
import { type FieldValues, type UseFormSetValue } from "react-hook-form";

interface ImageUploaderProps {
    setImageUrl: Dispatch<SetStateAction<string[]>>;
    children: ReactNode,
    setValue: UseFormSetValue<FieldValues>,
}

const ImageUploader: FunctionComponent<ImageUploaderProps> = ({ setImageUrl, children, setValue }) => {

    const [isClient, setIsClient] = useState(false);
    const [picker, setPicker] = useState<any>(null);

    useEffect(() => {
        setIsClient(true);

        const client = new Client("Aqg69XSJm2mWkrOC4QTCTz");

        const options = {
            onUploadDone: updateForm,
            maxSize: 10 * 1024 * 1024,
            maxFiles: 5,
            accept: "image/*",
            uploadInBackground: false,
        };

        const newPicker = client.picker(options);
        setPicker(newPicker)
    }, []);


    const handleUpload = () => {
        if (picker) {
            void picker.open();
        }
    };

    function updateForm(result: PickerResponse) {
        const array = result.filesUploaded.map(e => e.url);
        setValue('code', array)
        setImageUrl(array)
    }

    if (isClient) {
        return (<button type="button" className="w-full" onClick={handleUpload}>
            {children}
        </button>)
    }

    return (
        <h2>No ha sido posible cargar la herramienta</h2>
    );
};

export default ImageUploader;