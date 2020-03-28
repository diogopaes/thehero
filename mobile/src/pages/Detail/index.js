import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailCompose from 'expo-mail-composer';

import LogoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();

  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajuda no caso "Cadelinha atropelada" com o valor de R$120,00';
  const phoneSend = 5541000000000;

  function navigationBack() {
    navigation.goBack('Incidents');
  }

  function sendMail() {
    MailCompose.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['diogopaesdev@gmail.com'],
      body: message,
    })
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${phoneSend}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoImg}/>
        <TouchableOpacity  style={styles.headerButton} onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>Ong:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>Descrição:</Text>
        <Text style={styles.incidentValue}>A Cadelinha Julia foi atropelada po um carro no bairro Santana e teve que passar po uma cirurgia as pressas.</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={[styles.incidentValue, { marginBottom: 0 }]}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}