import React from "react";

/* NOTE:
I'm expecting each item in the glossary database to have an ID number, a string for a term’s name, and a longer string defining the term. Im also assuming the glossary database is already in alphabetical order in terms of term name.

The table of contents divider will containing a list of links that are labeled after each term name, and when clicked, scroll down to the definition of its term. The second divider after it will print the terms and definitions straight from the database, making the term names h3 and tying them to the links established in the table of contents divider.
*/

interface GlossItem {
    id: number;
    term: string;
    def: string;
}

const mockGlossData: GlossItem[] = [
    {id: 0, term: "CPU", def: "Short for Central Proccessing Unit; The primary component of a computer that executes instructions and calculations. The speed (Clock Speed) of a CPU is measured in gigahertz (GHz)."},
    {id: 1, term: "RAM", def: "Short for Random Access Memory; The quick, short-term memory of your machine that resets when you shut down or restart your machine. RAM size is usually measured in gigabytes (GB)."},
    {id: 2, term: "GPU", def: "Short for Graphics Processing Unit; The rendering engine of the computer, specializing in producing images, videos, and 3D graphics to show up on your machine's screen."},
    {id: 3, term: "Motherboard", def: "The backbone of a computer, connecting most other parts of the machine, allowing them to send information and communicate between eachother."},
    {id: 4, term: "SSD and HDD", def: "Short for Solid State Drive and Hard Disk Drive respectivley; The long term memory of the computer. SSD is a faster storage type than HDD, but HDD is usually cheaper. Is usually mesured in gigabytes (GB), or sometimes terabytes (TB) when avaliable space is really large."},
    {id: 5, term: "Processing Cores", def: "A Core is the individual processing unit inside a CPU. More cores allow the computer to do more things at once."},
    {id: 6, term: "Overclocking", def: "The act of manually pushing a computer component (usually the CPU or GPU) to run faster than its factory settings."},
    {id: 7, term: "PSU", def: "Short for Power Supply Unit; The part of the machine that converts AC electricity from the wall into DC power for your computer parts. Measured in Watts"},
    {id: 8, term: "Cache", def: "A tiny, incredibly high-speed memory area built directly onto the CPU for frequently accessed data."},
    {id: 9, term: "VRAM", def: "Short for Video Random Access Memory; a dedicated version of RAM  (short-term memory area) used specifically by the GPU to render graphics."},
    ];

const GlossaryText = () => {
    return (<div>
        <h3>Table of Contents</h3>
                <div className="App-row">
                    <div className="App-colBox" style={{width: "50vw"}}>
                        list of links goes here 
                    </div>
                </div>
                <div>
                    alll the text goes here
                </div>
        </div>
    );
};
export default GlossaryText;