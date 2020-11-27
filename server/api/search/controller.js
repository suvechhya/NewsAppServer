import NewsAPI from 'newsapi';

const newsapi = new NewsAPI('16ab712f0cc347288027532b72106a38');

/* Search API returns back top headlines as well as all news */
exports.search = async (req, res, next) => {
  const { keyword, page } = req.query;
  try {
    const allResp = await newsapi.v2.everything({
      q: keyword,
      page: page || 1,
      language: 'en',
      sortBy: 'relevancy',
    });
    const topHeadlines = await newsapi.v2.topHeadlines({
      q: keyword,
      language: 'en',
      sources: !keyword ? 'bbc-news' : undefined,
    });
    const response = {
      allNews: allResp.articles,
      topHeadlines: topHeadlines.articles,
    };
    res.json(response);
    next();
  } catch (error) {
    next(error);
  }
};

/* Initial API returns only topHeadlines for UK(GB) */
exports.topHeadlinesForUk = async (req, res, next) => {
  const { keyword, page } = req.query;
  try {
    const topHeadlines = await newsapi.v2.topHeadlines({
      country: 'gb'
    });
    res.json(topHeadlines);
    next();
  } catch (error) {
    next(error);
  }
};
