---
layout: post
title:  "Universal Google Analytics (universal.js) with AngularJS and ngRoute"
date:   2015-08-28 09:00:00 
categories: javascript
---

On [Universal Google Analytics documentation for Single Page Application](https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications) it is described how we can send tracking data to Google Analytics with the following snippet:

 `ga('send', 'pageview', '/new-page');`

Instead of sending data manually on each controller on AngularJS, we can can implement to send data when the event `$routeChangeSuccess` is called:
{% highlight javascript %}
    angular.module('App', []).run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
        $rootScope.$on('$routeChangeSuccess',function (event) {
            if (!$window.ga)return;
            $window.ga('send', 'pageview', { page: $location.path() });
        });
    }]);
{% endhighlight %}
**PS**: Don´t forget to add the code given by Google on *index.html* and comment `ga('send', 'pageview');`.