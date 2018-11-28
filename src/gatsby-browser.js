import logPageView from './index';

export const onRouteUpdate = ({ location }, options) => {
    if (options.logPageViews) {
        return logPageView(location);
    }
}