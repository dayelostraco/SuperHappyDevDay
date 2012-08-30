var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};

function login() {
    $.mobile.showPageLoadingMsg();
    setTimeout(handleLogin, 2000);

}

function handleLogin() {
    if($("#username").val() == '') {
        $.mobile.hidePageLoadingMsg();
        $.mobile.changePage( "loginError.html", { transition: "pop", role: "dialog"} );
    } else {
        $.mobile.hidePageLoadingMsg();
        $.mobile.changePage( "listViewExample.html?user=" + $("#username").val(), { transition: "slide", role: "page"});
    }
}
