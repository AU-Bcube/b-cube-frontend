#!/bin/bash

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

echo "DOCKER_APP_NAME is: ${DOCKER_APP_NAME}"

IS_BLUE_UP=$(docker ps | grep ${DOCKER_APP_NAME}-blue)

docker-compose up -d nginx

if [ "$IS_BLUE_UP" ]; then
  echo "Blue is up, deploying green"

  docker-compose pull green
  docker-compose up -d green

  while [ 1 = 1 ]; do
    sleep 2
    REQUEST=$(docker exec nginx curl http://green:3000)
    if [ -n "$REQUEST" ]; then
      echo "Green is up"
      break;
    fi
  done;
  sed -i 's/blue/green/g' nginx/default.conf
  echo "Reload nginx"
  docker exec nginx nginx -s reload
  echo "Stop blue"
  docker-compose stop blue
  docker-compose rm -f blue
else
  echo "Green is up, deploying blue"

  docker-compose pull blue
  docker-compose up -d blue

  while [ 1 = 1 ]; do
    sleep 2
    REQUEST=$(docker exec nginx curl http://blue:3000)
    if [ -n "$REQUEST" ]; then
      echo "Blue is up"
      break;
    fi
  done;
  sed -i 's/green/blue/g' nginx/default.conf
  echo "Reload nginx"
  docker exec nginx nginx -s reload
  echo "Stop green"
  docker-compose stop green
  docker-compose rm -f green

fi

echo "🗑️ Removing unused images..."
docker image prune -f

echo "Deploy finished"