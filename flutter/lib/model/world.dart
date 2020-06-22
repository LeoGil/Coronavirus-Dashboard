import 'package:flutter/material.dart';

class World {
  final String updated;
  final String cases;
  final String todayCases;
  final String deaths;
  final String todayDeaths;
  final String recovered;
  final String todayRecovered;
  final String active;
  final String critical;
  final String casesPerOneMillion;
  final String deathsPerOneMillion;	
  final String tests;
  final String testsPerOneMillion;
  final String population;
  final String oneCasePerPeople;
  final String oneDeathPerPeople;
  final String oneTestPerPeople;
  final String activePerOneMillion;
  final String recoveredPerOneMillion;
  final String criticalPerOneMillion;
  final String affectedCountries;
  
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