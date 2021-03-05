const getNavigation = (user) => {
    const guestLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About us',
            link: '/about'
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
            title: 'Contact us',
            link: '/contact'
        },
        {
            title: 'Watches',
            link: '/watches'
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
            title: 'About us',
            link: '/about'
        },
        {
            title: 'Contact us',
            link: '/contact'
        },
        {
            title: 'Add',
            link: '/create'
        },
        {
            title: 'Watches',
            link: '/watches'
        }
    ];

    const loggedIn = user && user.loggedIn;

    return loggedIn ? userLinks : guestLinks;
}

export default getNavigation;