FROM node:10.9.0-alpine

ENV SERVICE_USER=example
ENV APP_DIR=/home/$SERVICE_USER/app/

ADD . $APP_DIR
RUN adduser -D -g '' $SERVICE_USER
RUN chown -R $SERVICE_USER.$SERVICE_USER $APP_DIR

WORKDIR $APP_DIR
RUN npm install
RUN npm run build

USER $SERVICE_USER

EXPOSE 3000

CMD ["npm", "run", "start"]
