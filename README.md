angular-introduction
====================

HTML enhanced for web apps - Introduction to AngularJS

Preparation
-----------
* If there is an emphasis on Yeoman: Open a console and switch to code folder

Steps
-----

1. Introduction
1. Explain that this mainly is a live coding talk
1. Slides until instructions how to create a project using yeoman
   * Show WebStorm features for angular in helloWorldAngular2.html
     * Code completion for Controller name
     * F1 over ng-app displays documentation
     * Navigate to controller from HTML
1. Optional: If there is an emphasis on Yeoman
    * Show how to run tests and server on console in dir 0-base
       * grunt build test
       * grunt serve
    * Show this default application in Browser
    * package.json / node / npm
    * bower.json / .bowerrc
    * Gruntfile.js
    * grunt jshint
      * show .jshintrc
    * dist-Verzeichnis
      * Show src index.html
      * Compare index.html in app to the one in dist
1. Live-Coding #1: Standard Directives and Controllers
   1. Show result of this step first: Fully functional calculator
   1. Demonstrate calculator
   1. Show artifacts
     1. main.html -> views
        * ng-model
        * ng-submit
        * ng-disabled
     1. main.js -> scripts/controllers
     1. calc.js -> scripts/services
   1. module definition and routing part in complete
      * 1-resource/app/scripts/app.js
      * show relation of route to url
1. Live-Coding #2: Custom Directives, Services, and Resources
   1. Ask what people would improve upon
     1. Repetition in HTML
     1. Calculate function in global namespace
   1. Show custom directive in step-2
     1. Use -> views/main.html
     1. Definition -> partials/control-group.html
     1. Code -> scripts/directives/controlGroup.js
   1. Show service -> scripts/services/calc.js
     1. Created by a factory
     1. Service has a callback now when it is done
     1. Services gets injected by DI into controller
        * Using parameter name same as service name
   1. Explain resource -> step-3/scripts/services/remote-calc.js
   1. Show complete application
      * switch service implementation -> 3-resource/app/index.html
      * Practical example for DI
      * DI also very practical for mocks in testing
      * Show minified version in dist folder
   1. Show WebStorm features for angular
     * make app resource root (right click, Mark as Resource root)
     * Navigate to view over routing

