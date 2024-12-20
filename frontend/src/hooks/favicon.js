const axios = require("axios");
const cheerio = require("cheerio");

/**
 * 주어진 URL에서 favicon 링크를 가져옵니다.
 * @param {string} url - 대상 웹사이트의 URL
 * @returns {Promise<string>} - favicon의 URL
 */
const getFavicon = async (url) => {
  try {
    // URL에서 HTML 소스 가져오기
    const response = await axios.get(url);
    const html = response.data;

    // HTML 파싱
    const $ = cheerio.load(html);

    // favicon 링크 찾기
    const faviconLink =
      $('link[rel="icon"]').attr("href") ||
      $('link[rel="shortcut icon"]').attr("href") ||
      "/favicon.ico"; // 기본 favicon 경로

    // favicon URL 보정 (절대 경로 처리)
    const faviconUrl = new URL(faviconLink, url).href;
    return faviconUrl;
  } catch (error) {
    console.error(`Failed to fetch favicon from ${url}:`, error.message);
    throw new Error("Could not fetch favicon");
  }
};

module.exports = getFavicon;
