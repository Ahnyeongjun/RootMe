import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// Map Area Component
interface MarkerData {
  id: string;
  x: number;
  y: number;
  type: 'user' | 'restaurant';
  color?: string;
}

interface MapAreaProps {
  markers: MarkerData[];
}

const MapArea: React.FC<MapAreaProps> = ({ markers }) => (
  <View style={styles.mapContainer}>
    <View style={styles.mapArea}>
      {/* 새로고침 버튼 */}
      <TouchableOpacity style={styles.refreshButton}>
        <Text style={styles.refreshText}>🔄 이 지역 검색하기</Text>
      </TouchableOpacity>

      {/* 마커들 */}
      {markers.map((marker) => (
        <View
          key={marker.id}
          style={[
            styles.marker,
            {
              left: marker.x,
              top: marker.y,
            },
            marker.type === 'user' ? styles.userMarker : styles.restaurantMarker,
            marker.color && { backgroundColor: marker.color },
          ]}
        >
          {marker.type === 'user' ? (
            <View style={styles.userDot} />
          ) : (
            <Text style={styles.markerIcon}>🍽</Text>
          )}
        </View>
      ))}
    </View>
  </View>
);

export default MapArea;
