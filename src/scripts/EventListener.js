import { resetForm, entryEdit } from "./feed/EntryForm.js"
import { createEntry, deleteEntry, getSingleEntry, showEntryList } from "./data/DataManager.js"

export const eventListener = () => {

    const appElement = document.querySelector("main")

    appElement.addEventListener("click", event => {
        if(event.target.id.startsWith("submit")){
            console.log("You clicked 'submit'")
            
        } else if (event.target.id.startsWith("edit")){
            const splitId = event.target.id.split("--")[1];
            console.log("you split the edit ID", splitId);
            // todo: call single entry function and pass through split ID "entryID"
            getSingleEntry(splitId)
            // todo: .then response passed through "entryEdit" function
            .then(response => { 
              entryEdit(response)
            })
        } else if (event.target.id.startsWith("delete")){
            const splitID = event.target.id.split("--")[1];
            deleteEntry(splitID)
            .then(showEntryList)
        }
        }
    )
};

export const formClear = () => {
    document.addEventListener("click", event => {
    if (event.target.id === "clear__form"){
        event.preventDefault();
        resetForm();
    }
    })
}

export const formSubmit = () => {
    document.addEventListener("click", event => {
    if (event.target.id === "submit__form"){
        event.preventDefault();
        const inputDate = document.querySelector("input[name='journalDate']").value;
        const inputConcept = document.querySelector("input[name='conceptsCovered']").value;
        const inputEntry = document.querySelector("textarea[name='journalEntry']").value;
        const inputMood = document.querySelector("#mood").value;
    
        const entryObject = {
            date: inputDate,
            concept: inputConcept,
            entry: inputEntry,
            mood: inputMood
        }
    
    createEntry(entryObject)
    .then(showEntryList)
    .then(resetForm)

    }
    })
}
