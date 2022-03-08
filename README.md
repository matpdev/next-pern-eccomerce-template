# Minha Loja

A small full-stack e-commerce project built with Postgres, Express, React and Node.

## API Documentation

[Documentation](https://nameless-journey-88760.herokuapp.com/api/docs/)

## Demo

[Run demo](https://pern-store.netlify.app)

## Screenshots

![Homepage Screen Shot](https://user-images.githubusercontent.com/51405947/104136952-a3509100-5399-11eb-94a6-0f9b07fbf1a2.png)

## Database Schema

[![ERD](https://user-images.githubusercontent.com/51405947/133893279-8872c475-85ff-47c4-8ade-7d9ef9e5325a.png)](https://dbdiagram.io/d/5fe320fa9a6c525a03bc19db)

## Run Locally

Clone the project

```bash
  git clone https://github.com/dhatguy/PERN-Store.git
```

Go to the project directory

```bash
  cd PERN-Store
```

Install dependencies

```bash
  npm install
```

Go to server directory and install dependencies

```bash
  npm install
```

Go to client directory and install dependencies

```bash
  npm install
```

Go to server directory and start the server

```bash
  npm run dev
```

Go to client directory and start the client

```bash
  npm run client
```

Start both client and server concurrently from the root directory

```bash
  npm run dev
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

Check this article for [guidance](https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb)
on how to deploy.

## Tech

- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Postgres](https://www.postgresql.org/)
- [node-postgres](https://node-postgres.com/)
- [Windmill React UI](https://windmillui.com/react-ui)
- [Tailwind-CSS](https://tailwindcss.com/)
- [react-hot-toast](https://react-hot-toast.com/docs)
- [react-Spinners](https://www.npmjs.com/package/react-spinners)
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env files in both client and server directory

#### client/.env

`REACT_APP_GOOGLE_CLIENT_ID`

`REACT_APP_GOOGLE_CLIENT_SECRET`

`REACT_APP_API_URL`

`REACT_APP_STRIPE_PUB_KEY`

### server/.env

`PGUSER`

`PGHOST=`

`PGPASSWORD`

`PGDATABASE`

`PGDATABASE_TEST`

`PGPORT`

`PORT`

`SECRET`

`REFRESH_SECRET`

`SMTP_FROM`

`STRIPE_SECRET_KEY`