var data = [];
var dataStr = `
1、01<br><br>\
摘录：永远都要活给自己看，而且笑容要特别灿烂，别在乎别人的指指点点，做好你自己，让看不起你的人高攀不起，让看得起你的人更喜欢你。<br>\
又名：美女1<br><br><br>\
2、02<br><br>\
摘录：有些故事，除了回忆，谁也不会留；有些无奈，除了沉默，谁也不会说；有些东西，除了自己，谁也不会懂。<br>\
又名：美女2<br><br><br>\
3、03<br><br>\
摘录：累的时候抱抱自己，哭的时候哄哄自己，身边不可能无时无刻，有一个人陪着你宠着你，要学会自己疼自己。<br>\
又名：美女3<br><br><br>\
4、04<br><br>\
摘录：越有故事的人越沉静简单，越肤浅单薄的人越浮躁不安。真正的强者，不是没有眼泪的人，而是含着眼泪依然奔跑的人。我们最先衰老的从来不是容貌，而是那份不顾一切的闯劲。<br>\
又名：美女4<br><br><br>\
5、05<br><br>\
摘录：已经错过的风景就不要再打听了，当你选定了一个方向，另一边的风景便与你无关了。<br>\
又名：美女5<br><br><br>\
6、06<br><br>\
摘录：是谁说过，有爱就不会受伤害；是谁说过，有爱就不会分开。我只知道，当我想起这些话的时候会心疼。<br>\
又名：美女6<br><br><br>\
7、07<br><br>\
摘录：用心甘情愿的态度，过随遇而安的生活。遗憾，随风散去，美好，留在心底。给心灵一米阳光，温暖安放，心若向阳，无畏悲伤。<br>\
又名：美女7<br><br><br>\
8、08<br><br>\
摘录：时间会慢慢沉淀，有些人会在你心底慢慢模糊。学会放手，你的幸福需要自己的成全。<br>\
又名：美女8<br><br><br>\
9、09<br><br>\
摘录：听着自己的心情，静静的回忆，当初如此的美好，而今却是一片沧桑。心情就像天空一样，有时晴朗，有时阴云，亦有时雨天。<br>\
又名：美女9<br><br><br>\
10、10<br><br>\
摘录：我曾给过你闭上眼睛捂起耳朵的信任，就算全世界都说你有错，只要你否认，我就相信。<br>\
又名：美女10<br><br><br>\
11、11<br><br>\
摘录：我们笑着说再见，却深知再见遥遥无期。你有你的苦辣酸甜，我有我的喜怒哀乐，既然相遇的时间不足以让我们为彼此停留，那就祝今后的我们，披着各自的骄傲，各自安好。<br>\
又名：美女11<br><br><br>\
12、12<br><br>\
摘录：我始终觉得，如果有个人喜欢你，而你不能跟他在一起，就不应该给他任何希望，任何暗示。这才是最大的温柔。<br>\
又名：美女12<br><br><br>\
13、13<br><br>\
摘录：假如你想要一件东西，就放它走。它若能回来找你，就永远属于你；它若不回来，那根本就不是你的。<br>\
又名：美女13<br><br><br>\
14、14<br><br>\
摘录：不是在最好的时光遇见了你，而是因为有你在，我才有了最好的时光。<br>\
又名：美女14<br><br><br>\
15、15<br><br>\
摘录：人太久都带着假面生活，会渐渐忘了自己本来的样子。<br>\
又名：美女15<br><br><br>\
16、16<br><br>\
摘录：被特别在乎的人忽略，会很难过，而更难过的是你还要装作你不在乎。<br>\
又名：美女16<br><br><br>\
17、17<br><br>\
摘录：我不需要你有多完美，我只是需要你能让我感觉到，我就是那个唯一。<br>\
又名：美女17<br><br><br>\
18、18<br><br>\
摘录：人不对，付出再多，用情再深，最后感动的也只有自己。不要动不动就倾其所有，与其卑微到尘土里，不如留一些骄傲与疼爱给自己，最卑贱不过感情，最凉不过人心。<br>\
又名：美女18<br><br><br>\
19、19<br><br>\
摘录：没有人值得你流泪，值得让你这么做的人不会让你哭泣。<br>\
又名：美女19<br><br><br>\
20、20<br><br>\
摘录：曾经拥有的，不要忘记；不能得到的，更要珍惜；属于自己的，不要放弃；已经失去的，留作回忆。<br>\
又名：美女20<br><br><br>\


`;
var d = dataStr.split('<br><br><br>');
for (let i = 0; i < d.length-1; i++) {
    let c = d[i].split('<br><br>');
    data.push({
        img:c[0].replace(''+(i+1)+'、','')+'.jpg',
        caption:c[0].split('、')[1],
        desc:c[1]
    });
}
console.log(data);