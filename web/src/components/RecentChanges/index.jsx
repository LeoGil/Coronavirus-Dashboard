import React, { useEffect, useState } from 'react';

export default function RecentChange(stateAtual, stateNovo) {
  const [textReturn, setTextReturn] = useState([]);
  let textToState = []



  // Mount recent changes
  useEffect(() => {
    // ((stateAtual[0] !== undefined && stateNovo[0] !== undefined) && console.log(stateAtual[0], stateNovo[0]))
    // console.log(stateAtual, stateNovo)
    // const [executou, setExecutou] = useState(false);

    // console.log(stateAtual)
    if (stateAtual[0] !== undefined) {
      function compareObjects() {
        let countriesAtual = stateAtual
        let countriesNovo = stateNovo

        // console.log(`Atual1: ${countriesAtual[0]['cases']}`)
        // console.log(`Novo1: ${countriesNovo[0]['cases']}`)

        // countriesAtual[0]['cases'] = countriesAtual[0]['cases'] - 1

        // console.log(`Atual2: ${countriesAtual[0]['cases']}`)
        // console.log(`Novo2: ${countriesNovo[0]['cases']}`)

        function comparer(otherArray) {
          return function (current) {
            return otherArray.filter(function (other) {
              return other.cases === current.cases &&
                other.recovered === current.recovered &&
                other.deaths === current.deaths
            }).length === 0;
          }
        }

        var onlyInA = countriesAtual.filter(comparer(countriesNovo));
        var onlyInB = countriesNovo.filter(comparer(countriesAtual))

        var result = onlyInA.concat(onlyInB);


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


              function timeDifference(current, previous) {

                var msPerMinute = 60 * 1000;
                var msPerHour = msPerMinute * 60;
                var msPerDay = msPerHour * 24;

                var elapsed = current - previous;

                if (elapsed < msPerMinute) {
                  return Math.round(elapsed / 1000) + ' seconds ago';
                }

                else if (elapsed < msPerHour) {
                  return Math.round(elapsed / msPerMinute) + ' minutes ago';
                }

                else if (elapsed < msPerDay) {
                  return Math.round(elapsed / msPerHour) + ' hours ago';
                }
              }

              if (textToState[index] !== undefined) {
                textToState[index]['text'] = `${textToState[index]['text']} ${new Date(Date.now()).toLocaleString()}`;
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
    <>
      <h2>Recent changes</h2>
      {/* {console.log(textReturn)} */}
      {textReturn.map(change => (
        <div key={change.text + change.iso2}>
          <img
            src={`https://cdn.u21.io/flags/4x3/${change.iso2.toLowerCase()}.svg`}
            alt={`flag ${change.text}`}
          />
          <p>{change.text}</p>
        </div>
      ))}
    </>
  );
}
