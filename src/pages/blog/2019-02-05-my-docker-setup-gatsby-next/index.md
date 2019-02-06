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

However... while going through a couple of my recent Gatsby and NextJS projects this week to "Dockerize" them, I noticed that there didn't seem to be much information readily available on making Gatsby work with a node:alpine build. 

Gatsby does offer [an extremely minimal Dockerfile](https://github.com/gatsbyjs/gatsby-docker) within their repo, based on alpine:edge, and it works perfectly well on a barebones build... but it will fail on a build if your project uses images with Gatsby's ***amazing*** built-in image handling functionality. (Due to Sharp's requirements, if I'm not mistaken.) This was obviously an issue for me...

### Problem Solved!

So... after hours of learning, research, and experimenting (and possibly some frustration), I present you with a working Dockerfile! It will create a fully functional Docker image that installs all the needed 'extras' in Apline Linux (latest) for building Gatsby (and NextJS) sites and apps.

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