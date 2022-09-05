// Context provider
import UserContextProvider from "./context/UserContext";
// Components
import UserList from "./components/UserList";
import FilterList from "./components/FilterList";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-gray-800 text-white min-h-screen">
        <div className="container w-2/5 mx-auto py-10">
          <FilterList />
          <UserList />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
