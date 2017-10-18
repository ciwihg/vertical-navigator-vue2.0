# vertical-navigator-vue2.0
a vue navigator component imitate google play website navigator
## install
``` bash
npm install vertical-navigator-vue2.0
```
## usage
``` bash
1.This component work with google material icons,you should add link tag as below.
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>web</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

2.import the component

<template>
  <div>
    <he :datas="navdatas"></he>
  </div>
</template>

<script>
import  {verticalNavigator} from 'vertical-navigator-vue2.0'
export default {
  name: 'HelloWorld',
  components: {'he':verticalNavigator},
  data () {
    return {
      navdatas:[
    {content:"吃货零食",
     color:"rgb(68,68,68)",
     icon:'home',
     link:"#/",
     submenu:[
     ]
    },
    {content:"热销", //name of the item
     color:"rgb(104,159,56)",//background color of the item
     icon:'view_carousel',//icon of the item(for more detail,read the google material icons website)
     link:"javascript:;",//href of the item
     submenu:[ //submenu of the item
       {content:"促销", //submenu item name
       link:"#/sortpage/s2r" //submenu item href
       }, //item of the submenu
       {content:"朝阳巷5号", //submenu item name
       link:"#/sortpage/s2r"//submenu item href
       } //item of the submenu
     ]
    },//one item
    {content:"特价",
     color:"rgb(239,108,0)",
     icon:'pause',
     link:"javascript:;",
     submenu:[
       {content:"横潭大街32号",
       link:"#/sortpage/sr"},
       {content:"朝阳巷5号",
       link:"#/sortpage/sr"}
     ]
    },

    {content:"人气",
     color:"rgb(3,155,229)",
    icon:'crop_square',
     link:"javascript:;",
     submenu:[
       {content:"横潭大街32号",
       link:"#/sortpage/r"},
       {content:"朝阳巷5号",
       link:"#/sortpage/r"}
     ]
    },
    {content:"数码",
     color:"rgb(83,109,254)",
     icon:'more_horiz',
     link:"javascript:;",
     submenu:[
       {content:"横潭大街32号",
       link:"#/sortpage/other"},
       {content:"朝阳巷5号",
       link:"#/sortpage/other"},
       {content:"横潭市场",
       link:"#/sortpage/other"}
     ]
    }
  ]
    }
  },
  mounted:function(){
  }
}
</script>
```
