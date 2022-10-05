"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98824],{72319:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-4e33c969",path:"/devices/EasyCode903G2.1.html",title:"EasyAccess EasyCode903G2.1 control via MQTT",lang:"en-US",frontmatter:{title:"EasyAccess EasyCode903G2.1 control via MQTT",description:"Integrate your EasyAccess EasyCode903G2.1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-05-01T14:47:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Sound_volume (enum)",slug:"sound-volume-enum",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Auto_relock (binary)",slug:"auto-relock-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/EasyCode903G2.1.md",git:{updatedTime:1664995949e3}}},67477:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});const d=(0,o(66252).uE)('<h1 id="easyaccess-easycode903g2-1" tabindex="-1"><a class="header-anchor" href="#easyaccess-easycode903g2-1" aria-hidden="true">#</a> EasyAccess EasyCode903G2.1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>EasyCode903G2.1</td></tr><tr><td>Vendor</td><td>EasyAccess</td></tr><tr><td>Description</td><td>EasyFinger V2</td></tr><tr><td>Exposes</td><td>lock (state, lock_state), battery, sound_volume, action, auto_relock, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/EasyCode903G2.1.jpg" alt="EasyAccess EasyCode903G2.1"></td></tr><tr><td>White-label</td><td>Datek Wireless EasyCode903G2.1</td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum" aria-hidden="true">#</a> Sound_volume (enum)</h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>zigbee_unlock</code>, <code>lock</code>, <code>rfid_unlock</code>, <code>keypad_unlock</code>.</p><h3 id="auto-relock-binary" tabindex="-1"><a class="header-anchor" href="#auto-relock-binary" aria-hidden="true">#</a> Auto_relock (binary)</h3><p>Auto relock after 7 seconds.. Value can be found in the published state on the <code>auto_relock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_relock&quot;: NEW_VALUE}</code>. If value equals <code>true</code> auto_relock is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),a={},c=(0,o(83744).Z)(a,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);