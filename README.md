# NodeJS projects

### Step 1: Starting with NodeJS
- Level 1: Create endpoints POST/GET/DELETE
- Level 2: Use MVC architecture
- Level 3: GET endpoints can be called only if the user is logged in
- Level 4: Create router middleware to check if user is loggedIn

### Step 2: Managing users
- Level 5: Create separate user router/service and returning token if login successful
- Level 6: Retrieve the user using the Bearer token
- Level 7: Update middleware to give access to the user to all the endpoints

### Step 3: Using a Database
- Level 8: Use Sequelize ORM and requests on "Users" table
- Level 9: CRUD and add relation table

## Run the servers

```bash
npm i
node level-{n}/server.js
```