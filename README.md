# Udacity Front-End Development Nanodegree
## Project 4 - Feed Reader Testing

### Overview
This project has the objective of providing a suite of Jasmine tests for a web-based application that reads RSS feeds. The Jasmine specs are provided in the  **jasmine/spec/feedreader.js** file.


### Test execution

The project includes an **index.html** file that must be loaded directly in a browser to execute the test specs contained in the **jasmine/spec/feedreader.js** file.
The _Jasmine HTML_ script includes an HTML Reporter that appends the test results to the web page in a Jasmine pane. The _Options_ button in the Jasmine pane allows variations to the test execution. Tests can be re-executed by reloading the page in the browser.

### Testing asynchronous functions in the application

The application (**js/app.js**) loads the feed content for each RSS feed using the _loadFeed()_ function, which itself uses an AJAX POST request to fetch the
 feeds. Handling the asynchronous retrieval of the feeds in the Jasmine tests is achieved by using Jasmine _beforeEach_ function to to execute the _LoadFeed()_ function prior to executing the test. The _loadFeed()_ function takes a callback which is executed once the feeds have been retrieved. Using the _done()_ function as a callback allows the test to be delayed until the _loadFeed()_ function completes (either successfully or with an error).
