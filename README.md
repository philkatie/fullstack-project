# About Phantom Finders

Welcome to my very simple React/Django Application! On the front end, you can fill out a form detailing your experience with paranormal activity in your home, and see the responses of others who have submitted the form! The front end is mobile-responsive with the help of Bootstrap for styling. The backend API allows GET and POST calls. Please enjoy the following screenshots!

![form page](https://i.imgur.com/OBGx3Uh.png)
![home page](https://i.imgur.com/9b6z1nN.png)
![form page mobile view](https://i.imgur.com/0NQMzRE.png)
![home page mobile view](https://i.imgur.com/MX5FYtU.png)


# Notes
I'll go into it more below when I detail my fight with Axios, but I ended up creating 3 branches. This one, "develop", is the final one, which works. My orignal branch was "working-branch", which I ran into an issue with. I created "trying-again" intending to eventually delete it once I'd figure out an issue I was having so that no one would know I made such a silly branch name, but fate intervened and it was the branch that ended up working. I tried to hide my shame and rename it "develop" but it turns out all that actually did was create an entirely new branch. C'est la vie. You are welcome to go back through the commits on "working-branch" and "trying-again" if you'd like to watch me slowly losing my mind while fighting with Axios.

# Challenges

### Getting Started
I used to work in React (well, React-Native) every day at work, but it's been over a year since I've done a project in Python/Django. It came back to me fairly quickly, and I really love Python, but it absolutely took me a minute to get going on the back end, including but not limited to fighting with the Python version on my computer.

### Axios Hates Me
Above, I detailed a little of the Branch Saga due to my Axios issue. 

Specifically, when I was trying to connect the front end and the back end and installing corsheaders and axios, I was getting consistent permissions issues. Based on my research on StackOverflow and YouTube, I couldn't figure out what I had done wrong.

So, I branched a new branch "trying-again" from main, and redid most of what I had already done, but with a much simpler model (just name and description) so that I would be able to try and get it working more quickly. It worked! So I returned to working-branch and tried to start over on the back end, recreating everything I had just done, step by step, but with all the model fields. It did not work!

So, instead I transferred the good stuff from working-branch to trying-again, which continued to work, probably just to spite me. At some point I decided that trying-again was a bad branch name and renamed it to "develop", and the rest was history.

I think, most likely, the whole thing was ultimately an environment issue - early on in development I was switching between pip and pipenv due to my Python versioning issue, and I think I must have installed some things via pip and some things via pipenv and they didn't play nice together? Not totally sure, because I did try uninstalling and reinstalling everything in the original working-branch and no dice. Maybe there was a typo (although don't think I didn't try Straight Up Copy-Pasting Stuff). Anyway. This was by far the hardest problem to fix, and I ended up fixing it by just Doing Everything Again, But It Worked This Time. Sometimes that's life.

### CSS Persistance
I have no idea if this was because of Bootstrap trying to override what I was doing, or just because of my environment. It wasn't as bad on the last day of the project but it was a pain when I was first trying to style. I hard-reloaded my browser, axed and restarted the localhost server, and commented out and back in the style import in the individual components. Ultimately that last one was the most helpful. I'm gonna blame this one on Google Chrome for now but if I were to continue this project it would need further investigation.

### Pagination Issue
Had an issue where I was only receiving 10 objects back for the List.js view, turns out it was a pagination thing. I changed the pagination limit to 50 items in settings.py, but would probably look into a better/more robust solution in the long term. The main issue was that to map the info, I needed just response.data.results, because Django was returning info at the top of the response body indicating how many results they were - I believe this was also a pagination issue. There are likely better ways to fix this.

# Icebox
The next thing I would do is add a Detail view for each Haunting in advance of adding PUT and DELETE endpoints to allow editing and deletion of entries.

After that, I'd probably work on the mobile responsiveness. It is mobile responsive, but it's kind of messy, and I'd love for it to be sleeker and more robust.

After that, probably, error handling. I always get so excited about the silly stuff and get tempted to skip past error handling, but it should definitely be more of a priority.

Finally, I'd go through and clean up the components. There are places where I think I could streamline components and functions to make them more modular and better for scaling up.
