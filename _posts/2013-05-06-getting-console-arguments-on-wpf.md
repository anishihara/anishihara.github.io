---
layout: post
title:  "Getting console arguments on WPF"
date:   2015-05-06 12:00:00 
categories: csharp, wpf
---

Remove the following from the **App.xaml**:
```xml
StartupUri="MainWindow.xaml"
```

Use the following snippet on **App.xaml.cs**:

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
		string FirstArgument = e.Args[0].ToString();
		string SecondArgument = e.Args[1].ToString();
	}
}
```

Resource:

* [WPF Command Line - StackOverflow](http://stackoverflow.com/questions/426421/wpf-command-line)

