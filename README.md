## Frontend: 
[Frontend Live](https://banner-app-striver.vercel.app/)

## Backend:
[Backend Live](https://banner-app-bpjh.onrender.com)

⚠️ **Note:** First Start Backend then Start Frontend
🔴 This may take some time to start

## Project Structure

- **backend/**: Contains the Express backend server and API endpoints.
- **frontend/**: Contains the React frontend application.

## Prerequisites

- Node.js
- MySQL

## Setup Locally

1. Create `backend/.env` file:

   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password@123
   DB_NAME=banner_app
   ```

2. Create MySQL Database & Table using commands in  `backend/schema.sql`;
   
3. Update `frontend/services/bannerService.js` file as follows:

    ```bash
    // const BASE_URL = 'https://banner-app-bpjh.onrender.com'; # comment it
    const BASE_URL = 'http://localhost:5000';  # uncomment it
    ```
    
4. In the `root` directory, install depedencies:

     ```bash
     npm install
     npm start
     ```

Project Setup Successfully!👋
