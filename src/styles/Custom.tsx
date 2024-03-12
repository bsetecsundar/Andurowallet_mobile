import { StyleSheet } from "react-native";
import { background, gray, greyHiglight, greylightwhite, text, white, } from "./Variables";
export default StyleSheet.create({
  body: {
    color: text,
    fontFamily: "NunitoSans-Medium",
  },
  bgview: {
    backgroundColor: background,
    height: '100%',
  },
  headertitle: {
    fontSize: 26,
    textAlign: 'center',
    color: white,
    paddingBottom: 8,
    fontFamily:'NunitoSans-Medium'
  },
  setupseed: {
    fontSize: 32,
    textAlign: 'center',
    color: white,
    paddingBottom: 14,
    fontFamily:'NunitoSans-Medium'
  },
  logotext: {
    textAlign: 'center',
    paddingBottom: 0,
  },
  dflx: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  gettingpara: {
    fontSize: 22,
    textAlign: 'center',
    color: text,
    paddingBottom: 8,
    fontFamily:'NunitoSans-Medium'
  },
  importwalletpara: {
    fontSize: 17,
    textAlign: 'center',
    color: text,
    paddingBottom: 12,
    lineHeight: 22,
    fontFamily:'NunitoSans-Medium'
  },
  setupseedbox: {
    color: text,
    fontSize: 17,
    fontFamily:'NunitoSans-Medium'
  },
  logoimg: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  setupflx: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paddleftright: {
    padding: 8 ,
    paddingTop:4,
    borderStyle: 'solid',
    borderColor: greylightwhite,
    borderWidth: 2,
    marginBottom: 7,
    marginTop: 7,
    textAlign: 'center',
  },
  dflxremind: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xmark: {
    color: white,
    position: 'absolute',
    top: 17,
    right: 46,
    bottom: "auto",
  },
  confirseedpara: {
    color: text,
    fontSize: 16,
    fontFamily:'NunitoSans-Medium'
  },
  logotextbtm: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  titlepara: {
    fontSize: 20,
    paddingRight: 2,
    textAlign: 'center',
    color: white,
    paddingBottom: 16,
    fontFamily:'NunitoSans-Medium'
  },
  creaeborder: {
    borderStyle: 'solid',
    borderColor: greylightwhite,
    borderWidth: 1,
    padding: 24,
    marginBottom: 16,
  },
  fontplus: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderplus: {
    borderStyle: 'solid',
    borderColor: white,
    borderWidth: 2,
    borderRadius: 3,
    padding: 6,
    marginBottom: 8,
  },
  faplusicon: {
    color: white,
  },
  dflxstart: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
  },
  dashpaddrightleft: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  dashboardtitle: {
    fontSize: 30,
    color: text,
    paddingBottom: 8,
    marginTop: 22,
    fontFamily:'NunitoSans-Medium'
  },
  dashboardusd: {
    fontSize: 36,
    color: text,
    paddingBottom: 8,
    width: 255,
    marginRight: 'auto'
  },
  dflxdash: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  sendtext: {
    color: text,
    fontSize: 20,
    fontFamily:'NunitoSans-Medium'
  },
  dashboardlist: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    borderColor: greylightwhite,
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
  },
  dashboradlistflx: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  startget: {
    fontSize: 18,
    paddingRight: 2,
    textAlign: 'center',
    color: text,
    paddingBottom: 22,
    fontFamily:'NunitoSans-Medium'
  },
  logoimgget: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    resizeMode: 'contain'
  },
  greatingpara: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: 'center',
    color: text,
    paddingBottom: 16,
    marginTop: 12,
    lineHeight: 28,
    fontFamily:'NunitoSans-Medium'
  },
  // inputflx: {
  //   flexDirection: 'column',
  //   rowGap: 2,
  //   justifyContent:'center'
  // },
  creaebordertop: {
    borderStyle: 'solid',
    borderColor: greyHiglight,
    borderWidth: 1,
    width: 320,
    padding: 20,
    marginBottom: 16,
    marginTop: 16,
  },
  setupflxbox: {
    width: 270,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faclipboard: {
    color: text,
    width: 20,
    height: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom:20
  },
  createtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: text,
    paddingBottom: 8,
    fontFamily:'NunitoSans-Medium'
  },
  input: {
    height: 50,
    borderWidth: 2,
    padding: 10,
    borderColor: greylightwhite,
    width: 250,
    borderRadius: 4,
  },
  inputnbm: {
    paddingBottom: 8,
    paddingTop: 8,
  },
  headerflx: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: gray,
    paddingBottom: 13,
    paddingTop: 13,
  },
  settingsborder: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: greylightwhite,
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 0,
    paddingRight: 12,
  },
  iconsetting: {
    color: text,
    paddingRight: 52,
    fontSize: 32,
    fontFamily:'NunitoSans-Medium'
  },
  chvron: {
    color: text,
    paddingRight: 32,
    fontSize: 32,
    fontFamily:'NunitoSans-Medium'
  },
  settingtitle: {
    color: text,
    fontSize: 20,
    fontFamily:'NunitoSans-Medium'
  },
  iconsettt: {
    paddingRight: 52,
    color: text,
    fontSize: 20,
    position: 'absolute',
    right: 0
  },
  postiotoggle: {
    position: 'absolute',
    right: 0,
  },
  creaebordertopback: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    padding:20,
    paddingBottom:0
  },
  dflxremindabsolut: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    left: 0,
    right: 0,
    top: '29%',
  },
  peginimg: {
    width: 35,
    height: 35,
  },
  homepageflx: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  homebuton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    width: "100%",
  },
  bitcoinhome: {
    width: 45,
    resizeMode: 'contain',
    marginRight: 14,
  },
  Transactiontitle: {
    color: white,
    fontSize: 24,
    marginTop: 40,
    fontFamily:'NunitoSans-Medium'
  },
  dashboardbtc: {
    color: greyHiglight,
    fontSize: 16,
    fontFamily:'NunitoSans-Medium'
  },
  btcoindash: {
    color: greyHiglight,
    fontSize: 16,
    fontFamily:'NunitoSans-Medium'
  },
  homebitcoin: {
    width: 80,
    resizeMode: 'contain',
    marginRight: 14,
  },
  arrow: {
    fontSize: 32,
  },
  sendheader: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
    fontFamily:'NunitoSans-Medium'
  },
  marginleftright: {
    marginLeft: 14,
    marginRight: 14
  },
  sendflx: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  sendwidsev: {
    width: '74%'
  },
  sendwidleft: {
    width: "31%"
  },
  sendrightwid: {
    width: "69%"
  },
  sendlabel: {
    fontSize: 18,
    color: white,
    fontFamily:'NunitoSans-Medium'
  },
  sendrighinpu: {
    fontSize: 18,
    color: white,
    paddingLeft: 8,
    fontFamily:'NunitoSans-Medium'
  },
  sendtoppadd: {
    color: white,
    fontSize: 18,
    paddingTop: 10,
    fontFamily:'NunitoSans-Medium'
  },
  receiveclip: {
    color: white,
  },
  receivedaddress: {
    fontSize: 21,
    paddingRight: 2,
    textAlign: 'center',
    color: text,
    paddingBottom: 16,
    marginTop: 12,
    fontFamily:'NunitoSans-Medium'
  },
  setpasswordheder: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#e55353',
    paddingBottom: 13,
    paddingTop: 13,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headertool: {
    color: white,
    fontSize: 18,
    paddingRight: 12,
    fontWeight: '500',
    fontFamily:'NunitoSans-Medium'
  },
  headersend: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: gray,
    padding: 13
  },
  nftcreatinput: {
    marginTop: 22
  },
  nftcreaet: {
    display: 'flex',
  },
  dashboardlistleftfont: {
    color: greyHiglight,
    fontSize: 17,
    paddingBottom: 4,
    fontFamily:'NunitoSans-Medium'
  },
  dashboardlistrightfont: {
    color: greyHiglight,
    fontSize: 14,
    fontFamily:'NunitoSans-Medium'
  },
setupseedborder:{
  margin: 16,
  position: 'relative',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent:'center'
},
bordersetup:{
  marginLeft:16,
  marginRight:16,
  borderStyle: 'solid',
  borderColor: greyHiglight,
  borderWidth: 1,
  marginTop:14,
  marginBottom:14
},
nftidname:{
  fontSize: 16, 
  color: white, 
  fontWeight: '800', 
  paddingTop: 10, 
  paddingBottom: 4,
   paddingLeft: 6
},
nftassetname:{
  fontSize: 16,
   color: white,
    fontWeight: '800', 
    paddingBottom: 4,
     paddingLeft: 6
},
});
function rgba(arg0: number, arg1: number, arg2: number, arg3: number): any | import("react-native").ColorValue | undefined {
  throw new Error("Function not implemented.");
}

