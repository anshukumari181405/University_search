# University Search App

This is a simple web application that allows users to search for universities by name and country, save their favorite universities to the database, and view all saved favorite universities.

## Features

- **Search**: Users can search for universities by name and country.
- **Save Favorites**: Users can save their favorite universities to the database.
- **View Favorites**: Users can view all their saved favorite universities.

## Technologies Used

- **Frontend**: HTML, CSS (Bootstrap), JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL

## Installation

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:

    ```bash
    cd university-search-app
    ```

3. **Install dependencies for frontend**:

    ```bash
    cd frontend
    npm install
    ```

4. **Install dependencies for backend**:

    ```bash
    cd ../backend
    npm install
    ```

5. **Start the backend server**:

    ```bash
    npm start
    ```

6. **Start the frontend server**:

    ```bash
    cd ../frontend
    npm start
    ```

7. **Open your browser** and go to [http://universities.hipolabs.com](http://universities.hipolabs.com)  to view the app.
8. 

## API Endpoints

- **GET /search**: Search universities by name and country.
- **GET /favorites**: Get all saved favorite universities.
- **POST /favorites**: Save a favorite university.
- **DELETE /favorites/:id**: Remove a favorite university by ID.

## Folder Structure

- **frontend**: Contains the frontend code of the application.
- **backend**: Contains the backend code of the application.

## Usage

1. **Search for Universities**:

    - Enter the name and country of the university you want to search for in the input fields.
    - Click on the "Search" button to display the search results.

2. **Save Favorite Universities**:

    - After performing a search, you can save a university as a favorite by clicking on the "Save" button next to the desired university in the search results.

3. **View Favorite Universities**:

    - Click on the "View Favorites" link in the navigation bar to view all your saved favorite universities.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
