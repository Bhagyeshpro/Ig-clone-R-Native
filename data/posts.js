import USERS from "./users"

const POSTS = [
    {
        imageURL: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        user: USERS[0].user,
        likes: 93849,
        caption: "First Twitter PostFirst Twitter PostFirst Twitter PostFirst Twitter PostFirst Twitter PostFirst Twitter Post ",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: "mihirpaunikar",
                comment: "Wow Man I Would Love To Invest In Your Twitter Invest In  ould Love To Invest In Your Twitter Invest In  ould Love To Invest In Your Twitter Invest In  ould Love To Invest In Your Twitter Invest In Your TwitterInvest In Your TwitterInvest In Your Twitter..."
            },
            {
                user: "markzukerberg",
                comment: "Man Its The Best Investment So Far..."
            }
        ]
    },
    {
        imageURL: "https://qph.fs.quoracdn.net/main-qimg-ee4e67ad0459cdfeb9b8ee9aa946d5f3",
        user: USERS[1].user,
        likes: 93849,
        caption: "First Twitter Post ",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: "mihirpaunikar",
                comment: "Wow Man I Would Love To Invest In Your Twitter..."
            },
        ]
    }, 
    {
        imageURL: "https://qph.fs.quoracdn.net/main-qimg-ee4e67ad0459cdfeb9b8ee9aa946d5f3",
        user: USERS[1].user,
        likes: 93849,
        caption: "First Twitter Post ",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: "mihirpaunikar",
                comment: "Wow Man I Would Love To Invest In Your Twitter..."
            },
            {
                user: "mihirpaunikar",
                comment: "Wow Man I Would Love To Invest In Your Twitter..."
            },
            {
                user: "mihirpaunikar",
                comment: "Wow Man I Would Love To Invest In Your Twitter..."
            },
            
        ]
    }
]

export default POSTS;