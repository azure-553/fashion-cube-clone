export default class Auth {
    
        constructor() {
            this.user_token = JSON.parse(localStorage.getItem("auth")) || {};
          
    
        const getToken = () => {
            return this.user_token.token;
        };
        const getUserId = () => {
            return this.user_token.user_id;
        };

        const getUserDetails = () => {
            return this.user_token;
        };

        const setUserToken = (new_token) => {
            this.user_token = new_token;
            localStorage.setItem("auth", JSON.stringify(new_token));
        };
        const logout = () => {
            localStorage.removeItem("auth");
        };
    }
    
}

  