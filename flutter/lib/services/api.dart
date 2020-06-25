import 'package:http/http.dart' as http;

String baseUrl = 'https://apicoviddashboard.herokuapp.com/';
dynamic get(String uri) async {
  var response = await http.get(baseUrl+uri);
  if(response.statusCode == 200){
    return response;
  } else {
    print('Error: ${response.statusCode}');
    return null;
  }
}