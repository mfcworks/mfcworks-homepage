<script setup>
const { site } = useAppConfig()
</script>

<template>
  <hr class="hr-line">
  <h3 class="title" style="font-size:30px;">
    <a v-if="site.email" class="social-btn" :href="`mailto:${ site.email }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-envelope-square"></i></a>
    <a v-if="site.twitter" class="social-btn" :href="`http://twitter.com/${ site.twitter }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>
    <a v-if="site.facebook" class="social-btn" :href="`http://facebook.com/${ site.facebook }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-facebook-square"></i></a>
    <a v-if="site.google?.plus" class="social-btn" :href="`http://plus.google.com/+${ site.google.plus }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-google-plus-square"></i></a>
    <a v-if="site.linkedin" class="social-btn" :href="`http://linkedin.com/in/${ site.linkedin }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-linkedin-square"></i></a>
    <a v-if="site.xing" class="social-btn" :href="`http://www.xing.com/profile/${ site.xing }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-xing-square"></i></a>
    <a v-if="site.instagram" class="social-btn" :href="`http://instagram.com/${ site.instagram }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-instagram"></i></a>
    <a v-if="site.tumblr" class="social-btn" :href="`http://${ site.tumblr }.tumblr.com`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-tumblr-square"></i></a>
    <a v-if="site.medium" class="social-btn" :href="`https://medium.com/${ site.medium }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-medium"></i></a>
    <a v-if="site.github_url" class="social-btn" :href="`http://github.com/${ site.github_url }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-github"></i></a>
    <a v-if="site.stackoverflow" class="social-btn" :href="`http://stackoverflow.com/users/${ site.stackoverflow }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-stack-overflow"></i></a>
    <a v-if="site.lastfm" class="social-btn" :href="`http://lastfm.com/user/${ site.lastfm }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-music"></i></a>
    <a v-if="site.dribbble" class="social-btn" :href="`http://dribbble.com/${ site.dribbble }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-dribbble"></i></a>
    <a v-if="site.pinterest" class="social-btn" :href="`http://www.pinterest.com/${ site.pinterest }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-pinterest"></i></a>
    <a v-if="site.foursquare" class="social-btn" :href="`http://foursquare.com/${ site.foursquare }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-foursquare"></i></a>
    <a v-if="site.steam" class="social-btn" :href="`http://steamcommunity.com/id/${ site.steam }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-steam-square"></i></a>
    <a v-if="site.youtube" class="social-btn" :href="`https://youtube.com/user/${ site.youtube }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-youtube-square"></i></a>
    <a v-if="site.youtube_channel" class="social-btn" :href="`https://youtube.com/channel/${ site.youtube_channel }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-youtube"></i></a>
    <a v-if="site.soundcloud" class="social-btn" :href="`http://soundcloud.com/${ site.soundcloud }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-soundcloud"></i></a>
    <a v-if="site.weibo" class="social-btn" :href="`http://www.weibo.com/${ site.weibo }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-weibo"></i></a>
    <a v-if="site.flickr" class="social-btn" :href="`http://www.flickr.com/${ site.flickr }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-flickr"></i></a>
    <a v-if="site.codepen" class="social-btn" :href="`http://codepen.io/${ site.codepen }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-codepen"></i></a>
    <a v-if="site.keybase" class="social-btn" :href="`https://keybase.io/${ site.keybase }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-key"></i></a>
    <a v-if="site.xmpp" class="social-btn" :href="`xmpp:${ site.xmpp }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-lightbulb-o"></i></a>
    <a v-if="site.hackernews" class="social-btn" :href="`https://news.ycombinator.com/user?id=${ site.hackernews }`" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-hacker-news"></i></a>
  </h3>
</template>
