import { StyleSheet } from "react-native";
import { background, gray, greyHiglight, greylightwhite, text, white, } from "./Variables";
export default StyleSheet.create({
    bgview: {
        backgroundColor: background,
        height: '100%',
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
      },
      importwalletpara: {
        fontSize: 17,
        textAlign: 'center',
        color: text,
        paddingBottom: 8,
        width: 255,
        marginLeft: 'auto',
        marginRight: 'auto'
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
        padding: 12,
        borderStyle: 'solid',
        borderColor: greylightwhite,
        borderWidth: 2,
        marginBottom: 7,
        marginTop: 7,
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
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
      confirseedpara:{
        color: white, 
        fontSize: 16,
      },
      logotextbtm: {
        textAlign: 'center',
        paddingBottom: 10,
      },
      titlepara: {
        fontSize: 18,
        paddingRight: 2,
        textAlign: 'center',
        color: text,
        paddingBottom: 16,
      },
      creaeborder: {
        borderStyle: 'solid',
        borderColor: greylightwhite,
        borderWidth: 1,
        width: 300,
        padding: 24,
        marginBottom: 16,
      },
      fontplus:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },
      borderplus:{
        borderStyle: 'solid',
        borderColor: white,
        borderWidth: 2,
        borderRadius: 3,
        padding:6,
        marginBottom:8,
      },
      faplusicon:{
        color:white,
      },
      dflxstart: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 16,
        paddingRight: 16,
      },
      dashpaddrightleft:{
        paddingLeft: 16,
        paddingRight: 16,
      },
      dashboardtitle: {
        fontSize: 30,
        color: text,
        paddingBottom: 8,
        marginTop:22,
      },
      dashboardusd: {
        fontSize: 32,
        color: text,
        paddingBottom: 8,
        width: 255,
        marginRight: 'auto'
      },
      dflxdash:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
      },
      sendtext:{
        color:white,
        fontSize:22,
      },
      dashboardlist:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        borderWidth:1,
        borderColor:greylightwhite,
        padding:12,
        borderRadius:12,
        marginTop:16,
      },
      dashboradlistflx:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between', 
      },
      startget: {
        fontSize: 18,
        paddingRight: 2,
        textAlign: 'center',
        color:text,
        paddingBottom:22,
      },
      logoimgget: {
        marginLeft:'auto',
        marginRight:'auto',
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
      },
      inputflx:{
        flex: 0,
        flexDirection:'column',
        rowGap:2,
      },
      creaebordertop: {
        borderStyle: 'solid',
        borderColor: greyHiglight,
        borderWidth: 1,
        width: 300,
        padding: 24,
        marginBottom: 16,
        marginTop: 16,
      },
      setupflxbox:{
        width:255,
        marginLeft:'auto',
        marginRight:'auto',
        flexDirection: 'row',
         flexWrap: 'wrap',
         justifyContent:'center',
         alignItems:'center',
      },
      setupbox:{
        padding:8,
      },
      faclipboard:{
        color:white,
        width:20,
        height:20,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      createtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: text,
        paddingBottom: 8,
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
        width:'100%',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor:gray,
        paddingBottom:13,
        paddingTop:13,
      },
      settingsborder:{
        width:'100%',
        borderBottomWidth:1,
        borderColor:greylightwhite,
        paddingTop:18,
        paddingBottom:16,
        paddingLeft:0,
        paddingRight:12,
      },
      iconsetting:{
        color:text,
        paddingRight:52,
        fontSize:32,
      },
      chvron: {
        color:text,
        paddingRight:32,
        fontSize:32,
      },
      settingtitle: {
        color:text,
        fontSize:20,
      },
      iconsettt: {
        paddingRight:52,
        color:text,
        fontSize:20,
        position:'absolute',
        right:0
      },
      postiotoggle:{
        position:'absolute',
        right:0, 
      },
      creaebordertopback :{
        borderStyle: 'solid',
        borderColor: greyHiglight,
        borderWidth: 1,
        width: 300,
        padding: 24,
        marginBottom: 16,
        marginTop: 16,
        position:'relative',
        
      },
      dflxremindabsolut:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
        left: 0,
        right: 0,
        top: '38%',
      },
      peginimg:{
        width:40,
        height:40,
      },
      homepageflx:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
      },
      homebuton:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        justifyContent:"center",
        width:"100%",
      },
      bitcoinhome:{
        width: 45, 
        resizeMode: 'contain',
        marginRight:14,
      },
      Transactiontitle:{
        color:white,
        fontSize:24,
        marginTop:40,
      },
      dashboardbtc:{
        color:greyHiglight,
        fontSize:16,
      },
      btcoindash:{
        color:greyHiglight,
        fontSize:16
      },
      homebitcoin:{
        width: 80, 
        resizeMode: 'contain',
        marginRight:14,
      },
      arrow:{
        fontSize:32,
      },
      sendheader:{
        color:white,
        fontSize:22,
        textAlign:'center'
      },
      marginleftright:{
        marginLeft:14,
        marginRight:14
      },
      sendflx:{
        display: "flex", 
        flexDirection: "row",
         alignItems: "center"
      },
      sendwidsev:{
        width:'74%'
      },
      sendwidleft:{
        width: "28%"
      },
      sendrightwid:{
        width: "72%"
      },
      sendlabel:{
        fontSize: 18, 
        color: white
      },
      sendrighinpu:{
        fontSize: 18, 
        color: white, 
        paddingLeft: 8
      },
      sendtoppadd:{
        color:white,
        fontSize:18,
        paddingTop:10
      },
      receiveclip:{
        color:white,
      },
      receivedaddress:{
        fontSize: 21,
        paddingRight: 2,
        textAlign: 'center',
        color: text,
        paddingBottom: 16,
        marginTop: 12,
      },
      setpasswordheder:{
        width:'100%',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor:'#e55353',
        paddingBottom:13,
        paddingTop:13,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
      },
      headertool:{
        color:white,
        fontSize:18,
        paddingRight:12,
        fontWeight:'500',
      },
      headersend:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor:gray,
        padding:13
      },
      nftcreatinput:{
        marginTop:22
      },
      nftcreaet:{
        display:'flex',
      }
});
