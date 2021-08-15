// Discord.jsモジュールを読み込む
const Discord = require('discord.js');
// 新しいDiscordクライアントを作成
const client = new Discord.Client();

//人物定義
class GetMemberData {
        constructor(address,name,blackOrWhite,roll,count,deathOrLife){
                this.address = address;
                this.name = name;
                this.blackOrWhite = blackOrWhite;
                this.roll = roll;
                this.count = count;
                this.deathOrLife = deathOrLife
                
        };

};

//まつ
function sleep(waitMsec) {
        var startMsec = new Date();
       
        // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
        while (new Date() - startMsec < waitMsec);
}




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

//与えられた職業の中の人の名前を返す（list）
function addressListToName(list){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"};
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

//与えられたアドレスから名前をとる(str)
function addressListToNameStr(str){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"};
                for(key in memberList){
                        if(String(str) === String(memberList[key])){
                                return String(key);
                        };
                };     
};

//与えられた職業の中にいるかいないかreturn bool
function knowboolIs(list){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"};
        for(l of list){
                for(key in memberList){
                        if(String(l) === String(memberList[key])){
                                return true;
                        };
                };
        };
        return false
        
};

function AddressToName(Address){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"};
        for(key in memberList){
                if(Address === memberList[key]){
                        return key;
                };
        };
};
function returnManyVotedName(){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"};
        result = "";
        Count = 0;
                for(key in memberList){
                        try{
                                let count = eval(key + "_member" + ".count");
                        if(count > Count){
                                Count = count;
                                 result = eval(key + "_member" + ".name");
                        };
                        
                        }catch{

                        };
                };

                return result;



};

function endbool(){
        startfase = false;
        rollfaseintro =false;
        rollfase = false;
        beforestart = false;
        beforestart2 = false;
        dayfase = false;
        night_vote = false;
        judgements = false;
        day_night = false;
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
let startchannel = "";


client.on('message', message => {

        if(message.content === "as"){
                message.channel.send(message.channel.type);
        }

        else if(message.author.bot && botread === false){return;}
        else if(message.channel.type === "dm" && dmsend === false){return;}
        else if(message.channel.type === "text" && channelsend === false){return;};

        if (message.content.startsWith('Forced stop')) {
                if (!message.author.id === master) return;
                message.channel.send("強制停止を実行\nシステム監査を実行\nシステム自動復旧までのこり15分");
                process.exit();
            }

	if (message.content === 'test' && startButton) {
                
                message.channel.send("人狼が呼び込まれました")

                WereWolf(message);

                startchannel = message.channel;
                console.log(startchannel)

                startButton = false;

                return;
                

        };

        if (message.content === "本当のなかまは？"){
                message.channel.send("は～い💛私なかま！可愛いでしょ！");
                return;
        };


});



function WereWolf(Msg){
        
console.log("関数読み込み開始");

var master ="812608069128159233"
var memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"};
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
let werewolfkill = "";

//スイッチ式if文bool
let startfase = true;
let rollfaseintro =false;
let rollfase = false;
let beforestart = false;
let beforestart2 = false;
let dayfase = false;
let night_vote = false;
let judgements = false;
let day_night = false;
console.log("設定読み込み完了");


function deleteroll(address){
        for(w of Werewolf){
                if(w === address){
                        Werewolf.splice(Werewolf.indexOf(address),1)
                        Werewolfcount--
                };
        };
        for(v of Villager){
                if(v === address){
                        Villager.splice(Villager.indexOf(address),1)
                        Villagercount--
                };
        };

};

function judgement(){
        let Result = "----------------------\n";
        for(m of alwaysGetMember){
                let B =addressListToNameStr(m)
                let C = eval( String(B) + "_member.address");
                let A = eval( String(B) + "_member.name");
                Result += A + "：" + C + "\n"
                A = eval( String(B) + "_member.roll");
                Result += "役職：" + A + "\n"
                A = eval( String(B) + "_member.deathOrLife");
                Result += "生存判定：" + A + "\n"
        };
        Result += "----------------------";
        if(Villagercount = Werewolfcount){
                startchannel.send("人狼の数と村人の数が同じになったため人狼の勝利です！！");
                startchannel.send(Result)
                endbool();
        }else if(Werewolfcount === 0){
                startchannel.send("村の中から人狼が消滅したため、村人の勝利です！！");
                startchannel.send(Result)
                endbool();
        }else{
                day_night = true;
                message.channel.send("第" + day + "日目の夜がやってきました\n" + "夜行動を選択してください\n「!ロウ」のように選択してください")
        };

};




//設定フェーズ

//メンバー登録
Msg.channel.send("人狼に参加するメンバーを「!人物名」のように発言してください\n------------------\nExample/人物名=> ロウ ならば!ロウと入力\n------------------\n人物登録が全員完了したら「?登録完了」と発言してください\n**注意！一回送ったら２回目は送らないでください\nまた、参加者上限は10人までです**");

client.on('message', message => {
        if(message.author.bot){return;}

        console.log("Client is on and on "+setting);
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
                                getMember.push(memberList[String(message.content).slice(1)]);
                                message.channel.send("登録完了:"+m)
                                message.channel.send("現在人数数："+String(getMember.length));

                                console.log(getMember);
                                //重複を防ぎたい
                                return;
                        }
                };
                message.channel.send("人物："+String(message.content).slice(1)+"の認証ができませんでした");
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
                message.channel.send("登録受付を終了しました");
                alwaysGetMember = getMember.slice(0,getMember.length);
                rollfase = false;
                beforestart =true;
                rollfaseintro = false;

        };

        if((String(message.content).startsWith("!") || String(message.content).startsWith("！")) && rollfase){

                if(String(message.content).slice(1,3) === "人狼"){
                        Werewolfcount = parseInt(Atoa(String(message.content).slice(3)));
                        console.log("人狼数："+String(message.content).slice(3) + "に設定");
                        message.channel.send("人狼の人数を"+String(Werewolfcount)+"に設定しました");
                        return;   
                }

                if (String(message.content).slice(1,3) === "村人" ){
                        Villagercount = parseInt(Atoa(String(message.content).slice(3)));
                        console.log("村人数："+String(message.content).slice(3) + "設定");
                        message.channel.send("村人の人数を"+String(Villagercount)+"に設定しました");
                        return;
                };

        };

        //ゲームフェーズ
        //スタート前準備
        if(beforestart){

                console.log("人狼数：" + Werewolfcount);
                console.log("村人数：" + Villagercount);
                //人物役職配布
                for(var GrobalImpass = 0 ; GrobalImpass<Werewolfcount ;GrobalImpass ++){
                        console.log("人狼配布開始");
                        let address = randomChoice(getMember);
                        let ralco = new GetMemberData(address,AddressToName(address),"黒","Werewolf",0,"生存");
                        eval(String(ralco.name) + "_member" + " = " + "ralco");
                        console.log("------------");
                        console.log(ralco);
                        Werewolf.push(address);
                        console.log("配布：人狼\""+Werewolf+"\"" + "\n------------");
                }
                for(GrobalImpass++ ; GrobalImpass<Villagercount+GrobalImpass ; GrobalImpass++){
                        console.log("村人配布開始");
                        let address = randomChoice(getMember)
                        let ralco = new GetMemberData(address,AddressToName(address),"白","Villager",0,"生存");
                        console.log("------------");
                        console.log(ralco);
                        Werewolf.push(address);
                        console.log("配布：人狼\""+Villager+"\"" + "\n------------");
                }
                console.log("----------------配布完了----------------");
                console.log("人狼：" + Werewolf);
                console.log("村人：" + Villager);
                //DMに対象役職を送信
                for(let i = 0 ; i<allcount ; i++){
                        let ID = client.users.cache.get(alwaysGetMember[i]);
                                if(Werewolf.indexOf(alwaysGetMember[i]) !== -1){
                                        client.users.cache.get(alwaysGetMember[i]).send("あなたの役職は人狼です\n----------------------\n"+addressListToName(Werewolf)+"\n----------------------\n以上"+Werewolfcount+"名が仲間です。");
                                        console.log(String(ID)+"に送信")
                                }else if(Villager.indexOf(alwaysGetMember[i]) !== -1){
                                        client.users.cache.get(alwaysGetMember[i]).send("あなたの役職は村人です");
                                        console.log(String(ID)+"に送信");
                                };

                };
                let Mrg =" ";
                for(let i = 0 ; i<alwaysGetMember.length ; i++){
                        for(key in memberList){
                                if (memberList[key] === alwaysGetMember[i]){
                                        Mrg += "<@" + alwaysGetMember[i] +">"
                                };
                        };
                };
                message.channel.send("参加メンバー全員にそれぞれの役職を送信しました\nこれより下記設定で人狼を開始します\n準備が完了した場合、「!はい」と入力してください。\n「!いいえ」と入力すると一度人狼プログラムが閉じ\n最初からやり直すことができます");
                message.channel.send("設定項目\n--------------------------\n人狼数："+Werewolfcount+"人"+"\n村人数："+Villagercount+"人"+"\n参加メンバー："+String(getMember.length)+"人\n討論時間：5分" + "\n" + Mrg + "\n" + "通信プロトコル状態：true\n--------------------------");

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
                channelsend = false;
                dayfase = false;
                message.channel.send("第" + day + "日目が始まりました。");
                if(day > 1){
                        startchannel.send("先日は人狼によって" + werewolfkill + "が殺されました");
                };
                startchannel.send("制限時間5分以内に\n村の中から吊り上げる断罪者を決めてください");
                setTimeout(function(){
                        botread = true;
                        message.channel.send("あたりが暗くなり、夜がやってきました。\n多数決により断罪者を決めます\nDMにて「！ロウ」のように入力してください。\n**注意！一回送ったら２回目は送らないでください**\n**バグが発生する危険性があります。**");
                        night_vote =true;
                        botread = false;
                },1*20*1000);
        };
        if(night_vote){
                let Mas = 0;
                dmsend =true;
                if((String(message.content).startsWith("!") || String(message.content).startsWith("！"))){
                        try{eval(String(message.content).slice(1)+ "_member" + ".count++")
                        message.channel.send(String(message.content).slice(1) + "の投票を受付ました。")
                        console.log("人物名：" + eval(String(message.content).slice(1)+ "_member" + ".name") +"に"+ eval(String(message.content).slice(1)+ "_member" + ".count") + "投票されました");
                        Mas++
                        }catch{
                                message.channel.send("対象外です")
                                return;
                        };
                        if(Mas === alwaysGetMember.length){
                                night_vote = false;
                                dmsend = false;
                                let Allcontent = "\n------------------";
                                for(address of alwaysGetMember){
                                        Allcontent += "\n" + eval(addressListToNameStr(address) + "_member" + ".name") + "：" + eval(addressListToNameStr(address) + "_member" + ".count") + "票";
                                };
                                console.log("---------------人物評価完了---------------");
                                startchannel.send("全員投票完了しました。投票結果を開示します" + Allcontent + "\n------------------");
                                startchannel.send(returnManyVotedName() + "さん\n30秒で遺言をどうぞ");
                                setTimeout(function(){
                                        botread = true;
                                        startchannel.send("遺言時間終了\nこれ以降死者として不用意な発言はやめてください")
                                        deleteroll(eval(returnManyVotedName() + "_member" + ".address"));
                                        eval(returnManyVotedName() + "_member" + ".deathOrLife" + "= '死亡'");
                                        judgements = true;
                                        botread = false;
                                        judgement()
                                },20*1000);
                                
                        };

                };

        };
        
        if(day_night){
                dmsend = true;
                let endpoint =0;
                for(w of Werewolf){
                        if(message.author.id === w){
                                eval(String(message.content).slice(1)+ "_member" + ".deathOrLife" + " = " + "'死亡'")
                                message.channel.send("死亡選択を受け付けました")
                                endpoint++;
                                werewolfkill = eval(String(message.content).slice(1)+ "_member" + ".name")
                };
                };
                if(endpoint === Werewolf){
                        dmsend = false;
                        day_night = false;
                        dayfase = true;
                        console.log("パーフェクト")
                };
        };

});
};


// トークンを使ってDiscordにログイン
client.login('ODcwNzE3NzczMzg1NDM3MjU2.YQQ1Hg.6WJWC_7Fw5gDmQ6vCht-yqTa6nw');