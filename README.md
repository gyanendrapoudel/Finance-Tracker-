# Project setup 
Initial project installation react-router-dom, bootstrap, react-toastify, axios
```
yarn create vite ft_client
yarn add react-router-dom
yarn add bootstrap@5.3.3
yarn add react-bootstrap
yarn add react-toastify
yarn add axios
yarn add react-icons
```
### Protected Routeing 
dashboard and transaction page

### login feature
* API post request with email and password on req body
* on Server side, get all information using provide email from req body
* on Server side, use bcrypt method to verify hash password from database and provide password from front-end(req body)
* on Server side, Once password verified send user details except password, with generated JWT token for authorization.
* on front end, save user details on Context API for state management and save JWT token on local storage for authorization, once that redirected to dashboard(Protected Pages).

### logout feature
* on click, delete accessToken from localStorage
* Reset user object from the state (Context API)
* Redirect user to login page