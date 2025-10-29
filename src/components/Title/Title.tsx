import React from "react";

import Letter from "./Letter";

const Title = () => {
    const sentences = ["Hello,", "My name is Adam,", "I am a Mechatronics", "Engineer"];

    return (
        <h1 className="w-full text-center text-4xl md:w-max md:text-left lg:text-6xl xl:text-[5rem] xl:leading-none">
            {sentences.map((sentence, index) => (
                <React.Fragment key={index}>
                    {sentence.split("").map((letter, letterIndex) => (
                        <Letter
                            key={letterIndex + index}
                            greenText={index === 1 && letterIndex > 10 && letterIndex < 15}
                        >
                            {letter}
                        </Letter>
                    ))}
                    <br />
                </React.Fragment>
            ))}
        </h1>
    );
};

export default Title;
