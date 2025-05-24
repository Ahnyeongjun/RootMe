import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Share,
  Alert,
} from 'react-native';
import { MainLayoutWithTabs, StatusBarComponent } from '../../components/common';

interface SharedItem {
  id: string;
  type: 'restaurant' | 'review';
  title: string;
  description: string;
  date: string;
  emoji: string;
}

const sharedItems: SharedItem[] = [
  {
    id: '1',
    type: 'restaurant',
    title: '명가 한정식',
    description: '친구들과 함께 다녀온 맛집! 정말 추천해요 👍',
    date: '2024.03.15',
    emoji: '🍱',
  },
  {
    id: '2',
    type: 'review',
    title: '오미라면 리뷰',
    description: '진짜 맛있는 라멘집 발견! 국물이 진해요',
    date: '2024.03.12',
    emoji: '🍜',
  },
  {
    id: '3',
    type: 'restaurant',
    title: '맛있는 분식',
    description: '떡볶이 맛집 공유합니다~',
    date: '2024.03.10',
    emoji: '🥟',
  },
];

export default function ShareScreen() {
  const [selectedTab, setSelectedTab] = useState('내가 공유한');

  const handleShare = async (item: SharedItem) => {
    try {
      await Share.share({
        message: `${item.title}\n${item.description}\n\n- RootMe 앱에서 공유`,
        title: item.title,
      });
    } catch (error) {
      console.error('공유 실패:', error);
    }
  };

  const handleCreateShare = () => {
    Alert.alert(
      '공유하기',
      '새로운 맛집이나 리뷰를 공유하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { text: '맛집 공유', onPress: () => console.log('맛집 공유') },
        { text: '리뷰 공유', onPress: () => console.log('리뷰 공유') },
      ]
    );
  };

  return (
    <MainLayoutWithTabs>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        
        <StatusBarComponent />

        {/* 헤더 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>공유</Text>
          <TouchableOpacity style={styles.createButton} onPress={handleCreateShare}>
            <Text style={styles.createButtonText}>+ 공유하기</Text>
          </TouchableOpacity>
        </View>

        {/* 탭 */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === '내가 공유한' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('내가 공유한')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === '내가 공유한' && styles.activeTabText,
              ]}
            >
              내가 공유한
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === '친구들 공유' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('친구들 공유')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === '친구들 공유' && styles.activeTabText,
              ]}
            >
              친구들 공유
            </Text>
          </TouchableOpacity>
        </View>

        {/* 공유 리스트 */}
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {sharedItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.shareItem}
              onPress={() => handleShare(item)}
            >
              <View style={styles.shareItemHeader}>
                <Text style={styles.shareEmoji}>{item.emoji}</Text>
                <View style={styles.shareItemInfo}>
                  <Text style={styles.shareTitle}>{item.title}</Text>
                  <Text style={styles.shareDescription}>{item.description}</Text>
                  <Text style={styles.shareDate}>{item.date}</Text>
                </View>
                <View style={styles.shareTypeContainer}>
                  <Text style={styles.shareType}>
                    {item.type === 'restaurant' ? '맛집' : '리뷰'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </MainLayoutWithTabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
  },
  createButton: {
    backgroundColor: '#33b2e5',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 16,
  },
  createButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#33b2e5',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#999999',
  },
  activeTabText: {
    fontWeight: '700',
    color: '#33b2e5',
  },
  scrollView: {
    flex: 1,
  },
  shareItem: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(242, 242, 242, 0.5)',
  },
  shareItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareEmoji: {
    fontSize: 40,
    marginRight: 15,
  },
  shareItemInfo: {
    flex: 1,
  },
  shareTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  shareDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    marginBottom: 4,
    lineHeight: 20,
  },
  shareDate: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
  },
  shareTypeContainer: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  shareType: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666666',
  },
});