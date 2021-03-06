const EstateService = require('../services/EstateService')


describe('EstateService', function () { //set up jasmine spies to run real tests

    it('it should spy on getInfoOnEstate', function () {
        const estateService = new EstateService()
        const spy = spyOn(EstateService, 'getInfoOnEstate')
        estateService.getInfoOnEstate();
        expect(spy).toHaveBeenCalled();

        // let data = estateService.getInfoOnEstate()
        // expect(data).toEqual([{roundedAverageHT, roundedAverageWL}])
    })

    it('lists the av wl/pricevalue of one Estate you searched for', function () {
        const estateService = new EstateService()
        const spy = spyOn(EstateService, 'getInfoOnEstate')
        estateService.getInfoOnEstate('')

    
    it('lists estates by root id with all ht', function () {
        const estateService = new EstateService()
        let data = estate.estateService.listEstatesByIsland()
        expect(data).toEqual([])
    })

    it('lists estates by district with av wl/price_value', function () {
        const estateService = new EstateService()
        let data = estateService.listEstateByDistrict()
        expect(data).toEqual([])
    })

    it('gets av wl / price_value of each catname searching by catfather name', function () {
        const estateService = new EstateService()
        let data = estateService.getAverageOfCatFatherName()
        expect(data).toEqual([])
    })

    it('lists estates by estates with each ht, search by catname', function () {
        const estateService = new EstateService()
        let data = estateService.listEstateByEstate()
        expect(data).toEqual([])
    })
})

// need tests for different types of estate 



