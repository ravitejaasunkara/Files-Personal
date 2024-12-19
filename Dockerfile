# getting base image ubuntu
FROM ubuntu
RUN apt-get update
CMD ["echo","Hello...!, My first docker file"]