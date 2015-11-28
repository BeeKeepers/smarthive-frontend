Template.networkExternal.onRendered(function() {
  // TODO: this is sample data
  var nodes = new vis.DataSet([
    {id: 1, label: '172.116.115.131'},
    {id: 2, label: '172.116.126.130'},
    {id: 3, label: '172.116.68.204'},
    {id: 4, label: '172.116.234.168'},
    {id: 5, label: '172.116.108.166'},
    {id: 6, label: '172.116.91.179'},
    {id: 7, label: '172.116.158.23'},
    {id: 8, label: '172.116.234.168'},
    {id: 9, label: '172.116.152.163'},
    {id: 10, label: '172.116.195.55'},
    {id: 11, label: '172.116.38.9'},
    {id: 12, label: '172.116.87.17'},
    {id: 13, label: '172.116.185.33'},
    {id: 14, label: '172.116.157.174'},
    {id: 15, label: '172.116.149.105'},
    {id: 16, label: '172.116.221.88'},
    {id: 17, label: '172.116.140.187'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([]);

  // create a network
  var container = document.getElementById('networkInternal');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);
});
