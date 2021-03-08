export const JournalEntryComponent = (entry) => {
    return `
        <br>
        <section id="entry--${entry.id}" class="journalEntry">
        <div>Date: ${entry.date}</div>
        <div>Concept: ${entry.concept}</div>
        <div>Entry: ${entry.entry}</div>
        <div>Mood: ${entry.mood}</div>
        </section>
        
    `
}