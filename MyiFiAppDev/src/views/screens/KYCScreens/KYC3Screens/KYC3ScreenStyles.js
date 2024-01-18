import { StyleSheet } from 'react-native';


export const GetKYC3ScreenStyles = (theme) => {

    const KYC3ScreenStyles = StyleSheet.create({

        textContainer:{
            justifyContent: 'space-between',
            height: '15%',
        },
       
        titleText: {
            textAlign: 'center',
            color: theme.TextStyleH1Color,
            fontSize: theme.FONT_SIZE_HEADER_ONE,
        },

        subTexts: {
            textAlign: 'center',
            alignContent: 'center',
            // marginTop: '20',
            color: theme.TextStyleCaptionColor ,
            fontSize: theme.FONT_SIZE_HEADER_TWO
        },

        buttonContainer: {
            alignItems: 'center',
            marginTop: 15,
        },

        cameraCircle:{
            backgroundColor: theme.COMMON_BUTTON_BACKGROUND_COLOR,
            borderRadius: 500,
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        }
        
    });

    return KYC3ScreenStyles;
};


