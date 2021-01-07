function theSameNumber() {
    var a1 = [], a2 = [], a3 = [];
    var n1 = prompt("nhap so phan tu cua a1 = ");
        n1 = parseInt(n1);
    var n2 = prompt("nhap so phan tu cua a2 = ");
        n2 = parseInt(n2);
    for(let i=0; i<n1; i++){
        var add1= prompt("a[" + i + "] = ");
            a1.push(add1);
    }
    for(let i =0;i<n2; i++){
        var add2 = prompt("a[" + i + "] = ");
            a2.push(add2);
    }
        console.log(a1);
        console.log(a2);

    for(let i=0; i<n1; i++){
        for(let j=0; j<n2;j++){
            if(a1[i] == a2[j]){
                a3.push(a1[i]);
            }
        }
    }
    console.log("các phần tử trùng nhau");
    console.log(a3);
}
theSameNumber();
