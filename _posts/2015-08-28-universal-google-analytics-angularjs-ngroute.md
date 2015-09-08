---
layout: post
title:  "Universal Google Analytics (universal.js) with AngularJS and ngRoute"
date:   2015-08-28 09:00:00 
categories: javascript
comments: True
---

I was researching for a way to track user data with Google Analytics on an AngularJS application and found this article: [Google Analytics and AngularJS with UI Router](http://www.arnaldocapo.com/blog/post/google-analytics-and-angularjs-with-ui-router/72).

To make Google Universal Analytics work with AngularJS and ngRoute I had to make a little modification to get the `$routeChangeSuccess` event instead of `$stateChangeSuccess`:

```javascript
    angular.module('App', []).run(['$rootScope', '$location', '$window', 
        function ($rootScope, $location, $window) {
            $rootScope.$on('$routeChangeSuccess',function (event) {
                if (!$window.ga)return;
                $window.ga('send', 'pageview', { page: $location.path() });
        });
    }]);
```

**PS**: Don´t forget to add the code given by Google on *index.html* and comment `ga('send', 'pageview');` to stop firing Google Analytics when loading the page for the first time.
