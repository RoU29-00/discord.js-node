// Discord.jsモジュールを読み込む
const Discord = require('discord.js');
// 新しいDiscordクライアントを作成
const client = new Discord.Client();
// クライアントの準備ができた際に実行されます
// このイベントはログインした後に１度だけ実行します



function randomChoice(arr) {
        let A = Math.floor(Math.random() * arr.length);
        let B = arr[A];
        arr.slice(A,1);
        return B;
      }
function Atoa(str) {
        return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    };



client.once('ready', () => {
	console.log('準備完了！');
});

let master ="812608069128159233"
let startButton = true;
let dmsend = false;



client.on('message', message => {
        if(message.author.bot){return;}
        if(message.channel.type === "dm" && dmsend === false){return;}

        if (message.content.startsWith('Forced stop')) {
                if (!message.author.id === master) return;
                message.channel.send("強制停止を実行\nシステム監査を実行\nシステム自動復旧までのこり15分")
                process.exit();
            }

	if (message.content === 'test' && startButton) {
                
                message.channel.send("人狼が呼び込まれました")

                WereWolf(message)

                startButton = false

                return;
                

        };

        if (message.content === "本当のなかまは？"){
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
let allcount =0;
let Werewolf =[];
let Villager =[];
let setting = 0;

//スイッチ式if文bool
let startfase = true
let rollfaseintro =false
let rollfase = false
let beforestart = false
let beforestart2 = false
console.log("設定読み込み完了")

//設定フェーズ

//メンバー登録
Msg.channel.send("人狼に参加するメンバーを「!人物名」のように発言してください\n------------------\nExample/人物名=> ロウ ならば!ロウと入力\n------------------\n人物登録が全員完了したら「?登録完了」と発言してください\n**注意！一回送ったら２回目は送らないでください**")

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
        message.channel.send("次に役職選択に移ります\n!人狼2(数字は半角のみ) のように人数に合うように入力してください\n役職人数を登録したら「?登録完了」と発言してください")
        rollfaseintro = false;
        return;
        };

        if((String(message.content) === "?登録完了" || String(message.content) === "？登録完了") && rollfase){
                message.channel.send("登録受付を終了しました")
                rollfase = false;
                beforestart =true;
                rollfaseintro = false;

        };

        if((String(message.content).startsWith("!") || String(message.content).startsWith("！")) && rollfase){

                if(String(message.content).slice(1,3) === "人狼"){
                        Werewolfcount = parseInt(Atoa(String(message.content).slice(3)))
                        console.log("人狼"+String(message.content).slice(3))
                        message.channel.send("人狼の人数を"+String(Werewolfcount)+"に設定しました")
                        return;   
                }

                if (String(message.content).slice(1,3) === "村人" ){
                        Villagercount = parseInt(Atoa(String(message.content).slice(3)))
                        console.log("村人"+String(message.content).slice(3))
                        message.channel.send("村人の人数を"+String(Villagercount)+"に設定しました")
                        return;
                }
        

        };

        //ゲームフェーズ
        //スタート前準備
        if(beforestart){

                allcount = Villagercount+Werewolfcount;
                console.log("beforestart is starting");
                console.log(Werewolfcount);
                console.log(Villagercount);
                //人物役職配布
                for(let i = 0 ; i<Werewolfcount ;i++){
                        console.log("人狼配布開始");
                        Werewolf.push(randomChoice(getMember))
                        console.log("配布：人狼\""+Werewolf+"\"");
                }
                for(let i = 0 ; i<Villagercount ; i++){
                        console.log("村人配布開始");
                        Villager.push(randomChoice(getMember))
                        console.log("配布：村人\""+Villager+"\"");
                }
                console.log("----------------配布完了----------------")
                console.log("人狼："+String(Werewolf));
                console.log("村人："+String(Villager));
                
                //DMに対象役職を送信
                for(let i = 0 ; i<allcount ; i++){
                        let ID = client.users.cache.get(getMember[i])
                        console.log(ID)
                        for(g in getMember){
                                if(Werewolf.indexOf(getMember[g]) !== -1){
                                        ID.send("あなたの役職は人狼です")
                                        console.log(String(ID)+"に送信")
                                }else if(Villager.indexOf(getMember[g]) !== -1){
                                        ID.send("あなたの役職は村人です")
                                        console.log(String(ID)+"に送信")
                                };
                        };

                };
                message.channel.send("参加メンバー全員にそれぞれの役職を送信しました\nこれより下記設定で人狼を開始します\n準備が完了した場合、「!はい」と入力してください。\n「!いいえ」と入力すると一度人狼プログラムが閉じ\n最初からやり直すことができます")
                message.channel.send("設定項目\n--------------------------\n人狼数："+Werewolfcount+"人"+"\n村人数："+Villagercount+"人"+"\n参加メンバー："+String(getMember.length)+"人")
                let Mrg =" "
                for(let i = 0 ; i<getMember.length ; i++){
                        for(key in memberList){
                                if (memberList[key] === getMember[i]){
                                        Mrg += "<@" + getMember[i] +">"
                                };
                        };
                };
                message.channel.send(Mrg);

                beforestart = false;
                beforestart2 = true;
        };

        if(beforestart2){
                if(String(message.content) === "!はい" || String(message.content) === "！はい"){
                        message.channel.send("人狼を開始します")
                        beforestart2 = false;
                        return;
                };

                if(String(message.content) === "!いいえ" || String(message.content) === "！いいえ"){
                        message.channel.send("設定を初期化します\n最初からやり直してください。")
                        startButton = true;
                        beforestart2 = false;
                        return;
                }else{
                        return;
                };
        };





});
};

// トークンを使ってDiscordにログイン
client.login('ODcwNzE3NzczMzg1NDM3MjU2.YQQ1Hg.6WJWC_7Fw5gDmQ6vCht-yqTa6nw');