import { Link } from "react-router-dom";
import Button from "./Button";

const Card = (props) => {
    return (
        <div className="w-256 bg-babyBlue-100 rounded-md shadow-md shadow-babyBlue-300 text-babyBlue-1500 transition-all mt-20 hover:scale-105 xl:mt-12">
            <img
                className="w-full h-160px object-cover rounded-t-md"
                src={props.photo}
                alt=""
            />
            <h3 className="font-titan-one p-4 text-lg tracking-wide">
                {props.text}
            </h3>
            <p className="px-4 text-sm leading-relaxed text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="px-4">
                <Link to="/details/why-us">
                    <Button
                        text="Dowiedz się więcej!"
                        textSize="text-sm"
                        textColor="text-royalPink-50"
                        bgColor="bg-royalPink-400"
                        padding="px-3 py-2"
                        borderColor="border-royalPink-600"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Card;
