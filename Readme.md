## Additional Command Required
You will need:

npm install -g concurrently

for App.jsx to update on save.


## Clarification for the modification

I added a few lines to make the save on App.jsx to behave as desired when save is clicked on App.jsx

"scripts": {
"start:run": "babel src --presets @babel/react --out-dir public --watch --verbose",
"start:watch": "nodemon --watch server server/server.js --watch ./src/App.jsx",
"start": "concurrently npm:start:*",
"watch": "babel src --presets @babel/react --out-dir public --watch --verbose",
"test": "echo \"Error: no test specified\" && exit 1"
},
