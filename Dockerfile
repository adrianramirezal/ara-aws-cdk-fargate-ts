FROM tomcat:8.5.82-jre8-temurin-jammy

# ENV CATALINA_OPTS="-Xms1g -Xmx6g"

RUN mkdir /usr/local/tomcat/webapps/App
RUN echo 'Hello World!' > /usr/local/tomcat/webapps/App/index.html

CMD ["catalina.sh", "run"]