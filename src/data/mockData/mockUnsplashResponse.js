/*eslint-disable max-len*/

import mockPhoto from './mockPhoto';

const mockUnsplashResponse = {
  type: 'default',
  status: 200,
  ok: true,
  statusText: 'OK',
  headers: {
    map: {
      link:
        '<https://api.unsplash.com/photos?order_by=popular&page=1&per_page=6>; rel="first", <https://api.unsplash.com/photos?order_by=popular&page=1&per_page=6>; rel="prev", <https://api.unsplash.com/photos?order_by=popular&page=16376&per_page=6>; rel="last", <https://api.unsplash.com/photos?order_by=popular&page=3&per_page=6>; rel="next"',
      'x-total': '98256',
      'x-per-page': '6',
      'cache-control': 'no-cache, no-store, must-revalidate',
      'content-type': 'application/json',
      'x-ratelimit-limit': '50',
      'x-ratelimit-remaining': '45'
    }
  },
  url: 'https://api.unsplash.com/photos?page=2&per_page=6&order_by=popular',
  _bodyInit: {},
  _bodyBlob: {},
  json: () => [mockPhoto]
};

export default mockUnsplashResponse;
