import React from 'react'
import './Error.css'


export default function ErrorPage() {

 

    return (

        <div className="Error">
            <div className="errorcontainer">
                <header>
                   
                </header>
                <main>
                    <div className="errorwrapper">
                        <div className="error404">404</div>
                        <img src="https://cdn.dribbble.com/users/2168231/screenshots/14578164/media/cca093a79ee8f457021878aa78abc985.jpg?compress=1&resize=1200x900" alt="yogaposes" width="400px" />
                        <div className="errortitle">Oops, the page could not be found</div>
                        <div className="errortext">Perhaps it's a good time for a strech. It won't help you find the page, but it will definetly feel good.</div>
                 </div>
                </main>
            </div>
        </div>
    )
}
