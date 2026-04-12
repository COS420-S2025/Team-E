import React from "react";
// import { GlossaryEntry } from "./DatabaseGlossaryReader"

// import from firebase and relevant classes along with getAllEntries(): GlossaryEntry[]
// also get firebase emulator working with app after eliot's database stuffs been pulled into main
// for now, just download it and do the activity on the web textbook

interface GlossItem {
    id: string;
    term: string;
    def: string;
}

const mockGlossData: GlossItem[] = [
    {id: 0, term: "CPU", def: "The Central Processing Unit (CPU) is the main component of a computer system. It is composed of complicated circuitry that performs the vast majority of computer operations. It is the central hub for executing program instructions, regulating and managing the entire computer system, and manipulating the system's resources.\n\nThere are several manufacturers of modern CPUs that are reputable. Some of the most notable include Advanced Micro Devices (AMD) with their Ryzen products, Qualcomm, and Intel with their Intel Core series."},
    {id: 1, term: "RAM", def: "Random Access Memory (RAM), sometimes shortened to “memory”, is effectively the computer's short-term memory component. Data is stored here temporarily while the system is using it and is required for any significant systems to be functional. All data stored within RAM is not saved and will be lost when the computer shuts down or loses power. RAM needs to be both fast and high-capacity, especially for any programs that require more resources, such as video editing or gaming.\n\n4 to 12 gigabytes of RAM should be enough for general tasks such as browsing the web or answering messages. However, other tasks such as gaming, video editing, high-end streaming, or programs that perform a significant number of computations will tend to require anywhere between 16 and 64 gigabytes of RAM, depending on the demand."},
    {id: 2, term: "GPU", def: "The Graphics Processing Unit (GPU) is a cousin of the CPU. This component is crucial for high-power parallel processing, video rendering, and gaming. They are also used in artificial intelligence and deep learning. The main purpose of the GPU is to perform fast computations that can be used to amplify and produce graphics on the screen, although they can also be harnessed for high-performance computing as well.\n\nOf greatest note, the GPU is sometimes referred to as the “graphics card” or “video card”. This is a misnomer, however, as those terms refer to the entire circuit board that houses the GPU inside it. A graphics card will always have a GPU mounted inside, though a GPU does not necessarily need a graphics card mount, as it can come in the form of its own chip and board."},
    {id: 3, term: "Motherboard", def: "The motherboard is the central circuit board of the entire system, connecting all of the components like the RAM, CPU, GPU, and others together. It establishes communication between the different areas of the system and supplies the computer with power. The computer's ports are also linked to the system through the motherboard's interface, both physical and digital, as well as other peripheral devices that need to communicate with the system."},
    {id: 4, term: "SSD and HDD", def: "Solid State Drives (SSD) and Hard Disk Drives (HDD) are both devices/components that store data long-term, as opposed to RAM, which is short-term. This means that all data stored within these devices will remain after the computer shuts down or loses power. SSDs are faster than HDDs, though they are less cost-effective and space-efficient. SSDs tend to be much more expensive for smaller storage sizes. SSDs can cost between 8 and 10 cents per 10th of a gigabyte, whereas HDDs usually cost between 3 and 6 cents per gigabyte.\n\nSince SSDs are faster, they are incredibly well-suited for programs or tasks that require frequent communication of data between RAM and long-term storage, such as video games. However, if you are looking for cheaper, larger amounts of space for data on your system and you aren't concerned about high-speed load times, an HDD would be better. These devices can also be interchanged, mounted inside the system, or connected externally, and can be run side-by-side."},
    {id: 5, term: "Processing Cores", def: "A Processing Core is an individual component of the CPU. These are the actual devices on the CPU chip that perform computations and execute instructions. One limitation of cores is that they can only execute one instruction or perform one operation at a time, which is why most CPUs tend to have multiple cores, sometimes as many as 20 cores or more. The more cores a CPU has, the more instructions it can execute at any given time, allowing for multiple programs to be run in parallel.\n\nIn general, standard tasks like browsing the web, watching videos, or other simple tasks require only 2 cores. Simple gaming, photo and video editing, and multitasking can be done with 4 cores. 6 to 8 cores are better for more involved gaming or professional applications, and 10+ cores should be enough for high-end program execution and even running simulations."},
    {id: 6, term: "Clock Speed & Overclocking", def: "The Clock Speed of a CPU directly means how many cycles are executed during a second, where each cycle contains instruction executions and operations. It is typically measured in gigahertz (GHz), so a CPU with a clock speed of 3.2 GHz means it executes 3.2 billion cycles each second. The faster the clock speed, the more instructions and operations that can be executed each second, the faster the system runs, though it tends not to be that simple.\n\nOverclocking is a process that is reserved for people who are more experienced and have a good understanding of the computing system. You can overclock multiple components of the computer system, most notably the CPU. This means you are accessing the system settings (and sometimes bypassing safety locks) to increase the clock speed of the component. While this can increase component efficiency and speed without having to spend a considerable amount of money on new parts, overclocking can be dangerous for the system if done carelessly or incorrectly."},
    {id: 7, term: "PSU", def: "The Power Supply Unit is used to connect the entire computer system to the electrical grid without harming the incredibly fragile components. It acts as a specialized converter that allows for power to be provided to each part of the system, including some connected external devices. This is critical as these computer parts require a stable connection to power that protects against fluctuations. If this component is faulty or failing, it can be disastrous for the entire computer, sometimes destroying all components, which is likely incredibly expensive. Careful consideration must be made when deciding who to purchase a PSU from."},
    {id: 8, term: "Cache", def: "The Cache, built into the CPU, acts as a middleman between the CPU and RAM, providing the computer with an additional layer of high-speed, temporary data storage. Data is typically stored in the cache during a given instruction or set of instructions that repeatedly consult or utilize a unit of data. There are typically three cache registers built into the CPU: L1, L2, and L3 cache. L1 cache is the smallest of the three, but it is the closest to the CPU and has the highest speed. L2 is one step removed, larger, but slower. And L3 is the largest and slowest, but still much faster than RAM, which it connects to."},
    {id: 9, term: "VRAM", def: "Video Random Access Memory (VRAM) is specialized RAM used in conjunction with the GPU to store data used for images, videos, and other graphics like textures or geometry required for the GPU to perform the calculations it needs to do to produce a visual on the display. It plays a key role in allowing the GPU to perform its function, and is integrated directly into the video card board. Whereas RAM is general-purpose data storage, VRAM is specifically designed to store and transfer graphical data to the GPU for the display."},
    ];

const createAnchor = (term: string) =>
    term.toLowerCase().replace(/\s+/g, "-");

const GlossaryText = () => {
    return (<div>
        <h3>Table of Contents</h3>
                <div className="App-row">
                    <div className="App-colBox" style={{width: "50vw", textAlign: "left"}}>
                        <ul style={{paddingLeft: "20vw"}}>
                        {mockGlossData.map((item) => (
                            <li key={item.id}>
                                <a href={`#${createAnchor(item.term)}`}>
                                    {item.term}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: "2rem" }}>
                {mockGlossData.map((item) => (
                    <div key={item.id}>
                        <h3 id={createAnchor(item.term)}>
                            {item.term}
                        </h3>
                        <p style={{whiteSpace: "pre-line"}}>{item.def}</p>
                    </div>
                ))}
                </div>
        </div>
    );
};
export default GlossaryText;