const userIdList = (jsonDatas) => {
    const returnUserId = [];

    const allUserIds = jsonDatas.map((jsonData) => {
        return jsonData.userId; //jsonDatasという配列の中から、userIdというキーを持つオブジェクトの値を抽出
    });

    for (userId of allUserIds) { //findIndexメソッドでreturnUserId配列の中に同じ値があるか検索
        const getUserId = returnUserId.findIndex((eachReturnUserId) => {
        return eachReturnUserId === userId;
        });

        /* findIndex()は配列の要素を検索して、最初に見つかった要素のインデックスを返すメソッド
            配列の中から特定の要素を検索・重複する要素を除去・条件に合う最初の要素を取得するときに使う*/

        if (getUserId === -1) { //もしgetUserIdが-1ならば、returnUserId配列にuserIdを追加
            returnUserId.push(userId);
        }
    }

    return returnUserId;
};

const fixData = (jsonDatas) => {
    const userIds = userIdList(jsonDatas); //userList関数でユーザIDの配列を取得(上のQ1で作ったもの) 
    const array = [];

    for (userId of userIds) {
        const matchedUserData = jsonDatas.filter(
            (jsonData) => jsonData.userId === userId
        );
        for (eachMatchedUserData of matchedUserData) {
            delete eachMatchedUserData.userId;
        }
        array.push(matchedUserData);
    } //各ユーザIDのグループに含まれるデータを取得、各データからuserIdプロパティを削除、array変数に格納

    const newDatas = userIds.map((id, index) => {
        return {
            userId: id,
            datas: array[index],
        };
    }); //各ユーザIDに対して対応するデータを含むオブジェクトの作成
        //それぞれのオブジェクトにはuserIdとdatasという2つのプロパティがあり、datasプロパティにはそのユーザが書いたtitle, body, idの配列が含まれる
    return newDatas;
};

module.exports = { userIdList, fixData };