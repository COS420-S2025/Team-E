# Team Effigy

Team Members:

- Project Manager: Caramon C.
- Designer: Steven H.
- Developer 1: Grace C.
- Developer 2: Eliot C.

Shared Documents Drive: [https://drive.google.com/drive/u/1/folders/0ALEmoWKIj3muUk9PVA](https://drive.google.com/drive/u/1/folders/0ALEmoWKIj3muUk9PVA)

# SpecEffect

SpecEffect is a web application that will have a searchable catalog of possible laptops. As the user selects more filters, it will begin to narrow down the devices. Filters include what the user needs the computer for, the chip, the company who made the computer, and the year the computer was released. As the user hovers over certain filters, SpecEffect will display a tiny description to help point the user towards a laptop that will fit their needs. SpecEffect will also have a search bar, so the user can find a specific model, if they have one in mind. SpecEffect will then display various information about the model. This includes what it is best used for, how much memory it has, battery life and the average price. These will all be accompanied with text describing and explaining them.

**Problem Statement**:

1. Sellers often mislead consumers by overstating the computer's performance related to the needs of the customer. Many of these consumers don’t know what makes a computer “good”.
2. For example, consumers often buy these computers, not knowing that they’re overpriced and not suitable for their needs, leading them to get frustrated by their purchased computer’s poor performance afterwards.
3. Some personal computer and laptop catalogues allow users to search for devices based on the technical specifications in one centralized location, allowing comparisons between the performances of these devices, like PCPartPicker and Noteb.
4. However, these prior solutions are unintuitive for inexperienced users, listing the more technical details of a computer, using technical jargon that many users may not understand, like “TDP” or “L2 Cache”. These applications do not go into any detail explaining what these terms mean.
5. How can we make the computer device market accessible and easy to understand for all users of varying experience levels with computer specifications?

**Problem Statement 1 Draft 2 (Unused)**

1. Consumers have a need that can be accomplished by a computer.
2. They look at computers and choose the one that looks the best, but many of these people return them for not fitting their needs. This resulted from a lack of knowledge on what each part of the computer was used for and a restriction of information from the tech store.
3. Prior solutions to this are college classes or YouTube channels that go through these previous topics.
4. The issue with this is not everybody can afford the classes or can trust the YouTube influencers.
5. How can we design a web application to help make the knowledge of the computer parts more accessible to people?

**Problem Statement 2 (Unused)**:

1. A substantial number of people struggle with basic computer functions.
2. For example, users who are not familiar with the file directory system could lose or forget where they placed important files and documents on their computer, leading to lost work, slowed progress, and wasted time.
3. One solution is the Windows Help Menu, which can be accessed through the settings of a Microsoft device. It allows users to search up the problems with their machine that they need help/advice with, taking them to related forums and articles about said problems.
4. A problem with this feature is that not many Microsoft users know of its existence, and is hard to spot/find, as the user has to open settings and scroll down to the bottom and click a small, easily missable link that says “Get Help.”
5. How can we design an easily accessible system that provides fast assistance for everyday computer problems?

# User Stories

* As a student, I want to understand what makes a laptop perform well so that I can make informed purchasing decisions for equipment.
* As a computer enthusiast, I want to be able to view a given device’s specifications to ensure that it fits my needs.
* As a consumer, I want to view basic details and thumbnails of multiple devices at once in catalogue form, so that I can assess multiple options at once.
* As a user, I want to be able to save certain devices so that I can easily return to them later in a different session.
* As a grandparent, I want a place to find the definitions of terms I'm unfamiliar with so that I know what kind of laptop to get my granddaughter. 
* As a Computer Science undergraduate, I want to search for a specific laptop by its model number so that I can make sure it suits my programming needs.  
* As a person who likes to play video games, I want to open two different tabs so that I can compare the graphics of two different laptops. 
* As a starting software developer, I want to search for a laptop by its release date so that I can find an older laptop that supports legacy software.
* As a college student, I want to be able to search for and locate a laptop so that I can find a laptop that has specifications that are compatible with the programs needed to complete my degree. 
* As a tech-beginner, I want to display descriptions within SpecEffect when clicking over complex tech-vocabulary so that I can understand what each specification means without needing prior experience.
* As a busy desk worker, I want to filter by my need so I can find a laptop in SpecEffect without losing quality time that could be used elsewhere.
* As a customer, I want to view a picture of the laptop in SpecEffect to see the shape and size of what I am potentially purchasing.
* As a parent, I want to search for a laptop with a small screen size so that the laptop I get is suitable for my child’s schoolwork.
* As a gamer, I want to find a laptop that has specifications with good graphics so that I can get a device I know can play the newest AAA titles.
* As a consumer, I want to view a page of information about a laptop I’m considering buying so that I know whether or not the laptop is good for basic office tasks.
* As a user, I want to filter laptops by price so I can find a laptop that fits my budget.

# Functional Requirements
* F-REQ-1.1: The system shall allow the user to type the name of a laptop model into the search bar.
* F-REQ-1.2: The system shall display to the screen a list of laptops matching the name entered in the search box.
* F-REQ-1.3: The user shall be able to click on any of the displayed results of a search.
* F-REQ-2.1: The system shall allow filtering by various properties.
* F-REQ-2.2: The user shall be able to select any number of filters and see a list of all laptops matching those filters displayed on the screen.
* F-REQ-3.1: The system shall display on the screen a list of metrics for the selected laptop.
* F-REQ-3.2: The user shall be able to save the selected laptop to their favorites list.
* F-REQ-3.3: The system shall display on the screen a computed “performance score” that combines multiple metrics for the selected laptop.
* F-REQ-4.1: The user shall be able to click on the dictionary button to change screens.
* F-REQ-4.2: SpecEffect shall change to the dictionary screen when clicked.
* F-REQ-4.3: The user shall be able to select a tech-vocabulary category to scroll to.
* F-REQ-4.4: SpecEffect shall be able to scroll to the selected section automatically.
* F-REQ-5.1: The user shall be able to move their cursor over information to show a pop up.
* F-REQ-5.2: SpecEffect shall access the definition of the keyword from its dictionary.
* F-REQ-5.3: SpecEffect shall pop up a text box with the definition of the hovered keyword.
* F-REQ-5.4: SpecEffect shall remove the pop up, when it no longer detects the cursor hovering.

# Non-Functional Requirements
* NF-REQ-1.1: After clicking a category button from the Glossary page, the system shall scroll the application window to the selected section within 2.5 seconds.
* NF-REQ-1.2: The system shall update which entries of the laptop catalog are shown within 3 seconds after a user applies or removes filters.
* NF-REQ-1.3: The system shall load individual laptop pages to the screen within 2 seconds.
* NF-REQ-1.4: The system shall display laptop catalog search results on the homepage screen within 3 seconds after entering.
* NF-REQ-2.1: When an invalid search input is entered into the homepage’s search bar, the system shall display an error message below the bar instead of crashing.
* NF-REQ-2.2: The system shall maintain a restorable backup of the catalogue database.
* NF-REQ-3.1: The system shall not allow unauthorized users to modify or delete catalogue data.
* NF-REQ-3.2: The system shall use HTTPS for secure data transfer.
* NF-REQ-4.1: The system shall function on the latest versions of Chrome, Firefox and Edge.
* NF-REQ-4.2: The system’s pages shall use consistent fonts, color schemes, and button styles.
* NF-REQ-4.3: The system shall be usable & understandable to the point that a first-time user will be able to search for a laptop from the homepage’s search bar without instructions within 2 minutes 99% of the time.
* NF-REQ-5.1: The system shall only allow Team Effigy members and other authorized users to edit or update laptop entries.

# Build instructions:

Clone the repo:

```bash
git clone https://github.com/COS420-S2025/Team-E.git
```

Navigate to the react project folder:

```bash
cd Team-E/Code/spec-effect
```

Install dependencies:

```bash
npm i
```

Launch the application:

```bash
npm start
```
