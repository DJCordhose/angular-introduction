angular-introduction
====================

HTML enhanced for web apps - Introduction to AngularJS

Preparation
-----------
* Open a console and switch to code folder

Steps
-----

1. Introduction
1. Explain that this mainly is a live coding talk
1. Slides until instructions how to create a project using yeoman
1. Show how to run tests and server on console in dir 0-base
   * grunt build test
   * grunt serve
1. Show this default application in Browser
1. Live-Coding #1: Standard Directives and Controllers
   * Show result of this step first: Fully functional calculator
   * Demonstrate calculator
   * Show artefacts to use in step-1
   * Show were they go
     1. main.html -> views
        * ng-model
        * ng-submit
     1. main.js -> scripts/controllers
     1. calc.js -> scripts/services
1. Live-Coding #2: Custom Directives and Services
   * Ask what people would improve upon
     1. Repetition in HTML
     1. Calculate function in global namespace
   * Show custom directive in step-2
     1. Use -> views/main.html
     1. Definition -> partials/control-group.html
     1. Code -> scripts/directives/controlGroup.js
   * Show service -> scripts/services/calc.js
     1. Created by a factory
     1. Service has a callback now when it is done
     1. Services gets injected by DI into controller
        * Using parameter name same as service name
1. Live-Coding #3: Resources
   1. module definition and routing part in complete
      * 3-resource/app/scripts/app.js
      * show relation of route to url
   1. Explain resource -> step-3/scripts/services/remote-calc.js
   1. Show complete application
      * switch service implementation -> 3-resource/app/index.html
      * Practical example for DI
      * DI also very practical for mocks in testing

