import { Client, type PickerResponse } from "filestack-js";
import { type Dispatch, type FunctionComponent, type ReactNode, type SetStateAction } from "react";

interface ImageUploaderProps {
    setImageUrl: Dispatch<SetStateAction<string[]>>;
    children: ReactNode
}

const ImageUploader: FunctionComponent<ImageUploaderProps> = ({ setImageUrl, children }) => {
    const client = new Client("Aqg69XSJm2mWkrOC4QTCTz");

    const options = {
        onUploadDone: updateForm,
        maxSize: 10 * 1024 * 1024,
        maxFiles: 5,
        accept: "image/*",
        uploadInBackground: false,
    };
    const picker = client.picker(options);

    const handleUpload = () => {
        void picker.open();
    };

    function updateForm(result: PickerResponse) {
        const array = result.filesUploaded.map(e => e.url);

        console.log(array)
        setImageUrl(array)
    }

    return (

        <button type="button" className="w-full" onClick={handleUpload}>
            {children}
        </button>

    );
};

export default ImageUploader;