FROM node:8.16-stretch

RUN sed -i 's/archive.ubuntu.com/mirrors.163.com/g' /etc/apt/sources.list
RUN apt-get update && apt-get install -y apt-utils

RUN useradd skylark -s /bin/bash -m -U && mkdir -p /var/www/guixi_information_display_system
RUN chown -R skylark:skylark /var/www/guixi_information_display_system

USER skylark
WORKDIR /var/www/guixi_information_display_system

COPY ./ /var/www/guixi_information_display_system/

USER root

WORKDIR /var/www/guixi_information_display_system

RUN npm install
