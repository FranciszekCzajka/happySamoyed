import Card from "./Card";

import foodPic from "../images/food.webp";
import funPic from "../images/samoyedFun.webp";
import learningPic from "../images/samoyedLearning.webp";
import walkingPic from "../images/samoyedWalking.webp";

const WhyUs = () => {
    return (
        <div
            id="whyUs"
            className="w-full flex justify-center items-center flex-col py-10 md:px-20 2xl:px-28"
        >
            <h2 className="font-titan-one text-4xl mt-10vh mb-10 text-babyBlue-1500 xsm:text-5xl">
                Dlaczego my:
            </h2>
            <div className="flex w-full items-center flex-col xl:flex-row xl:justify-between 2xl:justify-evenly">
                <div className="w-full flex flex-col items-center justify-around sm:flex-row md:w-full">
                    <Card text="Dużo ruchu" photo={walkingPic} />
                    <Card text="Godziny zabawy" photo={funPic} />
                </div>
                <div className="w-full flex flex-col items-center justify-around sm:flex-row md:w-full">
                    <Card text="Ważna nauka" photo={learningPic} />
                    <Card text="Zdrowe jedzenie" photo={foodPic} />
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
