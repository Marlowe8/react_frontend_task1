import React, { useContext, useState } from "react";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";
import { DataContext } from "../components/DataContext";
import searchIcon from '../components/search-icon-png-8.png';
import '../components/Page.css';

const UserPage = () => {
  const { currentData, loading, itemsPerPage, paginate, currentPage, setItemsPerPage, filteredData, setSearchTerm } = useContext(DataContext);
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setShowSearch(false);
  };

  return (
    <div>
      <div className="page-controls">
        <div className="page-size">
          <label htmlFor="pageSize">Page Size:</label>
          <select
            id="pageSize"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="search">
          <span
            onClick={() => setShowSearch(!showSearch)}
          >
            <img src={searchIcon} alt="Search" />
          </span>
          {showSearch && (
            <input
              type="text"
              placeholder="Enter search term"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onBlur={handleSearch}
            />
          )}
          {showSearch && (
            <button onClick={handleSearch}>
              Search
            </button>
          )}
        </div>
      </div>



      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <DataTable
            data={currentData}
            columns={[
              'id', 'firstName', 'maidenName', 'lastName', 'age',
              'gender', 'email', 'phone', 'birthDate', 'bloodGroup',
              'eyeColor', 'image'
            ]}
          />
          <div className="pagination-container" style={{ marginTop: '20px' }}>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredData.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
