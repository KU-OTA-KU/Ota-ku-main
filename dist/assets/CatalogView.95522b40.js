import{A as v,c as x,_ as y,P as k}from"./index.75199714.js";import{W as A,X as E,Z as c,o as u,_ as t,U as i,a5 as V,F as C,a2 as g,a6 as I,B as z,E as P,a1 as B,Y as $,a3 as b,$ as S,a0 as U,d as L}from"./@vue.299c8f2a.js";import{p as d,q as m,u as f,y as _,z as N,f as h,o as l,A as T,B as p,m as R,d as H,r as O,i as q,w as Y,a as Q,C as W,k as j}from"./vuetify.de60b33d.js";import"./@capacitor.45a3b371.js";import"./vue-router.3a4e8780.js";import"./axios.0ae12843.js";import"./nprogress.bb8fb4be.js";import"./moment.04b2d170.js";import"./vuex.370caa74.js";/* empty css             */function G(){this.$router.push("/error")}function M(e){return e.poster&&e.poster.main2xUrl?e.poster.main2xUrl:"/img/ts/error.png"}const J={name:"AnimeCatalog",components:{AnimeDialog:v},data:()=>({animeList:[],currPage:1,limit:10,loading:!1,animeFound:!0,animeFoundInitialized:!1,cleanDescription:x,getImgUrl:M,searchQuery:"",error:G,finished:!1,selectedAnime:{},sidebarVisible:!1,animeCatalogListSkeleton:!0,statusItems:[{id:"anons",name:"\u0410\u043D\u043E\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E",subtitle:"\u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u043A\u043E\u0440\u044B\u0439 \u0432\u044B\u0445\u043E\u0434"},{id:"ongoing",name:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u044B\u0445\u043E\u0434\u0438\u0442",subtitle:"\u041D\u043E\u0432\u044B\u0435 \u044D\u043F\u0438\u0437\u043E\u0434\u044B \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F"},{id:"released",name:"\u0412\u044B\u0448\u0435\u0434\u0448\u0435\u0435",subtitle:"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0432\u0441\u0435 \u044D\u043F\u0438\u0437\u043E\u0434\u044B"}],kindItems:[{id:"tv",name:"\u0422\u0412 \u0421\u0435\u0440\u0438\u0430\u043B",subtitle:"\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043F\u0438\u0437\u043E\u0434\u043E\u0432 \u0441\u0435\u0440\u0438\u0430\u043B\u0430"},{id:"ova",name:"OVA",subtitle:"\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438"},{id:"movie",name:"\u0424\u0438\u043B\u044C\u043C",subtitle:"\u041F\u043E\u043B\u043D\u043E\u043C\u0435\u0442\u0440\u0430\u0436\u043D\u044B\u0439"},{id:"ona",name:"ONA",subtitle:"\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430"}],genreItems:[{id:"5",name:"\u0410\u0432\u0430\u043D\u0433\u0430\u0440\u0434",subtitle:"\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0436\u0430\u043D\u0440"},{id:"543",name:"\u0413\u0443\u0440\u043C\u0430\u043D",subtitle:"\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u044B\u0435 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F"},{id:"8",name:"\u0414\u0440\u0430\u043C\u0430",subtitle:"\u042D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u044E\u0436\u0435\u0442\u044B"},{id:"4",name:"\u041A\u043E\u043C\u0435\u0434\u0438\u044F",subtitle:"\u042E\u043C\u043E\u0440 \u0438 \u0432\u0435\u0441\u0435\u043B\u044C\u0435"},{id:"36",name:"\u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0441\u0442\u044C",subtitle:"\u0416\u0438\u0437\u043D\u0435\u043D\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438"},{id:"2",name:"\u041F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",subtitle:"\u0423\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F"},{id:"22",name:"\u0420\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430",subtitle:"\u041B\u044E\u0431\u043E\u0432\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438"},{id:"37",name:"\u0421\u0432\u0435\u0440\u0445\u044A\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435",subtitle:"\u0421\u0438\u043B\u044B \u0437\u0430 \u0433\u0440\u0430\u043D\u044C\u044E"},{id:"30",name:"\u0421\u043F\u043E\u0440\u0442",subtitle:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u0441\u043E\u0440\u0435\u0432\u043D\u043E\u0432\u0430\u043D\u0438\u044F"},{id:"7",name:"\u0422\u0430\u0439\u043D\u0430",subtitle:"\u0417\u0430\u0433\u0430\u0434\u043E\u0447\u043D\u044B\u0435 \u0441\u044E\u0436\u0435\u0442\u044B"},{id:"117",name:"\u0422\u0440\u0438\u043B\u043B\u0435\u0440",subtitle:"\u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u043D\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B"},{id:"14",name:"\u0423\u0436\u0430\u0441\u044B",subtitle:"\u0421\u0442\u0440\u0430\u0448\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438"},{id:"24",name:"\u0424\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",subtitle:"\u041D\u0430\u0443\u0447\u043D\u044B\u0435 \u043C\u0438\u0440\u044B"},{id:"10",name:"\u0424\u044D\u043D\u0442\u0435\u0437\u0438",subtitle:"\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0438\u0440\u044B"},{id:"1",name:"\u042D\u043A\u0448\u0435\u043D",subtitle:"\u0411\u043E\u0435\u0432\u043E\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E"},{id:"9",name:"\u042D\u0442\u0442\u0438",subtitle:"\u0420\u043E\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043E\u043C\u0435\u0434\u0438\u0438"},{id:"143",name:"\u0410\u043D\u0442\u0440\u043E\u043F\u043E\u043C\u043E\u0440\u0444\u0438\u0437\u043C",subtitle:"\u0427\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435"},{id:"119",name:"CGDCT",subtitle:"\u041C\u0438\u043B\u044B\u0435 \u0434\u0435\u0432\u043E\u0447\u043A\u0438"},{id:"17",name:"\u0411\u043E\u0435\u0432\u044B\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0430",subtitle:"\u0411\u043E\u0435\u0432\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438"},{id:"32",name:"\u0412\u0430\u043C\u043F\u0438\u0440\u044B",subtitle:"\u0418\u0441\u0442\u043E\u0440\u0438\u0438 \u043E \u0432\u0430\u043C\u043F\u0438\u0440\u0430\u0445"},{id:"104",name:"\u0412\u0437\u0440\u043E\u0441\u043B\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438",subtitle:"\u0412\u0437\u0440\u043E\u0441\u043B\u0430\u044F \u0436\u0438\u0437\u043D\u044C"},{id:"103",name:"\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",subtitle:"\u041C\u0438\u0440 \u0438\u0433\u0440"},{id:"38",name:"\u0412\u043E\u0435\u043D\u043D\u043E\u0435",subtitle:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"},{id:"141",name:"\u0412\u044B\u0436\u0438\u0432\u0430\u043D\u0438\u0435",subtitle:"\u0411\u043E\u0440\u044C\u0431\u0430 \u0437\u0430 \u0436\u0438\u0437\u043D\u044C"},{id:"35",name:"\u0413\u0430\u0440\u0435\u043C",subtitle:"\u041C\u043D\u043E\u0433\u043E \u043B\u044E\u0431\u043E\u0432\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432"},{id:"3",name:"\u0413\u043E\u043D\u043A\u0438",subtitle:"\u0410\u0432\u0442\u043E\u0441\u043F\u043E\u0440\u0442"},{id:"112",name:"\u0413\u044D\u0433-\u044E\u043C\u043E\u0440",subtitle:"\u041A\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438"},{id:"39",name:"\u0414\u0435\u0442\u0435\u043A\u0442\u0438\u0432",subtitle:"\u0420\u0430\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F"},{id:"105",name:"\u0416\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u044C",subtitle:"\u0416\u0435\u0441\u0442\u043E\u043A\u0438\u0435 \u0441\u0446\u0435\u043D\u044B"},{id:"134",name:"\u0417\u0430\u0431\u043E\u0442\u0430 \u043E \u0434\u0435\u0442\u044F\u0445",subtitle:"\u0414\u0435\u0442\u0441\u043A\u0430\u044F \u0437\u0430\u0431\u043E\u0442\u0430"},{id:"146",name:"\u0418\u0433\u0440\u0430 \u0441 \u0432\u044B\u0441\u043E\u043A\u0438\u043C\u0438 \u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438",subtitle:"\u0420\u0438\u0441\u043A \u0438 \u0430\u0437\u0430\u0440\u0442"},{id:"145",name:"\u0418\u0434\u043E\u043B\u044B (\u0436\u0435\u043D.)",subtitle:"\u0416\u0435\u043D\u0441\u043A\u0438\u0435 \u0438\u0434\u043E\u043B\u044B"},{id:"150",name:"\u0418\u0434\u043E\u043B\u044B (\u043C\u0443\u0436.)",subtitle:"\u041C\u0443\u0436\u0441\u043A\u0438\u0435 \u0438\u0434\u043E\u043B\u044B"},{id:"108",name:"\u0418\u0437\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E",subtitle:"\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E"},{id:"142",name:"\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E",subtitle:"\u0421\u0446\u0435\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F"},{id:"13",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439",subtitle:"\u0418\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F"},{id:"130",name:"\u0418\u0441\u044D\u043A\u0430\u0439",subtitle:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043C\u0438\u0440\u044B"},{id:"140",name:"\u0418\u044F\u0441\u0438\u043A\u044D\u0439",subtitle:"\u0423\u0441\u043F\u043E\u043A\u0430\u0438\u0432\u0430\u044E\u0449\u0438\u0435 \u0441\u044E\u0436\u0435\u0442\u044B"},{id:"102",name:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0441\u043F\u043E\u0440\u0442",subtitle:"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0435 \u0441\u043E\u0440\u0435\u0432\u043D\u043E\u0432\u0430\u043D\u0438\u044F"},{id:"29",name:"\u041A\u043E\u0441\u043C\u043E\u0441",subtitle:"\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F"},{id:"144",name:"\u041A\u0440\u043E\u0441\u0441\u0434\u0440\u0435\u0441\u0441\u0438\u043D\u0433",subtitle:"\u0421\u043C\u0435\u043D\u0430 \u043E\u0434\u0435\u0436\u0434\u044B"},{id:"137",name:"\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u0430 \u043E\u0442\u0430\u043A\u0443",subtitle:"\u041E\u0442\u0430\u043A\u0443 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430"},{id:"107",name:"\u041B\u044E\u0431\u043E\u0432\u043D\u044B\u0439 \u043C\u043D\u043E\u0433\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",subtitle:"\u0421\u043B\u043E\u0436\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F"},{id:"135",name:"\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u043C\u0435\u043D\u0430 \u043F\u043E\u043B\u0430",subtitle:"\u0421\u043C\u0435\u043D\u0430 \u043F\u043E\u043B\u0430"},{id:"124",name:"\u041C\u0430\u0445\u043E-\u0441\u0451\u0434\u0437\u0451",subtitle:"\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0435 \u0434\u0435\u0432\u043E\u0447\u043A\u0438"},{id:"147",name:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0430",subtitle:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438"},{id:"18",name:"\u041C\u0435\u0445\u0430",subtitle:"\u0420\u043E\u0431\u043E\u0442\u044B \u0438 \u043C\u0430\u0448\u0438\u043D\u044B"},{id:"6",name:"\u041C\u0438\u0444\u043E\u043B\u043E\u0433\u0438\u044F",subtitle:"\u041C\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438"},{id:"19",name:"\u041C\u0443\u0437\u044B\u043A\u0430",subtitle:"\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u044E\u0436\u0435\u0442\u044B"},{id:"149",name:"\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435",subtitle:"\u041E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u0435 \u0441\u044E\u0436\u0435\u0442\u044B"},{id:"138",name:"\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C",subtitle:"\u041F\u0440\u0435\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0441\u0438\u043D\u0434\u0438\u043A\u0430\u0442\u044B"},{id:"20",name:"\u041F\u0430\u0440\u043E\u0434\u0438\u044F",subtitle:"\u042E\u043C\u043E\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u043E\u0434\u0438\u0438"},{id:"148",name:"\u041F\u0438\u0442\u043E\u043C\u0446\u044B",subtitle:"\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435"},{id:"40",name:"\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435",subtitle:"\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0440\u0430\u043C\u044B"},{id:"111",name:"\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438",subtitle:"\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0432\u0440\u0435\u043C\u044F"},{id:"139",name:"\u0420\u0430\u0431\u043E\u0442\u0430",subtitle:"\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0436\u0438\u0437\u043D\u044C"},{id:"125",name:"\u0420\u0435\u0432\u0435\u0440\u0441-\u0433\u0430\u0440\u0435\u043C",subtitle:"\u041C\u043D\u043E\u0433\u043E \u043C\u0443\u0436\u0447\u0438\u043D"},{id:"106",name:"\u0420\u0435\u0438\u043D\u043A\u0430\u0440\u043D\u0430\u0446\u0438\u044F",subtitle:"\u041F\u0435\u0440\u0435\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435"},{id:"151",name:"\u0420\u043E\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0434\u0442\u0435\u043A\u0441\u0442",subtitle:"\u0421\u043A\u0440\u044B\u0442\u0430\u044F \u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430"},{id:"21",name:"\u0421\u0430\u043C\u0443\u0440\u0430\u0438",subtitle:"\u0418\u0441\u0442\u043E\u0440\u0438\u0438 \u043E \u0441\u0430\u043C\u0443\u0440\u0430\u044F\u0445"},{id:"118",name:"\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0435 \u0435\u0434\u0438\u043D\u043E\u0431\u043E\u0440\u0441\u0442\u0432\u0430",subtitle:"\u0411\u043E\u0435\u0432\u044B\u0435 \u0432\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430"},{id:"11",name:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u0433\u0440\u044B",subtitle:"\u0418\u0433\u0440\u044B \u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438"},{id:"31",name:"\u0421\u0443\u043F\u0435\u0440 \u0441\u0438\u043B\u0430",subtitle:"\u0421\u0432\u0435\u0440\u0445\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0438"},{id:"114",name:"\u0423\u0434\u043E\u0441\u0442\u043E\u0435\u043D\u043E \u043D\u0430\u0433\u0440\u0430\u0434",subtitle:"\u041D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F"},{id:"131",name:"\u0425\u0443\u043B\u0438\u0433\u0430\u043D\u044B",subtitle:"\u0418\u0441\u0442\u043E\u0440\u0438\u0438 \u043E \u0445\u0443\u043B\u0438\u0433\u0430\u043D\u0430\u0445"},{id:"23",name:"\u0428\u043A\u043E\u043B\u0430",subtitle:"\u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438"},{id:"136",name:"\u0428\u043E\u0443 \u0431\u0438\u0437\u043D\u0435\u0441",subtitle:"\u041C\u0438\u0440 \u0448\u043E\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0430"}],sortItems:[{id:"ranked",name:"\u041F\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443",subtitle:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443"},{id:"popularity",name:"\u041F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438",subtitle:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438"},{id:"name",name:"\u041F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443",subtitle:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443"},{id:"aired_on",name:"\u041F\u043E \u0434\u0430\u0442\u0435 \u0432\u044B\u0445\u043E\u0434\u0430",subtitle:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0434\u0430\u0442\u0435 \u0432\u044B\u0445\u043E\u0434\u0430"},{id:"status",name:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",subtitle:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u0430\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"},{id:"episodes",name:"\u041F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0441\u0435\u0440\u0438\u0439",subtitle:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0441\u0435\u0440\u0438\u0439"},{id:"id",name:"\u041F\u043E ID",subtitle:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443"}],yearItems:[{id:"2024",name:"2024 \u0433\u043E\u0434",subtitle:"\u0410\u043D\u0438\u043C\u0435 2024 \u0433\u043E\u0434\u0430"},{id:"2023",name:"2023 \u0433\u043E\u0434",subtitle:"\u0410\u043D\u0438\u043C\u0435 2023 \u0433\u043E\u0434\u0430"},{id:"2000_2024",name:"2000-2024",subtitle:"\u0410\u043D\u0438\u043C\u0435 \u0441 2000 \u043F\u043E 2024"},{id:"2020_2024",name:"2020-2024",subtitle:"\u0410\u043D\u0438\u043C\u0435 \u0441 2020 \u043F\u043E 2024"},{id:"2021_2022",name:"2021-2022",subtitle:"\u0410\u043D\u0438\u043C\u0435 \u0441 2021 \u043F\u043E 2022"},{id:"2016_2020",name:"2016-2020",subtitle:"\u0410\u043D\u0438\u043C\u0435 \u0441 2016 \u043F\u043E 2020"},{id:"2010_2015",name:"2010-2015",subtitle:"\u0410\u043D\u0438\u043C\u0435 \u0441 2010 \u043F\u043E 2015"},{id:"2000_2009",name:"2000-2009",subtitle:"\u0410\u043D\u0438\u043C\u0435 \u0441 2000 \u043F\u043E 2009"},{id:"1980_1999",name:"1999-\u0435 \u0433\u043E\u0434\u044B",subtitle:"\u0410\u043D\u0438\u043C\u0435 1980-1999 \u0433\u043E\u0434\u043E\u0432"},{id:"1970_1980",name:"1980-\u0435 \u0433\u043E\u0434\u044B",subtitle:"\u0410\u043D\u0438\u043C\u0435 1970-1980 \u0433\u043E\u0434\u043E\u0432"},{id:"1968_1999",name:"\u0414\u0438\u043D\u043E\u0437\u0430\u0432\u0440\u044B 1968",subtitle:"\u0410\u043D\u0438\u043C\u0435 1968-1999 \u0433\u043E\u0434\u043E\u0432"}],ratingItems:[{id:"none",name:"\u0411\u0435\u0437 \u043E\u0446\u0435\u043D\u043A\u0438",subtitle:"\u041D\u0435\u0442 \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u043D\u044B\u0445 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439"},{id:"g",name:"\u0412\u0441\u0435 \u043E\u0446\u0435\u043D\u043A\u0438",subtitle:"\u0414\u043B\u044F \u0432\u0441\u0435\u0445 \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u043E\u0432"},{id:"pg",name:"PG",subtitle:"\u0414\u043B\u044F \u0434\u0435\u0442\u0435\u0439"},{id:"pg_13",name:"PG-13",subtitle:"\u0414\u043B\u044F \u0434\u0435\u0442\u0435\u0439 13 \u043B\u0435\u0442"},{id:"r",name:"R",subtitle:"\u0414\u043B\u044F \u043F\u043E\u0434\u0440\u043E\u0441\u0442\u043A\u043E\u0432 17+"},{id:"r_plus",name:"R+",subtitle:"\u0423\u043C\u0435\u0440\u0435\u043D\u043D\u0430\u044F \u043D\u0430\u0433\u043E\u0442\u0430"}]}),mounted(){this.fetchAnimeData(),window.addEventListener("scroll",this.loadNextPage),this.$watch(()=>this.$route.query,()=>{this.handleUrlChange()});let e=document.getElementsByClassName("sidebar")[0],a=document.getElementsByClassName("content-wrapper")[0];window.onscroll=()=>{let D=window.scrollY,o=window.innerHeight,r=a.getBoundingClientRect().height,n=e.getBoundingClientRect().top+window.pageYOffset;D>=r-o+n&&window.innerWidth>1024?(a.style.transform=`translateY(-${r-o+n}px)`,a.style.position="fixed"):(a.style.transform="",a.style.position="")},window.onresize=()=>{window.innerWidth<=1024&&(a.style.position="relative",a.style.transform="")},window.innerWidth>=1024&&(this.sidebarVisible=!0)},beforeUnmount(){window.removeEventListener("scroll",this.loadNextPage)},methods:{openDialog(e){this.selectedAnime=e,this.$refs.animeDialogRef.openDialog()},itemProps(e){return{id:e.id,title:e.name,subtitle:e.subtitle}},toggleSidebar(){this.sidebarVisible=!this.sidebarVisible},handleUrlChange(){this.animeList=[],this.currPage=1,this.animeFound=!0,this.animeFoundInitialized=!1,this.fetchAnimeData(),window.scrollTo({top:0})},submitForm(){this.$router.push(`/catalog?search=${encodeURIComponent(this.searchQuery)}`)},getUrlParams(){const e=new URLSearchParams(window.location.search),a={};for(const[D,o]of e){const r=D.replace(/\[\]$/,"");r in a?a[r]+=`,${o}`:a[r]=o}return a},loadNextPage(){this.isNearBottom()&&this.fetchAnimeData()},isNearBottom(){const e=this.$refs.animeCatalog;if(e){const a=e.offsetTop+e.offsetHeight;return window.innerHeight+window.scrollY>=a-200}return!1},async fetchAnimeData(){if(!this.loading)try{this.loading=!0;const e=this.getUrlParams(),o=(await(await fetch("https://shikimori.one/api/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:`
                        query {
                            animes(
                                search: "${e.search||""}",
                                season: "${e.season||""}",
                                status: "${e.status||"released,ongoing"}",
                                kind: "${e.kind||"tv,ona,ova"}",
                                order: ${e.sort||"popularity"},
                                rating: "${e.rating||""}",
                                genre: "${e.genre||""}",
                                limit: ${this.limit},
                                page: ${this.currPage},
                                censored: false,
                            ) {
                                id
                                name
                                russian
                                kind
                                score
                                description
                                genres {
                                    id
                                    russian
                                }
                                videos { playerUrl }
                                airedOn {
                                    year
                                }
                                poster {
                                    miniUrl
                                    mainUrl
                                    originalUrl
                                }
                            }
                        }
                    `})})).json()).data.animes;this.animeCatalogListSkeleton=!1,this.animeList=[...this.animeList,...o],this.currPage++,o.length===0&&this.animeFoundInitialized===!1?(this.animeFound=!1,this.animeFoundInitialized=!0):(this.animeFound=!0,this.animeFoundInitialized=!0)}catch{this.error()}finally{this.loading=!1}}}};const w=e=>(S("data-v-e33881d9"),e=e(),U(),e),X={key:0},Z={key:1,ref:"animeCatalog"},K={style:{width:"100%"}},u4=w(()=>B("span",null,"\u2022",-1)),e4={key:2,class:"empty-anime-message"},t4=w(()=>B("h3",null,"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u{1F614}",-1)),i4=[t4],a4={class:"content-wrapper d-flex flex-column ga-5 pb-5"},s4={class:"submit-filter"},n4={class:"submit-filter-inner-container pa-4 d-flex ga-4",style:{"background-color":"#212121","border-radius":"6px"}};function l4(e,a,D,o,r,n){const F=A("anime-dialog");return E(),c(C,null,[u(l,{class:"ota-anime-containers mt-4 mb-13",variant:"text"},{default:t(()=>[u(d,{class:"ota-anime-containers-v-title pa-0"},{default:t(()=>[i("\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0440\u0435\u043B\u0438\u0437\u043E\u0432")]),_:1}),u(m,{class:"ota-anime-containers-v-subtitle pa-0"},{default:t(()=>[i("\u0421\u0430\u043C\u044B\u0435 \u043D\u043E\u0432\u044B\u0435 \u0438 \u0441\u0432\u0435\u0436\u0438\u0435 \u044D\u043F\u0438\u0437\u043E\u0434\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435")]),_:1}),u(f,{"no-gutters":"",class:"mt-2 flex-nowrap"},{default:t(()=>[u(_,{onSubmit:V(n.submitForm,["prevent"]),class:"w-100"},{default:t(()=>[u(N,{label:"\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u043C \u0438\u0441\u043A\u0430\u0442\u044C \u0432 \u043C\u0438\u0440\u0435 \u0430\u043D\u0438\u043C\u0435?",variant:"solo-filled","hide-details":"",density:"comfortable",autocomplete:"off",modelValue:e.searchQuery,"onUpdate:modelValue":a[0]||(a[0]=s=>e.searchQuery=s)},null,8,["modelValue"])]),_:1},8,["onSubmit"]),u(h,{icon:e.sidebarVisible?"mdi-close":"mdi-filter",rounded:"",class:"ml-4",variant:"tonal",density:"default",onClick:n.toggleSidebar},null,8,["icon","onClick"])]),_:1}),u(f,{"no-gutters":"",class:"mt-4 d-flex ga-4 flex-row flex-nowrap catalog-container"},{default:t(()=>[u(l,{"max-width":"100%",width:"100%",rounded:"lg"},{default:t(()=>[u(T,null,{default:t(()=>[e.animeCatalogListSkeleton?(E(),c("div",X,[(E(),c(C,null,g(10,s=>u(l,{variant:"text",class:"pa-0",key:s},{default:t(()=>[u(R,{class:"mb-3",type:"list-item-three-line"})]),_:2},1024)),64))])):(E(),c("div",Z,[(E(!0),c(C,null,g(e.animeList,s=>(E(),$(l,{key:s.id,onClick:m4=>n.openDialog(s),link:"",rounded:"0",class:"catalog-content-containers pa-2 pa-xs-2 pa-sm-2 pa-md-3 pa-lg-4 pa-xl-5 pa-xxl-5 pt-3 pt-xs-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-6 pt-xxl-6 pb-3 pb-xs-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-6 pb-xxl-6",variant:"text",style:{"border-bottom":"1px solid rgba(158,158,158,0.10)"}},{default:t(()=>[u(f,{"no-gutters":"",class:"flex-nowrap"},{default:t(()=>[u(H,{"lazy-src":s.poster.miniUrl,src:s.poster.mainUrl,rounded:"lg",cover:"",class:"pointer-events-none user-select-none mr-3 catalog-content-containers-v-image overflow-hidden"},null,8,["lazy-src","src"]),B("div",K,[u(d,{class:"pa-0 text-wrap",style:{"font-size":"1.2em","font-weight":"bold"}},{default:t(()=>[i(b(s.russian),1)]),_:2},1024),u(m,{class:"pa-0 d-flex ga-1 pt-1 pb-2 text-wrap",style:{"font-size":"0.8em"}},{default:t(()=>[i(" \u0422\u0438\u043F: "+b(s.kind)+" ",1),u4,i(" \u041E\u0446\u0435\u043D\u043A\u0430: "+b(s.score),1)]),_:2},1024),u(O,{class:"pa-0 catalog-content-container-card-text",style:{"font-family":"'Inter', sans-serif"}},{default:t(()=>[i(b(e.cleanDescription(s.description)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1032,["onClick"]))),128))],512)),!e.animeFound||!e.animeFound&&!e.animeFoundInitialized?(E(),c("div",e4,i4)):I("",!0)]),_:1})]),_:1}),z(u(l,{width:"100%",class:"sidebar",rounded:"lg",height:"100%",position:"relative",style:{"background-color":"transparent"}},{default:t(()=>[B("div",a4,[u(_,{class:"contents pt-2 position-relative",style:{height:"100%","background-color":"#212121","border-radius":"6px"}},{default:t(()=>[u(l,{variant:"text",class:"anime-filter-content-v-card pl-4 pr-4",width:"100%"},{default:t(()=>[u(d,{class:"pa-0",style:{"font-size":"1em"}},{default:t(()=>[i("\u0421\u0442\u0430\u0442\u0443\u0441")]),_:1}),u(m,{class:"pa-0",style:{"font-size":"0.8em","white-space":"normal !important"}},{default:t(()=>[i(" \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0430\u043D\u0438\u043C\u0435, \u0438\u0437 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432: ")]),_:1}),u(p,{density:"comfortable",variant:"outlined",clearable:"",class:"mt-2","item-props":n.itemProps,items:e.statusItems,label:"\u0412\u044B\u0431\u0438\u0440\u0438\u0442\u0435 \u0421\u0442\u0430\u0442\u0443\u0441"},null,8,["item-props","items"])]),_:1}),u(l,{variant:"text",class:"anime-filter-content-v-card pl-4 pr-4",width:"100%"},{default:t(()=>[u(d,{class:"pa-0",style:{"font-size":"1em"}},{default:t(()=>[i("\u0422\u0438\u043F")]),_:1}),u(m,{class:"pa-0",style:{"font-size":"0.8em","white-space":"normal !important"}},{default:t(()=>[i(" \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0442\u0438\u043F\u043E\u0432 \u0430\u043D\u0438\u043C\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430: ")]),_:1}),u(p,{multiple:"",chips:"",density:"comfortable",variant:"outlined",clearable:"",class:"mt-2","item-props":n.itemProps,items:e.kindItems,label:"\u0412\u044B\u0431\u0438\u0440\u0438\u0442\u0435 \u0422\u0438\u043F"},null,8,["item-props","items"])]),_:1}),u(l,{variant:"text",class:"anime-filter-content-v-card pl-4 pr-4",width:"100%"},{default:t(()=>[u(d,{class:"pa-0",style:{"font-size":"1em"}},{default:t(()=>[i("\u0416\u0430\u043D\u0440\u044B")]),_:1}),u(m,{class:"pa-0",style:{"font-size":"0.8em","white-space":"normal !important"}},{default:t(()=>[i(" \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0436\u0430\u043D\u0440\u044B \u0434\u043B\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438 \u043D\u0430\u0448\u0438\u0445 \u0440\u0435\u043B\u0438\u0437\u043E\u0432: ")]),_:1}),u(p,{multiple:"",chips:"",density:"comfortable",variant:"outlined",clearable:"",class:"mt-2","item-props":n.itemProps,items:e.genreItems,label:"\u0412\u044B\u0431\u0438\u0440\u0438\u0442\u0435 \u0416\u0430\u043D\u0440\u044B"},null,8,["item-props","items"])]),_:1}),u(l,{variant:"text",class:"anime-filter-content-v-card pl-4 pr-4",width:"100%"},{default:t(()=>[u(d,{class:"pa-0",style:{"font-size":"1em"}},{default:t(()=>[i("C\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430")]),_:1}),u(m,{class:"pa-0",style:{"font-size":"0.8em","white-space":"normal !important"}},{default:t(()=>[i(" \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u043E\u043F\u0446\u0438\u0439: ")]),_:1}),u(p,{density:"comfortable",variant:"outlined",clearable:"",class:"mt-2","item-props":n.itemProps,items:e.sortItems,label:"C\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u041F\u043E"},null,8,["item-props","items"])]),_:1}),u(l,{variant:"text",class:"anime-filter-content-v-card pl-4 pr-4",width:"100%"},{default:t(()=>[u(d,{class:"pa-0",style:{"font-size":"1em"}},{default:t(()=>[i("\u0421\u0435\u0437\u043E\u043D")]),_:1}),u(m,{class:"pa-0",style:{"font-size":"0.8em","white-space":"normal !important"}},{default:t(()=>[i(" \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u044B\u0439 \u0441\u0435\u0437\u043E\u043D \u0438\u0437 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432: ")]),_:1}),u(p,{density:"comfortable",variant:"outlined",clearable:"",class:"mt-2","item-props":n.itemProps,items:e.yearItems,label:"\u0412\u044B\u0431\u0438\u0440\u0438\u0442\u0435 \u0421\u0435\u0437\u043E\u043D"},null,8,["item-props","items"])]),_:1}),u(l,{variant:"text",class:"anime-filter-content-v-card pl-4 pr-4",width:"100%"},{default:t(()=>[u(d,{class:"pa-0",style:{"font-size":"1em"}},{default:t(()=>[i("\u041E\u0446\u0435\u043D\u043A\u0430")]),_:1}),u(m,{class:"pa-0",style:{"font-size":"0.8em","white-space":"normal !important"}},{default:t(()=>[i(" \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043B\u044F \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438 \u0430\u043D\u0438\u043C\u0435 \u043F\u043E \u043E\u0446\u0435\u043D\u043A\u0430\u043C: ")]),_:1}),u(p,{density:"comfortable",variant:"outlined",clearable:"",class:"mt-2","item-props":n.itemProps,items:e.ratingItems,label:"\u0412\u044B\u0431\u0438\u0440\u0438\u0442\u0435 \u041E\u0446\u0435\u043D\u043A\u0443"},null,8,["item-props","items"])]),_:1})]),_:1}),B("div",s4,[B("div",n4,[u(h,{theme:"customDarkTheme",variant:"flat","prepend-icon":"mdi-check-all"},{default:t(()=>[i(" \u041F\u043E\u0438\u0441\u043A ")]),_:1}),u(h,{thtme:"customDarkTheme",variant:"text","prepend-icon":"mdi-window-close"},{default:t(()=>[i(" \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C ")]),_:1})])])])]),_:1},512),[[P,e.sidebarVisible]])]),_:1})]),_:1}),u(F,{selectedAnime:e.selectedAnime,ref:"animeDialogRef"},null,8,["selectedAnime"])],64)}const o4=y(J,[["render",l4],["__scopeId","data-v-e33881d9"]]),r4=L({name:"CatalogView",components:{PrimaryHeader:k,AnimeCatalog:o4}});function d4(e,a,D,o,r,n){const F=A("primary-header"),s=A("anime-catalog");return E(),c(C,null,[u(F),u(q,null,{default:t(()=>[u(Y,{tag:"section"},{default:t(()=>[u(Q,{style:{"max-width":"var(--ota-ku-max-width)",padding:"20px 10px 0 10px","align-items":"center"}},{default:t(()=>[u(W,{items:["\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430","\u041A\u0430\u0442\u0430\u043B\u043E\u0433"],class:"pa-0",style:{"font-size":"0.8em"}},{divider:t(()=>[u(j,{icon:"mdi-chevron-right",color:"#9e9e9e"})]),_:1}),u(s)]),_:1})]),_:1})]),_:1})],64)}const A4=y(r4,[["render",d4]]);export{A4 as default};
