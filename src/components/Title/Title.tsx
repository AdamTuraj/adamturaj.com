import React from "react";

import Letter from "./Letter";

const Title = () => {
    const sentences = ["Hello,", "My name is Adam,", "I am a Mechatronics", "Engineer"];

    return (
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-5xl lg:text-6xl">
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
