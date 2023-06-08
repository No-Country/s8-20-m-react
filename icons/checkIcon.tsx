import { type FunctionComponent } from "react";

interface CheckIconProps {
    className?: string
}

const CheckIcon: FunctionComponent<CheckIconProps> = ({ className = '' }) => {
    return (
        <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_881_10281)">
                <path d="M12.9059 2.50293C7.24986 2.50293 2.65942 7.09336 2.65942 12.7494C2.65942 18.4055 7.24986 22.9959 12.9059 22.9959C18.562 22.9959 23.1524 18.4055 23.1524 12.7494C23.1524 7.09336 18.562 2.50293 12.9059 2.50293ZM10.8566 17.8727L5.73337 12.7494L7.17813 11.3047L10.8566 14.9729L18.6337 7.19583L20.0785 8.65083L10.8566 17.8727Z" fill="#F8F8F8" />
            </g>
            <defs>
                <clipPath id="clip0_881_10281">
                    <rect width="24.5916" height="24.5916" fill="white" transform="translate(0.610107 0.453613)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default CheckIcon;