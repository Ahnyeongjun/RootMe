import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MainLayoutWithTabs, StatusBarComponent } from '../../components/common';

interface VisitRecord {
  id: string;
  restaurantName: string;
  category: string;
  visitDate: string;
  rating: number;
  review?: string;
  emoji: string;
  color: string;
}

interface ReviewRecord {
  id: string;
  restaurantName: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
  emoji: string;
}

const visitRecords: VisitRecord[] = [
  {
    id: '1',
    restaurantName: '명가 한정식',
    category: '한식',
    visitDate: '2024.03.15',
    rating: 4.5,
    review: '정말 맛있었어요! 다음에 또 오고 싶네요',
    emoji: '🍱',
    color: '#ff6699',
  },
  {
    id: '2',
    restaurantName: '오미라면',
    category: '일식',
    visitDate: '2024.03.12',
    rating: 4.8,
    review: '국물이 진하고 면이 쫄깃해요',
    emoji: '🍜',
    color: '#9980cc',
  },
  {
    id: '3',
    restaurantName: '맛있는 분식',
    category: '분식',
    visitDate: '2024.03.10',
    rating: 4.2,
    emoji: '🥟',
    color: '#ffcc99',
  },
];

const reviewRecords: ReviewRecord[] = [
  {
    id: '1',
    restaurantName: '명가 한정식',
    rating: 4.5,
    content: '가족과 함께 다녀왔는데 모든 반찬이 정갈하고 맛있었습니다. 특히 된장찌개가 일품이었어요!',
    date: '2024.03.15',
    likes: 12,
    emoji: '🍱',
  },
  {
    id: '2',
    restaurantName: '오미라면',
    rating: 4.8,
    content: '진짜 맛있는 라멘집 발견! 국물이 진하고 차슈도 부드러워요. 재방문 의사 100%',
    date: '2024.03.12',
    likes: 8,
    emoji: '🍜',
  },
];

export default function RecordsScreen() {
  const [selectedTab, setSelectedTab] = useState('방문 기록');

  const handleDeleteRecord = (id: string, type: 'visit' | 'review') => {
    Alert.alert(
      '삭제 확인',
      '이 기록을 삭제하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { 
          text: '삭제', 
          style: 'destructive', 
          onPress: () => console.log(`${type} 기록 ${id} 삭제`) 
        },
      ]
    );
  };

  const handleEditRecord = (id: string, type: 'visit' | 'review') => {
    console.log(`${type} 기록 ${id} 수정`);
  };

  const renderVisitRecords = () => (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {visitRecords.map((record) => (
        <TouchableOpacity
          key={record.id}
          style={styles.recordItem}
          onPress={() => handleEditRecord(record.id, 'visit')}
        >
          <View style={[styles.recordImage, { backgroundColor: record.color }]}>
            <Text style={styles.recordEmoji}>{record.emoji}</Text>
          </View>
          <View style={styles.recordInfo}>
            <Text style={styles.recordTitle}>{record.restaurantName}</Text>
            <Text style={styles.recordCategory}>{record.category}</Text>
            <Text style={styles.recordDate}>{record.visitDate}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★★★★☆ {record.rating}</Text>
            </View>
            {record.review && (
              <Text style={styles.recordReview}>{record.review}</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteRecord(record.id, 'visit')}
          >
            <Text style={styles.deleteButtonText}>삭제</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      {visitRecords.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>아직 방문한 맛집이 없어요</Text>
          <Text style={styles.emptySubText}>맛집을 방문하고 기록을 남겨보세요!</Text>
        </View>
      )}
    </ScrollView>
  );

  const renderReviewRecords = () => (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {reviewRecords.map((review) => (
        <TouchableOpacity
          key={review.id}
          style={styles.reviewItem}
          onPress={() => handleEditRecord(review.id, 'review')}
        >
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewEmoji}>{review.emoji}</Text>
            <View style={styles.reviewInfo}>
              <Text style={styles.reviewTitle}>{review.restaurantName}</Text>
              <View style={styles.reviewRatingContainer}>
                <Text style={styles.reviewRating}>★★★★☆ {review.rating}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteRecord(review.id, 'review')}
            >
              <Text style={styles.deleteButtonText}>삭제</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.reviewContent}>{review.content}</Text>
          <View style={styles.reviewFooter}>
            <Text style={styles.reviewLikes}>❤️ {review.likes}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {reviewRecords.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>작성한 리뷰가 없어요</Text>
          <Text style={styles.emptySubText}>맛집 리뷰를 작성해보세요!</Text>
        </View>
      )}
    </ScrollView>
  );

  return (
    <MainLayoutWithTabs>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        
        <StatusBarComponent />

        {/* 헤더 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>기록</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>방문 {visitRecords.length}곳</Text>
            <Text style={styles.statsSeparator}>•</Text>
            <Text style={styles.statsText}>리뷰 {reviewRecords.length}개</Text>
          </View>
        </View>

        {/* 탭 */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === '방문 기록' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('방문 기록')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === '방문 기록' && styles.activeTabText,
              ]}
            >
              방문 기록
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === '내 리뷰' && styles.activeTab,
            ]}
            onPress={() => setSelectedTab('내 리뷰')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === '내 리뷰' && styles.activeTabText,
              ]}
            >
              내 리뷰
            </Text>
          </TouchableOpacity>
        </View>

        {/* 콘텐츠 */}
        {selectedTab === '방문 기록' ? renderVisitRecords() : renderReviewRecords()}
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
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#33b2e5',
  },
  statsSeparator: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999999',
    marginHorizontal: 6,
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
  recordItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(242, 242, 242, 0.5)',
  },
  recordImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  recordEmoji: {
    fontSize: 24,
  },
  recordInfo: {
    flex: 1,
  },
  recordTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  recordCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: '#999999',
    marginBottom: 2,
  },
  recordDate: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    marginBottom: 4,
  },
  ratingContainer: {
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffb21a',
  },
  recordReview: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 18,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  deleteButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ff334d',
  },
  reviewItem: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(242, 242, 242, 0.5)',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  reviewRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewRating: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffb21a',
    marginRight: 8,
  },
  reviewDate: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
  },
  reviewContent: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
    lineHeight: 20,
    marginBottom: 10,
  },
  reviewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewLikes: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ff334d',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999999',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#cccccc',
  },
});