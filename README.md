# empty-project

Empty project.

## Building and running on localhost

*НЕБОЛЬШИЕ ФИШКИ ПО РАЗРАБОТКЕ:*
Вся основная логика находится на страницах /pages
Они включают в себя контейнеры --- компоненты с сайдэффектами,
с некоторой логикой, которую трудно вынести на страницу.
Так же и страницы, и контейнеры состоят из "чистых" ui компонентов, только для рисования,
примеры ui компонентов, используемых в проекте можно найти здесь:
localhost:3000/style

При добавлении ui компонент, добавляем и в style

Рекомендуется начинать со страниц/типов/данных

*БЫСТРЫЙ СТАРТ:*
First install dependencies:

```sh
yarn install
```

To run in hot module reloading mode:

```sh
yarn start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open localhost:3000