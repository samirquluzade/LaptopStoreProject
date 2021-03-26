module.exports = (temp,product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output = output.replace(/{%IMAGE%}/g,product.image);
    output = output.replace(/{%CPU%}/g,product.cpu);
    output = output.replace(/{%RAM%}/g,product.ram);
    output = output.replace(/{%STORAGE%}/g,product.storage);
    output = output.replace(/{%SCREEN%}/g,product.screen);
    output = output.replace(/{%PRICE%}/g,product.price);
    output = output.replace(/{%DESCRIPTION%}/g,product.description);
    output = output.replace(/{%ID%}/g,product.id);
    return output;
}