console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


// Twitter Key used
// TWITTER 
// TWITTER_CONSUMER_KEY=SWX9EXftNF8FU5VVCjeWI9JQ1
// TWITTER_CONSUMER_SECRET=hNa4WalqOuemAPjevBGiB7Sdz51nxy149yktNvVEkHNKEJS6XM
// TWITTER_ACCESS_TOKEN_KEY=873295113702830081-m7eT6El9lfjiVrzCeTfIkQYo5wapUAi
// TWITTER_ACCESS_TOKEN_SECRET=3uPfjZeFLclHx3CXYuQ0vwRNBrwRQBkkZNKJGElPTYDoc