#!/bin/bash
cd stousnDevHomepage
ng build --prod
cd ..
rm -rf public
mkdir public
cp -R stousnDevHomepage/dist/ public/