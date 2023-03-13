# password-generator
### [See it in work here](https://vbalazs23.github.io/password-generator/)
This project is based on a challenge from [Frontend Mentor](https://www.frontendmentor.io/).<br> 
Link to the original challenge -> [Click Me](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh)<br>
I've integrated all the functionalities required by the brief and tried to make it look as close as possible to the design.
### Why was this project interesting? / The things it taught me
- First I decided to come up with a solution to the functionality. I used vanilla JS. I had to come up with a solution to include all the user selected character types in the generated password(at least one from each selected category). Then I had to generate the remaining characters randomly from the same character set. But then came the problem that the generated passwords were too predictable. Uppercase characters first then lowercase and so on. So I wanted to mix the generated password up and for that purpose I included the Fisher-Yates algorythm to my code.
- Now that I had the functionality sorted I had to work on the design. Honestly it proved to be a bit more time-consuming than I expected. I used vanilla CSS.<br>
For the layout I used purely flexbox as it got the job done. The main challenges to solve were the custom slider (for selecting length), implementing a system to rate the compiled password (turned back to JS here) and the custom checkboxes. 
- There were a lot of small details in this project that needed to be taken care of. All in all it was a very nice and rewarding experience. 
