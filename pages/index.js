import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [output, setOutput] = useState([]);
  const [output2, setOutput2] = useState([]);
  const [mode, setMode] = useState(false);
  let x = false;
  function pluschecker() {
    console.log(x);
    if (x) {
      console.log('--------------------');
      console.log(eval(output));
    } else {
      if (
        output[output.length - 1] == '+' ||
        output[output.length - 1] == '-' ||
        output[output.length - 1] == '*' ||
        output[output.length - 1] == '/'
      ) {
        console.log('NOT GOOD');
      } else {
        x = true;
        setOutput(output + '+');
        setMode(true);
      }
    }
  }

  function minuschecker() {
    console.log(output[output.length - 1]);
    if (
      output[output.length - 1] == '+' ||
      output[output.length - 1] == '-' ||
      output[output.length - 1] == '*' ||
      output[output.length - 1] == '/'
    ) {
      console.log('NOT GOOD');
    } else {
      setOutput(output + '-');
      setMode(true);
    }
  }

  function multiplychecker() {
    console.log(output[output.length - 1]);
    if (
      output[output.length - 1] == '+' ||
      output[output.length - 1] == '-' ||
      output[output.length - 1] == '*' ||
      output[output.length - 1] == '/'
    ) {
      console.log('NOT GOOD');
    } else {
      setOutput(output + '*');
      setMode(true);
    }
  }

  function dividechecker() {
    console.log(output[output.length - 1]);
    if (
      output[output.length - 1] == '+' ||
      output[output.length - 1] == '-' ||
      output[output.length - 1] == '*' ||
      output[output.length - 1] == '/'
    ) {
      console.log('NOT GOOD');
    } else {
      setOutput(output + '/');
      setMode(true);
    }
  }

  function pointchecker() {
    console.log(output[output.length - 1]);
    if (
      output[output.length - 1] == '+' ||
      output[output.length - 1] == '-' ||
      output[output.length - 1] == '*' ||
      output[output.length - 1] == '/'
    ) {
      console.log('NOT GOOD');
    } else {
      setOutput(output + '.');
      setOutput2(output2 + '.');
    }
  }

  function equalbuton() {
    setOutput(eval(output));
    setOutput2(eval(output2));
    console.log(output);
    console.log(output2);
  }

  function backspace() {
    setOutput(output.substr(0, output.length - 1));
    setOutput2(eval(output));
  }

  function clear() {
    setOutput(' ');
    setOutput2(' ');
  }

  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main style={{ height: '100%' }} className={styles.main}>
        <h1 className={styles.title}>calc</h1>
        <div className="output">{output}</div>
        <div className="">{output2}</div>
        <div>
          {/*///////////////////////////////////////////////////////////
        ///////////////////////// noumera////////////////////////// */}
          <div className="row">
            <button
              className="button"
              onClick={() => {
                setOutput(output + '1');
                if (mode) {
                  setOutput2(eval(output + '1'));
                } else {
                  setOutput2(output2 + '1');
                }
              }}
            >
              1
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '2');
                if (mode) {
                  setOutput2(eval(output + '2'));
                } else {
                  setOutput2(output2 + '2');
                }
              }}
            >
              2
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '3');
                if (mode) {
                  setOutput2(eval(output + '3'));
                } else {
                  setOutput2(output2 + '3');
                }
              }}
            >
              3
            </button>
          </div>

          <div className="row">
            <button
              className="button"
              onClick={() => {
                setOutput(output + '4');
                if (mode) {
                  setOutput2(eval(output + '4'));
                } else {
                  setOutput2(output2 + '4');
                }
              }}
            >
              4
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '5');
                if (mode) {
                  setOutput2(eval(output + '5'));
                } else {
                  setOutput2(output2 + '5');
                }
              }}
            >
              5
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '6');
                if (mode) {
                  setOutput2(eval(output + '6'));
                } else {
                  setOutput2(output2 + '6');
                }
              }}
            >
              6
            </button>
          </div>

          <div className="row4">
            <button
              className="button"
              onClick={() => {
                setOutput(output + '7');
                if (mode) {
                  setOutput2(eval(output + '7'));
                } else {
                  setOutput2(output2 + '7');
                }
              }}
            >
              7
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '8');
                if (mode) {
                  setOutput2(eval(output + '8'));
                } else {
                  setOutput2(output2 + '8');
                }
              }}
            >
              8
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '9');
                if (mode) {
                  setOutput2(eval(output + '9'));
                } else {
                  setOutput2(output2 + '9');
                }
              }}
            >
              9
            </button>

            <button className="button" onClick={() => backspace()}>
              Backspace
            </button>
          </div>

          {/*///////////////////////////////////////////////////////////
        ///////////////////////// noumera////////////////////////// */}

          <div className="row4">
            <button className="button" onClick={() => pluschecker()}>
              +
            </button>
            <button
              className="button"
              onClick={() => minuschecker(output + '-')}
            >
              -
            </button>
            <button
              className="button"
              onClick={() => multiplychecker(output + '*')}
            >
              *
            </button>
            <button
              className="button"
              onClick={() => pointchecker(output + '.')}
            >
              .
            </button>
          </div>
          <div className="row4">
            <button
              className="button"
              onClick={() => dividechecker(output + '/')}
            >
              /
            </button>
            <button className="equalbutton" onClick={() => equalbuton()}>
              =
            </button>
            <button className="button" onClick={() => clear()}>
              C
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// function equalbuttonsolve() {
//   setOutput(eval(output));
// }

// function equalbuttonmake() {
//   setOutput(output);
// }

// <button className="button" onClick={() => setOutput(output + '+')}>
// +
// </button>
