'use strict';

let st = '';
for (i = 1; i < 7; i++) {
    st = '';
    for (j = 1; j < i + 1; j++) {
        st = st + '*';
    }
    console.log(st);
}

//first
for (let i = 5; i < 11; i++){
    console.log(i);
}

//second
for (let i = 20; i > 9; i--){
    if(i == 13){
        break;
    }
    console.log(i);
}

//third
for (let i = 2; i < 11; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

//fourth
let i = 2;
while (i < 17){
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

//fifth
let arr = [];
for (let i = 0; i < 6; i++){
    arr[i] = 5 + i;
}



    

