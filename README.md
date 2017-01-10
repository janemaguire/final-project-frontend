# Prop Swap

Prop Swap is a place for off-West End theatres to list and lend props they have in storage. Theatres can create a profile, list their items and add them to categories. Other users can then browse or search for the props they need and contact the owner to borrow, avoiding expensive hire fees.

Prop Swap is a full-stack app with authentication and full CRUD actions on two resources, theatres (users) and props.

This was my final project for the General Assembly Web Development Immersive course.

###[Launch Prop Swap](https://prop-swap.herokuapp.com/)
To see the features available to logged in users you can use the test details:

email: arcolatheatre@propswap.com
password: password

### Technologies used
AngularJS | BCrypt | Bootstrap | Carrierwave | Geocoder | Google Maps | Gulp | HTML | Javascript | JWT | Ruby | Ruby on Rails | PostgreSQL | Satellizer | SCSS

![](/src/images/propswap1.png)

###Approach taken
* The requirements for this project included a minimum of two models. I decided to keep the scope small and build up from there so I chose the basic one to many relationship of a theatre to it's props. The database is built using PostgreSQL on a Ruby on Rails back end.
* I used Satellizer and the JWT gem for authentication. Routes are secured so that users have full CRUD actions on their own props but not those belonging to other theatres.
* The front end is built with AngularJS and styled with Bootstrap and SCSS. The app is styled to look like printed classified ads such as the Yellow Pages.
* Maps of theatre locations are displayed using the Google Maps API and the Geocoder gem to change addresses into latitudes and longitudes.
* Users can upload images for their profiles and their props using an image uploader built with Carrierwave and the Fog gem.
*

![](/src/images/propswap3.png)

###Challenges
* Building a full product in limited time required detailed planning. To stay on track I decided on a minimum viable product and listed features that could be added as extras if time permitted. Using Trello I assigned tasks to days and left time for testing and unforseen problems. I also made sure to build and fully test my API before moving on to front end build and then styling. Sticking to my plan meant I was eventually able to add an extra categories resources and a search function.
* I decided to test my styling abilities by moving away from a traditional nav bar with a static panel for user info on the left of the view. This required a lot of testing and trying out new things.
* There were a lot of routes to secure and elements to hide/show to ensure only logged in users could edit their profiles and props. For this I used ng-if and ng-show on the front end after carefully planning each option on paper first.
* Displaying the location of each theatre was a challenge without asking users to enter their latitude and longitude. I solved this by using the Geocoder gem.

![](/src/images/propswap2.png)
