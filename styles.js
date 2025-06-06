import styled from 'styled-components';
import {View, Text, Image, TouchableOpacity, PixelRatio} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

import { Dimensions } from 'react-native';

// Get screen height
const { height: screenHeight } = Dimensions.get('window');

// colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "1F2937",
    darkLight: "9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "EF4444",
};

const { primary,secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
     flex: 1;
     padding: 25px;
     padding-top: ${StatusBarHeight + 30}px;
     background-color: ${primary};
     padding-bottom: ${screenHeight * 0.05}px;
`;

export const InnerContainer = styled.View`
     flex: 1;
     width: 100%;
     align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;





export const PageLogo = styled.Image`
     width: 250px;
     height: 200px;
`;

export const Avatar = styled.Image`
     width: 100px;
     height:100px;
     margin: auto;
     border-radius: 50px;
     border-width: 2px;
     border-color: ${secondary};
     margin-bottom: 10px;
     margin-top: 10px;

`;

export const WelcomeImage = styled.Image`
     height: 50px;
     min-width: 100%;
`;

export const PageTitle = styled.Text`
     font-size: 5px;
     text-align: center;
     font-weight: bold;
     color: ${brand};
     padding: 10px;

   ${(props) => props.welcome && `
     font-size: 35px;
   `}  
`;

export const SubTitle = styled.Text`
     font-size: 18px;
     margin-bottom: 20px;
     letter-spacing: 1px;
     font-weight: bold;
     color: ${tertiary};

     ${(props) => props.welcome && `
     margin-bottom: 5px;
     font-weight: normal;
   `}  
`;

export const StyledFormArea = styled.View`
     width: 90%;
`
export const StyledTextInput = styled.TextInput`
     background-color: ${secondary};
     padding: 15px;
     padding-left: 55px;
     padding-right: 55px;
     border-radius: 5px;
     font-size: 16px;
     height: ${screenHeight * 0.08}px;
     margin-bottom: 10px;
     color: ${tertiary};

`;

export const StyledInputLabel = styled.Text`
     color: ${tertiary};
     font-size: 8px; 
     text-align: left;
`;

export const LeftIcon = styled.View`
     left: 15px;
     top: 38px;
     position: absolute;
     z-index: 1;

`;

export const RightIcon = styled.TouchableOpacity`
     right: 15px;
     top: 38px;
     position: absolute;
     z-index: 1;

`;

export const StyledButton = styled.TouchableOpacity`
     padding: 15px;
     background-color: blue;
     justify-content: center;
     align-items: center;
     border-radius: 5px;
     margin-vertical: 5px;
     height: ${screenHeight * 0.08}px;

   ${(props) => props.google === true &&`
     flex-direction: row;
     justify-content: center;
   `} 
`;

export const ButtonText = styled.Text`
     color: ${primary};
     font-size: 8px;

     ${(props) => props.google === true &&`
     padding : 25px;
   `} 
  
`;

    

export const MsgBox = styled.Text`
     text-align: center;
     font-size: 10px;
`;

export const Line = styled.View`
     height: 1px;
     width: 100%;
     background-color: ${darkLight};
     margin-vertical: 10px;
`;

export const ExtraView = styled.View`
     justify-content: center;
     flex-direction: row;
     align-items: center;
     padding: 10px;
`;

export const ExtraText = styled.Text`
     justufy-content: center;
     align-content: center;
     color: ${tertiary};
     font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
     justify-content: center;
     align-items: center;
`;

export const TextLinkContent = styled.Text`
     color: blue;
     font-size: 15px;
`;



export const SearchInput = styled.TextInput`
  height: 50px;
  width: 100%;
  padding-left: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-bottom: 15px;
  font-size: 16px;
`;




   