### Frontend: 
[Frontend Live](https://banner-app-striver.vercel.app/)

### Backend:
[Backend Live](https://banner-app-bpjh.onrender.com)

- ⚠️ **Note:** First Start Backend then Start Frontend
- 🔴 This may take some time to start (try refershing both frontend & backend)

-----------------------------------------------------------------------
### Home Page
![Home Page](https://github.com/user-attachments/assets/2fb5a324-e0dd-45d0-abd2-24b97d3ee60a)

### Dashboard Page
![Dashboard Page 1](https://github.com/user-attachments/assets/95fb031b-eb46-4e39-ab0e-27ad6a1f9027)
![Dashboard Page 2](https://github.com/user-attachments/assets/c1605e91-baa9-4c66-812f-032e8d32fcda)

### Create New Banner
![Create New Banner](https://github.com/user-attachments/assets/94310bf0-d6d8-421e-8835-3c28b2fb9aa0)

### Edit Banner
![Edit Banner](https://github.com/user-attachments/assets/a579c404-2e2b-473e-b940-7e376913ebc7)

### Delete Banner
![Delete Banner](https://github.com/user-attachments/assets/68ca1128-730d-4c2b-afdb-5d8b27b4d779)

-----------------------------------------------------------------------

### Banner Table 
- **Visible:** `Yes` represents the currently displayed banner on HomePage. (Only one will be displayed at a time)
- **Expire:** `🔴` represents that timer has ended for these banners and `🟢` represents that timer is still active.

-----------------------------------------------------------------------

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
