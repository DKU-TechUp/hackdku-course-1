#!/bin/bash

# build the project container
docker build --pull -f "Dockerfile" --tag silvanick/course-test:latest .

# start the docker container
docker run -d -p 3001:3001 --name silvanick/course-test silvanick/course-test:latest
#docker run -d -p 3001:3001 silvanick/course-test    # remove the name tag for later runs