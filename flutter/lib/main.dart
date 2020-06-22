import 'package:flutter/material.dart';
import './routes.dart';

void main() => runApp(CovidDashboard());

class CovidDashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        primaryColor: Colors.indigo,
        scaffoldBackgroundColor: Colors.blueGrey,
        accentColor: Colors.cyanAccent,
      ),
      initialRoute: '/',
      routes: routes,
    );
  }
}