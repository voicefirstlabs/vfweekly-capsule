var console = require('console');
var http = require('http');
module.exports.function = function findLastEpisode () {
  const url = 'https://feed.pippa.io/public/shows/5b1b5b967c78f2c616b56286?results=1';
  
  var res = http.getUrl(url, {
    format: "xmljs"
  })
  var resultTitle = res && res.rss && res.rss.channel && res.rss.channel.item && res.rss.channel.item.title
  var resultDescription = res && res.rss && res.rss.channel && res.rss.channel.item && res.rss.channel.item["itunes:summary"]
  var resultEpisodeUrl = res && res.rss && res.rss.channel && res.rss.channel.item && res.rss.channel.item.enclosure && res.rss.channel.item.enclosure["@url"]
  var resultImageUrl = res && res.rss && res.rss.channel && res.rss.channel.image && res.rss.channel.image.url
  var resultDuration = res && res.rss && res.rss.channel && res.rss.channel.item && res.rss.channel.item["itunes:duration"]
  
  console.log(res.rss.channel)
  return {
    title: resultTitle ? res.rss.channel.item.title : "Upss",
    description: resultDescription ? res.rss.channel.item["itunes:summary"] : "Upss",
    episodeUrl: resultEpisodeUrl ? res.rss.channel.item.enclosure["@url"] : "",
    imageUrl: resultImageUrl ? res.rss.channel.image.url : "",
    duration: resultDuration ? res.rss.channel.item["itunes:duration"] : ""
  }
}
