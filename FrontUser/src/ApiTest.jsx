import { request } from "./utils/UserApi";
import { getCurrentUserId } from "./utils/UserApi";

const ApiTest = () => {
    const accountId = 1; // Replace with actual accountId
    const mealId = 52; // Replace with actual mealId
    const url = `http://localhost:8080/myMeals/user/1/meals`;

    const sendRequest = async () => {
        const response = await request({
            url: url,
            method: 'GET'
        })
        console.log(response)
        // const id = await getCurrentUserId()
        // console.log("Id: ", id)
    }


    return (
        <>
            <button onClick={sendRequest}>send request</button>
        </>
    );
};

export default ApiTest;
