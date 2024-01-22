# TodoList Website with ReactJS and ExpressJS

This project is a TodoList website built using ReactJS for the frontend and ExpressJS for the backend. The project is organized into two main folders: `client` and `server`.

## Client

### Components

1. **App.jsx**
   - React component handling routes for Home, SignUp, Login, and Todo.
   - Utilizes `react-router-dom` for route handling.

2. **Home Component**
   - Redirects the user to the SignUp and Login pages after clicking on a button.
   - Uses `useNavigate` for navigation.

3. **Login Component**
   - Uses `useRef` to store email and password for form handling.
   - Uses `useNavigate` for successful login navigation to the todo list page.
   - Checks email and password against a predefined user in the ExpressJS backend.

4. **SignUp Component**
   - Uses `useRef` and `useNavigate` for form handling and navigation.
   - Displays an alert if the user already exists; otherwise, navigates to the Login page.

5. **Todo Component**
   - Allows users to add items to their todo list after successful login.

### Running the Client

To run the ReactJS client:

1. Navigate to the `client` folder.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Server

The `server` folder contains the ExpressJS backend for the TodoList website.

### Dependencies

- ExpressJS
- Cors

### Running the Server

To run the ExpressJS server:

1. Navigate to the `server` folder.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.

Note: The server is configured with CORS to allow communication between the frontend running on port 5173 and the backend running on port 3000.

### User Details

A single user with predefined email and password is currently set in the backend.

## Additional Notes

- Ensure both the client and server are running concurrently for the complete functionality of the TodoList website.

Feel free to reach out if you have any questions or encounter issues during setup.
