import React from 'react';

const PurposeMessage = () => {
    return <div>
        <h2 style = {{fontSize:'30px'}}>About Page</h2>
        <div className="center-container">
        <div className="App-colBox" style={{width: '90vw'}}>  
            <h3>SpecEffect Purpose Statement</h3>
            <p data-testid="purpose-paragraph" style = {{fontSize:'18px',textAlign:'left'}}> SpecEffect is a searchable laptop database that you can filter based on your needs.The purpose of SpecEffect is to help people that are less familiar with technical concepts find a laptop that will be useful for them. <br /><br />
            Filters include what the user needs the computer for, the chip, the company who made the computer, and the year the computer was released.As the user selects more filters, it will begin to narrow down the devices listed. <br /><br />
            As the user hovers over certain filters, SpecEffect will display a tiny description to help point the user towards a laptop that will fit their needs. <br /><br />
            SpecEffect, also has a search bar, so the user can find a specific model, if they have one in mind.<br /><br />
            SpecEffect will then display various information about the model. Some stats that it includes are what it is best used for, how much memory it has, the cpu and/or gpu. These are all accompanied with text describing and explaining them. <br /><br />
            </p>

            <h3>Team Members</h3>
            <p style = {{fontSize:'18px',textAlign:'left'}}>
            The project manager of this application was Caramon Cotroneo, 
            the designer was Steven Harrington, 
            and the developers were Grace Cochran and Eliot Cole. 
            Special thanks to the people who helped test our prototypes in early stages of development.
            </p>
        </div> 
        </div>
        </div>;
};

export default PurposeMessage;