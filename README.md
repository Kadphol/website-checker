# Website checker

website that can upload the list of websites as a CSV file. The service will check all of those websites' availability and show their status in the UI.

## Installation

To run service using docker-compose

```bash
docker-compose -f docker-compose.dev.yml up --build
```

or using Make file to run command

```bash
make up
```

## Usage

After service is running, website can be reach on [http://localhost:3000](http://localhost:3000 "Website Checker").
