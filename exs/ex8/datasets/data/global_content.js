export const options = {
    op1:true,
    op2:false,
    op3:true
}

export function ChangeOptions(key, val) {
    options[key] = val;
    console.log(options)
}
export function GetOptions() {
    
}