# news-feed

A small news application that fetches data from [News API](https://newsapi.org/) and renders story information.

## Running the app locally

### Setup
#### Install dependencies:
```
npm install
```

### Running the app
#### To run with mock data:
```
npm start
```

#### To run with real data:
1) Obtain an API key from [News API](https://newsapi.org/)
2) Start the app, replace `apikeyhere` below with obtained API key:
```
REACT_APP_API_KEY=apikeyhere npm start
```

**Note**: An alternative is to create an `.env.local` file containing the api key. (`.env.example` may be used as a reference.) If an `.env.local` file exists, environment variables will be injected at build time. The app can then be started with `npm start`. If an API key is *not* provided, the app will display static sample data.

Open [http://localhost:3000](http://localhost:3000) to view app in development mode.

## About

### Technologies used
- React, TypeScript
- [react-bootstrap](https://react-bootstrap.github.io/)
- [date-fns-tz](https://www.npmjs.com/package/date-fns-tz)
- [react-icons](https://react-icons.github.io/react-icons)