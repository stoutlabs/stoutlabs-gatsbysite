---
templateKey: blog-post
title: 'My Docker Setup For Gatsby and Next Sites'
date: '2019-02-05'
description:
  'A quick post showing my Docker setup for building Gatsby and NextJS frontends.'
featureimg: './docker_with_gatsby_header.png'
tags:
  - docker
  - tips
  - gatsbyjs
  - nextjs
  - alpine linux
---

### Docker is Fantastic!

I'm probably late to the party on this one, but I recently started using [Docker](https://www.docker.com/) as a part of my development workflow. I absolutely love it, and believe all developers should at least tinker with a basic tutorial somewhere. Trust me, it's a rabbit hole worth venturing into!

### But... There Was a Minor Hitch

However... while going through a couple of my recent Gatsby and NextJS projects this week to "Dockerize" them, I noticed that there didn't seem to be much information readily available for making that happen. 

Gatsby does offer [a Docker setup](https://github.com/gatsbyjs/gatsby-docker) within their repo (based on alpine:edge), but to be blunt: it seemed needlessly complicated, and I could not make it work. I decided to create a custom one from an official node:alpine (latest) image... just something to use for a quick dev environment setup regardless of which computer I'm using. (If I wanted to deploy somewhere other than Netlify, I could quickly add an Nginx image/service in my docker-compose file and a super basic conf file.)

### Problem Solved!

So... after hours of learning, research, and experimenting (and possibly some frustration), I present you with my version of a working Dockerfile! It will create a fully functional Docker image that installs all the needed 'extras' in Apline Linux (latest) for building Gatsby (and NextJS) sites and apps. Below that you'll find the docker-compose.yml file that I use along with it.

Note: For NextJS sites, I simply change the final CMD and the port(s) to whatever I'm using for the site/app. (Usually 8080)

```docker
FROM node:alpine

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli yarn

WORKDIR /app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
```

And my ```docker-compose.yml``` file:

```yaml
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "8000:8000"
      - "9929:9929"
      - "9230:9230"
    volumes:
      - /app/node_modules
      - .:/app
  tests:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - /app/node_modules
      - .:/app
    command: ["yarn", "test"]
```

So now, I just run ```docker-compose up``` and I'm ready to rock... whether I'm on my Macbook Pro or on my Windows desktop. Hopefully this helps you, too!