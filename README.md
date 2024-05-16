
## Install
List of Install instructions.
### WordPress
To install in wordpress, you must build the front end project using npm and then upload the build artifacts to your web server. <br>
<em><strong>These are instructions that provide all the details of what needs to be done (follow step 2 onwards): </em></strong>  https://javascript.plainenglish.io/how-to-embed-a-react-app-inside-a-wordpress-website-923e0af0ea00 <br>

#### Some Additional details for the steps:
Before doing the steps laid out in the instructions in the url above, there are some preliminary information. The instructions mention using the build folder. We must generate this build folder ourselves. Steps to do this:<br>

* clone the git repository if not done already
* go into the 'frontend' folder of this repository and run "npm run build". After running, this will generate a 'dist' folder that has the build artifacts in it. (The contents of this folder is what you will upload into you web server using FTP, SSH, or however you web server is set up for WordPress, as mentioned in the steps in the url.)
* You can follow with the steps in the url now
<!-- end of the list -->

Note: After the app is added to your web server, you can Embed the app into a web WordPress webpage. Or, you can create a hyperlink to the build folder directly to get the full-page app experience, e.g. https://yourwebsite.com/apps/my-app-build

## Details of the App
Each calculator is broken down in the 'src/components/calculators' folder. In each folder there is a data.json file which contains all the data used in the calculation and this is pulled from by each calculator.