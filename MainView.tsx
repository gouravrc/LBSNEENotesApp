/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IOS_COLOR_CODE, IOS_COLOR_CODE_RED} from './constants/utils';
import NotesCard from './NotesCardComponent';
import AddNotesModal from './AddNotesComponent';
import {useDispatch} from 'react-redux';
import {deleteNotes, setNotes} from './actions';
import {connect} from 'react-redux';
import ModalPreview from './NotesCardComponent/ModalPreview';

function MainView(props: any): React.JSX.Element {
  const dispatch = useDispatch();
  const [addNotesModal, setAddNotesModal] = useState<boolean>(false);
  const [notesArr, setNotesArr] = useState<any>();
  const [modalPreview, setModalPreview] = useState<any>(false);
  const [modalPreviewTitle, setModalPreviewTitle] = useState<any>();
  const [modalPreviewDesc, setModalPreviewDesc] = useState<any>();
  const [modalPreviewTime, setModalPreviewTime] = useState<any>();

  const backgroundStyle = {};
  /**
   * useMemo hooks use below for rendering Notes Car
   * Prevent unnecessary rendering
   */
  const renderNotesOptimized = useMemo(
    () => renderNotesComponent(props.notesProps.notes),
    [props.notesProps.notes],
  );
  /**
   * useCallback hooks use to set Notesprops from Reducer
   * Prevent unnecessary duplicate setting of reducer values 
   */
  const notesPropsCallbackOptimized = useCallback(
    () => setNotesProps(notesArr),
    [props.notesProps.notes],
  );

  function onAddNotes(params: any) {
    dispatch(setNotes(params));
    setAddNotesModal(false);
  }

  function setNotesProps(notes: any) {
    setNotesArr(notes);
  }

  useEffect(() => {
    notesPropsCallbackOptimized();
  }, [props.notesProps]);

  function renderNotesComponent(notes: any[]) {
    return props.notesProps.notes.map((item: any, index: any) => (
      <NotesCard
        title={item.title}
        desc={item.desc}
        id={item.id}
        onDelete={() => onDeleteNotes(item.id)}
        onLongPress={(e:any)=>{
          setModalPreview(true)
          setModalPreviewTitle(e.title)
          setModalPreviewDesc(e.desc)
          setModalPreviewTime(e.id)
        }}
        onPressOut={()=>{
          setModalPreview(false)
          setModalPreviewTitle(undefined)
          setModalPreviewDesc(undefined)
          setModalPreviewTime(undefined)
        }}
      />
    ));
  }

  function onDeleteNotes(params: any) {
    dispatch(deleteNotes(params));
  }

  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <Text style={styles.header_text}>LBSNEE Notes</Text>
          <TouchableOpacity
            onPress={() => {
              setAddNotesModal(true);
            }}>
            <Text style={styles.header_text_minor}>Add Notes</Text>
          </TouchableOpacity>
        </View>

        <AddNotesModal
          open={addNotesModal}
          onCancel={() => setAddNotesModal(false)}
          onDone={(obj: any) => onAddNotes(obj)}
        />
        <ModalPreview 
        open={modalPreview} 
        title={modalPreviewTitle} 
        desc={modalPreviewDesc}
        time={modalPreviewTime}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          {props.notesProps.notes.length === 0 ? (
            <View style={styles.no_records_div}>
              <Text style={{color: 'grey', fontSize: 20}}>
                No Records Found
              </Text>
            </View>
          ) : (
            renderNotesOptimized
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const mapStateToProps = (state: any) => {
  return {
    notesProps: state.notes,
  };
};

export default connect(mapStateToProps, null)(MainView);

const styles = StyleSheet.create({
  no_records_div: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"50%"
  },
  header_text_minor: {
    fontSize: 15,
    color: IOS_COLOR_CODE,
    top: 5,
  },
  header_text: {
    fontSize: 25,
    color: IOS_COLOR_CODE_RED,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
