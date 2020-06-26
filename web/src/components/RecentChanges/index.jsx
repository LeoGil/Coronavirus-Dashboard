import React, { useEffect, useState } from 'react';

export default function RecentChange({ stateAtual, stateNovo }) {
  const [textReturn, setTextReturn] = useState([]);
  let textToState = []

  // Mount recent changes
  useEffect(() => {
    // const [executou, setExecutou] = useState(false);

    // console.log(stateAtual)
    if (stateAtual[0] !== undefined) {
      function compareObjects() {

        var countriesAtual = stateAtual
        var countriesNovo = stateNovo

        // countiesAtual[1]['cases'] = 1213167
        // countiesAtual[1]['recovered'] = 449928
        // countiesAtual[0]['deaths'] = 116828

        // console.log(countriesAtual[0]['deaths'], countriesNovo[0]['deaths'])
        // return

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


          for (let index = 0; index < result.length; index++) {
            if (index !== 0) {
              if (result[index]['iso2'] === result[index - 1]['iso2']) {
                if (result[index]['cases'] > result[index - 1]['cases']) {
                  textToState[index] = { text: `${result[index]['country']}: +${result[index]['cases'] - result[index - 1]['cases']} cases `, iso2: result[index]['iso2'] }
                  // console.log(`O ${result[index]['country']} teve um aumento de ${result[index]['cases'] - result[index - 1]['cases']} de casos`)
                }

                if (result[index]['recovered'] > result[index - 1]['recovered']) {
                  if (textToState[index] === undefined) {
                    textToState[index] = { text: `${result[index]['country']}: +${result[index]['recovered'] - result[index - 1]['recovered']} recovered `, iso2: result[index]['iso2'] }
                  } else {
                    textToState[index]['text'] = textToState[index]['text'] + `+${result[index]['recovered'] - result[index - 1]['recovered']} recovered `
                  }
                  // console.log(`O ${result[index]['country']} teve um aumento de ${result[index]['recovered'] - result[index - 1]['recovered']} de recuperados`)
                }

                if (result[index]['deaths'] > result[index - 1]['deaths']) {
                  if (textToState[index] === undefined) {
                    textToState[index] = { text: `${result[index]['country']}: +${result[index]['deaths'] - result[index - 1]['deaths']} deaths `, iso2: result[index]['iso2'] }
                  } else {
                    textToState[index]['text'] = textToState[index]['text'] + `+${result[index]['deaths'] - result[index - 1]['deaths']} deaths `
                  }
                  // console.log(`O ${result[index]['country']} teve um aumento de ${result[index]['deaths'] - result[index - 1]['deaths']} de mortes`)
                }
              }
            }
          }

          textToState = textToState.push(textReturn)
          console.log(textToState)
          setTextReturn(textToState)
          console.log(textReturn)
        }
      }
      compareObjects();
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateAtual, stateNovo]);

  return (
    <>
      <h2>Population / Tests</h2>
      {/* {console.log(textReturn)} */}
      {/* {textReturn.map(change => (
        <div key={change.text + change.iso2}>
          <img
            src={`https://cdn.u21.io/flags/4x3/${change.iso2.toLowerCase()}.svg`}
            alt={`flag ${change.text}`}
          />
          <p>{change.text}</p>
        </div>
      ))} */}
    </>
  );
}
