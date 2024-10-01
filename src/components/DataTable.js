import React from 'react';

const DataTable = ({ data, columns }) => {
  return (
    <table 
      border="1" 
      style={{ 
        width: '100%', 
        textAlign: 'center', 
        borderCollapse: 'collapse',
        borderColor: '#ebebeb'
      }}
    >
      <thead>
        <tr>
          {columns.map((column) => (
            <th 
              key={column}
              style={{
                backgroundColor: '#c0e3e5', 
                color: '#322625',           
                padding: '10px',
                borderColor: '#ebebeb',     
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            >
              {column.charAt(0).toUpperCase() + column.slice(1).replace(/([A-Z])/g, ' $1')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td 
                key={column} 
                style={{
                  borderColor: '#ebebeb',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  padding: '8px'
                }}
              >
                {column === 'thumbnail' || column === 'image' ? (
                  <img 
                    src={item[column]} 
                    alt={item.title} 
                    style={{width: '50px' }} 
                  />
                ) : (
                  item[column]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
