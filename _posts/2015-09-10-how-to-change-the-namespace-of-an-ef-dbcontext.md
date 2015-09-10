---
layout: post
title:  "How to change the namespace of an Entity Framework (EF) DbContext on Asp.Net"
date:   2015-09-10 09:00:00 
categories: entityframework
comments: True
description: This article shows how to change the namespace of a DbContext when using Entity Framework (EF) and Migrations is enabled. There some common exceptions thrown when you do this, as 'Failed to set database initializer of type 'System.Data.Entity.MigrateDatabaseToLatestVersion'.'.
sitemap:
  lastmod: 2015-09-10
  priority: 0.5
  changefreq: monthly
---

Sometimes you need to change the namespace of a project due to refactoring or project name change. When you are working with Entity Framewok DBContext on Code First approach and Migrations enabled, if you change the namespace it may be thrown some exceptions, like `There is already an object named '[name of object]' in the database.` and `Failed to set database initializer of type 'System.Data.Entity.MigrateDatabaseToLatestVersion.`.

There are some steps you have to make when changing the namespace of DBContext on an existing database:

1.  Set the `ContextKey` on `DbMigrationsConfiguration`;
2.  Update the `ContextKey` column on `_MigrationHistory` table of the database.


The EF default `ContextKey` with *Migrations* enabled is the class which inherits **DBContext** plus its namespace , i.e, if your namespace is `MyMusicStore.Models` and the class which inherits **DBContext** is `MusicContext`, then its default `ContextKey` is `MyMusicStore.Models.MusicContext`.

This same `ContextKey` is used on database´s `_MigrationHistory` table to track changes on your models.

When you change the namespace, you change the `ContextKey` together, therefore, on the first call to **DBContext** the `ContextKey` from the application will not match the `ContextKey` column from the Database and it will throw an exception.

## Set the ContextKey on DbMgrationsConfiguration

If you are using the default DbMigrationsConfiguration, set the `ContextKey` as follows:


```csharp
DbMigrationsConfiguration config = new DbMigrationsConfiguration();
config.ContextKey = "MyMusicStore.Models.MusicContext";
Database.SetInitializer(new MigrateDatabaseToLatestVersion<MusicContext,config>());
```

Particurlarly, if your setup includes **Owin** + **EntityFramework**, add the above code on `Configuration` method from the `OwinStartup` class.

## Update the `ContextKey` column on `_MigrationHistory` table of the database

Connect to the SQL Server Database and update the `ContextKey` column from the `_MigrationHistory` table, as follows:

```sql
UPDATE [dbo].[__MigrationHistory]
   SET [ContextKey] = 'MyMusicStore.Models.MusicContext'
 WHERE [ContextKey] = 'MyOldNamespace.MusicContext'
GO
```

## Summary

If you change the *Entity Framework DbContext* namespace make sure that the `ContextKey` from the `DbMigrationsConfiguration` and `_MigrationHistory` table are the same.

Resource:

* [DbMigrationsConfiguration.ContextKey documentation](https://msdn.microsoft.com/en-us/library/system.data.entity.migrations.dbmigrationsconfiguration.contextkey(v=vs.113).aspx)