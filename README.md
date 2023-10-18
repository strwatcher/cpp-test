# Тестовое задания для "ООО Центр Поддержки Предпринимательства"
## Стек
В качестве архитектурной методологии используется FSD.

Стек: React, effector, effector-storage, effector-forms, patronum, farfetched, atomic-router, Mantine.

Бандлер: vite
Тест-раннер: vitest
Для моксервера использовал библиотеку mock-config-server.

## Установка и запуск

Для начала установка зависимостей:
```sh
pnpm i
```

Затем запуск мокового сервера и фронтенда:
```sh
pnpm dev
```

```sh
pnpm mock-config-server
```
Для запуска тестов:
```sh
pnpm test
```

## О решении
Решил выполнить все пункты задания, кратко пройдусь по моментам, которые считаю наиболее важными:

- Взял atomic-router вместо react-router, чтобы извлечь все плюсы из эффектора и декларативного подхода, который он предлагает.
- Настроил мок сервер, поэтому нужда в хранении списка фильмов в localstorage отпала. Вместо этого сделал возможность восстановить черновик формы создания фильма после перезагрузки страницы и после закрытия попапа с формой.
- Сортировку и фильтрацию реализовал на фронте из-за ограниченного функционала мок сервера. Сортировка и фильтрация синхронизированы с роутером.
