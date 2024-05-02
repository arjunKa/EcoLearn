# EcoLearn - Carbon Calculator

[Link to Web App.](https://delightful-sky-0f5eaf70f.5.azurestaticapps.net)

## Tools
React + Vite + Django + Azure PostgreSQL


## Install
List of Install instructions
### WordPress
To install in wordpress, you must build the front end project using npm and then upload the build artifacts to your web server. <br><br>
Here are some instructions to provide details: https://javascript.plainenglish.io/how-to-embed-a-react-app-inside-a-wordpress-website-923e0af0ea00 <br><br>
To do the steps laid out in the instructions in the url provided, you would go into the 'frontend' folder of this repository and run "npm run build". This will generate a 'dist' folder that has the build artifacts in it. The contents of this folder is what you will upload into you web server using FTP, SSH, or however you web server is set up for WordPress.
<br><br>
After the app is added to your web server, you can Embed the app into a web WordPress webpage. Or, you can create a hyperlink to the build folder directly to get the full-page app experience, e.g. https://yourwebsite.com/apps/my-app-build