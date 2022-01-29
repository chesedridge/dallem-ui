#!/bin/bash

cd /opt/docker/dallem-ui/prod

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 094190377405.dkr.ecr.ap-northeast-2.amazonaws.com

docker pull 094190377405.dkr.ecr.ap-northeast-2.amazonaws.com/dallem-ui:latest

docker-compose -f docker-compose.prod.yml up -d

