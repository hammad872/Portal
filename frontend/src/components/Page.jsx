import React from 'react'
import CsvUploader from './CsvUploader';

const Page = () => {
    const sendDataToMongoDB = async (data) => {
        try {
          const response = await fetch('http://localhost:3001/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <CsvUploader onDataUpload={sendDataToMongoDB} />
  )
}

export default Page