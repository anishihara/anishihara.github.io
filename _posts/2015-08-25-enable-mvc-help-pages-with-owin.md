---
layout: post
title:  "Enable .net MVC Help Pages with OWIN and Katana"
date:   2015-08-25 00:18:23 
categories: csharp
comments: True
description: This article shows how to enable .net MVC Help pages to work with OWIN and Katana.
---

I was having a problem when developing a Web Api 2 project with Owin: help page were not generated as I expected. I followed the tutorial [Creating Help Pages for ASP.NET Web API](http://www.asp.net/web-api/overview/getting-started-with-aspnet-web-api/creating-api-help-pages) and yet, it was missing something to get it working with OWIN and KATANA.

Searching through the internet I found this answer on StackOverflow: [Can't get ASP.NET Web API 2 Help pages working when using Owin](http://stackoverflow.com/questions/18921215/cant-get-asp-net-web-api-2-help-pages-working-when-using-owin).

The solution is simple:

* On OWIN *Startup.cs* or equivalent file, expose `HttpConfiguration` and register the help page area with  `AreaRegistration.RegisterAllAreas()`:

   ```csharp
   public class Startup 
   { 
       public static HttpConfiguration HttpConfiguration { get; private set; } 
       public void Configuration(IAppBuilder app) 
       { 
           HttpConfiguration = new HttpConfiguration();
    	   AreaRegistration.RegisterAllAreas(); 
    	   WebApiConfig.Register(HttpConfiguration);
    	   app.UseWebApi(HttpConfiguration); 
        } 
   } 
   ```

* Replace all the `GlobalConfiguration.Configuration` with `Startup.HttpConfiguration`, in my case, only in `HelpPageAreaRegistration.RegisterArea` and in `HelpController` constructor.