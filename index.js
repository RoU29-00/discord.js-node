// Discord.jsモジュールを読み込む
const Discord = require('discord.js');
// 新しいDiscordクライアントを作成
const client = new Discord.Client();

//人物定義
class GetMemberData {
        constructor(address,name,blackOrWhite,roll,count){
                this.address = address;
                this.name = name;
                this.blackOrWhite = blackOrWhite;
                this.roll = roll;
                this.count = count;
                
        };

};


//リストの中からランダムに取り出して消す
function randomChoice(arr) {
        let A = Math.floor(Math.random() * arr.length);
        let B = arr[A];
        arr.splice(A,1);
        return B;
}

//全角を半角に直す
function Atoa(str) {
        return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
});
};

////与えられた職業の中の人の名前を返す
function addressListToName(list){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
        let result=[];
        for(l of list){
                for(key in memberList){
                        if(String(l) === String(memberList[key])){
                                result.push(key);
                        };
                };     
        };
        return result;
};

//与えられた職業の中にいるかいないかreturn bool
function knowboolIs(list){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
        for(l of list){
                for(key in memberList){
                        if(String(l) === String(memberList[key])){
                                return true
                        };
                };
        };
        return false
        
};

function AddressToName(Address){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
        for(key in memberList){
                if(Address === memberList[key]){
                        return key
                }
        }
}


//一回だけ行う
client.once('ready', () => {
	console.log('準備完了！');
});


let master ="812608069128159233"
let startButton = true;
let dmsend = false;
let channelsend = true;
let botread = false;



client.on('message', message => {
        if(message.author.bot && botread){return;}
        if(message.channel.type === "dm" && dmsend === false){return;}
        if(message.channel.type === "dm" && channelsend === false){return;}

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

var master ="812608069128159233"
var memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
let getMember = [];
var alwaysGetMember =[];
var alwaysGetMemberName = [];
var Werewolfcount =0;
var Villagercount =0;
var allcount =0;
var Werewolf =[];
var Villager =[];
let setting = 0;
let day = 0;

//スイッチ式if文bool
let startfase = true
let rollfaseintro =false
let rollfase = false
let beforestart = false
let beforestart2 = false
let dayfase = false
let dayfaseintro = false
let night_vote = false
let lifttime = false
console.log("設定読み込み完了")

//設定フェーズ

//メンバー登録
Msg.channel.send("人狼に参加するメンバーを「!人物名」のように発言してください\n------------------\nExample/人物名=> ロウ ならば!ロウと入力\n------------------\n人物登録が全員完了したら「?登録完了」と発言してください\n**注意！一回送ったら２回目は送らないでください\nまた、参加者上限は10人までです**")

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
                allcount = Villagercount+Werewolfcount;
                if(allcount!== getMember.length){
                        message.channel.send("Error：参加人数と役職人数が一致していません。")
                        return;
                }
                message.channel.send("登録受付を終了しました")
                alwaysGetMember = getMember.slice(0,getMember.length)
                rollfase = false;
                beforestart =true;
                rollfaseintro = false;

        };

        if((String(message.content).startsWith("!") || String(message.content).startsWith("！")) && rollfase){

                if(String(message.content).slice(1,3) === "人狼"){
                        Werewolfcount = parseInt(Atoa(String(message.content).slice(3)))
                        console.log("人狼数："+String(message.content).slice(3))
                        message.channel.send("人狼の人数を"+String(Werewolfcount)+"に設定しました")
                        return;   
                }

                if (String(message.content).slice(1,3) === "村人" ){
                        Villagercount = parseInt(Atoa(String(message.content).slice(3)))
                        console.log("村人数："+String(message.content).slice(3))
                        message.channel.send("村人の人数を"+String(Villagercount)+"に設定しました")
                        return;
                };

        };

        //ゲームフェーズ
        //スタート前準備
        if(beforestart){

                console.log("beforestart is starting");
                console.log("人狼数：" + Werewolfcount);
                console.log("村人数：" + Villagercount);
                //人物役職配布
                for(var GrobalImpass = 0 ; GrobalImpass<Werewolfcount ;GrobalImpass ++){
                        console.log("人狼配布開始");
                        let address = randomChoice(getMember)
                        let ralco = new GetMemberData(address,AddressToName(address),"黒","Werewolf",0)
                        eval("var "+String(ralco.name) + " = " + "ralco");
                        console.log(eval(String(ralco.name)))
                        Werewolf.push(address)
                        console.log("配布：人狼\""+Werewolf+"\"");
                }
                for(GrobalImpass++ ; GrobalImpass<Villagercount+GrobalImpass ; GrobalImpass++){
                        console.log("村人配布開始");
                        let address = randomChoice(getMember)
                        let ralco = new GetMemberData(address,AddressToName(address),"黒","Villager",0)
                        eval("var "+String(ralco.name) + " = " + "ralco");
                        Werewolf.push(address)
                        console.log("配布：村人\""+Villager+"\"");
                }
                console.log("----------------配布完了----------------")
                console.log("人狼：" + Werewolf);
                console.log("村人：" + Villager);
                //DMに対象役職を送信
                for(let i = 0 ; i<allcount ; i++){
                        let ID = client.users.cache.get(alwaysGetMember[i])
                                if(Werewolf.indexOf(alwaysGetMember[i]) !== -1){
                                        console.log("werewolf"+Werewolf)
                                        console.log(addressListToName(Werewolf))
                                        client.users.cache.get(alwaysGetMember[i]).send("あなたの役職は人狼です\n----------------------\n"+addressListToName(Werewolf)+"\n----------------------\n以上"+Werewolfcount+"名が仲間です。")
                                        console.log(String(ID)+"に送信")
                                }else if(Villager.indexOf(alwaysGetMember[i]) !== -1){
                                        client.users.cache.get(alwaysGetMember[i]).send("あなたの役職は村人です")
                                        console.log(String(ID)+"に送信")
                                };

                };
                let Mrg =" "
                for(let i = 0 ; i<alwaysGetMember.length ; i++){
                        for(key in memberList){
                                if (memberList[key] === alwaysGetMember[i]){
                                        Mrg += "<@" + alwaysGetMember[i] +">"
                                };
                        };
                };
                message.channel.send("参加メンバー全員にそれぞれの役職を送信しました\nこれより下記設定で人狼を開始します\n準備が完了した場合、「!はい」と入力してください。\n「!いいえ」と入力すると一度人狼プログラムが閉じ\n最初からやり直すことができます")
                message.channel.send("設定項目\n--------------------------\n人狼数："+Werewolfcount+"人"+"\n村人数："+Villagercount+"人"+"\n参加メンバー："+String(getMember.length)+"人\n"+Mrg+"\n通信プロトコル状態：true\n--------------------------")

                beforestart = false;
                beforestart2 = true;
        };

        if(beforestart2){
                if(String(message.content) === "!はい" || String(message.content) === "！はい"){
                        message.channel.send("人狼を開始します");
                        beforestart2 = false;
                        dayfase = true;
                };

                if(String(message.content) === "!いいえ" || String(message.content) === "！いいえ"){
                        message.channel.send("設定を初期化します\n最初からやり直してください。")
                        startButton = true;
                        beforestart2 = false;
                        return;
                };
        };

        if(dayfase){
                day++
                message.channel.send("第" + day + "日目が始まりました。\n制限時間5分以内に\n村の中から吊り上げる断罪者を決めてください")
                setTimeout(function(){
                        botread = true
                        message.channel.send("あたりが暗くなり、夜がやってきました。\n多数決により断罪者を決めます\nDMにて「！ロウ」のように入力してください。\n**注意！一回送ったら２回目は送らないでください**\n**バグが発生する危険性があります。**")
                        dayfase = false
                        night_vote =true 
                        botread = false
                },1*5*1000)
        };
        if(night_vote){
                let Mas = 0;
                dmsend =true
                if((String(message.content).startsWith("!") || String(message.content).startsWith("！"))){
                        eval(String(message.content).slice(1)+ ".count++")
                        message.channel.send(String(message.content).slice(1) + "の投票を受付ました。")
                        Mas++
                        if(Mas === alwaysGetMember.length){
                                message.channel.send("全員投票完了しました。投票結果を開示します")
                                night_vote = false
                                lifttime = true
                        };
                        return;
                };

        };
        if(lifttime){
                console.log("perfect!")

        };

});
};


// トークンを使ってDiscordにログイン
client.login('ODcwNzE3NzczMzg1NDM3MjU2.YQQ1Hg.6WJWC_7Fw5gDmQ6vCht-yqTa6nw');