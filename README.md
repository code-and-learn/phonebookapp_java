# phonebookapp_java

# Final running application URL

http://pbangularapp.s3-website.ca-central-1.amazonaws.com

### Test user : demo, password : Password123!

## Please remove the end Home in the URL if it shows a 404 error on mobile browser.

# MySql database

Endpoint : phonebookdb-aws.caulnb4mxqrs.ca-central-1.rds.amazonaws.com 
Port : 3306
Username : phonebookdbroot
Password : Password123!

# Java web api URL

http://35.183.0.44:5000 (The URLs will need access_token for authentication)

I added swagger to this application but messed up with something in the end. So the swagger-ui.html page is not working.

# To run the docker image for web api

sudo docker run -p 5000:5000 mindfield/phonebookapis

# Github repository 

https://github.com/rskainth/phonebookapp_java.git 

In order to run the Angular app locally you will have to modify the api base url in app/shared/models/appglobals.ts file and also whitelist urls in the app.module.ts file
