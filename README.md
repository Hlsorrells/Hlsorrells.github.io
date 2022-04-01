# Personal Portfolio Website

## Welcome
Thanks for visiting my portfolio website repo! As I am always learning, I will try to keep a list of technical debt on this readme along with any key learnings.

## How to find source code
You will find my source code is located on the dev branch of this repo.

## Key Learnings
### 03-31-2022
My new best learning is that sometimes you have to revert to an older npm version to keep a working product while solving for the new version changes. I tried to use React-Router-Dom version 6 (which had just released) to build the site. I was able to implement everything into the webpage except for the browser history. I just could not get it to work. I reverted the webpage back to version 5.2 as I have used that version many times. This corrected the browser history issue and provided me with a solid working product. 

Now working on the high of fixing my biggest issue, I set out to solve the 2 errors that showed up in the inspect window of the browser dev tools. I solved the "validateDOMNesting: <tr> cannot appear as a child of <div>" error with the amazing help of a StackOverflow post (https://stackoverflow.com/questions/67858973/validatedomnesting-tr-cannot-appear-as-a-child-of-div-problem). I found that I just needed to add a tbody wrapper around my rows inside the table div. I am loving the StackOverflow vibes tonight!

Solving the "Invalid prop 'component' supplied to 'Route'" error was also made easier by finding a great post on StackOverflow (https://stackoverflow.com/questions/60645459/warning-failed-prop-type-invalid-prop-component-supplied-to-route-react). This post made the solution easy by just adding a inline function which rendered my h1 tag with the error message. StackOverflow is quickly becoming a member of the family!!

This one was a bit trickier for me, but I managed to align my footer to the bottom of the page! I struggle getting all of my items aligned even using flexbox. I think I might need to get a whiteboard app just to draw out my flex items and "see" them better. I solved it by adding a wrapper div just inside the BrowserRouter to contain my entire app in a flex container with a min-height of 100vh & a flex direction of column. This let my "boxes" sit on top of each other rather than side-by-side. Then I set the top margin of the footer to "auto" (it was 20px) & the flex to "end" which allowed the footer to flex to the bottom of the container. I finished it off with a bit of padding to make sure it was not crowded at the bottom with a full page of content.

Still many improvements to go, but I am much happier with the site now!

### 03-06-2022
Added the footer! Still have not found a solution to the browser history issue.

### 03-04-2022
My best learning was working through getting the app deployed to GitHub Pages. There are many articles that described how to deploy to the application, but I had to figure out what I needed from the deployment. As I wanted to use my GitHub user page, I wanted to deploy from the main branch and store my source code on the dev branch. While GitHub pages would allow me to specify another branch as the source, I decided to show that I could work with the public code on the main branch and development in a separate branch.

I enjoyed working with the React Router useLocation hook. It provided a quick means of obtaining the filepath which I could then parse into a variable. The variable was then used in each of the NavLink components.

Working on the contact page, I had to search how to create a circle border around my profile pic and contain any overflow. I found a bit of code on stackoverflow that helped to keep the image from leaking outside of the border.

```css
/* Contact Components */
.round {
    margin: 10px;
    border-radius: 50%;
    border: 10px solid darkgray;
    max-width: 200px;
    max-height: 200px;
    /* Prevent background color leak outs */
    -webkit-background-clip: padding-box; 
    -moz-background-clip:    padding; 
    background-clip:         padding-box;
}
```

## Technical Debt
- ~~forgot to change the website title for the browser tab!~~
- ~~add a footer - saved this to test rebuilding live site~~
- ~~add react browserHistory to handle the browser button navigation~~
- address the max width of the nav bar for larger screens - add a media query to increase margin pushing links toward middle
- change the project tiles to a carousel using a project tile component with props
- fix responsiveness on the about page (see ipad window size) - the card tiles overlap the photos so need to work on the breakpoints
- the ".nav-link:hover, .nav-link:focus" style does not refresh when the browser buttons are used for navigation. I think I might need to add a clickHandler & useState to watch the location.pathname to clear the style. Need to research & think about that one a bit.