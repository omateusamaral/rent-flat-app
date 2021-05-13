import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#fff",
  },
  swiperContent:{
    flexDirection:'row',
    height:340,
    width:'100%'
  },
  headerContent:{
    paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    marginTop:20,
  },
  house:{
    fontFamily:'Montserrat_700Bold',
    fontSize:18,
    color:'#4f4a4a'
  },
  rating:{
    fontFamily:'Montserrat_500Medium',
    fontSize:9,
    color:'#4f4a4a'
  },
  myStarStyle:{
    color:"#E7A74e",
    backgroundColor:'transparent',
    textShadowColor:'#000',
  },
  price:{
    fontFamily:'Montserrat_700Bold',
    paddingHorizontal:20,
    fontSize:16,
    color:"#000"
  },
  description:{
    fontFamily:'Montserrat_700Bold',
    paddingHorizontal:20,
    color:"#b3aeae",
    fontSize:14,
    lineHeight:20,
    marginTop:20
  },
  slide:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    height:90,
    width:90,
    borderRadius:8,
    marginRight:20,
  }
});

export default styles;
