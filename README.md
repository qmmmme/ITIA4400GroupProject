# ITIA4440GroupProject
The team at GOGO is dedicated to making fitness easy. We created an online space
				where you can access all of your fitness needs in ONE location. We believe, any movement
				is good movement!<br>
    
We could only make the firebase hosting work but not the firebase authentication because we are using simple HTML, CSS, and JS
that would not approriate with the firebase authentication setup (we tried many ways to construct the signin page via youtube video,
and the google firebase site, and TA help).

Also, with the big size of the node_modules when installing firebase that restrict us from commit every subfolders and files in the node_modules folders. So when you pull the project, you should install npm, install firebase CLI via command "npm install -g firebase-tools", then "firebase login", "firebase init", and "firebase deploy" for fully functioning the firebase hosting. 

So, when you land on the index(sign-in) page, you have to enter a username and password, then click the login button that redirect to the homepage of GOGO app
Link to the website: https://gogo-43911.web.app/
