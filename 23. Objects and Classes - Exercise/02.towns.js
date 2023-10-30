function towns(arr) {
    for (let cityInfo of arr) {
        let [town, latitude, longitude] = cityInfo.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObj = {
            town,
            latitude,
            longitude,
        };
        console.log(townObj);
    }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);
