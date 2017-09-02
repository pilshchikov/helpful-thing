#!/usr/bin/env bash

set -e

cd web/
ng build --output-path ./../server/src/main/resources/static/ --prod -env=full
cd ../server/
mvn clean package
cd ../
docker build -t your_local_docker_registry/utils.web:cutted --build-arg VERSION=FULL .
docker push your_local_docker_registry/utils.web:full
docker rmi $(docker images | grep 'utils.web' | grep 'none' | awk '{print $3}')
rm -rf server/src/main/resources/static/
