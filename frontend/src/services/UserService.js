import axios from '../../node_modules/axios';

const USER_API_BASE_URL = "http://localhost:8084/api/v1";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

class UserService {

    createUser(user){

        const xhr = new XMLHttpRequest();
        xhr.open("POST", USER_API_BASE_URL.concat("/users"), true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(user));

        //console.log(user)
        //return axios.post(USER_API_BASE_URL.concat("/users"),user);
    }

    createAd(advertisement)
    {

        const xhr = new XMLHttpRequest();
        xhr.open("POST", USER_API_BASE_URL.concat("/adv"), true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(advertisement));


        //console.log(advertisement)
        //return axios.post(USER_API_BASE_URL.concat("/adv"),advertisement);
    }

    validateUser = async (email,password) => {
        const USER_API_BASE_URL = "http://localhost:8084/api/v1/users";
        const xhr = new XMLHttpRequest();
        xhr.open("GET", USER_API_BASE_URL+ '/' + email, false);
        //xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        let res=JSON.parse(xhr.responseText);
/*
        const USER_API_BASE_URL = "http://localhost:8084/api/v1/users";
          
        const response = await axios.get(USER_API_BASE_URL + '/' + email);
          
        let res = response.data;
*/
        if(res.password == password)
        {
            let data = {companyName:res.companyName,email:res.emailId, password:res.password, id:res.id , userType:res.userType};
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,JSON.stringify(data));
            sessionStorage.setItem("id",res.id);
            console.log(res.id);



            return true;
        }
        else{
            return false;
        }
      }
      isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        if(user.email == null) return false;
        else return true;
    }

    getLoggedInUserId() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user.email == null) return '';
        else return user.id;

    }
    getAllAds = async () => {

        let id = sessionStorage.getItem("id");
        const USER_API_BASE_URL = "http://localhost:8084/api/v1/adv";

        const xhr = new XMLHttpRequest();
        xhr.open("GET", USER_API_BASE_URL+ '/' + id, false);
        //xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        const response=JSON.parse(xhr.responseText);
          
        //const response = await axios.get(USER_API_BASE_URL+"/"+id);
        console.log("1")
         console.log(response)
        console.log("2")
        //let list = response.data;
        return response;
    }


    getCompanyAds = async () => {

        let user = JSON.parse(sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME));

        console.log("ss1")
        console.log((user.companyName))
        console.log("ss2")
        const USER_API_BASE_URL = "http://localhost:8084/api/v1/advcom";

        const xhr = new XMLHttpRequest();
        xhr.open("GET", USER_API_BASE_URL+ '/' + user.companyName, false);
        //xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        const response=JSON.parse(xhr.responseText);

        //const response = await axios.get(USER_API_BASE_URL+"/"+id);
        console.log("1")
        console.log(xhr.responseText)
        console.log("2")
        //let list = response.data;
        return response;
    }


    getCompanyNames = async () => {

        //let id = sessionStorage.getItem("id");
        const USER_API_BASE_URL = "http://localhost:8084/api/v1/companyname";

        const xhr = new XMLHttpRequest();
        xhr.open("GET", USER_API_BASE_URL+ '/' , false);
        //xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();


        let response=(xhr.responseText);
/*
        console.log("ad1")
        //console.log(Object.values(response))
        console.log((response))
        console.log("ad2")

        let l=response.length
        response=response.substring(1,l-1)
        response=response.replaceAll('"','')
        console.log(response)


        response=response.split(',')
        //const response = await axios.get(USER_API_BASE_URL+"/"+id);
        console.log("ad1")
        //console.log(Object.values(response))
        console.log((response))
        console.log(response.length)


        let countries1=[];
        for(let i=0;i<response.length;i++)
        {
            console.log(response[i]);
            countries1[i]={
                id:i,name:response[i]
            }
        }

*/

        console.log(JSON.parse(response))
        //let list = response.data;
        return (JSON.parse(response));
    }
}

export default new UserService()