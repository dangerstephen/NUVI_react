# Nuvi Code Challenge 
Interview code challange sent to me by [NUVI][]

## The Challenge 
Your project is to write a browser UI that displays these activities and allows you to interact with the "actors" of these activities, such as liking or replying to these "actors".

https://nuvi-challenge.herokuapp.com/activities

We have a RESTful JSON endpoint for data. It will always return an array of objects which describe the activity. This array could be empty but will typically include 10-500 social media activities.


## Download and Installation

```
git clone https://github.com/dangerstephen/NUVI_react.git
cd NUVI_react
npm install
```

## Getting Started 
This app was created using [React][]. 
To start up the application 

```
npm start
```
This will start the app and open a tab in your browser running the app.

NOTE: If the broweser fails to open you can run the app by going to localhost:3000 from your browser of choice.

## How it works

The app sends a request to https://nuvi-challenge.herokuapp.com/activities and grabs the array of objects. The array of objects is then iterated over and cards with important information are created for each. After the data is pulled a chart is created based off likes of each provider that information is getting pulled from. The chart is created through Google's Charting API. 

Cards look like so:

<img width="1440" alt="screen shot 2017-03-10 at 1 09 31 pm" src="https://cloud.githubusercontent.com/assets/22550925/23813272/edffaece-0592-11e7-8d4b-42feedbad32b.png">

And the Chart looks like this: 

<img width="1438" alt="screen shot 2017-03-10 at 1 18 34 pm" src="https://cloud.githubusercontent.com/assets/22550925/23813537/29a27550-0594-11e7-9698-d4bfd330f3d5.png">



[NUVI]: https://www.nuvi.com
[React]: https://facebook.github.io/react/

