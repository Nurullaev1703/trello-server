# Используем Node.js базовый образ
FROM node:14

# Создаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN yarn

# Копируем все файлы приложения в рабочую директорию
COPY . .

# Компилируем TypeScript в JavaScript
RUN yarn build

# Указываем команду для запуска приложения
CMD ["node", "dist/main.js"]

# Указываем порт, который будет использовать приложение
EXPOSE 3000