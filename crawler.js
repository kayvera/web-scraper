const cheerio = require('cheerio');
const axios = require('axios');
var validUrl = require('valid-url');
var chalk = require('chalk');
const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// allow user to input a url and then validate url
const requestSiteURL = async function () {
  let url = await new Promise((resolve) => {
    readline.question('Please type url: ', resolve);
  });
  let URL = 'https://toscrape.com/';
  if (validUrl.isUri(url)) {
    readline.close();
    return url;
  } else if (url.toLowerCase() === 'no') {
    url = URL;
    return url;
  } else {
    console.log(
      'Please type in a valid URL (https://toscrape.com/) or type "no" to use base url.'
    );
    return requestSiteURL();
  }
};

// grabs all urls from original link and returns array
const getURLS = async () => {
  // waits for input url to run before setting variable
  let url = await requestSiteURL();
  url = deleteFowardSlash(url);

  try {
    // pulls html from webpage
    const res = await axios.get(url);
    const data = res.data;
    const $ = cheerio.load(data);

    const urlQueue = [];

    // finds all absolute links and pushs to urlQueue array
    $("a[href^='http']").each((i, elem) => {
      let link = $(elem).attr('href');
      //checks to make sure there isnt any duplicate links in urlqueue array or forward slash
      link = deleteFowardSlash(link);
      uniqueLinkChecker(link, urlQueue);
    });
    return urlQueue;
  } catch (err) {
    console.error(err);
    return response.status(400).send(err);
  }
};

// takes array from getURLs and loops those, scraping each site in a queue fashion
const getSubURLs = async () => {
  let urls = await getURLS();
  siteList = [];

  for (let url of urls) {
    try {
      const res = await axios.get(url);
      const data = res.data;
      const $ = cheerio.load(data);

      // create sites object and links array that will go inside object
      let sites = {};
      sites.url = url;
      let links = [];
      // finds all relative links
      $("a[href^='/']").each((i, elem) => {
        let link = $(elem).attr('href');
        uniqueLinkChecker(link, links, url);
        sites.links = links;
      });
      siteList.push(sites);
    } catch (err) {
      console.error(err);
      return response.status(400).send(err);
    }
  }
  return siteList;
};

// generate json file and export results object
const exportResults = async () => {
  // call function and push results to json
  let urls = await getSubURLs();

  // create results object
  const results = {
    sites: [],
  };

  //push results to array inside results object
  urls.map((url) => results.sites.push(url));

  // create JSON file
  fs.writeFile('data.json', JSON.stringify(results, null, 4), function (err) {
    if (err) throw err;
    console.log('Complete!');
  });
  console.log(
    chalk.black.bgWhite(
      `\n ${chalk.underline.bold(
        results.sites.length
      )} Results exported successfully to ${chalk.underline.bold(
        'data.json'
      )}\n`
    )
  );
};

// deletes trailing forward slash at end of url
const deleteFowardSlash = (url) => {
  if (url.charAt(url.length - 1) == '/') {
    // the / is the last character, remove it
    return url.substring(0, url.length - 1);
  } else {
    return url;
  }
};

// checks to make sure url isnt already in array before pushing
function uniqueLinkChecker(url, arr, baseURL) {
  if (arguments.length < 3) {
    baseURL = '';
  } else {
    baseURL;
  }
  if (arr.indexOf(url) === -1) {
    arr.push(baseURL + url);
  }
}

exportResults();
