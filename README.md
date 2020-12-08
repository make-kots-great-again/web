# API

Documentation available [here](https://make-kots-great-again.github.io/web/ "api doc")

## Run locally

#### Prerequisites

* Docker 

### Usage

* Clone the GitHub repo.
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

# Integration Test Code Coverage 

[![Netlify Status](https://api.netlify.com/api/v1/badges/d57ad6ea-fd95-4728-a864-ec373c5b1118/deploy-status)](https://app.netlify.com/sites/integration-test-coverage/deploys)

The code coverage available [here](https://integration-test-coverage.netlify.app/ "integration test coverage")

# Integration Test Report 

[![Netlify Status](https://api.netlify.com/api/v1/badges/67ec06de-a19f-43c0-a44f-e71392c59580/deploy-status)](https://app.netlify.com/sites/integration-tests-report/deploys)

Integration tests report available [here](https://integration-tests-report.netlify.app/ "integration tests report")

# Unit Test Code Coverage 

[![Netlify Status](https://api.netlify.com/api/v1/badges/cb32bd04-e3ab-40a7-8e47-b4fd346c550a/deploy-status)](https://app.netlify.com/sites/unit-test-coverage/deploys)

The code coverage available [here](https://unit-test-coverage.netlify.app/ "unit tests code coverage")

# Unit Test Report

[![Netlify Status](https://api.netlify.com/api/v1/badges/25980231-d3da-470c-bbe4-5079efbef86b/deploy-status)](https://app.netlify.com/sites/unit-tests-report/deploys)

Unit tests report available [here](https://unit-tests-report.netlify.app/ "unit tests report")

# End to End Tests

[![Netlify Status](https://api.netlify.com/api/v1/badges/5678df6f-cbba-4ad4-b24f-658f617704ad/deploy-status)](https://app.netlify.com/sites/e2e-tests/deploys)

E2E tests report available [here](https://e2e-tests.netlify.app/ "e2e tests")

# Lighthouse Report

[![Netlify Status](https://api.netlify.com/api/v1/badges/aabf3813-34ac-41ac-9281-e0755ea5e502/deploy-status)](https://app.netlify.com/sites/lighthouse-metrics/deploys)

Lighthouse report available [here](https://lighthouse-metrics.netlify.app/ "lighthouse report")