import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryDetailModal({ visible, entry, onClose }) {
  if (!entry) return null;
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={entry.moodImage} style={styles.mood} />
          <Text style={styles.title}>{entry.title}</Text>
          <Text style={styles.date}>{entry.date}</Text>
          <Text style={styles.body}>{entry.body || entry.preview}</Text>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Tutup</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalView: { width: '85%', backgroundColor: COLORS.surface, borderRadius: RADIUS.card, padding: SPACE.xl, alignItems: 'center', borderWidth: 1, borderColor: COLORS.border },
  mood: { width: 64, height: 64, borderRadius: RADIUS.avatar, backgroundColor: '#eef2ff', marginBottom: SPACE.m },
  title: { fontSize: TYPO.h1, fontWeight: '700', color: COLORS.text, marginBottom: SPACE.xs, textAlign: 'center' },
  date: { fontSize: TYPO.caption, color: COLORS.muted, marginBottom: SPACE.l },
  body: { fontSize: TYPO.body, color: COLORS.text, textAlign: 'center', marginBottom: SPACE.xl, lineHeight: 20 },
  closeButton: { backgroundColor: COLORS.accent, borderRadius: RADIUS.card, paddingVertical: SPACE.m, paddingHorizontal: SPACE.xl, width: '100%', alignItems: 'center' },
  closeButtonText: { color: '#fff', fontWeight: '700', fontSize: TYPO.body },
});
