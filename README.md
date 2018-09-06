# AskNow-Website
[![Build Status](https://travis-ci.org/AskNowQA/AskNow-Website.svg?branch=master)](https://travis-ci.org/AskNowQA/AskNow-Website)  [![Twitter](https://img.shields.io/twitter/follow/AskNowQA.svg?style=social)](https://twitter.com/AskNowQA)  
The website of AskNow.

# Setup
In order to get started you need to have full [Ruby Development Envoirnment](https://www.ruby-lang.org/en/downloads/) with all the headers and [Ruby Gems](https://rubygems.org/pages/download) installed. This website is being built by Jekyll version 3.6.2 and its compatible Ruby dev envoirnment and gems. If you have already setup Ruby Development Envoirnment and and Ruby Gems, you can run the following command as per [Jekyll version 3.6.2](https://github.com/jekyll/jekyll):

```sh
gem install jekyll bundler
```

So after setting up Jekyll on your computer you can clone sda.tech repository at a desirable location on you computer after getting into the directory you can run the following command to see the project running:


```sh
bundle exec jekyll serve
```
## Using Docker
We extend the Jekyll Pages [docker image](https://github.com/white-gecko/dockerjekyllpages) to build a sda.tech page from a Git repository or local sources. This is essentially githubpages in a docker image. We have deployed our docker image on Docker Hub [`smartdataanalytics/site`](https://hub.docker.com/r/smartdataanalytics/site/) in order to build the site automatically. The [`v2tec/watchtower`](https://hub.docker.com/r/v2tec/watchtower/) image is used for watching our sda container and automatically restart it whenever the image is refreshed. Simply you could use Docker Compose to set up the whole pipeline.

```sh
docker-compose up -d
```
