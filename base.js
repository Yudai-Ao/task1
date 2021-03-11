const arr = [];

const showMessage = () => {
    // input要素の値を取得
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;

    // input要素の値を空にする
    document.getElementById("input-message").value = '';

    // 半角数字以外は受け付けない
    if (isNaN(inputValue)) {
        alert("半角数字以外入力不可です。");
        return null;
    }

    //空の配列に要素を追加する
    arr.push(inputValue);

    const arr2 = [...arr];

    //ここから問題あり涙
    for (i = 0; i < arr2.length - 1; i++) {
        for (j = 0; j < arr2.length - 1 - i; j++) {
            if (arr2[j] > arr2[j + 1]) {
                let t = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = t;
            }
        }
    }

    // 重複を削除した配列
    let arr3 = arr2.filter(function (x, i, self) {
        return self.indexOf(x) === i;
    });

    // p要素にメッセージを表示
    document.getElementById("output-message").innerHTML = arr3;

    console.log(arr3);


}

