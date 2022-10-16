import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";



const PrivacyPolicy = () => {
    const navigation = useNavigation();



    const onPressBack = () => {
        navigation.navigate("SignUp")
    }
    return (
    <ScrollView>
        <View style={{ alignSelf:'center', flex: 1}}>
            
       <Ionic name="arrow-back" onPress={onPressBack} style={{fontSize: 30, bottom:110, left: 20, paddingTop: 180}}/>
<Text style={{ left: 20 ,bottom:80, fontSize: 40, fontWeight:'bold'}}>Privacy Policy</Text>
        <Text style={{ left: 20,fontWeight: 'bold', paddingBottom: 15 }}>Last updated: October 16, 2022</Text>
        <Text style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 15}}>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
        </Text>
        <Text style={{ left: 20 , fontSize: 40, fontWeight:'bold', paddingBottom: 40}}>Interpretation and Definitions</Text>
        <Text style={{ left: 20,fontWeight: 'bold', paddingBottom: 15 }}>Interpretation</Text>
        <Text style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 15}}>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </Text>
        <Text style={{ left: 20,fontWeight: 'bold', paddingBottom: 15 }}>Definitions</Text>
        <Text style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 15}}>
        For the purposes of this Privacy Policy:
        </Text>
        <FlatList
          data={[
            { key: 'Account means a unique account created for You to access our Service or parts of our Service.' },
            { key: 'Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
            { key: 'Application means the software program provided by the Company downloaded by You on any electronic device, named Calorise' },
            { key: 'Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Calorise.' },
            { key: 'Country refers to: Lithuania' },
            { key: 'Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.' },
            { key: 'Personal Data is any information that relates to an identified or identifiable individual.' },
            { key: 'Service refers to the Application.' },
            { key: 'Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.' },
            { key: 'Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10, paddingLeft: 20, paddingRight: 20  }}>
                <Text>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
        
        </View>
        </ScrollView>

    )

}


export default PrivacyPolicy