---
title: Ukulele with CSS
description: If you follow me on Twitter, you would probably know that I'm passionately learning to play ukulele. I always loved to listen to music but I was never interested in learning to play an instrument or even thinking of creating my own music.
date: 2021-04-08
readtime: 3
img: https://cdn.hashnode.com/res/hashnode/image/upload/v1672032105708/a331ec31-6934-46ec-adb4-fd693aa5e448.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp
---

If you follow me on Twitter, you would probably know that I'm passionately learning to play ukulele. I always loved to listen to music but I was never interested in learning to play an instrument or even thinking of creating my own music. But that changed in the recent years and now I'm a proud owner of an ukulele.

Another thing that I really wanted to try out for a long time is CSS art. I saw a lot of beautiful art pieces on Twitter and they really inspired me to create my own. That's how I combined programming and music in this art piece.

## HTML & CSS

### Body

First I created the body of the ukulele using a div and pseudo-elements (after and before).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/95l689vbtknv8xyx15j4.png)

### Bridge & Saddle

Before adding the neck, I've added a bridge at the bottom of the body. Using a pseudo-element I also added a saddle on top of the bridge where the strings are going to end.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1dtfog0pw17kn8lc8r7m.png)

### Neck

Up next we have the neck of ukulele. It's a simple rectangular div.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2qsoks4sj6ud5o41v9ao.png)

### Headstock

After creating the neck it was time to put the headstock on top. In this case the pseudo elements are just purple circles which give ukulele's headstock an interesting shape.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aa62mq8r73776mp699ps.png)

### Tuning pegs

Now it was time to add the other end called turning pegs where the strings are going to be attached. I decided to split them into two rows with a pair in each row. Like that I could position them relative to each other.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x7fkdb9ox67hdqfo6gvz.png)

### Turners

With the same method as mentioned before, I added the turners themselves.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eoa66t0ksl4gzrr5c8wv.png)

### Strings

Now let's add the most important part the strings. Again positioned relative to each other but absolute in the global container. These are positioned exactly between the saddle and the nut.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3fd6mw7wz8tphsni8n4j.png)

### Nut

Not a lot to say about the nut, just a div positioned absolute in the global container.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/di94doec40g4ve6obb6m.png)

### Rest of the strings

The part that took me the longest, I reckon. These are placed in a separate container. In this container they are placed absolute and under a specific angle, so they barely touch the pegs.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/spwzxkfdau5vwmod0mc5.png)

### Frets

A lot of divs positioned relative to each other and absolute in the global container.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0aacf9fn8eu7mkfzxw14.png)

## Animation and Audio

Now let's bring the whole thing to life with some animations and sounds. At first I wanted to make the strings realistic that means the animation would start at the point of interaction. But that would be too much effort for a project like this. So I went with a very simple animation in which the string would just move from side to side but get less momentum.

For the sounds I took my ukulele and my phone. I recorded each string separately and assigned each audio to each string.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6x6yida5s3g3urfi7yow.png)

If you want to try out the audio and animation, I made a separate [website](http://ukulele-css.netlify.app/) for this CSS art (desktop only).

If you want to use this art (with appropriate reference 😉), feel free to check it out on [CodePen](https://codepen.io/inkuantum/pen/XWpKNOz).

Thank you for your time! ❤
