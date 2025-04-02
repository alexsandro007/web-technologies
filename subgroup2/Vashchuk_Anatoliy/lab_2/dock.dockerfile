# Используем образ Nginx
FROM nginx:latest

# Рабочая директория (необязательно, но можно оставить)
WORKDIR /lab_2

# Копируем файлы в директорию, откуда Nginx их будет раздавать
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
