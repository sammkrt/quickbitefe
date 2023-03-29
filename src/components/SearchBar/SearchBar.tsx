import "./SearchBar.css";
function SearchBar() {
  return (
    <main className="searchbar-main">
      <input className="searchbar-input" type="text" placeholder="Search" />
      <button className="searchbar-button">
        <img className="searchbar-img" src="./assets/search.png" alt="search" />
      </button>
    </main>
  );
}
export default SearchBar;
