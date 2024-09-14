/*
 *
 *
脚本功能：手写模拟器
软件版本：3.2.1【最高支持版本】
下载地址：AppStore
脚本作者：577fkj
更新时间：2024-03-06
电报频道：https://t.me/xfk23333
问题反馈：https://t.me/xfk23333
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 手写模拟器
^https?:\/\/ename\.miplus\.cloud\/(user|config)\/(login|payInfo|info) url script-response-body https://raw.githubusercontent.com/577fkj/QuantumultX/main/HandWritingVIPCrack2.js

[mitm] 

hostname = ename.miplus.cloud
*
*
*/

console.log("HandWritingVIPCrack: 开始破解VIP");

var body = $response.body;
console.log("body: " + body);
var json = JSON.parse(body);
if (json.code != 1) {
  console.log("HandWritingVIPCrack: 无法获取VIP信息");
  return;
}

var user =
  "i0y99SlTy0ZXN0XhyQuWv9ceQsr2ANLAUi1rkc/01Gmt40yuHpl4bv1ZnZUqq9wsewHv47Qs/JJHilBU2RSxKgxzDHI4it3ZaJCnz5H+kmPBcq4icQxzXC7rHbm+CumaBGDf4mQHaHK1oTOZosPpH/Bp2xTEjRc5s0G1uNl12qj2q0ipdhmXOZ+cx0SOMRge7/cLDijOiRWIDnGa/moPuIjDDSxW22ffV9yiGyTjchygA4bbF9iZb1aCzSv0I+wBT3dQT6vaD/33daQXLGQkRF+2783FBcl37lKpQ66W/d8bBcWA5k1RbShg2HtZfW/B";

json.data.splashShow = false;

if (json.data.userResult && json.data.userResult.userMsg) {
  json.data.userResult.userMsg = user;
}

if (json.data.userMsg) {
  json.data.userMsg = user;
}

json.data.guestResult = user;

body = JSON.stringify(json);

console.log("HandWritingVIPCrack: VIP破解成功");
$done({
  body,
});
