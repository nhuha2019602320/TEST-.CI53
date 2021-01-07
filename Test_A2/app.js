let list = [
{
    name: "Arsenal",
    points: 99,
    GD: 45,
},
    {
    name: "Chelsea",
    points: 75,
    GD: 39,
},
    {
    name: "MU",
    points: 60,
    GD: 29,
},
    {
    name: "Liverpul",
    points: 88,
    GD: 39,
},
];

    var rank;
    for(let i=0; i<list.length; i++) {
        for(let j = i+1; j<list.length; j++){
                if(list[i].points< list[j].points){
                    let t = list[i];
                    list[i] = list[j]
                    list[j] = t;
                }
            }
            list[i].rank = i+1;
        }
    console.log(list);
// }
//tên đội bòng không trùng nhau
//nếu số điểm trùng nhau thì xếp đội xếp trên có hiệu số bàn thắng bại
//bằng nhau nếu  số bàn thắng lẫn hiệu số là bằng nhau

