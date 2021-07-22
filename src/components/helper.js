// let address = require('address');

// export const getMac = () => {
//     return address.mac((err,address) => {
//         // console.log(address);
//         return address;
//     })
// }

var macaddress = require('macaddress');

export const getMac = (setaddr) => {
    macaddress.one((err, mac,setaddr) => {
        console.log(mac);
        setaddr(mac);
    })
}