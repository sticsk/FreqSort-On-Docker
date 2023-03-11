#!/bin/bash

 mkdir /home/docker/proiect
 docker volume create --opt type=none --opt device=/home/docker/proiect/nginx-config --opt o=bind nginx_volume
 docker volume create --opt type=none --opt device=/home/docker/proiect/nginx-ssl --opt o=bind nginx_ssl_volume
 docker volume create --opt type=none --opt device=/home/docker/proiect/nginx-log --opt o=bind nginx_log_volume
