## An introduction to React.JS, Node.js, and deployment

Check out `Course_notes.pdf` for help.

### Dev quick reference:

**Testing UI with React**
>npm run ui

Then navigate to http://localhost:<PORT\>

**Testing Server with Node**
>npm run testserve

Then navigate to http://localhost:<PORT\> where PORT is the port you specify in your `server.js` file

**Running on Docker**

Make sure you have Docker running (open docker desktop) and then
>docker build --pull -f "Dockerfile" --tag <project-name\>:latest .

>docker run -d -p 3001:3001 --name <project-name\> <project-name\>:latest

\* replace <project-name\> with your projects name e.g. course-test

Check to see if its running with `docker ps` then navigate to http://localhost:<PORT\> where PORT is the port you specify in your Dockerfile

When you're done close the container with
>docker stop <project-name\>

Later attempts to run the container simply remove the `--name` tag
>docker run -d -p 3001:3001 <project-name\>
