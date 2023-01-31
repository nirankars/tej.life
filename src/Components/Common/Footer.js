import React from "react";

export default function Footer () {
    return (
        <footer className="container mx-auto grid grid-cols-2 text-[#f2f6f9] ">
            <h1 className="col-start-1">
            <span>तेज़</span> Life
            </h1>
            <div className="col-end-4">
             <a href="/" className="mr-4">
                    terms
             </a>
           
             <a href="/" className="mr-4">
                privacy
             </a>
          
             <a href="/">
                transparency
             </a>
            </div>
        </footer>
    );
}