# API

Documentation available [here](https://make-kots-great-again.github.io/web/ "api doc")

## Run locally

#### Prerequisites

* Docker 

### Usage

* Clone the GitHub repo
* Run `docker-compose up -d` in the root directory and hit `http://localhost:8000` in 
your browser. 

### Database usage

* Exec into the PostgreSQL container with the following command :
`docker exec -ti postgres-container psql -U postgres`

#### Useful psql commands

- `\l` - list all the database(s)
- `\c DATABASE_NAME` - connect to a specific database
- `\c kots` - connect to kots database
- `\dt` - list all tables in the current database
- `select * from users;` - list all users from the table users
- `\! clear` - clear the screen in psql
- `\q` - quit psql

### Backend usage

* Exec into the node.js container with the following command :
`docker exec -it kots-server sh`

* If you want to run in the container any npm scripts inside the package.json, 
change the server port cause 8000 is already in use. 

* For more info check the API documetaion [here](https://make-kots-great-again.github.io/web/ "api doc")
