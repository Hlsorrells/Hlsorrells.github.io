# Personal Portfolio Website

## Welcome
Thanks for visiting my portfolio website repo! As I am always learning, I will try to keep a list of technical debt on this readme along with any key learnings.

## How to find source code
You will find my source code is located on the dev branch of this repo.

## Key Learnings
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
- add a footer - saved this to test rebuilding live site
- add react browserHistory to handle the browser button navigation
- address the max width of the navigation bar for larger screens
- change the project tiles to a carousel or continue working on standardizing sizes
- fix responsiveness on the about page (see ipad) - the card tiles overlap the photos so need to work on the breakpoints
