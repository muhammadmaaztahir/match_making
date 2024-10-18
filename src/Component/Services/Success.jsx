import React, { useEffect, useState } from 'react';

// Card Component to display individual item data (image, title, description)
const Card = ({ title, imageUrl }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-4 m-2 transition transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-bold text-gray-800 mt-4">{title}</h3>
    </div>
  );
};

const Success = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos'); // Example API for images
        const result = await response.json();
        setData(result.slice(0, 12)); // Limit to 12 items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length > 0 ? (
          data.map((item, index) => (
            <Card key={index} title={item.title} imageUrl={item.thumbnailUrl} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Success;
