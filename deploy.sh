#!/bin/bash

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

echo "DOCKER_APP_NAME is: ${DOCKER_APP_NAME}"

IS_BLUE_UP=$(docker ps | grep ${DOCKER_APP_NAME}-blue)

docker-compose up -d nginx

if [ "$IS_BLUE_UP" ]; then
  echo "Blue is up, deploying green"
  docker-compose stop green
  docker-compose rm -f green

  echo "Removing old green image"
  OLD_GREEN_IMAGE=$(docker images | grep "${DOCKER_APP_NAME}" | grep green | awk '{print $3}')
  if [ -n "$OLD_GREEN_IMAGE" ]; then
    docker rmi -f "$OLD_GREEN_IMAGE"
  fi

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
else
  echo "Green is up, deploying blue"
  docker-compose stop blue
  docker-compose rm -f blue

  echo "🗑️ Removing old blue image"
  OLD_BLUE_IMAGE=$(docker images | grep "${DOCKER_APP_NAME}" | grep blue | awk '{print $3}')
  if [ -n "$OLD_BLUE_IMAGE" ]; then
    docker rmi -f "$OLD_BLUE_IMAGE"
  fi

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
fi

echo "Deploy finished"