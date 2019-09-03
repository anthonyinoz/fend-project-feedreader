    /* feedreader.js
    *
    * This is the Jasmine spec file for the feedreader application
    */

    /* All of the test suites and tests execute within the $() function,
    * since some of these tests require DOM elements. This ensures
    * they don't run until the DOM is ready.
    */
    $(function() {
      /* This is our first test suite - a test suite just contains
      * a related set of tests. This suite is all about the RSS
      * feeds definitions, the allFeeds variable is an array.
      */
      describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
        * allFeeds variable has been defined and that it is not
        * empty.
        */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).toBeGreaterThan(0);
        });

        /* This test loops through each feed
        * in the allFeeds object and ensures it has a URL defined
        * and that the URL is not empty or blank (all white space)
        */
        it('has each feed with a non-empty url', function() {
          for (let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
            expect(feed.url).not.toMatch(/^\s+$/);
          }
        });

        /* This test loops through each feed
        * in the allFeeds object and ensures it has a name defined
        * and that the name is not empty or blank.
        */
        it('has each feed with a non-empty name', function() {
          for (let feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
            expect(feed.name).not.toMatch(/^\s+$/);
          }
        });
      });

      // This test suite exercises the menu element which is hidden using
      // the css rule that moves the menu off-screen when the body element has a class value
      // of 'menu-hidden'
      //
      describe('The menu', function() {
        /* This test ensures that the menu element is
        * hidden by default on page load
        */
        it('is hidden by default', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test confirms that the menu visibility toggles
        * when the menu icon is clicked.
        */
        it('visibility is toggled when menu icon is clicked', function() {
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(false);
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

        /* This test suite verifies the initial loading of feeds on
        * page load.  Initially the first RSS Feed in allFeeds[0] is loaded
        */
        describe('Initial Entries', function() {
          /* This test ensures that the call to the loadFeed
          * function results in at least a single .entry element within the .feed container.
          * Since loadFeed() is asynchronous the Jasmine beforeEach is used using the done function
          * as a callback. The beoreEach will execute and complete before the spec is executed.
          */
          beforeEach(function (done) {
            loadFeed(0, done);
          });

          it('contain at least one entry in the feed container', function() {
            expect($(".feed .entry h2").length).toBeGreaterThan(0);
          });
        });

        /* The "New Feed Selection" test suite  verifies that new feeds are loaded
        * whenever a new RSS feed is selected. The different RSS Feeds are loaded by calling
        * the loadFeed function with the appropriate index parameter
        */
        describe('New Feed Selection', function() {
            /* This test that ensures when a new feed is loaded (i.e with different index parameter)
             * the feed content actually changes. Since the loadFeed function is asynchronous
             * the Jasmine beforeEach function is utilised with the done function as a callback.
             * done() will be executed only when the feeds loads have been completed.
             */
             let content1;
             let content2;

             beforeEach(function (done)  {
               loadFeed(0, function() {
                  content1 = $('.feed').html();
                  loadFeed(3, function() {
                    content2 = $('.feed').html();
                    done();
                  });
               });
             });

             it('results in content changes', function() {
               expect(content1 === content2).not.toBe(true);
            });
         });
      }());
