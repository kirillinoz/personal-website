---
title: Dynamic Twitter Banner
description: As you might know, Twitter has a large developer community which often makes use of a powerful tool Twitter is providing them with. I'm talking about Twitter API.
date: 2021-01-31
readtime: 2
img: https://cdn.hashnode.com/res/hashnode/image/upload/v1672031856205/41a5d59b-788e-493a-bb99-79478dd603d3.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp
---

As you might know, Twitter has a large developer community which often makes use of a powerful tool Twitter is providing them with. I'm talking about Twitter API. Just by browsing through Twitter you can find a ton of bots and services which make use of this API. Another popular use-case that you can encounter are follower counts. They can be integrated into name, bio or banner of your profile. But they often look identical and boring - just some plain numbers.

I was very interested in this type of project but I wanted to do something different, something more interesting.

That's when I came up with the idea of a moving object which could represent my followers count. By adding some details and a story to it we get:

> "Gary the Snail who is hungry and wants to get to some food at the end of the road."

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/9iroybv5pog6yahs6zet.jpg)

_So... how did I do it? How can you make your own version and what tools do you need?_

### Here are the 5 main steps:

1. Get the tokens for your app on [Twitter's developer page](https://developer.twitter.com/).

2. Use a library/add-on/module for Twitter integration. I've used [Twitter Lite](https://www.npmjs.com/package/twitter-lite) for NodeJS. But there are also other possibilities.

-   Setup the authentication and check for the available endpoints ([docs](https://developer.twitter.com/en/docs/api-reference-index)).

3. Create your design for the banner using photo-editing software, I used Photoshop but you can use paintNET, GIMP, etc. Don't forget to subdivide your design into different layers and export them separately.

_Example:_

![Different Parts](https://dev-to-uploads.s3.amazonaws.com/i/8yb3h01lpw65ls5ch24p.png)

4. Now it's time to get the followers count, create a single image out of the three above and update the profile banner:

-   Fetch the follower count using one of the two APIs: [GET followers/ids](https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids) or [GET users/show](https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show)

-   Use [Merge Images](https://www.npmjs.com/package/merge-images) for NodeJS to merge the images in the right place. You'll probably need the scale function to map the moving object on top of the background. Here is a JavaScript example:

![Code Snippet](https://dev-to-uploads.s3.amazonaws.com/i/j5lb33k6xiyxr55vcxsu.png)

-   To update the profile banner you should use [POST account/update_profile_banner](https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_banner) by sending the new Banner as a base64 format.

5. Using a cron job you can repeat all the steps above in a specific duration you like.

That's how I integrated a followers count in my profile banner. If you want to see it in action, you can check my [Twitter profile](https://twitter.com/Inkuantum).

If you're stuck or you want to use exactly the same version, I uploaded the source code to my [GitHub page](https://github.com/Inkuantum).

This project was inspired by [Suren's post](https://dev.to/radnerus/twitter-api-is-followers-count-mda).
