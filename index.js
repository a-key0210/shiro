const express = require('express');
const app = express();

app.set("view engine", "ejs");          // テンプレートファイルを"ejs"に設定( 以後、ejsを付けなくてもＯＫ )
app.use(express.static('public'));      // 静的ファイルの提供（画像とかcssとかを検索する場所を指定）
// app.use("***")                       // と追加で入力することで、さらに場所を増やせる

// ****************************************************************************
//
// ****************************************************************************
app.get('/', function(req, res) {
    console.log("access /");
    res.render("./index.ejs");
});


app.listen(8080, () => console.log("access -> http://localhost:8080"));
