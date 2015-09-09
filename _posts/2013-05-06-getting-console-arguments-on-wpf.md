---
layout: post
title:  "Getting console arguments on WPF"
date:   2015-05-06 12:00:00 
categories: csharp
comments: True
description: Simple snippet in csharp (c#) to get console arguments from a WPF application.
sitemap:
  lastmod: 2015-09-09
  priority: 0.4
  changefreq: monthly
  exclude: yes
---

To get console arguments on applications developed with WPF framework it is needed some small modifications on **App.xaml** and **App.xaml.cs** files.

First, remove the following from the **App.xaml**:
```xml
StartupUri="MainWindow.xaml"
```

Then, use the following snippet on **App.xaml.cs**:

```csharp
protected override void OnStartup(StartupEventArgs e)
{
	MainWindow WindowToDisplay = new MainWindow();

	if (e.Args.Length == 0)
	{
		WindowToDisplay.Show();
	}	
	else
	{
		string firstArgument = e.Args[0].ToString();
		string secondArgument = e.Args[1].ToString();
		// third ...
	}
}
```

Resource:

* [WPF Command Line - StackOverflow](http://stackoverflow.com/questions/426421/wpf-command-line)

