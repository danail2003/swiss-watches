const getNavigation = (user) => {
    const guestLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Watches',
            link: '/watches'
        },
        {
            title: 'Register',
            link: '/register'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'About us',
            link: '/about'
        },
        {
            title: 'Contact us',
            link: '/contact'
        }
    ];

    const userLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Account',
            link: '/account'
        },
        {
            title: 'Add',
            link: '/create'
        },
        {
            title: 'Watches',
            link: '/watches'
        },
        {
            title: 'About us',
            link: '/about'
        },
        {
            title: 'Contact us',
            link: '/contact'
        }
    ];

    const loggedIn = user && user.loggedIn;

    return loggedIn ? userLinks : guestLinks;
}

export default getNavigation;