const Discord = require('discord.js');

const client = new Discord.Client();

client.login('ODcwNzE3NzczMzg1NDM3MjU2.YQQ1Hg.6WJWC_7Fw5gDmQ6vCht-yqTa6nw');



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
let Mas = 0;


client.on('message', message => {

        if(message.content === "as"){
                message.channel.send(message.channel.type);
        }


        if (message.content.startsWith('Forced stop')) {
                message.channel.send("強制停止を実行\nシステム監査を実行\nシステム自動復旧までのこり15分");
                process.exit();
            }

	if (message.content === '人狼開始' && startButton) {
                
                message.channel.send("人狼が呼び込まれました")

                WereWolf(message);

                startchannel = message.channel;

                startButton = false;

                return;
                

        };

        if(message.content === "random.int"){
                RandomInt(message);
        }


        if (message.content === "本当のなかまは？"){
                message.channel.send("は～い💛私なかま！可愛いでしょ！");
                return;
        };

        if (message.content === "田所君あれやって！"){
                message.channel.send("ハーイ！どきどきときめきスキスキオーラ★");
                return;
        };
        if (message.content === "田所君ノリわるーいw"){
                message.channel.send("スキスキオォ…ねぇめっちゃ滑ってんじゃん！w");
                return;
        };
        if (message.content === "君は"){
                message.channel.send("夜ご飯");
                return;
        };


});


function RandomInt(Msg){

        

}



function WereWolf(Msg){
        
console.log("関数読み込み開始");

//人物定義
class GetMemberData {
        constructor(address,name,blackOrWhite,roll,count,deathOrLife,rightvote,special){
                this.address = address;
                this.name = name;
                this.blackOrWhite = blackOrWhite;
                this.roll = roll;
                this.count = count;
                this.deathOrLife = deathOrLife
                this.rightvote = rightvote
                this.special = special
                
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
        let memberList = {"##########" : "########"};
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
        let memberList = {"##########" : "########"};
                for(key in memberList){
                        if(String(str) === String(memberList[key])){
                                return String(key);
                        };
                };     
};

//与えられた職業の中にいるかいないかreturn bool
function knowboolIs(list){
        let memberList = {"##########" : "########"};
        for(l of list){
                for(key in memberList){
                        if(String(l) === String(memberList[key])){
                                return true;
                        };
                };
        };
        return false
        
};
//adressから名前をだす
function AddressToName(Address){
        let memberList = {"##########" : "########"};
        for(key in memberList){
                if(Address === memberList[key]){
                        return key;
                };
        };
};

//投票関数
function returnManyVotedName(){
        let memberList = {"##########" : "########"};
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
};

var master ="##########################"
var memberList = {"#####################################" : "###########################"};
let getMember = [];
var alwaysGetMember =[];
var alwaysGetMemberName = [];
var Werewolfcount =0;
var Villagercount =0;
var Seercount = 0;
var allcount =0;
var Werewolf =[];
var Villager =[];
var Seer = [];
let setting = 0;
let day = 0;
let nightGone = 0;
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

function resetVote(){
        for(m of alwaysGetMember){
                if(eval(addressListToNameStr(m) + "_member" + ".deathOrLife") === "死亡"){
                        eval(addressListToNameStr(m) + "_member" + ".count" + "=  0");
                }else{
                        eval(addressListToNameStr(m) + "_member" + ".count" + "=  0");
                        eval(addressListToNameStr(m) + "_member" + ".rightvote" + "= true");
                };
                if(eval(addressListToNameStr(m) + "_member" + ".special") === "No"){
                        eval(addressListToNameStr(m) + "_member" + ".special" + "= Yes");
                };
        };
};



function judgement(){
        console.log("-----------------\n" + "人狼：" + Werewolf)
        console.log("人狼数：" + Werewolfcount)
        console.log("人狼：" + Villager)
        console.log("村人数：" + Villagercount + "\n-----------------")

        let Result = "----------------------\n";
        for(m of alwaysGetMember){
                let B =addressListToNameStr(m)
                let A = eval( String(B) + "_member.name");
                Result += A + "\n"
                A = eval( String(B) + "_member.roll");
                Result += "役職：" + A + "\n"
                A = eval( String(B) + "_member.deathOrLife");
                Result += "生存判定：" + A + "\n"
        };
        Result += "----------------------";
        if(Villagercount === Werewolfcount){
                startchannel.send("人狼の数と村人の数が同じになったため人狼の勝利です！！");
                startchannel.send(Result)
                endbool();
        }else if(Werewolfcount === 0){
                startchannel.send("村の中から人狼が消滅したため、村人の勝利です！！");
                startchannel.send(Result)
                endbool();
        }else{
                day_night = true;
                startchannel.send("第" + day + "日目の夜がやってきました\n" + "夜行動を選択してください（村人以外）\n「!ロウ」のように選択してください")
        };

};




//設定フェーズ

//メンバー登録
Msg.channel.send("人狼に参加するメンバーを「!人物名」のように発言してください\n------------------\nExample/人物名=> ロウ ならば!ロウと入力\n------------------\n人物登録が全員完了したら「?登録完了」と発言してください\n**注意！一回送ったら２回目は送らないでください\nまた、参加者上限は10人までです**");

client.on('message', message => {

        if(message.author.bot && botread === false){return;}
        else if(message.channel.type === "dm" && dmsend === false){console.log("DM送信を防止")
                return;}
        else if(message.channel.type === "text" && channelsend === false){console.log("チャンネル送信を防止")
                return;};

        if (message.content.startsWith('Forced stop')) {
                if (!message.author.id === master) return;
                message.channel.send("強制停止を実行\nシステム監査を実行\nシステム自動復旧までのこり15分");
                process.exit();
        };

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
                                if(getMember.indexOf(memberList[m]) !== -1){
                                        message.channel.send(String(message.content).slice(1) + "は既に登録されています")
                                        console.log("重複を判定、中止しました")
                                        return;
                                }else if (message.author.id === memberList[m]){
                                        getMember.push(memberList[String(message.content).slice(1)]);
                                        message.channel.send("登録完了:"+m)
                                        message.channel.send("現在人数数："+String(getMember.length));
        
                                        console.log(getMember);
                                        return;  
                                }else if(message.author.id !== memberList[m]){
                                        message.channel.send("本人の発言のみ登録可能です");
                                        console.log("DIDとMIDが一致しませんでした")
                                        return;
                                };
                        };
                };
                message.channel.send("人物："+String(message.content).slice(1)+"の認証ができませんでした");
                                        console.log("人物登録されていません")
                                        return;
        };

        
        //役職選択開始
        if(rollfaseintro){
        message.channel.send("次に役職選択に移ります\n!人狼2(数字は半角のみ) のように人数に合うように入力してください\n役職人数を登録したら「?登録完了」と発言してください")
        rollfaseintro = false;
        return;
        };

        if((String(message.content) === "?登録完了" || String(message.content) === "？登録完了") && rollfase){
                allcount = Villagercount+Werewolfcount+Seercount;
                //1はwerewolfの殺すやつ
                nightGone = 1+Seercount
                if(allcount!== getMember.length){
                        message.channel.send("Error：参加人数と役職人数が一致していません。")
                        return;
                }
                message.channel.send("登録受付を終了しました");
                alwaysGetMember = getMember.slice(0,getMember.length);
                rollfase = false;
                beforestart =true;

        };

        if((String(message.content).startsWith("!") || String(message.content).startsWith("！")) && rollfase){

                if(String(message.content).slice(1,3) === "人狼"){
                        if(String(message.content).slice(3) < 0){return;}
                        Werewolfcount = parseInt(Atoa(String(message.content).slice(3)));
                        console.log("人狼数："+String(message.content).slice(3) + "に設定");
                        message.channel.send("人狼の人数を"+String(Werewolfcount)+"に設定しました");
                        return;   
                }

                if(String(message.content).slice(1,3) === "村人" ){
                        if(String(message.content).slice(3) < 0){return;}
                        Villagercount = parseInt(Atoa(String(message.content).slice(3)));
                        console.log("村人数："+String(message.content).slice(3) + "設定");
                        message.channel.send("村人の人数を"+String(Villagercount)+"に設定しました");
                        return;
                };

                if(String(message.content).slice(1,4) === "占い師" ){
                        if(String(message.content).slice(4) < 0){return;}
                        Seercount = parseInt(Atoa(String(message.content).slice(4)));
                        console.log("占い師数："+String(message.content).slice(4) + "設定");
                        message.channel.send("占い師の人数を"+String(Seercount)+"に設定しました");
                        return;
                };

        };

        //ゲームフェーズ
        //スタート前準備
        if(beforestart){

                console.log("人狼数：" + Werewolfcount);
                console.log("村人数：" + Villagercount);
                console.log("占い師数：" + Seercount);
                
                //人物役職配布
                for(let GrobalImpass = 0 ; GrobalImpass<Werewolfcount ; GrobalImpass++){
                        console.log("人狼配布開始");
                        let address = randomChoice(getMember);
                        let ralco = new GetMemberData(address,AddressToName(address),"黒","Werewolf",0,"生存",true,"Yes");
                        eval(String(ralco.name) + "_member" + " = " + "ralco");
                        console.log("------------");
                        console.log(ralco);
                        Werewolf.push(address);
                        console.log("配布：人狼\""+Werewolf+"\"" + "\n------------");
                }
                for(let GrobalImpass = 0 ; GrobalImpass<Seercount ; GrobalImpass++){
                        console.log("占い師配布開始");
                        let address = randomChoice(getMember)
                        let ralco = new GetMemberData(address,AddressToName(address),"白","Seer",0,"生存",true,"Yes");
                        eval(String(ralco.name) + "_member" + " = " + "ralco");
                        console.log("------------");
                        console.log(ralco);
                        Seer.push(address);
                        console.log("配布：占い師\""+Seer+"\"" + "\n------------");
                }
                for(let GrobalImpass = 0 ; GrobalImpass<Villagercount ; GrobalImpass++){
                        console.log("村人配布開始");
                        let address = randomChoice(getMember)
                        let ralco = new GetMemberData(address,AddressToName(address),"白","Villager",0,"生存",true,"None");
                        eval(String(ralco.name) + "_member" + " = " + "ralco");
                        console.log("------------");
                        console.log(ralco);
                        Villager.push(address);
                        console.log("配布：人狼\""+Villager+"\"" + "\n------------");
                }
                console.log("----------------配布完了----------------");
                console.log("人狼：" + Werewolf);
                console.log("村人：" + Villager);
                console.log("占い師：" + Seer);

                //DMに対象役職を送信

                for(let i = 0 ; i<allcount ; i++){
                        let ID = client.users.cache.get(alwaysGetMember[i]);
                                if(Werewolf.indexOf(alwaysGetMember[i]) !== -1){
                                        if(Werewolfcount === 1){
                                                client.users.cache.get(alwaysGetMember[i]).send("あなたの役職はこの村ただ一人の人狼です");
                                                client.users.cache.get(alwaysGetMember[i]).send({ files: ["../discord.js-node/image/孤独な人狼.png"] });
                                                console.log(String(ID)+"に送信")
                                                
                                        }else{
                                        client.users.cache.get(alwaysGetMember[i]).send("あなたの役職は人狼です\n----------------------\n"+addressListToName(Werewolf)+"\n----------------------\n以上"+Werewolfcount+"名が仲間です。");
                                        client.users.cache.get(alwaysGetMember[i]).send({ files: ["../discord.js-nodeimage/人狼.png"] });
                                        console.log(String(ID)+"に送信")
                                        };
                                }else if(Villager.indexOf(alwaysGetMember[i]) !== -1){
                                        client.users.cache.get(alwaysGetMember[i]).send("あなたの役職は村人です");
                                        client.users.cache.get(alwaysGetMember[i]).send({ files: ["../discord.js-node/image/村人.png"] });
                                        console.log(String(ID)+"に送信");
                                }else if(Seer.indexOf(alwaysGetMember[i]) !== -1){
                                        client.users.cache.get(alwaysGetMember[i]).send("あなたの役職は占い師です");
                                        client.users.cache.get(alwaysGetMember[i]).send({ files: ["../discord.js-node/image/占い師.png"] });
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

                let Comment ="設定項目\n--------------------------\n人狼数："+Werewolfcount+"人"+"\n村人数："+Villagercount+"人"+ "\n占い師数：" + Seercount + "人" + "\n参加メンバー："+String(getMember.length)+"人\n討論時間：5分" + "\n" + Mrg + "\n" + "通信プロトコル状態：true\n--------------------------";
                message.channel.send("参加メンバー全員にそれぞれの役職を送信しました\nこれより下記設定で人狼を開始します\n準備が完了した場合、「!はい」と入力してください。\n「!いいえ」と入力すると一度人狼プログラムが閉じ\n最初からやり直すことができます");
                message.channel.send(Comment);

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
                //投票数をリセット
                resetVote()
                day++
                channelsend = false;
                dayfase = false;
                message.channel.send("第" + day + "日目が始まりました。");
                if(day > 1){
                        startchannel.send("先日は人狼によって" + werewolfkill + "が殺されました");
                };
                startchannel.send("制限時間２０秒以内に\n村の中から吊り上げる断罪者を決めてください");
                setTimeout(function(){
                        //botread = true;
                        message.channel.send("あたりが暗くなり、夜がやってきました。\n多数決により断罪者を決めます\nDMにて「！ロウ」のように入力してください。\n**注意！一回送ったら２回目は送らないでください**\n**バグが発生する危険性があります。**");
                        night_vote =true;
                        //botread = false;
                },1*20*1000);
        };
        if(night_vote){
                dmsend =true;
                console.log("DMsendを" + dmsend +"にしました")
                if(eval(addressListToNameStr(message.author.id) + "_member" + ".rightvote")){
                        if((String(message.content).startsWith("!") || String(message.content).startsWith("！"))){
                                try{
                                        if(eval(String(message.content).slice(1) +"_member" + ".deathOrLife") === "死亡"){
                                                message.channel.send("死亡者を殺すことはできません");
                                        }else{
                                        eval(String(message.content).slice(1)+ "_member" + ".count++")
                                        message.channel.send(String(message.content).slice(1) + "の投票を受付ました。")
                                        eval(addressListToNameStr(message.author.id) + "_member" + ".rightvote" + "= false");
                                        console.log("人物名a：" + addressListToNameStr(message.author.id) + "の投票権利を" + eval(addressListToNameStr(message.author.id) + "_member" + ".rightvote") + "に変更しました");
                                        console.log("人物名：" + eval(String(message.content).slice(1)+ "_member" + ".name") +"に"+ eval(String(message.content).slice(1)+ "_member" + ".count") + "投票されました");
                                        Mas++
                                        console.log("現在："+ Mas +"  目標："+ alwaysGetMember.length)
                                        };
                                }catch{
                                        message.channel.send("対象外です")
                                        return
                                };
                        };
                }else if(eval(addressListToNameStr(message.author.id) + "_member" + ".rightvote" === false)){
                        message.channel.send("あなたは現在投票権がありません");
                };
                if(Mas === alwaysGetMember.length){
                        dmsend =false;
                        console.log("DMsendを" + dmsend +"にしました")
                        night_vote = false;
                        let Allcontent = "\n------------------";
                        for(address of alwaysGetMember){
                                if(eval(addressListToNameStr(address) + "_member" + ".deathOrLife") === "死亡"){
                                }else{
                                Allcontent += "\n" + eval(addressListToNameStr(address) + "_member" + ".name") + "：" + eval(addressListToNameStr(address) + "_member" + ".count") + "票";
                                };
                        };
                        console.log("---------------人物評価完了---------------");
                        startchannel.send("全員投票完了しました。投票結果を開示します" + Allcontent + "\n------------------");
                        startchannel.send(returnManyVotedName() + "さん\n30秒で遺言をどうぞ");
                        setTimeout(function(){
                                startchannel.send("遺言時間終了\nこれ以降死者として不用意な発言はやめてください")
                                deleteroll(eval(returnManyVotedName() + "_member" + ".address"));
                                eval(returnManyVotedName() + "_member" + ".deathOrLife" + "= '死亡'");
                                judgements = true;
                                day_night = true;
                                judgement()
                        },20*1000);
                                
        

                };

        };
        
        if(day_night){
                dmsend = true;
                console.log("DM受付を" + dmsend + "にしました")
                let endpoint = 0;
                if((String(message.content).startsWith("!") || String(message.content).startsWith("！"))){
                        if(Werewolf.indexOf(message.author.id) !== -1){
                                if(eval(String(message.content).slice(1)+ "_member" + ".deathOrLife") === "死亡"){
                                        console.log("死亡者選択のため無効化")
                                        message.channel.send("その人物は既に死んでいます")
                                        return;
                                };
                                message.channel.send("死亡選択を受け付けました")
                                endpoint++;
                                werewolfkill = eval(String(message.content).slice(1)+ "_member" + ".name")
                                eval(addressListToNameStr(message.author.id) + "_member" + ".special" + "= No")
                                console.log("人狼：" + addressListToNameStr(message.author.id) + "は殺す相手を\n人物：" + werewolfkill + "を選択しました") 
                                //処理（騎士実装時に変更）
                                deleteroll(eval(String(message.content).slice(1)+ "_member" + ".adress"))
                                eval(String(message.content).slice(1)+ "_member" + ".deathOrLife" + " = " + "'死亡'")
                        }else if(Seer.indexOf(message.author.id) !== -1){
                                if(eval(String(message.content).slice(1)+ "_member" + ".deathOrLife") === "死亡"){
                                        console.log("死亡者選択のため無効化")
                                        message.channel.send("その人物は既に死んでいます")
                                        return;
                                };
                                message.channel.send("占い相手を受け付けました")
                                try{
                                        eval("let Msga =" + String(message.content).slice(1)+ "_member" + ".blackOrWhite")
                                        message.channel.send("対象：" + String(message.content).slice(1) + "は" + Msga + "です。")
                                        console.log("占い師：" + addressListToNameStr(message.author.id) + "は占い相手を\n人物：" + String(message.content).slice(1) + "を選択しました" )
                                        eval(addressListToNameStr(message.author.id) + "_member" + ".special" + "= No")
                                        endpoint++
                                }catch{
                                        message.channel.send("対象を認識できませんでした")
                                        return;
                                };
                        };

                        if(endpoint === nightGone){
                                dmsend = false;
                                console.log("DMsendを" + dmsend +"にしました")
                                day_night = false;
                                dayfase = true;
                                console.log("夜ターンを終了：day"+ day + "の行動を終了します")
                        };
                };
        };

});
};
