function convert(num) {
    let param = num.toString();
    let val = "";
    let code = "";
    if(num < 1000){
        return num;
    }
    if(num > 999){
        if(param.length == 4){
            code = "K";
            val = param[0] + "." + param[1] + param[2] + code;
        }
        else if(param.length == 5){
            code = "KK";
            val = param[0]  + param[1]+ "." + param[2] + code[0];
        }
        else if(param.length == 6) {
            code = "KKK";
            val = param[0]  + param[1] + param[2] + code[0];
        }else if(param.length == 7) {
            code = "M";
            val = param[0] + "." + param[1] + param[2] + code;
        }else if(param.length == 8) {
            code = "M";
            val = param[0] +  param[1] + param[2] + "." + param[3] + code;
        }else if(param.length == 9) {
            code = "B";
            val = param[0] + "." + param[1] + param[2] + code;
        }
        else if(param.length == 10) {
            code = "B";
            val = param[0] + param[1] + "." + param[2] + code;
        }
    }
    return val;
}
export default convert;