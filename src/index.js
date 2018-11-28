
const logPageView = (location) => {
    let splitLocation = location.pathname.split('#');
    const trimLocation = splitLocation.splice(0,1);

    if (splitLocation.length) {
        splitLocation = splitLocation.join('');
        return mParticle.logPageView(
            trimLocation,
            {
                hashValue: splitLocation,
            },
        );
    }
    return mParticle.logPageView(location.pathname);
}

export default logPageView;