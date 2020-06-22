import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'dart:convert';
import '../services/api.dart' as api;
import '../model/world.dart';

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  var _globaldata;
  void getData() async {
    var response = await api.get('global');
    Map jsonObject = jsonDecode(response.body);
    World world = World.fromJson(jsonObject);
    setState(() => _globaldata = world);
  }

  @override
 void initState() {
    super.initState();
    getData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          "Covid Dashboard",
          style: TextStyle(fontSize: 24),
        ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Center(
            child: Text(
              'Global Cases',
              style: TextStyle(
                fontSize: 48,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Center(
            child: Text(
              "$_globaldata.cases",
              style: TextStyle(
                fontSize: 56,
                fontWeight: FontWeight.bold,
                color: Color(0x90F1F1F1)
              ),
              ),
          ),
        ],
      ),
    );
  }
}