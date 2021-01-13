# Image Repository

Summer 2021 Shopify Developer Intern Challenge Question

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Project Status](#project-status)
    - [Folder Structure](#folder-structure)
    - [HTTP Requests](#http-requests)
    - [HTTP Response Codes](#http-response-codes)
    - [Sample HTTP Response](#sample-http-response)
  - [Getting Started](#getting-started)
    - [Dependencies](#dependencies)
      - [Third-Party Services (and Libraries)](#third-party-services)
    - [Installing/Running Locally](#installing-running-locally)
  - [Release Process](#release-process)
    - [Versioning](#versioning)
    - [Payload](#payload)
  - [How to Get Help](#how-to-get-help)
  - [Contributing](#contributing)
  - [Further Reading](#further-reading)
  - [Authors](#authors)
  - [License](#license)

## [About the Project](#about-the-project)

This repository houses the API for the **Image Repository** project. Motivation for this project came as a need for upcoming developers to increasing their chances of having real-world software development experience.

##### [Folder Structure](#folder-structure)

```bash
.
├── .github                     # Compiled files
├── database                    # Database migration scripts and seeders
├── docs                        # Documentation files
├── resources                   # Email template files
├── src                         # Source files
├── tests                       # Automated tests
└── README.md
```

##### [HTTP Requests](#http-requests)

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `POST` Create a resource
- `GET` Get a resource or list of resources
- `PATCH`/`PUT` Update a resource(s)
- `DELETE` Delete a resource

For `POST` and `PATCH` requests, the body of your request may include a JSON payload.

##### [HTTP Response Codes](#http-response-codes)

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `401` `Unauthorized` The supplied API credentials are invalid
- `403` `Forbidden` The credentials provided do not have permissions to access the requested resource
- `404` `Not Found` An attempt was made to access a resource that does not exist in the API
- `500` `Server Error` An error on the server occurred

##### [Sample HTTP Response](#sample-http-response)

- For a `success` response, the server will return a response of this format:

```
{
  "status": "success",
  "message": "success message"
  "data": { ... }
}
```

- For an `error` response, the server will return a response of this format:

```
{
  "status": "error",
  "error": {
    "message": "error message",
    "trace": {
      "statusCode": <status-code>
    }
  }
}
```

## Project Status

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/4bbf6ff4e1701c8355e2#?env%5BImage%20Repository%20Development%20Environment%5D=W3sia2V5IjoibG9jYWxob3N0IiwidmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjY3ODkiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InN0YWdpbmciLCJ2YWx1ZSI6Imh0dHBzOi8vaW1nLXJlcG8tc3RhZ2luZy5oZXJva3VhcHAuY29tIiwiZW5hYmxlZCI6dHJ1ZX1d)
![Deploy to Heroku staging](https://github.com/devcareer/Get-Intern-backend/workflows/Deploy%20to%20Heroku%20Staging/badge.svg)

## Getting Started

#### [Dependencies](#dependencies)

- [NodeJS (`>=12.0.0`)](https://nodejs.org/en/download/)
- [ExpressJS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/download/)

##### [Third-Party Services](#third-party-services)

- SendGrid for emails & marketing.
- `Sequelize` as ORM.
- `Argon2` for password hashing and encryption.
- `Express-Validator` for server-side validation.
- `Handlebars` (with `MJML`) for email template.
- `Swagger UI Express` for API documentation.
- `Winston` for logging.

#### [Installing/Running Locally](#installing-running-locally)

- Clone (or fork) repository
  ```sh
    - git clone https://github.com/meetKazuki/image-repository.git
    - cd image-repository
    - npm install (or npm i, as the spirit decides)
  ```
- Create a PostgreSQL database by running the `cmd` below:

  ```sh
    createdb -h localhost -p 5432 -U postgres <database_name>
  ```

- Create/configure a `.env` file with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.
- Two `npm` scripts are available to spin up the server:
  - `npm run dev` spins up the server and watch for file changes
  - `npm run dev:debug` spins up the server and attaches a debugger to it
- Other `npm` scripts are also available for handling database migration and database seeding:
  - `npm run db:migrate` runs script that is responsible for creating tables and their columns in the database,
  - `db:migrate:undo`: undoes the effect of `npm run db:migrate`,
  - `db:reset`: undoes all the migrations, then runs migration on the database,
  - `db:seed`: responsible for seeding records in the database,

## Release Process

To get new changes to production, a release branch is created off develop and merged into master. This triggers a Github action that deploys code to production.

An example release branch is `release/2.0.1`.

#### [Versioning](#versioning)

This project uses [Semantic Versioning](http://semver.org/). For a list of available versions, see the [repository tag list](https://github.com/your/project/tags).

#### [Payload](#payload)

- [Project Specifications](https://docs.google.com/document/d/1ZKRywXQLZWOqVOHC4JkF3LqdpO3Llpfk_CkZPR8bjak/edit#heading=h.n7bww7g70ipk)
- [Project Entities (Models)](https://dbdiagram.io/d/5ffe524880d742080a3613aa)
- [SwaggerHub (API Documentation)](https://app.swaggerhub.com/apis/meetKazuki/Image-Repository/1.0.0)
- [API on Staging Environment](https://img-repo-staging.herokuapp.com/api/v1)

## How to Get Help

Notice a bug? please open an issue. Need more clarification on any part of the code base? Contact [Desmond](https://github.com/meetKazuki).

## Contributing

Please review [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on our code of conduct and development process.

## Further Reading

- [Andela Best Practices](https://github.com/andela/bestpractices/wiki)
- [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Sequelize Docs](https://sequelize.org/master/)

## Authors

See also the list of [contributors](https://github.com/devcareer/Get-Intern-backend/graphs/contributors) who participated in this project.

## License

Yet to be decided

**[Back to top](#table-of-contents)**
