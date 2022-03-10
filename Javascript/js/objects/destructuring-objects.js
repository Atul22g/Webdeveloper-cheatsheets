const spyTeam = {
    first: 'James',
    last: 'Bond',
    links: {
        social: {
            mi9: 'https://mi9.com/JamesBond',
            fb1: 'https://fb1.com/JamesBond',
            kg8: 'https://kg8.com/JamesBond',
        },
        web: {
            blog: 'https://JamesBond.com'
        }
    }
};
// without destructuring
const mi9 = spyTeam.links.social.mi9;
const fb1 = spyTeam.links.social.fb1;

// with destructuring
const {
    mi9,
    fb1
} = spyTeam.links.social;

// logs the 2 variables
console.log(mi9, fb1);
