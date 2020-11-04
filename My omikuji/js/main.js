'use strict';  //厳密なエラーチェックをする為のもの

{  //変数や定数の有効範囲を限定するために全体を囲ってる
  const btn = document.getElementById('btn');//btnという定数を用意=既にhtmlでidが振られているbtnをgetElementByIdで取得

  btn.addEventListener('click' ,() => {//btnに対して操作するとイベントが発生するよ（操作=クリックで、｛以下の内容
    const results = ['大吉', '中吉', '凶', '末吉', '小吉', '大凶'];
    //const n = Math.floor(Math.random() * results.length);//定数ｎを宣言=ランダムな整数値を作る×定数resultsのなかにある要素数
    //btn.textContent = n;//btnに次のテキストを入れろ=定数ｎ
    btn.textContent = results[ Math.floor(Math.random() * results.length)];

    //switch (n) {//（ケースによって表示する値を変化）
      //case 0://ケース0の場合
        //btn.textContent = '大吉';//btnに次のテキストを入れろ=大吉
        //break;//繰り返し文から脱出

      //case 1:
        //btn.textContent = '中吉';
        //break;

      //case 2:
        //btn.textContent = '凶';
        //break;
   // }
  });
}