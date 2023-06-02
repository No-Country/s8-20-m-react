import HeartIcon from "@/icons/HeartIcon";

const HeartIconComp = ({count, texts}) => {
    return (
        <div className="relative text-white ">
            <HeartIcon />
            <p className="heartIcon">{count}</p>
        </div>
    );
};

export default HeartIconComp;