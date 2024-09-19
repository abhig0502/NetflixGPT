# NetflixGPT

-Create React App
-Configured TailwindCSS
-Header
-Routing of App
-Login Form
-Sign up Form
-Form Validation
-useRef Hook 
-Firebase Setup    
    -first install cli tools(npm install -g firebase-tools)
    -second login to firebase (firebase login)   (used username-abhig0502 password-Sainath(wala))
    -third step is to initialize firebase (firebase init) it will create a firebase config for us
        -choose-> hosting : configure files for hosting and (optionally) setup github action deploys
        -choose-> use existing project
        -choose the project you want to host
        now it will ask few questions
        -what do you want to use as your public directory?
            type-(build)
        now it will ask two more questions just type no if you dont want to 

-Deploying our app to production 
-Create a signup user account
-Implement Sign in user Api
-Created out Store with userSlice

-will update the profile but why as we have added the user to the store it should automatically got updated (do we need to update the state also for the backend?)
-BugFix: if the user is not logged in Redirect /browse to login page or vice-versa

question why are we unsubscribing the onauthstatechanged (20:07)
-added hardcoded values to the constants file
-Registerd TMDB API and create an app and get access token
-get data from TMDB now playing movies list API

# app.js
 - created router configrations
  - signin page
    -background image
        -header
            -icon
            -sign in button
                -onclick it will open a modal and it will come over the body
        -body
            -modal will get created(onclick) (new signin modal component)
                -username
                -password
                -sign in button
                    -the info get stored on the local browser storage
                    -redirect to the home page
            -heading stuff

-homepage
    -logo
    -navItems
    -search
    -username
    -logout
        -delete user data
        -redirect to sigin in page
