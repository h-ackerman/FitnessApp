
import axios from 'axios';
    export const loadUserMeals = async () =>{
      try {
        const response = await axios.get('http://192.168.1.39:8080/usermeal/');
        console.log('usermeal from db',response.data)
       setUserDiet(response.data)
      } catch (error) {
        console.error('Error fetching usermeal:', error);
      }
    
    }