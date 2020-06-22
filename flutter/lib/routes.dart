import 'package:flutter/widgets.dart';
import './pages/main_page.dart';

Map<String, WidgetBuilder> routes = <String, WidgetBuilder>{
  '/': (context) => MainPage(),
};