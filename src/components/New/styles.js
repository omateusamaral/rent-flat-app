import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    margin: 20,
    backgroundColor: '#FFF',
    height: 270,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
    
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 10
  },
  content:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10
  },
  title:{
    fontFamily:'Montserrat_700Bold',
    fontSize:12,
    color:'#4f4a4a'
  },
  dot:{
    width:4,
    height:4,
    borderRadius:4,
    backgroundColor:'red',
    marginHorizontal:4,
  },
  badge:{
    color:'red',
    fontSize:9,
    fontFamily:'Montserrat_700Bold',

  }
});

export default styles;