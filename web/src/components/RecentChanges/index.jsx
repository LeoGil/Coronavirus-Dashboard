import React, { useEffect, useState } from 'react';

import RecentStyle from './styles'

export default function RecentChange({ stateAtual, stateNovo }) {
  const [textReturn, setTextReturn] = useState([]);
  let textToState = []

  // console.log(stateAtual[0], stateNovo[0])

  // Mount recent changes
  useEffect(() => {
    // ((stateAtual[0] !== undefined && stateNovo[0] !== undefined) && console.log(stateAtual[0], stateNovo[0]))
    // console.log(stateAtual, stateNovo)
    // const [executou, setExecutou] = useState(false);

    if (stateAtual !== undefined) {
      function compareObjects() {
        let countriesAtual = stateAtual
        let countriesNovo = stateNovo

        function comparer(otherArray) {
          return function (current) {
            return otherArray.filter(function (other) {
              return other.cases === current.cases &&
                other.recovered === current.recovered &&
                other.deaths === current.deaths
            }).length === 0;
          }
        }

        let onlyInA = countriesAtual.filter(comparer(countriesNovo));
        let onlyInB = countriesNovo.filter(comparer(countriesAtual))

        let result = onlyInA.concat(onlyInB);


        //Verifica se teve alguma modificação
        if (Object.keys(result).length !== 0 && result.constructor === Array) {
          function compare(a, b) {
            if (a.iso2 < b.iso2) {
              return -1;
            }
            if (a.iso2 > b.iso2) {
              return 1;
            }
            return 0;
          }

          result = result.sort(compare)


          for (let index = 1; index < result.length; index++) {
            if (result[index]['iso2'] === result[index - 1]['iso2']) {
              if (result[index]['cases'] > result[index - 1]['cases']) {
                textToState[index] = { text: `${result[index]['country']}: +${result[index]['cases'] - result[index - 1]['cases']} cases `, iso2: result[index]['iso2'] }
              }

              if (result[index]['recovered'] > result[index - 1]['recovered']) {
                if (textToState[index] === undefined) {
                  textToState[index] = { text: `${result[index]['country']}: +${result[index]['recovered'] - result[index - 1]['recovered']} recovered `, iso2: result[index]['iso2'] }
                } else {
                  textToState[index]['text'] = textToState[index]['text'] + `+${result[index]['recovered'] - result[index - 1]['recovered']} recovered `
                }
              }

              if (result[index]['deaths'] > result[index - 1]['deaths']) {
                if (textToState[index] === undefined) {
                  textToState[index] = { text: `${result[index]['country']}: +${result[index]['deaths'] - result[index - 1]['deaths']} deaths `, iso2: result[index]['iso2'] }
                } else {
                  textToState[index]['text'] = textToState[index]['text'] + `+${result[index]['deaths'] - result[index - 1]['deaths']} deaths `
                }
              }

              if (textToState[index] !== undefined) {
                textToState[index]['text'] = `${textToState[index]['text']} (${new Date(Date.now()).toLocaleString()})`;
              }
            }
          }

          const parsedText = textToState.filter(textState => textState !== undefined);

          setTextReturn([...parsedText, ...textReturn]);

        }
      }
      compareObjects();
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateAtual, stateNovo]);

  return (
    <RecentStyle>
      <h2>Recent changes</h2>
      {/* {console.log(textReturn)} */}
      <div className="change-content">
        {textReturn.map(change => (
          <div key={change.text + change.iso2}>

            <figure className="flag">
              <img
                src={`https://cdn.u21.io/flags/4x3/${change.iso2.toLowerCase()}.svg`}
                alt={`flag ${change.text}`}
              />
              <figcaption className="text-bold font-smaller">
                <p>{change.text}</p>
              </figcaption>
            </figure>

          </div>
        ))}
      </div>
    </RecentStyle>
  );
}
