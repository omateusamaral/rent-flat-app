import React, { useState } from 'react';
import { View, Text, TextInput, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather, Ionicons } from '@expo/vector-icons'
import styles from './styles';
import New from '../../components/New';
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  function showresult() {

    if (!modalVisible) {
      setModalVisible(true);
    }
    else {
      setModalVisible(false);
    }


    console.log('aq');

  }
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

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 15 }}>

          <New

            cover={require('../../assets/house1.jpg')}
            name="Casa de praia"
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
            onPress={() => { }}
            showInfo={showresult}
          />
          <>

          </>
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
          </Modal>

        </ScrollView>
      </View>
    </ScrollView>
  );
}
