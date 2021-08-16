export default {
        palette: {
          primary: {
            light: '#ff795e',
            main: '#f44333',
            dark: '#b90008',
            contrastText: '#fff'
          },
          secondary: {
            light: '#66ffa6',
            main: '#00e676',
            dark: '#00b248',
            contrastText: '#000'
          }
        },
        mainForms: {
          typography: {
            useNextVariants: true
          },
          form: {
            textAlign: 'center'
          },
          image: {
              margin: '20px auto 0px auto'
          },
          pageTitle: {
              margin: '0px auto 10px auto'
          },
          textField: {
              margin: '10px auto 10px auto'
          },
          button: {
              marginTop: '3%',
              position: 'relative'
          },
          customError: {
              color: 'red',
              fontSiza: '0.8rem',
              marginTop: 10
          },
          progress: {
              position: 'absolute',
              color: '#808080'
          }
        },
        invisibleSeparator: {
          border: 'none',
          margin: 4
        },
        visibleSeparator: {
          width: '100%',
          borderBotton: '1px solid rgba(0,0,0,0.1)',
          marginBotton: 20
        }
      };
