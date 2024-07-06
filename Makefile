up:
	sudo docker compose up -d

build:
	sudo docker compose build --no-cache

down:
	sudo docker compose down --volumes

list:
	sudo docker ps

list-all:
	sudo docker ps -a