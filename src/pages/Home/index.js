import React from 'react';
import { View, Text, TextInput, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import New from '../../components/New';
import House from '../../components/House';
import Recommended from '../../components/Recommended';
export default function Home() {
  const navigation = useNavigation();
  // const [modalVisible, setModalVisible] = useState(false);

  // function showresult() {

  //   if (!modalVisible) {
  //     setModalVisible(true);
  //   }
  //   else {
  //     setModalVisible(false);
  //   }


  //   console.log('aq');

  // }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#FFF' }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather
            name="search"
            size={24}
            color="#000"
          />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>
          Novidades
        </Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}>

        <New

          cover={require('../../assets/house1.jpg')}
          name="Casa de praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => navigation.navigate('Detail')}
        // showInfo={showresult}
        />

        <New

          cover={require('../../assets/house2.jpg')}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => navigation.navigate('Detail')}
        // showInfo={showresult}
        />

        <New

          cover={require('../../assets/house3.jpg')}
          name="Rancho SP"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={() => navigation.navigate('Detail')}
        // showInfo={showresult}
        />

        {/*           
          <Modal
            transparent={true}
            visible={modalVisible}
          >
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5);',
              marginTop: '80%',
              alignSelf:'flex-end',
              height: 220,
              width: 180,
              paddingHorizontal: 15,
              marginRight: 30,
              marginLeft: '20%',
              marginBottom: 5,
            }}
            >
              <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>
              <Ionicons name="close-circle-outline" style={{ textAlign: 'right' }} size={25} color="red" onPress={showresult} />
              <Text style={{ fontSize: 10, textAlign: 'center', color: '#fff', fontFamily: 'Montserrat_500Medium', }}>
               {'\n'} A fazenda conta com uma linda piscina com vista para os animais e toda vegetação dos arredores! Na propriedade existem cavalos, bois, vaca de leite, cachorros como um Golden e demais, coelhos, gato, peru, galinhas e porcos!
                Temos uma deliciosa hidromassagem no quintal para até cinco pessoas podendo tornar a sua estadia ainda mais relaxante!
                Possuímos também bicicletas, 3 açudes, acessórios para pesca, fogão a lenha, forno à lenha, churrasqueira e um lindo kiosque no jardim para apreciar uma boa música!
                Lugar é ideal para quem ama os animais e gosta de se conectar com a natureza!

{'\n'}
<Text style={{fontSize:15, fontWeight:'bold'}}>Outras observações</Text> {'\n'}
Temos caseiros para orientar no que for preciso!
Nossos animais são vacinados!
A fazenda ficará disponível para a família que se hospedar!
                
                
            </Text>
            </ScrollView>
            </View>
          </Modal> */}

      </ScrollView>

      <View style={{
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
      }}>
        <Text style={[styles.title, { marginTop: 20 }]}>
          Próximo de você
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}>

        <House
          cover={require('../../assets/house4.jpg')}
          description="Casa moderna"
          price="R$ 450,90"
        />
        <House
          cover={require('../../assets/house5.jpg')}
          description="Casa moderna"
          price="R$ 690,70"
        />
        <House
          cover={require('../../assets/house6.jpg')}
          description="Casa moderna"
          price="R$ 810,10"
        />
      </ScrollView>
      <Text style={[styles.title, { marginTop: 20 }]}>
        Dica do dia
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}>

        <Recommended
          cover={require('../../assets/house1.jpg')}
          house="Casa Floripa"
          offer="20%"
        />

        <Recommended
          cover={require('../../assets/house4.jpg')}
          house="Casa São Paulo"
          offer="15%"
        />

        <Recommended
          cover={require('../../assets/house6.jpg')}
          house="Casa de Praia"
          offer="10%"
        />

      </ScrollView>
    </ScrollView>
  );
}
