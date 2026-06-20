const _generateZeros = (z) => {
    if (z <= 0) {return ""}

    let paddedZeros = ""
    for (let i = 0; i <= z; i++) { 
        paddedZeros += "0"
    }
    return paddedZeros.substring(0, paddedZeros.length - 1);
}
export default _generateZeros