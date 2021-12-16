import React, { useState, useEffect } from 'react'
import { client } from '../../client'
import Excercises from './Excercises';

export default function ExcercisePosts() {
    const [excerciseArticles, setExcerciseArticles] = useState([]);

    useEffect(() => {
        client
            .getEntries({content_type:'exercises'})
            .then((resp) => {
                setExcerciseArticles(resp.items);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="Excercises">
            <div className="exccontainer">
                <header>
                    <div className="excwrapper">
                        <span >Exercises</span>
                    </div>
                </header>
                <main>
                    <div className="excwrapper">
                        <Excercises excercises={excerciseArticles} />
                    </div>
                </main>
            </div>
        </div>
    )
}
