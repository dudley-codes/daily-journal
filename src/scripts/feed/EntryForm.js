import { filterFeed } from "./FilterEntries.js";

let concept = "";
let entry = "";
let date = "1984-11-27";
let mood = "";

const entryForm = () => {
    return `<form action="">
                <fieldset>
                    <label for="journalDate">Date of Entry:</label>
                    <input type="date" name="journalDate" id="journalDate" value="${date}">
                </fieldset>
            </form>
            <form action="">
                <fieldset>
                    <label for="conceptsCovered">Concepts Covered:</label>
                    <input value="${concept}"
                            type="text" 
                            name="conceptsCovered" 
                            id="conceptsCovered"
                            placeholder="Topics discussed" />
                </fieldset>
            </form>
            <form action="">
                <fieldset>
                    <label for="journalEntry">Journal Entry:</label>
                    <textarea 
                        id="journalEntry" 
                        name="journalEntry" 
                        rows="4" cols="50"
                        placeholder="Write stuff here...">${entry}</textarea>
                </fieldset>
            </form>
            ${moodSelect()}
            <form action="">
            <button id="submit__form">Submit</button>
            <button id="clear__form">Clear</button>
            ${filterFeed()}
        </form>
    </form>`
}

const moodSelect = () => {
  return `            
    <form action="">
    <fieldset>
        <label for="mood">Mood for the Day:</label>
        <select name="mood" id="mood">
            <option value="0">Select a Mood</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Fine">Fine</option>
            <option value="Frustrated">Frustrated</option>
            <option value="Confused">Confused</option>
        </select>
    </fieldset>
    </form>`
}

export const showForm = () => {
    const formElement = document.querySelector("#entryForm");
    formElement.innerHTML = entryForm();
}

export const resetForm = () => {
    document.querySelector("input[name='journalDate']").value="";
    document.querySelector("input[name='conceptsCovered']").value="";
    document.querySelector("textarea[name='journalEntry']").value="";
    document.querySelector("#mood").value=0;
}

let currentMood = 0
let moodIndex = 0
//export function that accepts input and determines edit data to display on the DOM
export const entryEdit = (entryObject) => {
  concept = entryObject.concept
  entry = entryObject.entry
  currentMood = entryObject.mood

  return showForm(), moodEdit()
}

// Switch statement that checks mood on selected entry to edit 
// and sets the Index value of the selected dropdown item.
const moodEdit = () => {
  switch(currentMood){
    case "Happy":
      moodIndex = 1
      break;
    case "Sad":
      moodIndex = 2
      break;
    case "Fine":
      moodIndex = 3
      break;
    case "Frustrated":
      moodIndex = 4
      break;
    case "Confused":
      moodIndex = 5
      break;
    default: moodIndex = 0
  }
  const moodElement = document.getElementById("mood")
  moodElement.options[moodIndex].selected = true; 
  return moodSelect()
}

