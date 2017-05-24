# Titanium CommonJS Introduction

#### Originally Published October 12, 2012

> Appcelerator started to introduce an implementation of commonJS into their Titanium framework towards the end of 2012. With the release of Titanium version 2 this has now been fully implemented. This is a major step forward for what seems to be rapidly becoming the number 1 mobile development framework.

 

## What is CommonJS?
 

> CommonJS is a specification. It is not a framework in its own right, but a way to implement a common methodology into a JavaScript framework. It has been implemented into a multitude of frameworks including Titanium and NodeJS. The implications of this cannot be overstated. Developers can now switch between JavaScript frameworks, which have implemented the CommonJS model, without having a massive learning curve on the framework itself.

 

The commonJS architecture is based around creating JavaScript applications, and uses an initial bootstrap file which controls the application and then modules (often called factories) are used to separate the code base.

 

### A few rules about commonJS:

+ **Be Modular**
+ **Be Private**
+ **Return an Object**
+ **Protect the Global Scope**
+ **Control file loading**
 

### Modules
 

>A module is a separate file which contains a piece of javascript code, it can consist of variables, functions and inline code. Within the Javascript instance it runs in its own scope, which means that all the code inside it is private to that module. To make a function or variable accessible externally you export it (as can be seen in the example below).


Modules are required into other modules by using var inModule = require(‘/path/module’) note that the .js extension is not required, and once it has been required any functions or variables which have been exported are accessible in the parent module. Within the parent module you would run the function by inModule.asimpleLoad();.

#### A simple module

>var myModuleVar = null;  

> function asimpleLoad() {  
>	&nbsp;&nbsp;&nbsp;do some code here ….   
>	&nbsp;&nbsp;&nbsp;return Main object;  
>}  
>exports.asimpleLoad = asimpleload;


To effectively use modules across an application you need to understand how the module is loaded, once a module has been required for the first time it is placed into memory. If that module is then required by another module, it is not reloaded, instead it is more like a pointer being created for the new calling module to be able to access it.

 

This has some definite advantages, if you declared a variable in one module and exported it, then required that module, the parent module is then able to update the value of that variable. If you then require the module containing the variable into another module, then the new value is available to the new parent module. This enables whole applications to be developed without having to use any global variables or pass great chunks of data around, they can all be stored in there own module.

 

>> **There is a pitfall though, recursive requires. This is best explained a a parent module, requiring a module which then requires the parent. Basically you app will fall over very nicely if you do this.**


#### A few rules about modules:

+ **Only load them when needed**
+ **Only export what is required by the calling module**
+ **Avoid recursive requires**
 

#### Applying in Titanium

Applying a commonJS architecture to a Titanium application can be as simple or complex as needed.  

One of the great advantages of commonJS in Titanium though, is the fact that if it is implemented correctly it becomes a lot easier to find and maintain code.

Titanium’s bootstrap file is app.js, for this article this file is used as the main application controller, just to show how to separate code out into various modules and use them.

#### A common Function module

> function commonA(inParam) {  
> &nbsp;&nbsp;&nbsp;// the code …  
> &nbsp;&nbsp;&nbsp;return …  
> }  
    
>function commonB(inParam) {  
> &nbsp;&nbsp;&nbsp;// the code  
> &nbsp;&nbsp;&nbsp;return …  
> }  
> exports.commonA = commonA;  
> exports.commonB = commonB;  

 

#### A window Module

> var common = require(‘/tools/common’);
>     
> function loadAWindow(inParam) {
>     
> &nbsp;&nbsp;&nbsp;var newWin = Ti.UI.createWindow({
>     
> &nbsp;&nbsp;&nbsp;// define the properties
>     
> &nbsp;&nbsp;&nbsp;});
>
> &nbsp;&nbsp;&nbsp;// Build the rest of the UI
>
> &nbsp;&nbsp;&nbsp;return newWin;  
> }
>
> exports.loadAWindow = loadAWindow;

 

> **app.js**
> ---
> var common = require(‘/tools/common’);
>
> function homeWindow(inParam) {
>
> &nbsp;&nbsp;&nbsp;var winReq = require(‘/ui/window’);
>
> &nbsp;&nbsp;&nbsp;var winInstance = winReq.loadAWindow();
>
> &nbsp;&nbsp;&nbsp;winInstance.open();
>
> }
>
> function startApp(inParam) {
>
> &nbsp;&nbsp;&nbsp;var setTaskA = common.commonA;
>
> &nbsp;&nbsp;&nbsp;homeWindow();
>
>}
>
>startApp();

You will see from the examples above, that `app.js` is used to load the homeWindow file and open that file, also both the window and `app.js` files require the common file. 

It is good practice to separate the code base into relative modules. That is to clump sections of relative code into one module. Do not be tempted to extract each function into its own module. The window module builds the UI to be displayed and then returns the window object back to app.js to handle the opening.

 

This has shown a very basic application using commonJS in Titanium, expanding this out to have multiple windows and tasks, requires the implementation of some sort of application architecture. You could use an MVC based model and instead of using the app.js file as the main controller you could create a controller file. Having an app.js like this:

> **app.js**
> ---
> var control = require(‘/control/controller’);
>
> control.startApp();

and then use the controller to handle the application flow.

 

#### Application Navigation

As you develop your application you will notice a couple of things, the first being getting back to the controller or app.js file requires application level event handlers, and calling a function in a parent module when a child modules function is complete requires using a callback.

If your not careful, you could end up with quite a few application event handlers, which will hit the performance of the application. 

> A way a round this is to use a single custom event, which calls a function with a switch statement in that controls the flow of the application.

>> **app.js**
>> ---
>> var common = require(‘/tools/common’);
>>
>> var loadHome(inParam){
>>
>> &nbsp;&nbsp;&nbsp;// put the code here
>>
>> }
>>
>> var navigateApp(inParam) {
>>
>> &nbsp;&nbsp;&nbsp;switch(inParam.TYPE) {
>>
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case ‘HOME’ :  
>>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loadHome(inParam);  
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
>>
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case ‘NEXT’ :  
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loadNext(inParam);  
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;  
>> &nbsp;&nbsp;&nbsp;}  
>> }  
>> Ti.App.addEventListener(‘NAVAPP’, navigateApp);

>> **common**
>> ---
>> function navControl(inParam) {  
>> Ti.App.fireEvent(‘NAVAPP’, inParam);  
>> }  
>> exports.navControl = navControl;

>> /* Home Window */

>> var common = require(‘/tools/common’);
>> 
>> function loadHomeWindow(inParam) {  
>> &nbsp;&nbsp;&nbsp;// build your ui
>>
>> &nbsp;&nbsp;&nbsp;// Add a click event
>> 
>> &nbsp;&nbsp;&nbsp;button1.addEventListener(‘click’, function(e) {  
>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;common.navControl({TYPE: ‘HOME’});  
>> &nbsp;&nbsp;&nbsp;});  
>> &nbsp;&nbsp;&nbsp;return window object;  
>> }  
>> exports.loadHomeWindow = loadHomeWindow;

As you can see from this example, it is straight forward to have a single custom application event listener, which uses a function from a common module to fire the event. This works because of event bubbling, which is if you have an event listener within scope then when you fire an event to that listener, it will process up through the application and back down into the sub modules until it finds that event. This is the reason we use an application level listener, as they are in what is classed as super scope, totally global to the application.

You can add application event listeners inside any module and fire an event from any other module and as long as the main module has been required once, it will then find that listener and act upon it.

> **Caution: Adding application level listeners is resource heavy, so if you do add them, then remove them when they are no longer needed.**


### Learn more
+	[Appcelerator](http://www.appcelerator.com)  
+	[CommonJS](http://commonjs.org)