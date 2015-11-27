Template.networkExternal.onRendered(function() {
  var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 1},
    {from: 2, to: 3},
    {from: 3, to: 1},
    {from: 3, to: 2}
  ]);

  // create a network
  var container = document.getElementById('networkInternal');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
});
