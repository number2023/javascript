var hp = 3;
console.log(hp +1);

hp = 1;
console.log(hp -2);

hp = 5;
console.log(hp *3);

hp = 4;
console.log(hp /5);

hp = 6;
console.log(hp %5);
console.log(" ");

//単項演算
hp = 5;
++hp;
console.log(hp);

hp = 5;
--hp;
console.log(hp);
console.log(" ");


//複合演算
hp = 10;
hp += 10;
console.log(hp);


hp = 10;
hp -= 10;
console.log(hp);


hp = 10;
hp *= 10;
console.log(hp);


hp = 10;
hp /= 10;
console.log(hp);
console.log(" ");

//文字列の連結
hp = 10;
var monster_name = "スライム";
status_message = monster_name  + "があらわれた!";
console.log(status_message);

//文字と数値の連結  
hp = 10;
status_message = monster_name + "のHPは" + hp;
console.log(status_message);
console.log(" ");

//リテラルテンプレート(+を使わずにできる)
status_message = `${monster_name}のHPは${hp}`;
console.log(status_message);

//文字列の単項演算
var message = "この物語は";
message += "ノンフィクションですよ";
console.log(message);
console.log(" ");

//文字列と数値の連結
message += 2022;
console.log(message);
console.log(" ");

//プログラムは右側から計算される
var attack = 10;
hp = 50;
defense = 2
hp = hp * 2 - attack ;
console.log(hp);
console.log(" ");

//論理演算
var is_bool;
hp = 10;
is_bool = (hp == 20);
console.log(is_bool);

hp = 0;
is_bool = (hp < -10);
console.log(is_bool);

hp = 0;
is_bool = (hp > -10);
console.log(is_bool);

hp = 10;
is_bool = (hp >= 10);
console.log(is_bool);


//三項演算
hp = 10;
var result = (hp <= 20) ? "ピンチ！" : "まだ平気"
console.log(result)

