import { StyleSheet } from "react-native";
import { Android_Theme_Light } from "../../../../styles/Themes";
//Done by: Darshana 26/01/2024

export const  GetBillPaymentStyles = (theme) => {


const transparentBackgroundColor    = theme.BACKGROUND_COLOR + '33';
const BillPaymentStyles = StyleSheet.create({
           
    topView: {
        height         : 150,
        justifyContent : "center",
        alignItems     : "center",
        width          : '100%',
        
    },  
    
    middleView: {
        flex           : 1,
        justifyContent : 'space-evenly',
        width          : '100%',
        justifyContent : 'flex-end',
       
    },

    bottomView: {
        paddingTop : 10,
        height     : 100,
        alignItems : "center",
        
      
        
      
        
    },   
    modalView: {
        width                 : '100%',
        height                : 130,
        justifyContent        : "center",
        alignItems            : "center",
        borderTopEndRadius    : 40,
        borderTopStartRadius  : 40,
        backgroundColor       : theme.GRAY_COLOR,
        zIndex                : 1,
      },
      
      modalViewBackground: {
        flex                  : 1,
        justifyContent        : 'flex-end',
        alignItems            : "center",
        borderTopEndRadius    : 40,
        borderTopStartRadius  : 40,
        backgroundColor       : 'transparent',
        zIndex                : 0,
      },
    
    titleView: {
        
        width                  : '80%',
        justifyContent         : "center",
        alignItems             : "center",
  
        },            
    
    mainTitle: {
                fontFamily     : theme.POPPINS_SEMIBOLD,
                fontSize       : theme.FONT_SIZE_HEADER_ONE_MEDIUM,
                color          : theme.DARK_BLUE_COLOR,
                justifyContent : "center",
                alignItems     : "center",
                textAlign      : 'center',
                width          : '100%',
    },

    secondTitle:{
        fontFamily             : theme.POPPINS_MEDIUM,
        fontSize               : theme.FONT_SIZE_HEADER_TWO,
        color                  : theme.DARK_GRAY_COLOR,
        justifyContent         : "center",
        alignItems             : "center",
        textAlign              : 'center',
        width                  : '100%',

    },

    inputView: {
        flex          : 5,
        width         : '95%',
        justifyContent: "center",
        alignItems    : "center",
        
        

    }
        ,
    logoIcon:{
        height        : 100,
        flexDirection : 'row',
        justifyContent: "center",
        alignItems    : "center",

    },

    logo:{
        flexDirection : 'row',
        marginLeft    : 20,
        fontSize      : 20,


    },

    KeyboardAvoidingView:{
        flexGrowl      : 1,
        
    },

    inputContainer: {
        marginTop      : 20,
        borderWidth    : 3,
        borderRadius   : 10,
        height         : 70
      },
     
      Button: {
        flexDirection : 'row',

    },

    bottomView1: {

        flexDirection : 'row',
        width         : '80%',
        
        justifyContent: 'space-between',
    },    
    bottomView2: {
        
        width         : '40%',
        justifyContent: "center",
    },  
    
    bottomView3: {
        justifyContent: "center",
        alignItems    : "center",
        marginLeft    : 40,
        marginRight   : 40,
    }, 

      titleText: {
        fontFamily: theme.POPPINS_BOLD,
        color     : theme.DARK_BLUE_COLOR,
        fontSize  : theme.FONT_SIZE_MEDIUM,
        
  
        },  

    

bankView:{
    justifyContent: "center",
    alignItems    : "center",
    width         : "100%",
    
    

},

textTransfer: {
    fontFamily      : theme.POPPINS_SEMIBOLD,
    fontSize        : theme.FONT_SIZE_HEADER_TWO_MEDIUM,
    color           : theme.DARK_BLUE_COLOR,
    justifyContent  : "center",
    alignItems      : "center",
    textAlign       : 'center',
    width           : '100%',
},

buttonContainer: {
    flexDirection   : "row",
    justifyContent  : "center",
    alignItems      : "center",
    width           : "100%",
    
  },
buttonContainer1: {
    flexDirection   : "row",
    justifyContent  : "space-between",
    alignItems      : "center",
    width           : "80%",
   
  },

  button: {
    width           : 120,
    height          : 50,
    borderRadius    : 20,
    borderWidth     : 2,
    borderColor     : theme.BLUE_COLOR,
    marginHorizontal: 0,
    justifyContent  : "center",
    alignItems      : "center",
  },

  buttonText: {
    textAlign        : 'center',
    fontFamily       : theme.POPPINS_MEDIUM,
    fontSize         : theme. FONT_SIZE_BODY_ONE_REGULAR,
    color            : Android_Theme_Light.DARK_BLUE_COLOR
  },

  expandContainer: {
    justifyContent   : "center",
    width            : "100%",
  },



  paymentTo :{
    flex:1,
    flexDirection :"row",
    width            : "100%",
    
  },

  paymentToInput: {
    flex:4,
    marginRight:15,
    
    
  },
  addPayeeButton: {
    flex:2.5,  justifyContent   : "center",

    
    
  },


});

return BillPaymentStyles;
}
