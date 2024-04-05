# README

# FrontEnd(React)

## Pulling GitHub Project and Running the React App

### Prerequisites
- **Git**: Ensure Git is installed on your system.
- **Node.js**: Ensure Node.js is installed. 

### Steps

#### FIRST INTALLATION

1. **Clone the Repository**:
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to store the project.
   - Run:
     ```
     git clone https://github.com/zineb-hija/FitnessApp.git
     ```

2. **Navigate to Project Directory**:
   - Once cloning is complete, navigate to the project directory:
     ```
     cd <project_name>
     ```

3. **Install Dependencies**:
   - Run:
     ```
     npm install
     ```
   This installs project dependencies specified in `package.json`.

4. **Run the Application**:
   - Start the React application with:
     ```
     npm run dev
     ```
   This starts the development server and opens the app in your default browser.

5. **Accessing the Application**:
   - Visit `http://localhost:3000` in your browser.

6. **Stopping the Server**:
   - To stop the server, press `Ctrl + C` in the terminal where the server is running. 

#### When app is installed

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

2. **Checkout Your Branch**:
   - If you're not already on your desired branch, switch to it by running, the branche should already be created:
     ```
     git checkout <branch_name>
     ```
   Replace `<branch_name>` with the name of your branch.

3. **Merge Changes**:
   - Once you have fetched the changes and are on your branch, merge the changes from the remote repository into your local branch by running:
     ```
     git merge origin/<branch_name>
     ```
   Replace `<branch_name>` with the name of the remote branch you want to merge.

### Pushing Changes

1. **Add and Commit Changes**:
   - Make your changes to the project files.
   - Add the changes to the staging area by running:
     ```
     git add .
     ```
   - Commit the changes with a descriptive message:
     ```
     git commit -m "Your descriptive commit message here"
     ```

2. **Push Changes to Remote Repository**:
   - Push your changes to the remote repository by running:
     ```
     git push origin <branch_name>
     ```
   Replace `<branch_name>` with the name of your branch.

### Additional Information

- **Reviewing Changes**:
  - Before pushing changes, it's a good practice to review them locally to ensure they are correct and meet project requirements.

- **Collaboration**:
  - Communicate with your team members to avoid conflicts and ensure smooth collaboration when pushing changes to shared branches.

# BackEnd Spring boot

## Build and run Docker image for spring boot

### Build Docker image (DON'T FORGET THE DOT !!!!)
   ```
   docker build -t <image_name> .
   ```
    
 ### List Docker images
   ```
   docker images
   ```
    
 ### Run Docker container   
 - expose container's port 8080 to host's port 8080
   ```
   docker run -p 8080:8080 <image_name_or_id>	
   ```

## Pull docker image from docker hub

### Pull image 
   ```
   docker pull <dockerhub_username>/<repository_name>:<tag>
   ```
### display list of all Docker images stored locally on your machine
   ```
   docker images
   ```

## Push Docker Image to Docker Hub

### Tag your image
 If you don't specify a tag, it will default to `latest`.
   ```
   docker tag <local_image_name> <dockerhub_username>/<repository_name>:<tag>
   ```
### log to docker hub
   ```
   docker login
   ```

### push the image
   ```
   docker push <dockerhub_username>/<repository_name>:<tag>
   ```
### Check the repository on Docker Hub



react is running on port 3000
spring is running on port 8080
