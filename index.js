// Discord.jsモジュールを読み込む
const Discord = require('discord.js');
// 新しいDiscordクライアントを作成
const client = new Discord.Client();
// クライアントの準備ができた際に実行されます
// このイベントはログインした後に１度だけ実行します
client.once('ready', () => {
	console.log('準備完了！');
});

let general = client.channels.cache.get("822895039947604001")


client.on('message', message => {
	if (message.content === 'test') {
                
                message.channel.send("正常作動開始")

                return;
                JinrouEdit(message)

                client.stop()
                

        };
        if (message.content === "なかま、起きて"){
                message.channel.send("は～い💛私なかま！可愛いでしょ！")
        }

        }

);

function JinrouEdit(Msg){
        
console.log("関数読み込み開始")
//ロウ
let personal = client.channels.cache.get("838687207534624802")
let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
let getMember = [];
console.log("情報読み取り完了")
Msg.channel.send("人狼に参加するメンバーを「!ロウ」のように発言してください")
client.on("message", Msg => {
        if(String(Msg.content) === "!登録受付終了"){
                return;
        };

        if(String(Msg.content).startsWith("!")){
                for (m in memberList){
                        if(m === String(Msg.content).slice(1)){
                                getMember.push(memberList[String(Msg.content).slice(1)])
                                Msg.channel.send("登録完了:"+m)
                                console.log(getMember)
                        };
                };
        };
});


};




// トークンを使ってDiscordにログイン
client.login('ODcwNzE3NzczMzg1NDM3MjU2.YQQ1Hg.6WJWC_7Fw5gDmQ6vCht-yqTa6nw');