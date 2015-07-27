# Description
This repo is a base AngularJS app. Most of the set up comes from the [angular-seed project](https://github.com/angular/angular-seed), but I've added a few extra things to be installed, like jQuery, Bootstrap, and Angular-Bootstrap. I also added in a home page and a Bootstrap navigation across the top. The rest of this README page comes right from the angular-seed project, at least for the things I know work and am keeping.

##Branches
One branch (master) uses the ngRoute, while another (ui-router) uses angular-ui-router. Checkout whichever of these branches you want to use and it's set up to go. The ui-router branch has a home page, two other pages, and a nested page setup and ready to go.

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

### Running the App in Production

This really depends on how complex is your app and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).

