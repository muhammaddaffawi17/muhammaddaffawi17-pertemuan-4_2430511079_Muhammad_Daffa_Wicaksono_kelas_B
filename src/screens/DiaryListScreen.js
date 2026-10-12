import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

import bosanImage from '../../assets/moods/bosan.jpg';
import kumpulImage from '../../assets/moods/kumpul.jpg';
import mitemImage from '../../assets/moods/mitem.jpg';
import pp from '../../assets/moods/pp.jpg';
import pagiImage from '../../assets/moods/pagi.jpg';
import senjaImage from '../../assets/moods/senja.jpg';

const diaryEntries = [
  {
    id: 1,
    title: 'Senja di Perjalanan Pulang',
    date: '2026-10-10',
    preview: 'Sore ini aku pulang setelah menjalani hari yang cukup melelahkan. Langit senja terlihat indah dan membuat pikiranku terasa lebih tenang...',
    moodImage: senjaImage,
    moodType: 'tired',
  },
  {
    id: 2,
    title: 'Memulai Hari dengan Semangat',
    date: '2026-10-09',
    preview: 'Pagi ini aku bangun lebih awal, menikmati udara segar, dan bersiap menjalani aktivitas. Semoga hari ini membawa banyak hal baik...',
    moodImage: pagiImage,
    moodType: 'calm',
  },
  {
    id: 3,
    title: 'Hari Penuh Kebahagiaan',
    date: '2026-10-08',
    preview: 'Hari ini menyenangkan sekali! Aku menghabiskan waktu bersama orang-orang tersayang, bercanda, tertawa, dan membuat kenangan baru...',
    moodImage: kumpulImage,
    moodType: 'cheerful',
  },
  {
    id: 4,
    title: 'Bosan di Tengah Kesibukan',
    date: '2026-10-07',
    preview: 'Hari ini rasanya membosankan. Aku sudah mencoba mencari kegiatan baru, tetapi belum menemukan sesuatu yang menarik untuk dilakukan...',
    moodImage: bosanImage,
    moodType: 'bored',
  },
  {
    id: 5,
    title: 'Waktu untuk Diri Sendiri',
    date: '2026-10-06',
    preview: 'Akhirnya ada waktu untuk bersantai di kamar, menonton film favorit, mendengarkan musik, dan menikmati waktu tanpa terburu-buru...',
    moodImage: mitemImage,
    moodType: 'calm',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.welcomeText}>WELCOME,</Text>
          <Text style={styles.headerTitle}>Buku Harian Daffawi</Text>
        </View>
        <Image source={pp} style={styles.avatar} />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodImage={entry.moodImage}
          moodType={entry.moodType}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 14,
    color: '#7894cc',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#c1abbd',
  },
});
