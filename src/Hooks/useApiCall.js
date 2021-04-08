import {useEffect} from "react";
//Hook to make API calls
function useApiCall(url,setState){
    const apiCall=async ()=>{
        try{
            const response=await fetch(url);
            if(response.ok) var data=await response.json();
            console.log(data);
            setState(data);
        }catch(err){
            console.log("something is wrong in useApiCall hook");
            console.log(err);
        }
    };
    useEffect(() => {
        apiCall();
    }, []);
}
export default useApiCall;