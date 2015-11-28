Meteor.startup(function () {
    sAlert.config({
        effect: 'bouncyflip',
        position: 'bottom',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0,
        beep: false
    });
});
