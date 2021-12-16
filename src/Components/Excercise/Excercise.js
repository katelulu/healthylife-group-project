import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Excercises.css'

export default function Excercise({ exc }) {
    const { exerciseTitle, exercisePics, exerciseDescrp, overlayText } = exc.fields
    console.log(exerciseTitle);

    return (
        <div className="excpost">
            <h2 className="exctitle">{exerciseTitle}</h2>
            <div className="eximage_">
                {exercisePics && <img className="excimg" src={exercisePics.fields.file.url} alt={exerciseTitle} />}
                <div className="image_overlay">
                    <div className="overlay_text">{overlayText}</div>
                </div>
            </div>
            <section className="excdescrp">
                <ReactMarkdown>{exerciseDescrp}</ReactMarkdown>
            </section>

        </div>
    )
}
