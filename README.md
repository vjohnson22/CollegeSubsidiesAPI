#College Football API

The goal of this project was to build and deploy a RESTFUL API from scratch. I had to find and import multiple data sets, create 3 data models, build the routes, and controllers, and deploy to the cloud.

I chose data that looked at the amount of revenue major college sports were bringing into each school, and how much they rely on the tuition and fees of non student-athletes to subsidize their sports. I also brought in salary information about the head coach and assitant coaches for their football teams, with the goal of combining the data to see if there were schools with high salaried coaches that were subsidized by the students


## Getting Started
To use this API, go to https://college-football-subs.herokuapp.com/schools

In order to use the data, there are 3 endpoints: /schools, /headcoach, /asstcoach, which allow you to query by schools, headcoaches, assistant coaches respectively.

Each endpoint has full CRUD, so you can use the following requests:
```
*GET: '/' to get all schools, headcoaches, or assitant coaches 
*GET: '/:name' to get a specific school, head coach, or assitant coach
*POST: '/' with a request with the key values in the body to create a new entry
*PATCH: '/:name' with the changed key value pairing in the request body to *update a record
*DELETE: '/:name' to delete a record
```

## Built With

* Node.js
* MongoDB
* Mongoose
* Express



## Authors

* Victor Johnson

