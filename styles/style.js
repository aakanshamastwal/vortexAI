import { StyleSheet } from 'react-native';

var common = {
  backgroundColor: "#fefefe",
  colorbackgroundinput: "#f5f5f5",
  colorvoilet: "#29958e",
  coloryellow: "#d79e57",
  colorred: "#ae2e1c",
  colorblack: "#1d0e0b",
  colordarkblue: "#0b1919",
  colorbackgroundred: "#faeceb",
  colorbackgroundgreen: "#d9dddc",
  coloriconcolor: "#8b8ba0",
  colorsmallheading: "#5a5a79",
  colorpurple: "#6767f1",
  colorbutton: "#7867ef",
  colorlightblue: "#98dafd",
  colorButtonBlue: "#1154cd",
  colorpink: "#db559a",
  colorgray: "#778899",
  colororange: "#ed844c",
  darkestblue: "#040416",
  fontweightxbolder: 700,
  fontweightbolder: 600,
  fontweightbold: 500,
  fontweightmedium: 400,
  fontweightlight: 300,
  fontfamily: "Calibre,Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
  fontfamilymono: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
  fzxxs: "12px",
  fzxs: "13px",
  fzsm: "14px",
  fzmd: "16px",
  fzlg: "18px",
  fzxl: "20px",
  fzxxl: "22px",
  fzheading: "32px",
};

export default StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    fontFamily: common.fontfamily,
    backgroundColor: common.backgroundColor
  },
  image: {
    // resizeMode: "cover",
    // width: '100%',
    height: '100vh',
    alignSelf: 'stretch'
  },
  anchor: {
    color: common.colorbutton,
  },
  textCenter: {
    textAlign: "center"
  },
  tinyLogo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 60,
  },
  icons: {
    color: common.colororange
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
    color: common.colorblack
  },
  texts: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    backgroundColor: '#e9e9e9'
  },
  loginButton: {
    padding: 12,
    margin: 15,
    backgroundColor: common.colorButtonBlue
  }
})