export default defineAppConfig({
  site: {
    // Site
    title: "合同会社MFCWORKS",
    bio: "FA電気制御設計 ＆ IoT/DXコンサルティング",
    description: "FA電気制御設計 ＆ IoT/DXコンサルティング",
    reading_time: false,
    words_per_minute: 200,
    logo: "/img/logo.svg",
    background: "/img/moonrise-background.jpg",
    tiled_bg: false, // Set this true if you want to tile your background image, otherwise it will be covered
    locale: "en_US",
    url: "/", // "https://TolgaTatli.github.io/Moonrise",

    // Jekyll

    // Comments

    // Social
    // if you don't have any of social below, comment the line.
    // google: {
    // plus: "username"
    // },
    // analytics:
    // verify:
    // ad-client:
    // ad-slot:
    // bing-verify:
    email: "contact@mfcworks.com",
    twitter: "mfcworks",
    // facebook: "username",
    github_url: "mfcworks",
    // stackoverflow: "123456/username",  // from a "http://stackoverflow.com/users/123456/username" link
    // linkedin: "username",
    // xing: "username",
    // instagram: "username",
    // lastfm: "username",
    // tumblr: "username",
    // medium: '@username',
    // pinterest: "username",
    // foursquare: "username",
    // steam: "username",
    // dribbble: "username",
    // youtube: "username",
    // youtube_channel: "channel",
    // soundcloud: "username",
    // weibo: "username",
    // flickr: "username",
    // codepen: "username",
    // keybase: "username",
    // xmpp: "username@server.com",
    // hackernews: "username",
  },

  // Site navigation links
  navigation: [
    { title: '事業内容', url: '/service' },
    { title: 'ニュース', url: '/news' },
    { title: '技術事例', url: '/technology' },
    { title: 'お問い合わせ', url: '/contact' },
  ]
})
