class EstateService {
    constructor(knex) {
        this.knex = knex;
    }

    //EstateServices
    listEstatesByIsland(rootID) { //breaks due to size?
        let query = this.knex
            .select(
                'historical_transaction.rootid',
                'historical_transaction.re_id',
                'historical_transaction.img_url',

        )
            .from('historical_transaction')
            .where('historical_transaction.rootid', rootID)
        console.log('selecting')

        return query.then(rows => {
            return rows.map(row => ({
                rootid: row.rootid,
                re_id: row.re_id,
                img_url: row.img_url,
                estates: []
            }));
        })
            .then(rows => { //Get all estates within this island (rootID)
                return Promise.all(
                    rows.map(row => {
                        let query = this.knex
                            .select
                            ('real_estate.re_id',
                            'real_estate.addr',
                            'real_estate.catfathername',
                            'real_estate.catname')
                            .from('real_estate')
                            .innerJoin('historical_transaction', 'real_estate.re_id', 'historical_transaction.re_id')
                            .where('real_estate.re_id', row.re_id)
                            .orderBy('historical_transaction.re_id', 'asc')
                        console.log("selecting two")

                        return query.then(reRows => {
                            reRows.forEach(reRow => {
                                row.estates.push({
                                    re_id: reRow.re_id,
                                    addr: reRow.addr,
                                    catfathername: reRow.catfathername,
                                    catname: reRow.catname
                                });
                            });
                            return row;
                        })
                    })
                )

            })
    }

    //List by district
    listEstateByDistrict(catfathername) {
        let query = this.knex
            .select(
                'real_estate.re_id',
                'real_estate.addr',
                'real_estate.catname'
            )
            .from('real_estate')
            .where('real_estate.catfathername', catfathername)
            console.log('selecting')

            return query.then(rows => {
                return rows.map(row => ({
                    re_id: row.re_id,
                    addr: row.addr,
                    catname: row.catname,
                }));
            })

    }

    //list by Estate
    listEstateByEstate(catname) {
        let query = this.knex
            .select(
                'real_estate.re_id',
                'real_estate.addr',
                'real_estate.catfathername'
            )
            .from('real_estate')
            .where('real_estate.catname', catname)
            console.log('selecting')

            return query.then(rows => {
                return rows.map(row => ({
                    re_id: row.re_id,
                    addr: row.addr,
                    catfathername: row.catfathername,
                    transactions: []
                }));
            })
            .then(rows => {
                return Promise.all(
                    rows.map(row => {
                        let query = this.knex
                            .select('historical_transaction.price_value',
                                'historical_transaction.date',
                                'historical_transaction.winloss',
                                'historical_transaction.img_url',
                                'historical_transaction.id',
                                'historical_transaction.ht_id',
                                'historical_transaction.re_id')
                            .from('historical_transaction')
                            .innerJoin('real_estate', 'historical_transaction.re_id', 'real_estate.re_id')
                            .where('real_estate.re_id', row.re_id)
                            .orderBy('historical_transaction.winloss', 'desc')
                        console.log('selecting two')

                        return query.then(reRows => {
                            reRows.forEach(reRow => {
                                row.transactions.push({
                                    re_id: reRow.re_id,
                                    price_value: reRow.price_value,
                                    date: reRow.date,
                                    winloss: reRow.winloss,
                                    img_url: reRow.img_url,
                                    id: reRow.id,
                                    ht_id: reRow.ht_id
                                });
                            });
                            return row;
                        })
                    })
                )
            })
    }

    listEstateByAddr(addr) { //list by addr wont work due to / in addr?
        let query = this.knex
        .select(
            'real_estate.re_id',
            'real_estate.catname',
            'real_estate.catfathername'
        )
        .from('real_estate')
        .where('real_estate.addr', addr)
        console.log('selecting')

        return query.then(rows => {
            return rows.map(row => ({
                re_id: row.re_id,
                catname: row.catname,
                catfathername: row.catfathername,
            }));
        })
        .then(rows => {
            return Promise.all(
                rows.map(row => {
                    let query = this.knex
                        .select('historical_transaction.price_value',
                            'historical_transaction.date',
                            'historical_transaction.winloss',
                            'historical_transaction.img_url',
                            'historical_transaction.id',
                            'historical_transaction.ht_id',
                            'historical_transaction.re_id')
                        .from('historical_transaction')
                        .innerJoin('real_estate', 'historical_transaction.re_id', 'real_estate.re_id')
                        .where('real_estate.re_id', row.re_id)
                        .orderBy('historical_transaction.winloss', 'desc')
                    console.log('selecting two')

                    return query.then(reRows => {
                        reRows.forEach(reRow => {
                            row.transactions.push({
                                re_id: reRow.re_id,
                                price_value: reRow.price_value,
                                date: reRow.date,
                                winloss: reRow.winloss,
                                img_url: reRow.img_url,
                                id: reRow.id,
                                ht_id: reRow.ht_id
                            });
                        });
                        return row;
                    })
                })
            )
        })
    }

}

module.exports = EstateService;