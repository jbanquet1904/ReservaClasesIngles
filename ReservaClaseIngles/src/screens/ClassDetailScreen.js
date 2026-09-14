import React,{useState, useMemo} from "react";
import { View, Text, Image, Pressable, ScrollView, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useResponsive from "../hooks/useResponsive";
import { colors, spacing, radius, typography, shadow } from "../theme";
import LabelLevel from "../components/LabelLevel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatPrice } from "../data/classes";

export default function ClassDetailScreen ({route, navigation}){

  const insets = useSafeAreaInsets();
  const { classItem } = route.params;
  const { coverHeight } = useResponsive();

  const [schedule, setSchedule] = useState(null);

  const handleBooking = () => {
      if (!schedule) {
          Alert.alert('Missing information', 'Please select a schedule to continue.');
          return;
       }
      Alert.alert(
        'Booking confirmed',
            `${classItem.title}\n${schedule}\n${formatPrice(classItem.price)}`
        );
    };

    return(
        <View style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 120}}
            >
                <Image
                    source={{uri: classItem.image}}
                    resizeMode="cover"
                    style={[styles.cover, {height: coverHeight}]}
                />

                <Pressable
                    onPress={()=> navigation.goBack()}
                    style={[styles.backButton, {top: insets.top + spacing.sm}]}
                >
                    <Ionicons name="arrow-back" size={22} color={colors.text}/>
                </Pressable>

                <View style={styles.content}>

                    <LabelLevel level={classItem.level}/>
                    <Text style={typography.title}>{classItem.title}</Text>

                    {/* Teacher photo, with full name beside it */}
                    <View style={styles.professor}>
                        <Image source={{uri: classItem.professor.photo}} style={styles.avatar}/>
                        <View>
                            <Text style={styles.professorName}>{classItem.professor.name}</Text>
                            <Text style={styles.professorCountry}>{classItem.professor.country}</Text>
                        </View>
                    </View>

                    {/* Duration / Slots / Modality */}
                    <View style={styles.stats}>
                        <View style={styles.stat}>
                            <Ionicons name="time-outline" size={20} color={colors.primary}/>
                            <Text style={styles.statValue}>{classItem.duration} min</Text>
                            <Text style={styles.statLabel}>Duration</Text>
                        </View>
                        <View style={styles.stat}>
                            <Ionicons name="people-outline" size={20} color={colors.primary}/>
                            <Text style={styles.statValue}>{classItem.slots}</Text>
                            <Text style={styles.statLabel}>Slots</Text>
                        </View>
                        <View style={styles.stat}>
                            <Ionicons name="laptop-outline" size={20} color={colors.primary}/>
                            <Text style={styles.statValue}>{classItem.modality}</Text>
                            <Text style={styles.statLabel}>Modality</Text>
                        </View>
                    </View>

                    <Text style={styles.description}>{classItem.description}</Text>

                    {/* Schedules */}
                    <Text style={styles.sectionTitle}>Available schedules</Text>
                    <View style={styles.schedules}>
                        {
                            classItem.schedules.map((item)=>(
                                <Pressable
                                    key={item}
                                    onPress={()=> setSchedule(item)}
                                    style={[
                                        styles.schedule,
                                        schedule === item && styles.scheduleActive
                                    ]}
                                >
                                    <Text style={[
                                        styles.scheduleText,
                                        schedule === item && styles.scheduleTextActive
                                    ]}>
                                        {item}
                                    </Text>
                                </Pressable>
                            ))
                        }
                    </View>

                </View>
            </ScrollView>

            {/* Price and booking button */}
            <View style={[styles.bottomBar, {paddingBottom: insets.bottom + spacing.lg}]}>
                <View>
                    <Text style={styles.priceLabel}>Price per class</Text>
                    <Text style={styles.price}>{formatPrice(classItem.price)}</Text>
                </View>
                <Pressable
                    onPress={handleBooking}
                    style={({pressed})=> [styles.button, pressed && {opacity: 0.8}]}
                >
                    <Text style={styles.buttonText}>Book class</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  cover: { width: '100%', backgroundColor: colors.softPrimary },
  backButton: {
    position: 'absolute',
    left: spacing.lg,
    width: 38,
    height: 38,
    padding:16,
    borderRadius: 19,
    backgroundColor: colors.background,
    borderColor: colors.softPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: { padding: spacing.lg, gap: spacing.lg },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
  },
  stat: { alignItems: 'center', gap: 2 },
  statValue: { fontSize: 16, fontWeight: '800', color: colors.text },
  statLabel: { fontSize: 12, color: colors.softText },
  professor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.border},
  professorName: { fontSize: 15, fontWeight: '700', color: colors.text },
  professorCountry: { fontSize: 13, color: colors.softText },
  description: { ...typography.body, color: colors.softText, lineHeight: 22 },
  sectionTitle: { ...typography.subtitle },
  schedules: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  schedule: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  scheduleActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  scheduleText: { fontSize: 13, fontWeight: '600', color: colors.text },
  scheduleTextActive: { color: '#FFFFFF' },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    ...shadow,
  },
  priceLabel: { fontSize: 12, color: colors.softText },
  price: { fontSize: 18, fontWeight: '800', color: colors.primary },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
  },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
});  
  

  
  