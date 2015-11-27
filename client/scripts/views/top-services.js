Template.topServices.onRendered(function() {
  var ctx = document.getElementById('topServices').getContext('2d');

  var data = {
      labels: ['SSH', 'RPC', 'VLC', 'SMB'],
      datasets: [
          {
              label: 'Dataset',
              fillColor: 'rgba(220,220,220,0.2)',
              strokeColor: 'rgba(220,220,220,1)',
              pointColor: 'rgba(220,220,220,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: [88, 67, 12, 4]
          }
      ]
  };


  var radarChart = new Chart(ctx).Radar(data, {});
});
