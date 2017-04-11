(function( $ ) {
	'use strict';
    
    $(window).load(function () {
        
        Connext.init({
            siteCode: cxt.siteCode,
            configCode: cxt.configCode,
            debug: true,
            settingsKey: cxt.settingsKey,
            paperCode: ((cxt.paperCode) ? cxt.paperCode : null),
            environment: cxt.environment,
            onNoConfigSettingFound: function (e) {
                executeCallback('onNoConfigSettingFound', e);
            },
            onActionShow: function (e) {
                executeCallback('onActionShow', e);                
            },
            onActionHide: function (e) {
                executeCallback('onActionHide', e);
            },
            onAuthenticateSuccess: function (e) {
                executeCallback('onAuthenticateSuccess', e);
            },
            onAuthenticateFailure: function (e) {
                executeCallback('onAuthenticateFailure', e);
            },
            onMeterLevelSet: function (e) {
                executeCallback('onMeterLevelSet', e);
            },
            onHasAccessToken: function (e) {
                executeCallback('onHasAccessToken', e);
            },
            onHasUserToken: function (e) {
                executeCallback('onHasUserToken', e);
            },
            onUserTokenSuccess: function (e) {
                executeCallback('onUserTokenSuccess', e);
            },
            onUserTokenFailure: function (e) {
                executeCallback('onUserTokenFailure', e);
            },
            onAuthorized: function (e) {
                executeCallback('onAuthorized', e);
            },
            onNotAuthorized: function (e) {
                executeCallback('onNotAuthorized', e);
            },
            onCheckAccessFailure: function (e) {
                executeCallback('onCheckAccessFailure', e);
            },
            onCriticalError: function (e) {
                executeCallback('onCriticalError', e);
            },
            onInit: function (e) {
                executeCallback('onInit', e);
            }

        });

        var fns = {};

        function executeCallback(fnName, data) {
            
            if (cxt[fnName]) {
                var fn = new Function('e', cxt[fnName]);
                fn

                fn(data)
            }
        }
        
	});


    

})( jQuery );
