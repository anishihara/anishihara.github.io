---
layout: post
title:  "Application URI protocol on Windows"
date:   2015-01-03 12:00:00 
categories: windows
---

There is a feature that we can use to make links on browser that can open specific applications registered to that kind of uri. For example, if you want to open itunes from the safari browser on a Mac, just type **[itmss://](itmss://)** on the address and hit enter.

If you want to do this on Windows, you need to register an application URI on the *register*. Programatically, you can do this using the following snippet in C#:

```csharp
RegistryKey key = Registry.ClassesRoot.OpenSubKey("appurltest");  //open appurltest subkey
if (key == null)  // checks if the protocol is already registered
{
    key = Registry.ClassesRoot.CreateSubKey("appurltest");
    key.SetValue(string.Empty, "URL: appurltest Protocol");
    key.SetValue("URL Protocol", string.Empty);
    key = key.CreateSubKey(@"shell\open\command");
    key.SetValue(string.Empty, myAppPath + " " + "%1");
    //%1 is the argument that will be passed to the application
}
key.Close();
```
    
After registered, you can open the app with a [link like this one](appurltest:Testing!).

[Simple example code on Github](https://github.com/anishihara/app_uri_on_windows).

##Resources:

* [Registering an Application to a URI Scheme - MSDN](http://msdn.microsoft.com/en-us/library/ie/aa767914(v=vs.85).aspx)
* [C# Register a Url Protocol](http://www.codingvision.net/miscellaneous/c-register-a-url-protocol)
* [Custom URL Protocol for Invoking Application - CodeProject](http://www.codeproject.com/Articles/332206/Custom-URL-Protocol-for-Invoking-Application)



            