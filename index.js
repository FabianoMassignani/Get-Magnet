const cheerio = require("cheerio");
const got = require("got");

/**
 * @method get magnet from page
 * @desc Limetorrents and Yts
 * @returns {function} promise
 */

const get = (url) => {
  return got(url).then((data) => {
    let $detail = cheerio.load(data.body);
    let $content = cheerio.load($detail.html());

    let info = {};

    info.magnet = $content("a[href^=magnet]").eq(0).attr("href");

    return info || null;
  });
};

module.exports.get = get;
