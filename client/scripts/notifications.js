Meteor.startup(function () {
    sAlert.config({
        effect: 'bouncyflip',
        position: 'bottom',
        timeout: 5000,
        html: false,
        onRouteClose: false,
        stack: true,
        offset: 0,
        beep: false
    });
});
