const entryForm = () => {
    return `
            <h2>Daily Journal</h2>
            <form action="">
                <fieldset>
                    <label for="journalDate">Date of Entry:</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
            </form>
            <form action="">
                <fieldset>
                    <label for="conceptsCovered">Concepts Covered:</label>
                    <input value=""
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
                        placeholder="Write stuff here..."></textarea>
                </fieldset>
            </form>
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
                    <label for="sort--date">Sort by Date:</label>
                    <select name="sort--date" id="sort--date">
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                    <br>
                    <label for="sort--mood">Sort by Mood:</label>
                    <select name="sort--mood" id="sort--mood">
                        <option value="0">Select a Mood</option>
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Fine">Fine</option>
                        <option value="Frustrated">Frustrated</option>
                        <option value="Confused">Confused</option>
                    </select>
                </fieldset>
            </form>
            <form action="">
            <button id="submit__form">Submit</button>
            <button id="clear__form">Clear</button>
        </form>
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