function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        return -1;
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
    
 }

 module.exports = processor;