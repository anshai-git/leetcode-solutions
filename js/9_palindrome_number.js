function is_palindrome (x) {
    let y = x;
    let rev = 0;

    while(y > 0){
        rev *= 10;
        rev += (y%10);
        y = Math.floor(y/10);
    }

    return (rev == x ? true : false);
};
