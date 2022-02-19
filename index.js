const cheerio = require("cheerio");
const got = require("got");

const info = (url) => {
  return got(url).then((data) => {
    let $detail = cheerio.load(data.body);
    let $content = cheerio.load($detail.html());

    let info = {};

    info.magnet = $content("a[href^=magnet]").eq(0).attr("href");

    return info || null;
  });
};

module.exports.info = info;
