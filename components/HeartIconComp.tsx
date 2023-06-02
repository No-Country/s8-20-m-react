import HeartIcon from "@/icons/HeartIcon";

const HeartIconComp = ({count}:{count:Number}) => {
    count=0;
    return (
        
        <div className="relative text-white ">
            <HeartIcon />
            <p className="heartIcon">{String (count)}</p>
        </div>
    );
};

export default HeartIconComp;