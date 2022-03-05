up-dev:
	docker-compose -f docker-compose.dev.yml up --force-recreate --build -d
	docker image prune -f

down-dev:
	docker-compose -f docker-compose.dev.yml down

build-dev:
	docker-compose -f docker-compose.dev.yml build --no-cache