import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBarComponent } from '../../../components/common';

const { width } = Dimensions.get('window');

interface MenuItem {
  id: string;
  name: string;
  price: string;
  emoji: string;
  color: string;
}

const menuItems: MenuItem[] = [
  { id: '1', name: '우삼겹 마라전골', price: '15,900원', emoji: '🍱', color: '#ff6699' },
  { id: '2', name: '우삼겹 버섯전골', price: '14,900원', emoji: '🍲', color: '#99cc66' },
  { id: '3', name: '우삼겹 마라전골', price: '15,900원', emoji: '🍱', color: '#e84fd9' },
  { id: '4', name: '우삼겹 버섯전골', price: '14,900원', emoji: '🍲', color: '#33b24f' },
];

export default function RestaurantScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [selectedTab, setSelectedTab] = useState('메뉴');

  const handleBackPress = () => {
    router.back();
  };

  const handleCall = () => {
    Linking.openURL('tel:02-1234-5678');
  };

  const handleNavigation = () => {
    console.log('네비게이션 실행');
  };

  const handleShare = () => {
    console.log('공유하기');
  };

  const handleNotification = () => {
    console.log('알림 설정');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <StatusBarComponent />

      {/* 헤더 */}
      <RestaurantHeader onBackPress={handleBackPress} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 메인 이미지 */}
        <MainImageSection />

        {/* 상세 정보 섹션 */}
        <View style={styles.detailSection}>
          {/* 기본 정보 */}
          <BasicInfoSection />

          {/* 액션 메뉴 */}
          <ActionMenuSection
            onCall={handleCall}
            onNotification={handleNotification}
            onNavigation={handleNavigation}
            onShare={handleShare}
          />

          {/* 탭 메뉴 섹션 */}
          <TabMenuSection
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            menuItems={menuItems}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 레스토랑 헤더 컴포넌트
interface RestaurantHeaderProps {
  onBackPress: () => void;
}

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ onBackPress }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
      <Text style={styles.backIcon}>←</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>음식점 정보</Text>
    <View style={styles.headerSpacer} />
  </View>
);

// 메인 이미지 섹션 컴포넌트
const MainImageSection: React.FC = () => (
  <View style={styles.mainImageContainer}>
    <View style={styles.mainImage}>
      <Text style={styles.mainImageIcon}>🍽️</Text>
    </View>
  </View>
);

// 기본 정보 섹션 컴포넌트
const BasicInfoSection: React.FC = () => (
  <View style={styles.basicInfo}>
    <View style={styles.nameContainer}>
      <Text style={styles.restaurantName}>명가 한정식</Text>
      <Text style={styles.liveText}>• 실시간</Text>
    </View>
    <Text style={styles.rating}>★★★★☆ 4.5</Text>
    <Text style={styles.category}>한식 • 350m • 리뷰 120개</Text>
    <Text style={styles.address}>서울시 강남구 테헤란로 123</Text>
    <Text style={styles.hours}>영업 중 • 04:00에 영업 종료</Text>
  </View>
);

// 액션 메뉴 섹션 컴포넌트
interface ActionMenuSectionProps {
  onCall: () => void;
  onNotification: () => void;
  onNavigation: () => void;
  onShare: () => void;
}

const ActionMenuSection: React.FC<ActionMenuSectionProps> = ({
  onCall,
  onNotification,
  onNavigation,
  onShare,
}) => (
  <View style={styles.actionMenu}>
    <TouchableOpacity style={styles.actionButton} onPress={onCall}>
      <Text style={styles.actionIcon}>📞</Text>
      <Text style={styles.actionText}>전화</Text>
    </TouchableOpacity>
    
    <View style={styles.actionSeparator} />
    
    <TouchableOpacity style={styles.actionButton} onPress={onNotification}>
      <Text style={styles.actionIcon}>🔔</Text>
      <Text style={styles.actionText}>알림</Text>
    </TouchableOpacity>
    
    <View style={styles.actionSeparator} />
    
    <TouchableOpacity style={styles.actionButton} onPress={onNavigation}>
      <Text style={styles.actionIcon}>🗺️</Text>
      <Text style={styles.actionText}>길찾기</Text>
    </TouchableOpacity>
    
    <View style={styles.actionSeparator} />
    
    <TouchableOpacity style={styles.actionButton} onPress={onShare}>
      <Text style={styles.actionIcon}>📤</Text>
      <Text style={styles.actionText}>공유</Text>
    </TouchableOpacity>
  </View>
);

// 탭 메뉴 섹션 컴포넌트
interface TabMenuSectionProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
  menuItems: MenuItem[];
}

const TabMenuSection: React.FC<TabMenuSectionProps> = ({
  selectedTab,
  onTabChange,
  menuItems,
}) => (
  <View style={styles.tabSection}>
    {/* 탭 헤더 */}
    <View style={styles.tabHeader}>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === '메뉴' && styles.activeTabButton]}
        onPress={() => onTabChange('메뉴')}
      >
        <Text style={[styles.tabText, selectedTab === '메뉴' && styles.activeTabText]}>
          메뉴
        </Text>
      </TouchableOpacity>
      
      <View style={styles.tabSeparator} />
      
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === '실시간 리뷰' && styles.activeTabButton]}
        onPress={() => onTabChange('실시간 리뷰')}
      >
        <Text style={[styles.tabText, selectedTab === '실시간 리뷰' && styles.activeTabText]}>
          실시간 리뷰
        </Text>
      </TouchableOpacity>
    </View>

    {/* 탭 콘텐츠 */}
    {selectedTab === '메뉴' && <MenuContent menuItems={menuItems} />}
    {selectedTab === '실시간 리뷰' && <ReviewContent />}
  </View>
);

// 메뉴 콘텐츠 컴포넌트
interface MenuContentProps {
  menuItems: MenuItem[];
}

const MenuContent: React.FC<MenuContentProps> = ({ menuItems }) => {
  const renderMenuGrid = () => {
    const rows = [];
    for (let i = 0; i < menuItems.length; i += 2) {
      const rowItems = menuItems.slice(i, i + 2);
      rows.push(
        <View key={i} style={styles.menuRow}>
          {rowItems.map((item) => (
            <View key={item.id} style={styles.menuItem}>
              <View style={[styles.menuImage, { backgroundColor: item.color }]}>
                <Text style={styles.menuEmoji}>{item.emoji}</Text>
              </View>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text style={styles.menuPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.menuContent}>
      {renderMenuGrid()}
      
      <View style={styles.menuInfo}>
        <View style={styles.menuInfoHeader}>
          <Text style={styles.menuCount}>메뉴 53</Text>
          <TouchableOpacity>
            <Text style={styles.menuImageLink}>메뉴판 이미지로 보기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// 리뷰 콘텐츠 컴포넌트
const ReviewContent: React.FC = () => (
  <View style={styles.reviewContent}>
    <Text style={styles.comingSoon}>실시간 리뷰 기능 준비중입니다.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 30,
  },
  scrollView: {
    flex: 1,
  },
  mainImageContainer: {
    width: '100%',
    height: 200,
  },
  mainImage: {
    flex: 1,
    backgroundColor: '#33b2e5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  mainImageIcon: {
    fontSize: 48,
  },
  detailSection: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  basicInfo: {
    paddingVertical: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
  },
  liveText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ff334d',
    marginLeft: 12,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffab1a',
    marginBottom: 6,
  },
  category: {
    fontSize: 14,
    fontWeight: '500',
    color: '#808080',
    marginBottom: 6,
  },
  address: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    marginBottom: 6,
  },
  hours: {
    fontSize: 14,
    fontWeight: '500',
    color: '#808080',
  },
  actionMenu: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 16,
    paddingVertical: 15,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666666',
  },
  actionSeparator: {
    width: 1,
    backgroundColor: '#e6e6e6',
    marginVertical: 5,
  },
  tabSection: {
    marginTop: 10,
  },
  tabHeader: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f7f7f7',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#333333',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#999999',
  },
  activeTabText: {
    fontWeight: '600',
    color: '#333333',
  },
  tabSeparator: {
    width: 1,
    backgroundColor: '#e6e6e6',
    marginVertical: 8,
  },
  menuContent: {
    paddingTop: 20,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItem: {
    width: (width - 60) / 2,
  },
  menuImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  menuEmoji: {
    fontSize: 32,
  },
  menuName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
    textAlign: 'center',
  },
  menuPrice: {
    fontSize: 12,
    fontWeight: '400',
    color: '#808080',
    textAlign: 'center',
  },
  menuInfo: {
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    paddingTop: 15,
    marginTop: 20,
  },
  menuInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  menuImageLink: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3380cc',
  },
  reviewContent: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  comingSoon: {
    fontSize: 16,
    fontWeight: '500',
    color: '#999999',
  },
});