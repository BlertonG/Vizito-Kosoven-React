import React from "react";

import "./Home.css"

function HomePage() {
    return (
        <div className="main-top">
            <div className="content">
                <h1 className="text">Vizito Kosoven</h1>
                {window.innerWidth > 768 && (
                    <button className="btn-1">Click Here !</button>
                )}
            </div>
        </div>
    );
}


export default HomePage;



