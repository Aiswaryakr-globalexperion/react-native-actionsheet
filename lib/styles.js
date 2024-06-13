import { StyleSheet } from 'react-native'
export const hairlineWidth = StyleSheet.hairlineWidth
export default {
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: '#000'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 24,
    paddingHorizontal: 8,
  },
  body: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  titleBox: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECEDEF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleText: {
    color: '#757575',
    fontSize: 14
  },
  messageBox: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECEDEF'
  },
  messageText: {
    color: '#9a9a9a',
    fontSize: 12
  },
  buttonBox: {
    height: 55,
    marginTop: hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECEDEF',
    borderTopWidth: 0.3,
    borderColor: '#AEAEAE'
  },
  buttonText: {
    fontSize: 18
  },
  cancelButtonBox: {
    height: 55,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  bottomBorder: {borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
}
