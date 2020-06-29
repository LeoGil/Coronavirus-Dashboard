this.createNotification('warning')
NotificationManager.warning('Warning message', 'Close after 3000ms', 0);

function compareObjects(stateAtual) {
  function createNotification(type, code, title, body = null) {
    switch (type) {
      case 'info':
        NotificationManager.info('Atualizado global', null, 1000);
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here', 1000);
        break;
      case 'warning':
        NotificationManager.warning(<img src={'https://www.countryflags.io/' + code + '/flat/64.png'} />, title, 0);
        break;
      default:
        NotificationManager.error('Error message', 'Click me!', 0, () => {
          alert('callback');
        });
        break;
    }
  };

  var countryChecker = stateAtual
  var countryReturnTest = Object.values(countryitems[0]).sort(sortCountries)

  function comparer(otherArray) {
    return function (current) {
      return otherArray.filter(function (other) {
        return other.total_cases === current.total_cases &&
          other.total_recovered === current.total_recovered &&
          other.total_deaths === current.total_deaths
      }).length === 0;
    }
  }

  var onlyInA = countryChecker.filter(comparer(countryReturnTest));
  var onlyInB = countryReturnTest.filter(comparer(countryChecker))

  var result = onlyInA.concat(onlyInB);

  console.log(result)

  //Verifica se teve alguma modificação
  if (Object.keys(result).length !== 0 && result.constructor === Array) {
    createNotification('warning', 'US', 'USA');
  }

  //     // console.log(countryChecker[1].total_cases)
  //     // createNotification('warning', countryChecker[1].code)
  //     console.log(result)

  //     // OUTRO MODO DE FAZER
  // console.log(countryChecker)
  // const result1 = countryChecker.filter(
  //     ({ value: value1, display: display1 }) => !countryReturnTest.some(({ value: value2, display: display2 }) => value2 === value1 && display2 === display1)
  // );

  // const result2 = countryReturnTest.filter(
  //     ({ value: value1, display: display1 }) => !countryChecker.some(({ value: value2, display: display2 }) => value2 === value1 && display2 === display1)
  // );

  // var results = result1.concat(result2);
  // console.log(results);
}

executa && compareObjects(stateAtual);



// function timeDifference(current, previous) {

              //   var msPerMinute = 60 * 1000;
              //   var msPerHour = msPerMinute * 60;
              //   var msPerDay = msPerHour * 24;

              //   var elapsed = current - previous;

              //   if (elapsed < msPerMinute) {
              //     return Math.round(elapsed / 1000) + ' seconds ago';
              //   }

              //   else if (elapsed < msPerHour) {
              //     return Math.round(elapsed / msPerMinute) + ' minutes ago';
              //   }

              //   else if (elapsed < msPerDay) {
              //     return Math.round(elapsed / msPerHour) + ' hours ago';
              //   }
              // }