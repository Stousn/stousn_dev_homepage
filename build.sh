#!/bin/bash
cd julian_homepage
git checkout master
git pull
cd ..
rm -rf public
mkdir public
cp -R julian_homepage/ public/

firebase deploy --project stousn-development
