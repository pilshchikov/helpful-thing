#!/usr/bin/env bash

set -e

cd web/
ng build --output-path ./../server/src/main/resources/static/ --prod -env=cutted
cd ../server/
mvn clean package
cd ../
docker build -t magic.wand:cutted --build-arg VERSION=CUTTED .
docker rmi $(docker images | grep 'magic.wand' | grep 'none' | awk '{print $3}')
rm -rf server/src/main/resources/static/
