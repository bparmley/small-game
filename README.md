Simple Game
===========

This simple game will allow you to pick jobs, get money, buy gear, sell junk, and recover life by consuming potions.

*This application is still in development*

Dependencies
------------

### Node.js
Visit [https://nodejs.org](https://nodejs.org) to download and install the latest stable version of Node.js

### Bower
Open the command line and enter the following code to install bower globally (requires Node.js installation)

```
npm install -g bower
```

### JSHint
Due to a bug working with new versions of gulp-jshint you will need to globally install jshint. In your command line run

```
npm install -g jshint
```

### node-gyp

This one is a bit complex. Check out the [node-gyp documentation](https://www.npmjs.com/package/node-gyp) for installation and follow your operation system's instructions to the letter. **_Read ALL installation instructions before proceeding_**

### App specific modules

Navigate in your command line to the folder that the application is in and enter

```
npm install
bower install
```

## MongoDB
Visit [https://www.mongodb.org/](https://www.mongodb.org/) to download and install MongoDB. Follow their quick start guide for your operating system to set up MongoDB on your machine.

Running the Database
--------------------

Open a new comand line window and launch MongoDB by running

```
mongod
```

Running the Server
------------------

When all dependencies are installed, in your command line from the application's directory run

```
gulp serve
```

seed the database by navigating in your internet browser to 

```
localhost:3000/admin/addJobs
```

pull up your gulp command line window and type `rs` to restart the server

Navigate in your browser to the app at

```
localhost:3000
```

*This application is still in development*
