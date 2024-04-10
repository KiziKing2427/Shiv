import { useState, useEffect } from 'react';

function ShowProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <p>Type of Transportation: {user.transportation_type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowProducts;
