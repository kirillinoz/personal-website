---
title: Web Scraping with Puppeteer
description: Internet is a wide place full of information. Here you can find everything from cute kitten videos up to scientific researches. This information isn't only useful to us, but it could become vital for our websites and applications.
date: 2021-05-25
readtime: 5
img: https://cdn.hashnode.com/res/hashnode/image/upload/v1672031924872/1250ef46-cc69-42de-b5b7-7acbc2782588.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp
---

Internet is a wide place full of information. Here you can find everything from cute kitten videos up to scientific researches. This information isn't only useful to us, but it could become vital for our websites and applications.

There are a few ways to access the necessary data, Rest APIs, public databases and web scraping. Puppeteer is an awesome tool for getting the last one done. In this post, I want to help you discover this tool for yourself and show you what it's capable of.

Let's get the first question out of the way.

### What is Puppeteer?

> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.

That's what the official documentation says. Complicated isn't it? In simpler terms, we're dealing with an invisible browser which is controlled via code.

### Show me the way!

After installing the Puppeteer NPM package, you'll have to write some code and show Puppeteer where and which information you would like to get.

Note that most of Puppeteer's methods are asynchronous, so you'll have to use an **async function** or **then method**. For upcoming examples, I'll stick to the first one.

### Let's get some data!

I think that the best method to learn something new is by practicing. So let's take an example for web scraping with Puppeteer and break it down. I'll try to explain every step as best as I can. But if you're stuck or you want to find out more about a specific method, I encourage you to check out the official [documentation](https://pptr.dev/).

For starters, we need to check if the website allows web scraping at all. For this, we will check if the website contains a **robot.txt** file. If not, we are good to go. Otherwise, you'll see which restrictions are placed by the owner of the website.

In this example we will be scraping some data from the official [English Premier League](https://www.premierleague.com/stats/top/players/goals) website, to be more precise, a table of football players and their total amount of goals per season.

With the following code we will launch our browser with a predefined viewport. And navigate to the website while leaving some time for all components to load at the end of the code.

> Note: websites may differ according to the client's viewport that's why it's important to predefine it.

```javascript
const viewport = { defaultViewport: { width: 1430, height: 979 } }
const browser = await puppeteer.launch(viewport)
const page = await browser.newPage()
await page.goto('https://www.premierleague.com/stats/top/players/goals')
await page.waitForTimeout(3000)
```

Now let's scrape the table we're seeing on the website. For that, we will use **$$eval** to find all the table components using HTML elements as the selector and then getting the **innerText** in each of the selected elements.

```javascript
//'tbody tr td' - selector
let tableEls = await page.$$eval('tbody tr td', (tds) =>
    tds.map((td) => {
        return td.innerText
    })
)
```

Now we just have an array filled up with all the strings that we could find in the table. We have empty strings and unnecessary spacing. We should also split this array into smaller arrays containing the data for each individual player and then create an object out of each array to make it easier to read and access for the front-end.

```javascript
//Modifications
tableEls = tableEls.map((el) => el.trim())
tableEls = tableEls.filter((el) => el)
tableEls = chunkArray(tableEls, 5)
tableEls = tableEls.map((el) => el.slice(1))
//Final Arr To Save
let seasonData = []
//Create an object
tableEls.map((el) => {
    let obj = {
        id: nextID,
        name: el[0],
        team: el[1],
        country: el[2],
        goals: +el[3],
    }
    nextID++
    seasonData.push(obj)
})

// Close the browser at the end of your session
await browser.close()
```

### Let's get some images!

Now that we've collected our data about each and every footballer in the table, we could also use some images of each football player. The website, we were currently on, doesn't provide us with any photos, so let's start a new session and go to the well-known website which finds billions of photos across the whole internet. I'm talking about **Google Images**.

First, we start a new session and open a new page. Then we use the array **seasonData** to get the name of each footballer. The name needs some adjustment because we will pass it into an URL and any space has to be replaced with **+**. Afterwards we will need to select the first image on the page. This can be done using **XPath** which gives the shortest unique path to every element on a website. Then we select our element and get the image URL. In the end, we should add it as a property to our player object.

```javascript
for (let i = 0; i < seasonData.length; i++) {
    let obj = seasonData[i]
    const search = obj.name.replace(/\//g, '+')
    await page.goto(`https://www.google.com/search?tbm=isch&q=${search}`)

    const imageSelect = '//*[@id="islrg"]/div[1]/div[1]/a[1]/div[1]/img'
    await page.waitForXPath(imageSelect)
    const image = await page.$x(imageSelect)
    let imageSrc = await page.evaluate((img) => img.src, image[0])

    obj.imageURL = imageSrc
}
```

Now using Node's file system we can save our **seasonData** array to a JSON file, pass the data to the front-end or create a Rest API.

### More possibilities

This example is just the tip of the iceberg. You can do other things with the Puppeteer library such as interact with elements, take screenshots and more. If you want to find out more about it, check out the official [documentation](https://pptr.dev/).

I hope I could waken interest in you to learn more about this awesome JavaScript library.

Thank you for your time! ❤
