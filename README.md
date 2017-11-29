### Set up

```
npm install
npm start
open http://localhost:3000
```

### Progress 

#### Extra Modules

- loaders, for css and json 
- proptypes module. 
- Bootstrap for a bit of style. 

#### Hurdles 

1. Okay so the first struggle was the question itself I dind't fully understand the realtionship between the state, button and the tocIds. I noticed that there is a previous and a next in the questions data, and links with in the questions text that are also associated with the tocIds. I couldn't really work out how these all fitted together. 
2. Loading the Json data with the regex, require.context was a new thing for me but a cool wee bonus.
3. Creating the recursive function to create my tree was tricky and if I'm truthful where I spent most my time, along with reading the question. 

### More time
- Testing for sure, I started setting up a testing suite with jest, but was running into some npm module versioning errors so presumed as there wasn't one setup in the package.json I left it. 
- React CSStransitions are always a nice way to add a wee bit of animation to the UI as you moved between the states.
- UI in general could have improved rather than just thrown bootsrap at it. Needed to find some more examples of content pages. 


### Task

To test your programming skill, we'd like you to have a go at a small task.

We have provided you with four JSON files (in /data). These files provide you with a table of contents (sections.json), questions (/[\d]+(,[\d]+)+/.json), and a list of view states (states.json). Your task is to use this data to produce a content view page.

You should start with loading data from all four files. The view should display sections and questions altogether and the content tree hierarchy should be easy to read. All questions should remain collapsed unless their tocId is on expanded list.

The starting state should leave all questions collapsed and the UI should include a button allowing to cycle through the view states list.


Some things to note:
* Your solution should work in any modern browser, but you don't need to worry about making it fully cross browser or supporting older browsers.
* The root of the sections tree has id -1.
* Simplicity is key.
* Remember to make use of the app states provided.
* There's no need to make requests to load data, keep it static.



# react-contents-page
