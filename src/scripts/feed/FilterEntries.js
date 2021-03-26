export const filterFeed = () => {
  return `<label for="sort--date">Sort by Date:</label>
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
  </select>`
}