#!/bin/bash

bundle exec jekyll build

git add .

git commit -m "$1"

git push
