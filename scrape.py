from scrapling import StealthyFetcher
page = StealthyFetcher(headless=True).fetch("https://taylorcountytx-web.tylerhost.net/web/search/DOCSEARCH398S1")
print(dir(page))
