<div align="center">
  <img width="900" heigth="600" src="https://i.imgur.com/pfwE7hZ.png">
</div>

# Magic wand (not a final name)

- Spring Boot 2.0.0
- Angular 4+
- Angular Material

### For build need to have:
 - java 8
 - angular/cli
 - docker

Framework for tasks when you need to unite all common used scripts and make user friendly interface but your do not want to write all web interface.

All interface created from java objects. For each form you can bind your own logic 

#### How to add new form: 
 - add form fields description in FormProvider.java
 - add enum in FormMethods.java
 - extend Executer.java interface and write logic for form

## How to run

#### Build and run all in one full version
```bash
./build.sh
docker run --name utils.web -p 80:8080 magic.wand:latest
```

#### Build and run all in one cutted version
```bash
./build-cutted.sh
docker run --name utils.web.cutted -p 80:8080 magic.wand:cutted
```

#### Local run server side
```bash
mvn spring-boot:run -Dform.version=[FULL, CUTTED]
```

#### Local run for web side
```bash
npm install
ng serve
```