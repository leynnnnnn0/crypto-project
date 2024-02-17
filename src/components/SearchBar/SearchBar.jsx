import "./SearchBar.css"
import { marketChartStore } from "../../store/marketChartStore";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const store = marketChartStore();

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Bitcoin"
        onChange={(e) => store.setQuery(e)}
        value={store.query}
      />
      <FaSearch className="search-icon" onClick={() => store.fetchChartData()}/>
    </div>
  );
}

export default SearchBar