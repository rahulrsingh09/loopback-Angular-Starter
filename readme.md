# Loopback + Angular Starter

contributed by Rahul Singh <rahulrsingh09@gmail.com> and also a big shout out to Sirrele Steinfeld <admin@sirrele.io> her blog helped me a lot

### To Get your hands dirty directly 

Clone the repository <https://github.com/rahulrsingh09/Angular-LoopbackStarter.git> and then do a npm install in the root directory for Loopback and then cd client and npm install for Angular . 


* Install Angular-CLI
   ```
    npm install -g @angular/cli 
   ```
* Install Loopback CLI
   ```
    npm install -g loopback-cli
   ```

* The Current setup uses Angular (v5) pentagonal-donut and loopback 3.x


### Some General Instructions

* In the Current Set up we are using Angular Cli along with some gulp tasks. 

![alt text](server/sel.png "Description goes here")

### How to use the Same

* Just Add any Model in Loopback i:e a representation of the database table you want to expose services for (you can even write your own remote methods or custom methods for that you need to look at Loopback tutorials)
* A short cut to create model is in server boot with name make-model.js folder just put your table and schema details and model is created.
* Any change will trigger a Sdk and server restart which will populate the client folder with the required services of Angular 
* Now reuse the services in Angular and without having to deploy the Api again on a different port all made possible due to ```ng build -w```

Props to Sirrele Steinfeld and her [Blog](https://www.sirrele.io/blog_post_6_lb_ng.html), from which
i took guidance to start this Starter Project.

Please Go through her Blog and then this set up will become easy and then you can refer to this for Angular and Loopback methods.

For Stuff on Angular Concepts check [this](https://rahulrsingh09.github.io/AngularConcepts/)

### Stuff used to make this:

 * [Blog ](https://www.sirrele.io/blog_post_6_lb_ng.html) for Putting this together by Sirrele Steinfeld


### One step Further than the Blog

* I have written a middle ware function that intercepts any inceoming requests and if loopback doesnot understand
  the request it will redirect it to the Angular index.html which we have build in the first place using ng build in the 
  dist folder of client. So now we can serve the same app using only one server running.

* To test the same, just run the loopback server using ```node . ``` and then in the address bar of the browser write a url which 
  loopback doesnot understand. like localhost:3000/home and see the magic .

* Pre-requisits . You must have the Angular App pre comipled in the dist Folder (as of now) will try and automate this soon. 