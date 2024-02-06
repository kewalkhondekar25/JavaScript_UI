const genOtp = () => {
    const a = Math.random() * 10;
    const b = Math.random() * 10;
    const c = Math.random() * 10;
    const d = Math.random() * 10;

    console.log(`OTP: ${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)}`);

}
genOtp();


const result = Math.pow(2, 3);
console.log(result);
