# Angular + Loopback Starter

powered by Rahul Singh <rahulrsingh09@gmail.com>

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



Props to Sirrele Steinfeld and her [Blog](https://www.sirrele.io/blog_post_6_lb_ng.html), from which
i took guidance to start this Starter Project.

Please Go through her Blog and then this set up will become easy and then you can refer to this for Angular and Loopback methods.

For Stuff on Angular Concepts check [this](https://rahulrsingh09.github.io/AngularConcepts/)

### Stuff used to make this:

 * [Blog ](https://www.sirrele.io/blog_post_6_lb_ng.html) for Putting this together by Sirrele Steinfeld


### One step Further than the Blog

* I have made a Middle ware function that intercepts any inceoming requests and if loopback doesnot understand
  the request it will redirect it to the Angular index.html which we have build in the first place using ng build in the 
  dist folder of client. So now we can serve the same app using only one server running.
  