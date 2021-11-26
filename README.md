# Recap_API_Requests

Code of session 26.11.21

Do not forget to execute npm install when you clone it!


## Task for praciticing:
Each card has a `more info...` button. Let's add some functionality to it

### Task 1: Prepare the view for receiving the movie info.
In the view file, create a new state variable for saving the object with the information of the movie. This state variable will be updated to the object when the user clicks on the `more info...` button from each movie card.

### Task 2: Creating the Request function
In the `apiServices.js` file, create a new function for searching for a single movie. Look in the documentation which parameters do you need. Use the `i` parameter to search by using the id of the movie.


### Task 3: Creating the bridge for the view
In the `moviesServices.js` create a function that will connect the `apiServices.js` function to search info of a single movie with a function that can be called from the view. Keep in mind that the parameters should contain the query information that is needed to make the request.


### Task 4: Connecting with the view
Use the function from the previous task created in `moviesServices.js` in the view file to connect the function created with the button of `more info...` of each movie card. Think of how you can do that according to which movie card you click you send back the correct information to make the API request. *Hint: pass the function created to search for a single movie as a prop into the cardContainer and use it inside the map to assign the function to each card element*


### Task 5: Connecting the modal
Once you make all connections, check that you can get the info for a single movie and see the state variable with the info in the react dev tools in the browser. If you can get the info now the next step is to connect the modal. Use the modal component file and check what information is needed in the props. Think of how you can use the state variable to control when to display the modal. *Hint: you can use a ternary for checking when you have the info of a movie you display the modal and if the state variable is empty you do not show the modal. How will this relate to the functio to close the modal?*



