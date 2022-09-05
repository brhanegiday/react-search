import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function FilterList() {
  const { loading, searchText, error, handleChange, handleRefresh } =
    useContext(UserContext);
  return (
    <div>
      <h1 className="text-3xl pb-5 mb-5 border-b text-center">Users API</h1>
      {loading ? <div>Loading...</div> : null}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="flex items-center space-x-2">
        <input
          className="py-1.5 px-2 border rounded-md m-2 text-gray-800 w-96"
          type="text"
          placeholder="Type to search..."
          value={searchText}
          onChange={(e) => handleChange?.(e.target.value)}
        />
        <button className="py-1 px-4 border rounded-md" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default FilterList;
