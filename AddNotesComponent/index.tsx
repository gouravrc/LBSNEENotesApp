import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  DARK_MODE_SHADE,
  IOS_COLOR_CODE,
  IOS_COLOR_CODE_RED,
} from '../constants/utils';

interface IAddNotesModalProps {
  open: boolean;
  onDone: any;
  onCancel: any;
}

const AddNotesModal = (props: IAddNotesModalProps) => {
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();

  function resetState() {
    setTitle(undefined);
    setDesc(undefined);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.open}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal_div}>
              <Text style={{fontSize: 20, color: 'grey'}}>Add Notes</Text>
              <View style={{marginTop: 30}}>
                <TextInput
                  value={title}
                  placeholder="Notes Title"
                  placeholderTextColor={'darkgrey'}
                  onChangeText={e => setTitle(e)}
                  style={styles.modal_title_input}
                  maxLength={20}
                />
              </View>
              <View style={{marginTop: 30}}>
                <TextInput
                  value={desc}
                  placeholder="Notes Description"
                  placeholderTextColor={'darkgrey'}
                  onChangeText={e => setDesc(e)}
                  style={styles.modal_title_input}
                  maxLength={100}
                  multiline
                />
              </View>
              <View style={styles.modal_section}>
                <TouchableOpacity
                  onPress={() => {
                    resetState();
                    props.onCancel();
                  }}
                  style={styles.modal_section_minor}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: IOS_COLOR_CODE_RED,
                      marginTop: 20,
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    resetState();
                    props.onDone({
                      title,
                      desc,
                      id: new Date().getTime(),
                    });
                  }}
                  style={styles.modal_section_minor}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: IOS_COLOR_CODE,
                      marginTop: 20,
                      fontWeight: 'bold',
                    }}>
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AddNotesModal;

const styles = StyleSheet.create({
  modal_section_minor: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_section: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_title_input: {
    width: '100%',
    height: 60,
    fontSize: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    color: 'white',
  },
  modal_div: {
    width: '100%',
    height: 'auto',
    backgroundColor: DARK_MODE_SHADE,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
