ARG ROOT_CONTAINER=jrottenberg/ffmpeg:4.4-alpine

ARG BASE_CONTAINER=$ROOT_CONTAINER
FROM $BASE_CONTAINER

RUN apk add --no-cache bash

ENV OUTPUT_DIRECTORY "/tmp/stream"
ENV SOURCE_URL ""

ADD start.sh /

ENTRYPOINT [ "/bin/bash" ]

CMD ["/start.sh"]
