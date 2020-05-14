# Blast Server

Server managing rooms and user for this repo : https://github.com/romuleald/blastar

Configuration
-------------

- Create an account at https://mlab.com and provide informations mlab db (admin by default) and the password of the DB.

- Create a .env file at the root of the app and provide

- MONGODB_URI=mongodb://<mlab_user>:<mlab_password>@<mlab_connection_url>

DOCKER BUILD
--------------

chmod +x ./config/docker/api.sh && docker-compose up -d

Development
------------

It uses nodemon to build nodejs.

Use yarn for installing dependencies and run :  yarn liveBuild

---------------
