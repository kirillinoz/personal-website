---
title: Stealing Coin Cat with CSS
description: In this article, I'm going to break down my thoughts behind the “Stealing Coin Cat” which was my submission for the Hashnode CSS Challenge organized by Nazanin Ashrafi back in January.
date: 2022-10-18
readtime: 4
img: https://cdn.hashnode.com/res/hashnode/image/upload/v1672032294836/2592b208-58a1-4c1f-87db-836c8a2a6f92.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp
---

In this article, I'm going to break down my thoughts behind the “Stealing Coin Cat” which was my submission for the Hashnode CSS Challenge organized by Nazanin Ashrafi back in January. Thanks to [#4articles4weeks](https://townhall.hashnode.com/4-articles-in-4-weeks-hashnode-writeathon) challenge that reminded me about the existence of this draft.

### Idea and inspiration

Let's kick off with the origin of the idea, my first thought was:

> “What are the greatest CSS art creations that I have seen and how would I make them different (even better if possible)?”

One of these creations that popped into my head was “[The Impossible Checkbox](https://codepen.io/jh3y/pen/LYNZwGm)” by Jhey Tompkins. I found it fascinating, funny and kind of cute how the bear reached out for the checkbox to turn it off. This reminded me of cat banks.

Cat banks are little boxes which have a button on top of them. The user puts a coin on top of the button, presses it, and a little kitten pops out of the box to steal the coin. This makes storing coins in piggy banks more exciting and cuter.

Of course, I didn't get straight to work. This was my third CSS art project and I wanted it to be different from my last two. I wanted to learn something new from this experience. After thinking about it, I came up with two big points about the “Stealing Coin Cat” that were interesting and new to me: **3D Perspective** and **Cohesive Animations**.

From there I equipped myself with an image of such a cat bank and started working on the art itself.

### Box

![1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1665815837804/Yj1TT_d8s.png)

The box is fully made of trapezoids, besides button, cover shadow or hidden elements. I was thinking pretty long on what to put at the front. I thought about putting fruits, vegetables, logos or whatsoever. In the end, I decided to simply go with “Hashnode”. The most difficult part was probably layering, because of different elements that should be hidden behind each other when animated.

### Cat

![2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1665815861578/9q2PmFkoB.png)

The cat is made of basic shapes, such as eclipses and triangles. Somehow I completely forgot to add whiskers to the cat, but it still looks decent because I wasn't going for anything hyperrealistic. At first, I didn't add any eye highlights, so the eyes of the kitten looked like void. While I was working on other elements, I constantly looked into those deep eyes and at some point I decided to come back and make it cuter by adding highlights.

### Paw and coin

![3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1665815878352/7BGmyLQlj.png)

The paw was a challenge on its own. It should be under the cardboard and then go over the cardboard, which would be a complete mess to animate. Except if you break it down into two parts, and that's what I did. The first part stretches up, the second part waits until it's finished, then it stretches down towards the coin. It was quite hard to time it precisely and make it look like the paw is stretching from inside to outside, but I think it turned out pretty well.

The coin (if you haven't noticed) represents the Hashnode logo. It was part of the competition to integrate the Hashnode logo into your art piece. At first, I wanted to put the logo at the front of the box, but at some point I realized that it looks like a coin, so I replaced the golden circle with a golden Hashnode logo.

### Animations

![4.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1665823121330/SH78PpwQH.png)

I think that's the most keyframes I have ever used. The animations aren't that special, it's only moving, rotating and stretching. As previously said, the timing was the hardest thing to implement, but after multiple tries and fails, at some point it worked fine.

Here's the result, you can check out the final code in this CodePen:

<iframe height="500" style="width: 100%;" scrolling="no" title="Stealing Coin Cat" src="https://codepen.io/inkuantum/embed/XWeoaXP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/inkuantum/pen/XWeoaXP">
  Stealing Coin Cat</a> by Kirill Inoz (<a href="https://codepen.io/inkuantum">@inkuantum</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Results

The challenge had tons of interesting submissions and winners were picked randomly. I was lucky enough to win a mug and a t-shirt, which you can see in this picture.

![FOXLlJWX0AErDQT.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1665823376414/dk3rQ8w6w.jpeg)

In the end, I learned more about **3D Perspective** and **Cohesive Animations** in CSS, which were my main goals going into this challenge.
