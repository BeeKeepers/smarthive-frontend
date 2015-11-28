Template.networkExternal.onRendered(function() {
  // TODO: this is sample data
  var nodes = new vis.DataSet([
    {id: 1, label:'00:03:AB:3C:54:5E'},
    {id: 2, label:'00:07:88:B7:1B:D4'},
    {id: 3, label:'00:07:88:C3:F2:2C'},
    {id: 4, label:'00:07:88:F1:E9:9D'},
    {id: 5, label:'00:08:22:14:35:FD'},
    {id: 6, label:'00:08:22:1D:5B:0D'},
    {id: 7, label:'00:08:22:51:10:3E'},
    {id: 8, label:'00:09:88:A1:DC:75'},
    {id: 9, label:'00:09:88:AF:D6:D0'},
    {id: 10, label:'00:09:88:B2:F3:C0'},
    {id: 11, label:'00:0C:E7:16:9E:FA'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([]);

  // create a network
  var container = document.getElementById('networkExternal');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
});
