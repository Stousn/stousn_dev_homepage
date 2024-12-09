#!/bin/bash
cd stousnDevHomepage
ng build --configuration production
cd ..
rm -rf public
mkdir public
cp -R stousnDevHomepage/dist/stousn-dev-homepage/browser/* public/

firebase deploy --project stousn-development
