FROM mongo

COPY createUser.js /docker-entrypoint-initdb.d/
COPY init.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/init.sh

EXPOSE 27017

CMD ["/docker-entrypoint-initdb.d/init.sh"]