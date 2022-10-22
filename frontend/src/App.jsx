import "./App.css";
import Search from "@components/search/search";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.warn(lat);
    console.warn(lon);
  };

  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
