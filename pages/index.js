import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [output, setOutput] = useState([]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>calc</h1>
      </main>
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
          <button className="button" onClick={() => setOutput(output + '+')}>
            +
          </button>
          <button className="button" onClick={() => setOutput(output + '-')}>
            -
          </button>
          <button className="button" onClick={() => setOutput(output + '*')}>
            *
          </button>
          <button className="button" onClick={() => setOutput(output + '.')}>
            .
          </button>
        </div>
        <div className="row4">
          <button className="button" onClick={() => setOutput(output + '/')}>
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
    </div>
  );
}

// function equalbuttonsolve() {
//   setOutput(eval(output));
// }

// function equalbuttonmake() {
//   setOutput(output);
// }

if() {

}