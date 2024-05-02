import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface INotesCardProps{
  title:string
  id:any
  onDelete:any
  onLongPress:any
  onPressOut:any
}

const NotesCard = (props: INotesCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={()=>props.onLongPress(props)} onPressOut={()=>props.onPressOut()} style={{flex: 2}}>
        <Text style={styles.title_text}>{props.title}</Text>
        <Text style={styles.title_text_minor}>Created on: {new Date(props.id).toDateString()} </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.onDelete()} style={styles.icon_div}>
        <Text style={{fontSize: 20, color: 'red'}}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon_div: {flex: 1, justifyContent: 'center', alignItems: 'flex-end'},
  title_text_minor: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  title_text: {color: 'grey', fontSize: 25},
  container: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: 'row',
  },
});
export default NotesCard;
