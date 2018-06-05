/**
 * Created by mal89 on 18/05/2018.
 */

class numericConverter 
{
    strToNumeric (text) {
        var convertedTxt = text.replace (/^£([0-9]+)(\n)(\.\d{1,2})$/, '£$1$3' );
        return convertedTxt;
    }
}
module.exports =  numericConverter;