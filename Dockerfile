FROM java:alpine

COPY server/target/server.side*.jar /opt/server.side.jar
ARG VERSION

RUN set -ex &&\
    echo "#!/bin/sh" > /opt/entry &&\
    echo "java -Dform.version=${VERSION} -jar /opt/server.side.jar " >> /opt/entry && \
    chmod +x /opt/entry

ENTRYPOINT ["/opt/entry"]
