import lighthouse from "lighthouse";
import puppeteer from "puppeteer";
export default async function handler(req, res) {
  const { url } = req.query;
  const browser = await puppeteer.launch();
  const { lhr } = await lighthouse(url, { logLevel: "info" });
  await browser.close();
  res.json(lhr.categories.seo.score);
}
