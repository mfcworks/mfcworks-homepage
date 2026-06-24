<script setup>
const { site, navigation } = useAppConfig()
</script>

<template>
  <nav id="dl-menu" class="dl-menuwrapper" role="navigation">
    <button class="dl-trigger">Open Menu</button>
    <ul class="dl-menu">
      <li><a :href="`${site.url}`">Home</a></li>
      <li>
        <a href="#">About</a>
        <ul class="dl-submenu">
          <li class="dl-back"><a hreef="#">Back</a></li>
          <li>
            <img :src="`${site.logo}`" :alt="`${site.title} photo`" class="author-photo">
            <h4>{{ site.title }}</h4>
            <p>{{ site.description }}</p>
          </li>
          <li><a href="/about/"><span class="btn btn-inverse">Learn More</span></a></li>
          <li v-if="site.email">
            <a :href="`mailto:${site.email}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-envelope-square"></i> Email</a>
          </li>
          <li v-if="site.twitter">
            <a :href="`http://twitter.com/${site.twitter}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-twitter-square"></i> Twitter</a>
          </li>
          <li v-if="site.facebook">
            <a :href="`http://facebook.com/${site.facebook}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-facebook-square"></i> Facebook</a>
          </li>
          <li v-if="site.google?.plus">
            <a :href="`http://plus.google.com/+${site.google.plus}`" target="_blank"
              rel="noopener noreferrer"><i class="fa fa-fw fa-google-plus-square"></i> Google+</a>
          </li>
          <li v-if="site.linkedin">
            <a :href="`http://linkedin.com/in/${site.linkedin}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-linkedin-square"></i> LinkedIn</a>
          </li>
          <li v-if="site.xing">
            <a :href="`http://www.xing.com/profile/${site.xing}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-xing-square"></i> Xing</a>
          </li>
          <li v-if="site.instagram">
            <a :href="`http://instagram.com/${site.instagram}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-instagram"></i> Instagram</a>
          </li>
          <li v-if="site.tumblr">
            <a :href="`{http://${site.tumblr}.tumblr.com`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-tumblr-square"></i> Tumblr</a>
          </li>
          <li v-if="site.github_url">
            <a :href="`http://github.com/${site.github_url}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-github"></i> Github</a>
          </li>
          <li v-if="site.stackoverflow">
            <a :href="`http://stackoverflow.com/users/${site.stackoverflow}`" target="_blank"
              rel="noopener noreferrer"><i class="fa fa-fw fa-stack-overflow"></i> StackOverflow</a>
          </li>
          <li v-if="site.lastfm">
            <a :href="`http://lastfm.com/user/${site.lastfm}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-music"></i> LastFm</a>
          </li>
          <li v-if="site.dribbble">
            <a :href="`http://dribbble.com/${site.dribbble}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-dribbble"></i> Dribble</a>
          </li>
          <li v-if="site.pinterest">
            <a :href="`http://www.pinterest.com/${site.pinterest}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-pinterest"></i> Pinterest</a>
          </li>
          <li v-if="site.foursquare">
            <a :href="`http://foursquare.com/${site.foursquare}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-foursquare"></i> Foursquare</a>
          </li>
          <li v-if="site.steam">
            <a :href="`http://steamcommunity.com/id/${site.steam}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-steam-square"></i> Steam</a>
          </li>
          <li v-if="site.youtube">
            <a :href="`https://youtube.com/user/${site.youtube}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-youtube-square"></i> Youtube</a>
          </li>
          <li v-if="site.youtube_channel">
            <a :href="`https://youtube.com/channel/${site.youtube_channel}`" target="_blank"
              rel="noopener noreferrer"><i class="fa fa-fw fa-youtube"></i> Youtube</a>
          </li>
          <li v-if="site.soundcloud">
            <a :href="`http://soundcloud.com/${site.soundcloud}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-soundcloud"></i> SoundCloud</a>
          </li>
          <li v-if="site.weibo">
            <a :href="`http://www.weibo.com/${site.weibo}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-weibo"></i> Weibo</a>
          </li>
          <li v-if="site.flickr">
            <a :href="`http://www.flickr.com/${site.flickr}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-flickr"></i> Flickr</a>
          </li>
          <li v-if="site.codepen">
            <a :href="`http://codepen.io/${site.codepen}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-codepen"></i> Codepen</a>
          </li>
          <li v-if="site.keybase">
            <a :href="`https://keybase.io/${site.keybase}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-key"></i> Keybase</a>
          </li>
          <li v-if="site.xmpp">
            <a :href="`xmpp:${site.xmpp}`" target="_blank" rel="noopener noreferrer"><i
                class="fa fa-fw fa-lightbulb-o"></i> XMPP</a>
          </li>
          <li v-if="site.hackernews">
            <a :href="`https://news.ycombinator.com/user?id=${site.hackernews}`" target="_blank"
              rel="noopener noreferrer"><i class="fa fa-fw fa-hacker-news"></i> Hacker News</a>
          </li>
        </ul><!-- /.dl-submenu -->
      </li>
      <li>
        <a href="#">Posts</a>
        <ul class="dl-submenu">
          <li class="dl-back"><a hreef="#">Back</a></li>
          <li><a href="/posts/">All Posts</a></li>
          <!-- <li><a href="/tags/">All Tags</a></li> -->
        </ul>
      </li>
      <li v-for="link in navigation">
        <a v-if="link.url.includes('http')" :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
        <a v-else :href="link.url">{{ link.title }}</a>
      </li>
    </ul><!-- /.dl-menu -->
  </nav><!-- /.dl-menuwrapper -->
</template>
