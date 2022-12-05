## Scope

The Project focuses on a simple blog page where the user is able to add and delete blog posts in the same session, and the following is the user manual on how to setup and run the project
Requirements to run the project

### Required Modules

* NPM or YARN Package Manager
* Node Js
* MySQL DB Connection and Connection String

### Steps to run the Backend
* Step 1: Open MySQL and run the “CREATE DATABASE test;”
* Step 2: Run the SQL Script file “createTableScript.sql” 
* Step 3: Run the SQL Script file “establishSecurityProtocol.sql” if security permission grant is required or skip to step 4
* Step 4: Run the SQL Script file “firstDateInserationScript.sql”
* The backend will run on port 8800

#### Update the DB Connection strings to the .env file in the backend directory in the following manner such as:
* `host=<YourHost`>,
* `user=<YourDBUserName>`,
* `password=<YourDBPassword>`,
* `database=test`

Get the server up and running by using node index.js in the backend directory terminal.
  
### Steps to run the Frontend ###
Navigate to the client folder, and run `npm install` once all the packages are installed, run `npm start` or if you use yarn, run `yarn install` and once installed run the server and the frontend will run on port 3000
