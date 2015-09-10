---
layout: post
title:  "How to improve OpenCV performance on lens undistortion from a video feed"
date:   2015-09-03 09:00:00 
categories: opencv
comments: True
description: This article shows how to improve OpenCV performance for lens undistortion on iPad or iPhone reusing computed maps.
sitemap:
  lastmod: 2015-09-09
  priority: 0.5
  changefreq: monthly
---

Currently, for my master's dissertation, I am developing a software for IOS (iPad) which uses OpenCV to process images. 
On this project I am using a simple fisheye lens which is attached in front of the iPad´s back camera. As I need to process images without the lens distortion, 
I calibrated the camera and used the `cv::undistort` method from OpenCV on each new video frame. The framerate dropped a lot due to the `cv::undistort`.

Reading from the [OpenCV documentation](http://docs.opencv.org/3.0.0/da/d54/group__imgproc__transform.html#ga69f2545a8b62a6b0fc2ee060dc30559d) I discovered that 
the `cv::undistort` method was using a combination of [cv::initUndistortRectifyMap](http://docs.opencv.org/3.0.0/da/d54/group__imgproc__transform.html#ga7dfb72c9cf9780a347fbe3d1c47e5d5a) 
and [cv::remap](http://docs.opencv.org/3.0.0/da/d54/group__imgproc__transform.html#gab75ef31ce5cdfb5c44b6da5f3b908ea4). The `cv::initUndistortRectifyMap` is an expensive
method which was being called on each frame and didn´t change as the camera parameters were fixed.

To improve the OpenCV performance, I simply cached the *map results* from `cv::initUndistortRectifyMap` and called `cv::remap` with the cached results:

```c++
cv::Mat map1, map2;

// Do this once after camera calibration
// Particularly, on IOS, try to do this initialization on viewDidLoad
// After this initialization, cache the map1 and map2
cv::initUndistortRectifyMap(intrinsic_Matrix, distortion_coeffs, Mat_<double>::eye(3,3), intrinsic_Matrix, cv::Size(1280,720), CV_16SC2, map1, map2 );
	
//..

// On -(void)processImage:(cv::Mat&)image, reuse the initialized map1 and map2
cv::Mat tmp = image.clone();
cv::remap(tmp, image, map1, map2, INTER_LINEAR, BORDER_CONSTANT);
```