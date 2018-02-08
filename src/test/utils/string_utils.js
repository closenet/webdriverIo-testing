// const btoaatob = require('btoa-atob');
var btoa = require('btoa')
var atob = require('atob')

class StringUtils {
  static randomString(len) {
    const charSet = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < len; i += 1) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }

  static getNumberFromAlphaNumeric(alphaNumeric) {
    return alphaNumeric.replace(/[^0-9]+/gi, '');
  }

  static stringToInteger(str) {
    return parseInt(str);
  }

  static b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
    function toSolidBytes(match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
}
  static b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
  static uriEncode(str) {
    return encodeURIComponent(str);
  }
  static uriDecode(str) {
    return decodeURIComponent(str);
  }

}
module.exports = StringUtils;
