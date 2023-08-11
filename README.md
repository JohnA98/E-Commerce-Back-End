# E-Commerce-Back-End

## Description

This is a simple E-Commerce back-end API that is using mySQL as a database. My motivation for this project came from the fact that many people nowadays are trying to get rich quick using a variety of e-commerce, mostly dropshipping. I build this project to test my skills using back-end database systems and calling it via an API. This helped me learn the sequelize package, as well as use Express as a framework, while using NodeJS to run the server. This could be built further for people to use if they were considering running their e-commerce business.

## Installation

To use this application, clone the github repository into your local machine, and run the command npm i to install all dependencies. You must use the MySQL database system, so you must install it on your machine as well. Create the database in MySQL using the code found in the db.schema.sql file. From there, create a .env file, and you must fill in your DB_NAME, DB_USER, and DB_PASSWORD to connect to MySQL successfully. Finally, run node server.js and test the routes via Insomnia or some other API tool.

## Usage

To use this application, go over to insomnia and correctly input what sort of request you would want to make in the header section, and also make sure the route is correct. For example, if I wanted to get all categories, my route would be http://localhost:3001/api/categories. To use different routes, specify the type of request and route url, as well as fill in the body with json if neccessary.

## License

Please refer to the LICENSE in the repo.
