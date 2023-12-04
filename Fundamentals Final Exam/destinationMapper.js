function destinationMapper(str) {
    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/gm;
    let points = 0;
    let destinations = [];

    let matches = str.matchAll(pattern);

    for (let match of matches) {
        let { location } = match.groups;
        destinations.push(location);
        points += location.length;
    }
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
