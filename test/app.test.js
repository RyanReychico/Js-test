const {filter, count} = require('../app')

describe('app', () => {
    it('should filter countries and people based on the searched string and showing with count', () => {
        const result = filter('ry')
        const countResult = count(result)
        expect(countResult).toEqual([
          {
            "name": "Uzuzozne [1]",
            "people": [
              {
                "name": "Lillie Abbott [1]",
                "animals": [
                  {
                    "name": "John Dory"
                  }
                ]
              }
            ]
          },
          {
            "name": "Satanwi [1]",
            "people": [
              {
                "name": "Anthony Bruno [1]",
                "animals": [
                  {
                    "name": "Oryx"
                  }
                ]
              }
            ]
          }
        ]);
    });
});