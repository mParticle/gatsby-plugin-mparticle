import React from "react"

export const onRenderBody = (
    { setHeadComponents }, pluginOptions
) => {
    const { apiKey, config } = pluginOptions;
    return setHeadComponents([
        <script
            key={`gatsby-plugin-mparticle`}
            dangerouslySetInnerHTML={{
                __html:`(function (apiKey) {
                    window.mParticle = window.mParticle || {};
                    window.mParticle.eCommerce = { Cart: {} };
                
                    window.mParticle.Identity = {};
                    window.mParticle.config = window.mParticle.config || ${JSON.stringify(config)};
                    window.mParticle.config.rq = [];
                    window.mParticle.ready = function (f) {
                        window.mParticle.config.rq.push(f);
                    };
                    function a(o,t){return function(){t&&(o=t+"."+o);var e=Array.prototype.slice.call(arguments);e.unshift(o),window.mParticle.config.rq.push(e)}}var x=["endSession","logError","logEvent","logForm","logLink","logPageView","setSessionAttribute","setAppName","setAppVersion","setOptOut","setPosition","startNewSession","startTrackingLocation","stopTrackingLocation"],y=["setCurrencyCode","logCheckout"],z=["login","logout","modify"];x.forEach(function(o){window.mParticle[o]=a(o)}),y.forEach(function(o){window.mParticle.eCommerce[o]=a(o,"eCommerce")}),z.forEach(function(o){window.mParticle.Identity[o]=a(o,"Identity")});
                
                    var mp = document.createElement('script');
                    mp.type = 'text/javascript';
                    mp.async = true;
                    mp.src = ('https:' == document.location.protocol ? 'https://jssdkcdns' : 'http://jssdkcdn') + '.mparticle.com/js/v2/' + apiKey + '/mparticle.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(mp, s);
                })('${apiKey}')`,
            }}
        />,
    ]);
}