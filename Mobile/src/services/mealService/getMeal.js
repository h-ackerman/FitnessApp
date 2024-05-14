import axios from 'axios';

export const fetchMealItems = async () => {
    // const url = "http://localhost:8080/meal/";
    console.log("Fetching data from:", url);
    try {
        // Sending a GET request to the specified URL
        const result = await request({
            url: 'http://localhost:8080/meal/',
            method: 'GET'
          })
        // Logging the received data
        console.log("Data received:", result.data);
        // Returning the data received from the API
        return result.data;
    } catch (error) {
        // Handling errors if the request fails
        console.error("Error fetching data:", error);
        // Returning an empty array or another default value in case of error
        return [];
    }
};
