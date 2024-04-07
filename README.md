
## Description

This project is built using [NestJS](https://nestjs.com/), and TypeOrm. Using Postgresql as database. With a basic user creation api.


<details>
 <summary><code>Get</code> <code><b>/api/user</b></code> <code>Api route to get all users</code></summary>

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | `{"code":"200", "users":[]}`                                        |

</details>

<br />

<details>
 <summary><code>Get</code> <code><b>/api/user/:id</b></code> <code>Api route to get a user by id</code></summary>

##### Params

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | `id`      | `required`| `number`                | User id                                                               |



##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | `{"code":"200", "user":{}}`                                         |
> | `400`         | `application/json`                | `{"code":"400", "message":"User not found"}`                        |


</details>

<br />

<details>
 <summary><code>POST</code> <code><b>/api/user</b></code> <code>Api route to create users</code></summary>

##### Request Body

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | `name`    | `required`| `string`                | User name                                                             |
> | `email`   | `required`| `string`                | User email, must be unique                                            |



##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`                | `{"code":"201", user:{}}`                                           |
> | `400`         | `application/json`                | `{"code":"400","message":"Email already exists"}`                   |

</details>

<br />

<details>
 <summary><code>PATCH</code> <code><b>/api/user/:id</b></code> <code>Api route to update user</code></summary>

##### Params

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | `id`      | `required`| `number`                | User id                                                               |

##### Request Body

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | `name`    | `required`| `string`                | User name                                                             |
> | `email`   | `required`| `string`                | User email, must be unique                                            |



##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`                | `{"code":"201", "message":"User Updated"}`                          |
> | `400`         | `application/json`                | `{"code":"400","message":"Email already in use"}`                   |

</details>

<br />

<details>
 <summary><code>Delete</code> <code><b>/api/user/:id</b></code> <code>Api route to delete a user by id</code></summary>

##### Params

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | `id`      | `required`| `number`                | User id                                                               |



##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | `{"code":"200", "message":"User deleted"}`                                        |

</details>

<br />

## Using Docker

```bash
docker compose up
```

## Local

Make sure you have installed [Postgresql](https://www.postgresql.org/download/) 
and [Node.js](https://nodejs.org/en/download).Go to your postgresql database maganer
[PgAdmin](https://www.pgadmin.org/download/),[DbVisualizer](),command line, etc... 

Then create a database named "**database**", if you want to use any other name make sure to change **PGDB_DATABASE** environment varaible in the .env file

### Installation

```bash
$ npm install
```

### Usage

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
