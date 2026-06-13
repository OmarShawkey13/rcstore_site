((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,B={ex:function ex(d,e,f){this.d=d
this.w=e
this.a=f},eu:function eu(d,e,f,g){var _=this
_.f=d
_.w=e
_.Q=f
_.a=g},
l2(){return new B.az(null)},
az:function az(d){this.a=d},
cJ:function cJ(){var _=this
_.e=_.d=!1
_.f=null
_.r=!1
_.c=_.a=null},
fQ:function fQ(d){this.a=d},
fP:function fP(d){this.a=d},
fM:function fM(d){this.a=d},
fN:function fN(d){this.a=d},
fO:function fO(d){this.a=d}},A,D,E
C=c[0]
B=a.updateHolder(c[3],B)
A=c[6]
D=c[5]
E=c[7]
B.ex.prototype={
C(d){var x=null
return new C.J("nav",x,this.d,x,x,x,this.w,x)}}
B.eu.prototype={
C(d){var x=y.g,w=C.K(x,y.a)
w.I(0,D.jT().$1$1$onClick(this.f,y.f))
return new C.J("button",null,this.w,null,C.K(x,x),w,this.Q,null)}}
B.az.prototype={
bg(){return new B.cJ()}}
B.cJ.prototype={
aj(){var x,w=this
w.aY()
w.bE()
x=C.ie(new B.fQ(w))
w.f=x
C.u(b.G.window).addEventListener("scroll",x)},
bE(){var x=this,w=C.ic(C.u(b.G.window).scrollY)
if(w>50&&!x.e)x.a7(new B.fM(x))
else if(w<=50&&x.e)x.a7(new B.fN(x))},
aI(){var x=this.f
if(x!=null)C.u(b.G.window).removeEventListener("scroll",x)
this.bA()},
cZ(){this.a7(new B.fO(this))},
C(d){var x=this,w=null,v="mobile-nav-link",u=x.e?" scrolled":"",t=x.d?" menu-open":"",s=x.gcY(),r=y.p,q=D.a0(C.f([A.b2,A.ba,D.a0(C.f([A.be,new B.eu(s,"menu-toggle",A.af,w)],r),w,"nav-right")],r),w,"container navbar-inner"),p=x.d?" active":""
return new B.ex("navbar"+u+t,C.f([q,D.a0(C.f([D.ht(A.t,v,"/",s),D.ht(A.r,v,"/#apps",s),D.ht(A.a9,v,"/about",s),A.bc],r),w,"mobile-menu"+p)],r),w)}}
var z=a.updateTypes(["~()"])
B.fQ.prototype={
$1(d){var x
C.u(d)
x=this.a
if(!x.r){C.am(C.u(b.G.window).requestAnimationFrame(C.ie(new B.fP(x))))
x.r=!0}},
$S:40}
B.fP.prototype={
$1(d){var x
C.id(d)
x=this.a
x.bE()
x.r=!1},
$S:41}
B.fM.prototype={
$0(){return this.a.e=!0},
$S:0}
B.fN.prototype={
$0(){return this.a.e=!1},
$S:0}
B.fO.prototype={
$0(){var x=this.a
x.d=!x.d},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.cJ.prototype,"gcY","cZ",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(D.C,[B.ex,B.eu])
w(B.az,D.ak)
w(B.cJ,D.Y)
x(C.ae,[B.fQ,B.fP])
x(C.bk,[B.fM,B.fN,B.fO])})()
C.fZ(b.typeUniverse,JSON.parse('{"ex":{"C":[],"l":[]},"eu":{"C":[],"l":[]},"az":{"ak":[],"l":[]},"cJ":{"Y":["az"],"Y.T":"az"}}'))
var y={c:C.E("W<b,b>"),p:C.E("v<l>"),g:C.E("b"),f:C.E("~"),a:C.E("~(o)")};(function constants(){var x=a.makeConstList
A.az=new C.B("Apps",null)
A.r=x([A.az],y.p)
A.aB=new C.B("Home",null)
A.t=x([A.aB],y.p)
A.aD=new C.B("About Us",null)
A.a9=x([A.aD],y.p)
A.k=new D.a_("hamburger-bar",null,E.i,null)
A.af=x([A.k,A.k,A.k],y.p)
A.aE=new C.B("RCMods",null)
A.a8=x([A.aE],y.p)
A.bp=new D.aP(null,A.a8,null)
A.ai=x([E.D,A.bp],y.p)
A.b2=new D.a7("/",null,"brand",null,A.ai,null)
A.b3=new D.a7("/",null,"nav-link",null,A.t,null)
A.b6=new D.a7("/#apps",null,"nav-link",null,A.r,null)
A.ay=new C.B("About",null)
A.a7=x([A.ay],y.p)
A.b1=new D.a7("/about",null,"nav-link",null,A.a7,null)
A.ab=x([A.b3,A.b6,A.b1],y.p)
A.ba=new D.a_("nav-links",null,A.ab,null)
A.at={target:0,rel:1}
A.v=new C.W(A.at,["_blank","noopener noreferrer"],y.c)
A.bj=new D.bG("Telegram","/images/telegram.webp","social-icon",null)
A.q=x([A.bj],y.p)
A.b4=new D.a7("https://t.me/RCModsWA",null,null,A.v,A.q,null)
A.bi=new D.bG("Instagram","/images/instagram.webp","social-icon",null)
A.u=x([A.bi],y.p)
A.b5=new D.a7("https://instagram.com/x_x_shawkey_x_x",null,null,A.v,A.u,null)
A.ag=x([A.b4,A.b5],y.p)
A.bc=new D.a_("mobile-menu-socials",null,A.ag,null)
A.x={target:0,rel:1,title:2}
A.ao=new C.W(A.x,["_blank","noopener noreferrer","Telegram"],y.c)
A.b0=new D.a7("https://t.me/RCModsWA",null,null,A.ao,A.q,null)
A.ap=new C.W(A.x,["_blank","noopener noreferrer","Instagram"],y.c)
A.b_=new D.a7("https://instagram.com/x_x_shawkey_x_x",null,null,A.ap,A.u,null)
A.ae=x([A.b0,A.b_],y.p)
A.be=new D.a_("nav-socials",null,A.ae,null)})()};
(a=>{a["oDp89BgwxE5R/nKS0OBCy7H8ffg="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
