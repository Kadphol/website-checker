# Website checker

website that can upload the list of websites as a CSV file. The service will check all of those websites' availability and show their status in the UI.

## How to Run with Docker

To run service using docker-compose:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

or using Make file to run command:

```bash
make up
```

You can put the running service down by using this command:

```bash
docker-compose -f docker-compose.dev.yml down
```

or using Make file command:

```bash
make down
```

## How to Run locally

Run frontend with command:

```bash
cd frontend && npm start
```

Run backend with command:

```bash
cd backend && npm start
```

## Usage

After service is running, website can be reach on [http://localhost:3000](http://localhost:3000 "Website Checker").
