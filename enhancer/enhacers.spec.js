const { repair } = require('./enhacers')


it('should restore durability to 100', () => {
    const item = {
        durability: 50
    }
    expect(repair(item).durability).toEqual(100)
})