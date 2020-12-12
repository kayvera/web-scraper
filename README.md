# Node.js Multi-Level URL Web Scraper

This scraper will allow a user to input a URL and will check that this URL is valid before continuing on. The scraper will then create a queue of URLs and then scrape each of those URLs and push each of those into an array. The URL and array of URLs then makes a new object in a loop and the whole list is then exported to a JSON file.

## Features

  -Validates that entered url is actually a url
  -Includes catch statement with more detailed error response for easier debugging
  -Writes all output to data.json file which can be exported to DB
  -Checks to make sure URLs dont have forward slash at end of them for cleaner JSON
  -Validates that there are no duplicate links
  -Gathers relative links from URL queue created in getURLs but easy to switch to absolute links depending on need, just change selector statement don't include baseURL param in uniqueLinkChecker() function

## Requirements

  For development, you will only need Node.js installed on machine and npm

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

  #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

  If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.16.1

    $ npm --version
    6.14.4

If you need to update `npm`, you can make it using `npm`! 

    $ npm install npm -g


## Installation

  -Extract file from Zip folder
  -Open project in code editor
  -Run $npm install

## Run project

    $npm start

## Time it took

13 hrs

## Areas to improve

  -Improve speed on larger sites like reddit.com
  -Create tree link data structure with caching
  -Check for security
  -Include ability to login to website
  -Include absolute links
  -Test for crawler trap
  -Try headless browser library like puppeteer
  -Create test cases that involve user command line input

## Sample output from default

```
  {
    "sites": [
        {
            "url": "http://books.toscrape.com"
        },
        {
            "url": "http://quotes.toscrape.com",
            "links": [
                "http://quotes.toscrape.com/",
                "http://quotes.toscrape.com/login",
                "http://quotes.toscrape.com/author/Albert-Einstein",
                "http://quotes.toscrape.com/tag/change/page/1/",
                "http://quotes.toscrape.com/tag/deep-thoughts/page/1/",
                "http://quotes.toscrape.com/tag/thinking/page/1/",
                "http://quotes.toscrape.com/tag/world/page/1/",
                "http://quotes.toscrape.com/author/J-K-Rowling",
                "http://quotes.toscrape.com/tag/abilities/page/1/",
                "http://quotes.toscrape.com/tag/choices/page/1/",
                "http://quotes.toscrape.com/author/Albert-Einstein",
                "http://quotes.toscrape.com/tag/inspirational/page/1/",
                "http://quotes.toscrape.com/tag/life/page/1/",
                "http://quotes.toscrape.com/tag/live/page/1/",
                "http://quotes.toscrape.com/tag/miracle/page/1/",
                "http://quotes.toscrape.com/tag/miracles/page/1/",
                "http://quotes.toscrape.com/author/Jane-Austen",
                "http://quotes.toscrape.com/tag/aliteracy/page/1/",
                "http://quotes.toscrape.com/tag/books/page/1/",
                "http://quotes.toscrape.com/tag/classic/page/1/",
                "http://quotes.toscrape.com/tag/humor/page/1/",
                "http://quotes.toscrape.com/author/Marilyn-Monroe",
                "http://quotes.toscrape.com/tag/be-yourself/page/1/",
                "http://quotes.toscrape.com/tag/inspirational/page/1/",
                "http://quotes.toscrape.com/author/Albert-Einstein",
                "http://quotes.toscrape.com/tag/adulthood/page/1/",
                "http://quotes.toscrape.com/tag/success/page/1/",
                "http://quotes.toscrape.com/tag/value/page/1/",
                "http://quotes.toscrape.com/author/Andre-Gide",
                "http://quotes.toscrape.com/tag/life/page/1/",
                "http://quotes.toscrape.com/tag/love/page/1/",
                "http://quotes.toscrape.com/author/Thomas-A-Edison",
                "http://quotes.toscrape.com/tag/edison/page/1/",
                "http://quotes.toscrape.com/tag/failure/page/1/",
                "http://quotes.toscrape.com/tag/inspirational/page/1/",
                "http://quotes.toscrape.com/tag/paraphrased/page/1/",
                "http://quotes.toscrape.com/author/Eleanor-Roosevelt",
                "http://quotes.toscrape.com/tag/misattributed-eleanor-roosevelt/page/1/",
                "http://quotes.toscrape.com/author/Steve-Martin",
                "http://quotes.toscrape.com/tag/humor/page/1/",
                "http://quotes.toscrape.com/tag/obvious/page/1/",
                "http://quotes.toscrape.com/tag/simile/page/1/",
                "http://quotes.toscrape.com/page/2/",
                "http://quotes.toscrape.com/tag/love/",
                "http://quotes.toscrape.com/tag/inspirational/",
                "http://quotes.toscrape.com/tag/life/",
                "http://quotes.toscrape.com/tag/humor/",
                "http://quotes.toscrape.com/tag/books/",
                "http://quotes.toscrape.com/tag/reading/",
                "http://quotes.toscrape.com/tag/friendship/",
                "http://quotes.toscrape.com/tag/friends/",
                "http://quotes.toscrape.com/tag/truth/",
                "http://quotes.toscrape.com/tag/simile/"
            ]
        },
        {
            "url": "http://quotes.toscrape.com/scroll",
            "links": [
                "http://quotes.toscrape.com/scroll/",
                "http://quotes.toscrape.com/scroll/login"
            ]
        },
        {
            "url": "http://quotes.toscrape.com/js",
            "links": [
                "http://quotes.toscrape.com/js/",
                "http://quotes.toscrape.com/js/login",
                "http://quotes.toscrape.com/js/js/page/2/"
            ]
        },
        {
            "url": "http://quotes.toscrape.com/js-delayed",
            "links": [
                "http://quotes.toscrape.com/js-delayed/",
                "http://quotes.toscrape.com/js-delayed/login",
                "http://quotes.toscrape.com/js-delayed/js-delayed/page/2/"
            ]
        },
        {
            "url": "http://quotes.toscrape.com/tableful",
            "links": [
                "http://quotes.toscrape.com/tableful/",
                "http://quotes.toscrape.com/tableful/login",
                "http://quotes.toscrape.com/tableful/tableful/tag/love/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/inspirational/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/life/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/humor/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/books/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/reading/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/friendship/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/friends/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/truth/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/simile/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/change/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/deep-thoughts/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/thinking/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/world/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/abilities/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/choices/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/inspirational/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/life/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/live/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/miracle/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/miracles/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/aliteracy/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/books/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/classic/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/humor/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/be-yourself/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/inspirational/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/adulthood/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/success/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/value/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/life/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/love/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/edison/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/failure/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/inspirational/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/paraphrased/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/misattributed-eleanor-roosevelt/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/humor/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/obvious/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/tag/simile/page/1/",
                "http://quotes.toscrape.com/tableful/tableful/page/2/"
            ]
        },
        {
            "url": "http://quotes.toscrape.com/login",
            "links": [
                "http://quotes.toscrape.com/login/",
                "http://quotes.toscrape.com/login/login"
            ]
        },
        {
            "url": "http://quotes.toscrape.com/search.aspx",
            "links": [
                "http://quotes.toscrape.com/search.aspx/",
                "http://quotes.toscrape.com/search.aspx/login"
            ]
        },
        {
            "url": "http://quotes.toscrape.com/random",
            "links": [
                "http://quotes.toscrape.com/random/",
                "http://quotes.toscrape.com/random/login",
                "http://quotes.toscrape.com/random/author/Marilyn-Monroe",
                "http://quotes.toscrape.com/random/tag/friends/page/1/",
                "http://quotes.toscrape.com/random/tag/heartbreak/page/1/",
                "http://quotes.toscrape.com/random/tag/inspirational/page/1/",
                "http://quotes.toscrape.com/random/tag/life/page/1/",
                "http://quotes.toscrape.com/random/tag/love/page/1/",
                "http://quotes.toscrape.com/random/tag/sisters/page/1/"
            ]
        }
    ]
}
```