
export const onRouteUpdate = ({ location }, options) => {
    if (options.logPageViews) {
        return mParticle.logPageView(location.pathname);
    }
}