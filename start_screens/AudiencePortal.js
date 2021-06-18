import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, IconButton, Card, Title, Colors } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

export default function AudiencePortal({navigation}) {

  const LeftContent = props => <Avatar.Icon {...props} icon="shopping" />
  const MemoriesContent = props => <Avatar.Icon {...props} icon="view-dashboard" />
  const ShowContent = props => <Avatar.Icon {...props} icon="view-stream-outline" />

    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('HomeDrawer')} />
                <Text style={{color: '#fff'}} >Go Back</Text>
            </Appbar.Header>
            <Card style={{marginBottom: 10, marginTop: 10}} >
              <Card.Title title="Shop" subtitle="Shop from our store" left={LeftContent} />
              <Card.Actions>
              <IconButton
                icon="arrow-right"
                color={Colors.red500}
                size={20}
                onPress={() => navigation.navigate('shop')}
              />
              </Card.Actions>
            </Card>
            <Card style={{marginBottom: 10}} >
              <Card.Title title="Memories" subtitle="Explore Past Events" left={MemoriesContent} />
              <Card.Actions>
              <IconButton
                icon="arrow-right"
                color={Colors.red500}
                size={20}
                onPress={() => navigation.navigate('memories')}
              />
              </Card.Actions>
            </Card>
            <Card style={{marginBottom: 10}} >
              <Card.Title title="Show" subtitle="See current shows" left={ShowContent} />
              <Card.Actions>
              <IconButton
                icon="arrow-right"
                color={Colors.red500}
                size={20}
                onPress={() => navigation.navigate('showScreen')}
              />
              </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({});
