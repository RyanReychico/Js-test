const {filter} = require('../app')

describe('filter function', () => {
    it('should filter countries and people based on the searched string', () => {
        const result = filter('ry')
        expect(result).toEqual([
            {
              "name": "Uzuzozne",
              "people": [
                {
                  "name": "Lillie Abbott",
                  "animals": [
                    {
                      "name": "John Dory"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Satanwi",
              "people": [
                {
                  "name": "Anthony Bruno",
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

    it('should return an empty array if no matches are found', () => {
        const result = filter('Lion');
        expect(result).toEqual([]);
    });
});