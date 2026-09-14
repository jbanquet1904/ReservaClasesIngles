import { useWindowDimensions } from "react-native";

export default function useResponsive(){
    const {width, height} = useWindowDimensions();
    const isTablet = width >= 768;
    const isLandscape = width > height

    return{
        width, height, isTablet: isTablet, isLandscape: isLandscape,
        columns: isTablet ? 2 : 1,
        cardWidth: isTablet ? 320 : Math.min(width*0.72, 300),
        paddingHorizontal: isTablet ? 32 : 16
    }
}