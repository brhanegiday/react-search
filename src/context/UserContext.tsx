import React, { useState, createContext, useEffect } from "react";
import { UserI } from "../Types/User";
import axios from "axios";

interface Props {
  children: React.ReactNode;
}

interface AppContextInterface {
  users: UserI[] | null;
  loading: boolean;
  error: string;
  searchText: string;
  handleChange: (e: string) => void;
  handleRefresh: () => void;
}
const UserContext = createContext<Partial<AppContextInterface>>({});

const UserContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<UserI[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [refreshData, setRefreshData] = useState<boolean>(false);

  // Users API
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(baseUrl);
        setUsers(response.data);
        setError("");
      } catch (error: any) {
        setError(error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    if (searchText === "") fetchUsers();
  }, [refreshData, searchText]);

  const handleRefresh = () => {
    setRefreshData(!refreshData);
    setSearchText("");
    setUsers(users);
  };

  // handle change event of search input
  const handleChange = (value: string) => {
    setSearchText(value);
    filterData(value);
  };

  // include key list
  // const searchKeys: string[] = ["name", "username"];

  // filter records by search text
  // searchKeys.some((key) => item[key].toLowerCase().includes(searchTerm))

  const filterData = (value: string) => {
    const searchTerm = value.toLowerCase().trim();
    if (searchTerm === "") setUsers(users);
    else {
      const filteredData =
        users &&
        users.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.username.toLowerCase().includes(searchTerm)
        );
      setUsers(filteredData);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        searchText,
        error,
        handleChange,
        handleRefresh,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
export { UserContext };
