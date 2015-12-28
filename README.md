#Sports Application

##Setup

I decided to build this application using [Django Rest Framework](http://www.django-rest-framework.org/), [MySQL](https://www.mysql.com), and [AngularJS](https://angularjs.org/). The AngularJS app is served as a static file from within the django project. Though it would probably work better served on a seperate host such as AWS s3 or using nginx, this setup serves my needs for the time being. Additionally, due to the limitations on storage for the free database store options, I am using my personal Linux machine to host the MySQL database using mysql-server.