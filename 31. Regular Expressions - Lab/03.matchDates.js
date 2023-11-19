function matchDates(input) {
    let pattern =
        /(?<date>\d{2})(?<seg>[.\-/])(?<month>[A-Z][a-z][a-z])\k<seg>(?<year>\d{4})/gm;

    let result = pattern.exec(input);

    while (result != null) {
        let { date, month, year } = result.groups;

        console.log(`Day: ${date}, Month: ${month}, Year: ${year}`);

        result = pattern.exec(input);
    }
}
matchDates([
    "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
matchDates(["1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014"]);
