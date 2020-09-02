Set up and start app 

First you need to install the modules to make the app run

Second you need to start the development version of the app 
The app will run on port 8080 so you dont need to add a port number to localhost however you can change this in the package.json file line 6 you can also add the host name here too
 
```bash

npm install 

npm run dev

```
***

Nextjs - This has been used because I have little to no experience with server side rendering with react. I have tried other options first and come across some problems so I have decided use nextjs to save time.  

axios - This has been used because its very similar to fetch however it is more likely to work on older browsers.

So I have spent 3 hours on this a lot of time was working out how to use nextjs and server side rendering 

Things left to finish 
    test - work out how to get jest running with nextjs and test the code - 1 hour (I've never set it up from scratch and ran into a few problems)
    use typescript -  ?? 2 hours maybe to convert what I have to typescript tho I would be learning it as I go 
    app does not like it if you switch from desktop to mobile view, it  does not trigger re-render small bug maybe 30 min to add a re-render on change of screen size 
    
