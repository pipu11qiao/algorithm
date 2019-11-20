function getCow(N) {
    if (N == 1) {
        return {
            year3: 1,
            year2: 0,
            year1: 0,
            year0: 1,
        }
    }
    const {year3, year2, year1, year0} = getCow(N - 1);
    return {
        year3: year3 + year2,
        year2: year1,
        year1: year0,
        year0: year3
    }
}

console.log(getCow(30))
