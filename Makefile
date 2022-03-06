up:
	docker-compose -f docker-compose.dev.yml up --force-recreate --build -d

down:
	docker-compose -f docker-compose.dev.yml down

build:
	docker-compose -f docker-compose.dev.yml build