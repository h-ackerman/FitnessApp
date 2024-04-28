# README

# FrontEnd (React)

## Pulling GitHub Project and Running the React App

### Prerequisites
- **Git**: Ensure Git is installed on your system.
- **Node.js**: Ensure Node.js is installed.
- **Expo cli**: Ensure Expo cli is installed.
- **Spring boot**: for backend

### Steps

#### FIRST INTALLATION

1. **Clone the Repository**:
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to store the project.
   - Run:
     ```
     git clone https://github.com/zineb-hija/FitnessApp.git
     ```

2. **Navigate to backend Directory**:
   - Once cloning is complete, navigate to the project directory:
     ```
     cd <backend>
     ```

3. **Run spring boot**:
   - Open backend folder with intellij
   - Go to FitnessApplication
   - Run the app (it will run on port 8080)


4. **Navigate to FrontUser or FrontAdmin Directory**:
   - Run:
     ```
     cd <frontUser> or cd <frontAdmin>
     ```

5. **Install Dependencies**:
   - Run:
     ```
     npm install
     ```
   This installs project dependencies specified in `package.json`.


6. **Run the Application**:
   - Start the React application with:
     ```
     npm run dev
     ```
   This starts the development server and opens the app in your default browser.


7. **Accessing the Application**:
   - Visit `http://localhost:3000` in your browser to access the admin page.
   - Visit `http://localhost:3001` in your browser to access the user page.


8. **Stopping the Server**:
   - To stop the server, press `Ctrl + C` in the terminal where the server is running. 


#### Collaboration

## Pulling and Pushing Changes to a Git Branch

### Pulling Changes

1. **Fetch Changes from Remote Repository**:
   - Open your terminal or command prompt.
   - Navigate to your project directory.
   - Run:
     ```
     git fetch origin
     ```
   This command fetches the latest changes from the remote repository.

2. **pull all changes from the main branch**:
   - Run:
     ```
     git pull
     ```

### Pushing Changes
1. **Create a new branch locally**:
   - Create a new branch in your local Git repository where you've made changes.
   - Run:
     ```
     git checkout -b new-branch-name
     ```

2. **Add and Commit Changes**:
   - Add the changes to the staging area by running:
     ```
     git add .
     ```
   - Commit the changes with a descriptive message:
     ```
     git commit -m "Your descriptive commit message here"
     ```

3. **Push the new branch to GitHub**:
   - Push your changes to the remote repository by running:
     ```
     git push origin <branch_name>
     ```
   Replace `<branch_name>` with the name of your branch.

### Additional Information

- **Reviewing Changes**:
  - Before pushing changes, review them locally to ensure they are correct and meet project requirements.

- **Pull Requests**:
  - All branches can only be merged throught pull requests.

# Docker

## Build and run Docker image for spring boot

1. **Build Docker image (DON'T FORGET THE DOT !!!!)**
      ```
      docker build -t <image_name> .
      ```
    
 2. **List Docker images**
      ```
      docker images
      ```
    
 3. **Run Docker container** 
 - Expose container's port 8080 to host's port 8080
   ```
   docker run -p 8080:8080 <image_name_or_id>	
   ```

## Pull docker image from docker hub

1. **Pull image**
      ```
      docker pull <dockerhub_username>/<repository_name>:<tag>
      ```
2. **display list of all Docker images stored locally on your machine**
      ```
      docker images
      ```
3. **Run Docker container** 
 - expose container's port 8080 to host's port 8080
 - run in detached mode (in the background)
   ```
   docker run -d -p 8080:8080 <image_name_or_id>	
   ```

## Push Docker Image to Docker Hub

1. **Tag your image**
 If you don't specify a tag, it will default to `latest`.
   ```
   docker tag <local_image_name> <dockerhub_username>/<repository_name>:<tag>
   ```
2. **log to docker hub**
   ```
   docker login
   ```

3. **push the image**
   ```
   docker push <dockerhub_username>/<repository_name>:<tag>
   ```
4. **Check the repository on Docker Hub**

