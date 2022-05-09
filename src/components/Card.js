import Button from "./Button";

const Card = (props) => {
    return (
        <div className="w-256px bg-babyBlue-100 rounded-md shadow-md shadow-babyBlue-300 text-babyBlue-1500 transition-all hover:scale-110">
            <img
                className="w-full h-160px object-cover rounded-t-md"
                src={props.photo}
                alt=""
            />
            <h3 className="font-oleo-script p-4 text-lg tracking-wide">
                {props.text}
            </h3>
            <p className="px-4 text-sm leading-relaxed text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="px-4">
                <Button text="Dowiedz się więcej!" />
            </div>
        </div>
    );
};

export default Card;
