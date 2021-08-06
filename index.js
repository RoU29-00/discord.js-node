// Discord.jsモジュールを読み込む
const Discord = require('discord.js');
// 新しいDiscordクライアントを作成
const client = new Discord.Client();
// クライアントの準備ができた際に実行されます
// このイベントはログインした後に１度だけ実行します
client.once('ready', () => {
	console.log('準備完了！');
});

let master ="812608069128159233"
let startButton = true



client.on('message', message => {
        if(message.author.bot){return;}

        if (message.content.startsWith('Forced stop')) {
                if (!message.author.id === master) return;
                process.exit();
            }

	if (message.content === 'test' && startButton) {
                
                message.channel.send("人狼が呼び込まれました")

                WereWolf(message)

                startButton = false

                return;
                

        };

        if (message.content === "なかま、起きて"){
                message.channel.send("は～い💛私なかま！可愛いでしょ！")
                return;
        };


});



function WereWolf(Msg){
        
console.log("関数読み込み開始")

let master ="812608069128159233"

let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
let getMember = [];
let Werewolfcount =0;
let Villagercount =0;
let setting = 0;

//スイッチ式if文bool
let startfase = true
let rollfaseintro =false
let rollfase = false

console.log("設定読み込み完了")

//設定フェーズ

//メンバー登録
Msg.channel.send("人狼に参加するメンバーを「!人物名」のように発言してください")
Msg.channel.send("Example/人物名=> ロウ ならば!ロウと入力")
Msg.channel.send("人物登録が全員完了したら「?登録完了」と発言してください")
Msg.channel.send("**注意！一回送ったら２回目は送らないでください**")

client.on('message', message => {
        if(message.author.bot){return;}

        console.log("Client is on and on "+setting)
        setting++

        if((String(message.content) === "?登録完了" || String(message.content) === "？登録完了") && startfase){
                message.channel.send("登録受付を終了しました")
                startfase = false
                rollfase = true
                rollfaseintro =true
        };

        if((String(message.content).startsWith("!") || String(message.content).startsWith("！")) && startfase ){
                
                for (m in memberList){
                        if(m === String(message.content).slice(1)){
                                getMember.push(memberList[String(message.content).slice(1)])
                                message.channel.send("登録完了:"+m)
                                message.channel.send("現在人数数："+String(getMember.length))

                                console.log(getMember)
                                //重複を防ぎたい
                                return;
                        }
                };
                message.channel.send("人物："+String(message.content).slice(1)+"の認証ができませんでした")
                                return;
        };

        
        //役職選択開始
        if(rollfaseintro){
        message.channel.send("次に役職選択に移ります")
        message.channel.send("!人狼2 のように人数に合うように入力してください")
        message.channel.send("役職人数を登録したら「?登録完了」と発言してください")
        rollfaseintro = false;
        return;
        };

        if((String(message.content) === "?登録完了" || String(message.content) === "？登録完了") && rollfase){
                rollfase = false
                return;

        }

        if((String(message.content).startsWith("!") || String(message.content).startsWith("！")) && rollfase){

                if(String(message.content).slice(1,3) === "人狼"){
                        Werewolfcount = parseInt(String(message.content).slice(3))
                        console.log("人狼"+String(message.content).slice(3))
                        message.channel.send("人狼の人数を"+String(Werewolfcount)+"に設定しました")
                        return;   
                }

                if (String(message.content).slice(1,3) === "村人" ){
                        Villagercount = parseInt(String(message.content).slice(3))
                        console.log("村人"+String(message.content).slice(3))
                        message.channel.send("村人の人数を"+String(Villagercount)+"に設定しました")
                        return;
        }
        




};
});





// トークンを使ってDiscordにログイン
client.login('ODcwNzE3NzczMzg1NDM3MjU2.YQQ1Hg.6WJWC_7Fw5gDmQ6vCht-yqTa6nw');