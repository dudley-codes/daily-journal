export const JournalEntryComponent = (entry) => {
    let humanDate = new Date(entry.date).toUTCString()
  return `
        <br>
        <section id="entry--${entry.id}" class="journalEntry">
        <div>Date: ${humanDate.slice(0,16)}</div>
        <div>Concept: ${entry.concept}</div>
        <div>Entry: ${entry.entry}</div>
        <div>Mood: ${entry.mood}</div>
        <button id="edit--${entry.id}">Edit</button>
        <button id="delete--${entry.id}">Delete</button>
        </section>
        
    `
}
