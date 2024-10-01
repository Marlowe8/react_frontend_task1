import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children, dataType }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/${dataType}`);
        setData(response.data[dataType]);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${dataType}:`, error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dataType]);
  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);



  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DataContext.Provider value={{ data, loading, currentData, itemsPerPage, paginate, currentPage, setItemsPerPage, setSearchTerm, filteredData }}>
      {children}
    </DataContext.Provider>
  );
};
