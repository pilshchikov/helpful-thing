<div align="center">
  <img width="900" heigth="600" src="https://i.imgur.com/pfwE7hZ.png">
</div>

# Сервис полезных штук

- Spring Boot 1.5.4
- Angular 4
- Angular Material

### Необходимо иметь:
 - java 8
 - angular/cli
 - docker

Сервис сделан для замены повсемесно локально используемых скриптов/наборов запросов для взаимодействия с тестовым стендом или для подготовки тестовых данных.

Все генерируемые формы зависят от серверной части. Чтобы сделать новую форму необходимо: 
 - добавить форму в FormProvider
 - создать енам в FormMethods
 - унаследовавшись от интерфейса Executer реализовать логику взаимодейтвия с формой

# Как запускать

#### Если надо сделать контейнер все в одном с полной версией
```bash
./build.sh
docker run --name utils.web -p 80:8080 utils.web:latest
```

#### Если надо сделать контейнер все в одном с урезанной версией
```bash
./build-cutted.sh
docker run --name utils.web.cutted -p 80:8080 utils.web:cutted
```

#### Локальный запуск серверной части
```bash
mvn spring-boot:run -Dform.version=[FULL, CUTTED]
```

#### Локальный запуск клиентской части
```bash
npm install
ng serve
```