import 'package:flutter/material.dart';

class World {
  final updated;
  final cases;
  final todayCases;
  final deaths;
  final todayDeaths;
  final recovered;
  final todayRecovered;
  final active;
  final critical;
  final casesPerOneMillion;
  final deathsPerOneMillion;	
  final tests;
  final testsPerOneMillion;
  final population;
  final oneCasePerPeople;
  final oneDeathPerPeople;
  final oneTestPerPeople;
  final activePerOneMillion;
  final recoveredPerOneMillion;
  final criticalPerOneMillion;
  final affectedCountries;
  
  World({
    @required this.updated,
    @required this.cases,
    @required this.todayCases,
    @required this.deaths,
    @required this.todayDeaths,
    @required this.recovered,
    @required this.todayRecovered,
    @required this.active,
    @required this.critical,
    @required this.casesPerOneMillion,
    @required this.deathsPerOneMillion,
    @required this.tests,
    @required this.testsPerOneMillion,
    @required this.population,
    @required this.oneCasePerPeople,
    @required this.oneDeathPerPeople,
    @required this.oneTestPerPeople,
    @required this.activePerOneMillion,
    @required this.recoveredPerOneMillion,
    @required this.criticalPerOneMillion,
    @required this.affectedCountries,
  });



  factory World.fromJson(Map<String, dynamic> json) => new World(
    updated: json['updated'],
    cases: json['cases'],
    todayCases: json['todayCases'],
    deaths: json['deaths'],
    todayDeaths: json['todayDeaths'],
    recovered: json['recovered'],
    todayRecovered: json['todayRecovered'],
    active: json['active'],
    critical: json['critical'],
    casesPerOneMillion: json['casesPerOneMillion'],
    deathsPerOneMillion: json['deathsPerOneMillion'],
    tests: json['tests'],
    testsPerOneMillion: json['testsPerOneMillion'],
    population: json['population'],
    oneCasePerPeople: json['oneCasePerPeople'],
    oneDeathPerPeople: json['oneDeathPerPeople'],
    oneTestPerPeople: json['oneTestPerPeople'],
    activePerOneMillion: json['activePerOneMillion'],
    recoveredPerOneMillion: json['recoveredPerOneMillion'],
    criticalPerOneMillion: json['criticalPerOneMillion'],
    affectedCountries: json['affectedCountries'],
  );

  
 
  @override
  String toString(){
    return '--- Global Data ---\n'
           'updated: $updated \n' +
           'cases: $cases \n' +
           'todayCases: $todayCases \n' +
           'deaths: $deaths \n' +
           'todayDeaths: $todayDeaths \n' +
           'recovered: $recovered \n' +
           'todayRecovered: $todayRecovered \n' +
           'active: $active \n' +
           'critical: $critical \n' +
           'casesPerOneMillion: $casesPerOneMillion \n' +
           'deathsPerOneMillion: $deathsPerOneMillion \n' +
           'tests: $tests \n' +
           'testsPerOneMillion: $testsPerOneMillion \n' +
           'population: $population \n' +
           'oneCasePerPeople: $oneCasePerPeople \n' +
           'oneDeathPerPeople: $oneDeathPerPeople \n' +
           'oneTestPerPeople: $oneTestPerPeople \n' +
           'activePerOneMillion: $activePerOneMillion \n' +
           'recoveredPerOneMillion: $recoveredPerOneMillion \n' +
           'criticalPerOneMillion: $criticalPerOneMillion \n' +
           'affectedCountries: $affectedCountries \n';
  }      
}