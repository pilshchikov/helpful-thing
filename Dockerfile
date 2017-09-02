FROM java:alpine

COPY server/target/utils.service*.jar /opt/utils.jar
ARG VERSION

RUN set -ex &&\
    echo "#!/bin/sh" > /opt/entry &&\
    echo "java -Dform.version=${VERSION} -jar /opt/utils.jar " >> /opt/entry && \
    chmod +x /opt/entry

ENTRYPOINT ["/opt/entry"]
