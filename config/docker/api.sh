if test -d node_modules;
then
    echo node_modules_exists ;
else
    cp -a /tmp/node_modules /usr/src/app/node_modules;
fi &&
npm install && npm run start