import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [output, setOutput] = useState([]);
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
    }
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>calc</h1>
        <div className="output">{output}</div>
        <div>
          {/*///////////////////////////////////////////////////////////
        ///////////////////////// noumera////////////////////////// */}
          <div className="row">
            <button
              className="button"
              onClick={() => {
                setOutput(output + '1');
              }}
            >
              1
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '2');
              }}
            >
              2
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '3');
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
              }}
            >
              4
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '5');
              }}
            >
              5
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '6');
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
              }}
            >
              7
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '8');
              }}
            >
              8
            </button>
            <button
              className="button"
              onClick={() => {
                setOutput(output + '9');
              }}
            >
              9
            </button>

            <button
              className="button"
              onClick={() => setOutput(output.substr(0, output.length - 1))}
            >
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
            <button
              className="equalbutton"
              onClick={() => setOutput(eval(output))}
            >
              =
            </button>
            <button className="button" onClick={() => setOutput(' ')}>
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
