module.exports=function(t){"use strict";var o=require("node-atplatform");t.nodes.registerType("atplatform",function(i){t.nodes.createNode(this,i),this.topic=i.topic;var p=this;this.on("input",function(t){if("From payload"===i.topic){p.topic=[];for(let o in t.payload)1==t.payload[o]&&p.topic.push(o)}else p.topic=[i.topic];var a=void 0;if(p.topic!==[])try{a=o.platformGetInfo(p.topic)}catch(t){p.warn("[Platform] Not support this function.")}p.send({payload:a})})})};
