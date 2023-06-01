import { type FunctionComponent } from "react";

type FilterIconProps = {
    className?: string
}

const FilterIcon: FunctionComponent<FilterIconProps> = ({ className }) => {
    return (
        <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_574_3943)">
                <path d="M20 36H28V32H20V36ZM6 12V16H42V12H6ZM12 26H36V22H12V26Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_574_3943">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
}

export default FilterIcon;