<template>
  <footer>
    <powered-by :icons="icons" />

    <hr class="border-primary my-12" />

    <div class="flex">
      <div class="w-1/2">
        <footer-links />
      </div>
      <div class="w-1/2">
        <made-by />
      </div>
    </div>
  </footer>
</template>

<script>
import PoweredBy from './PoweredBy';
import FooterLinks from './FooterLinks';
import MadeBy from './MadeBy';

export default {
  name: 'FooterBar',
  components: { PoweredBy, FooterLinks, MadeBy },

  setup() {
    const icons = [
      {
        classes: ['fab', 'vuejs'],
        color: '#4fc08d',
        href: 'https://vue.js.org/'
      },
      {
        classes: ['fab', 'battle-net'],
        color: '#0e95ff',
        href: 'https://develop.battle.net/documentation/diablo-3/community-apis'
      },
      {
        classes: ['fab', 'github'],
        color: '#e4e4e4',
        href: 'https://github.com/baumannzone'
      },
      {
        classes: ['fab', 'font-awesome'],
        color: '#0e95ff',
        href: 'https://fontawesome.com/'
      }
    ];

    return {
      icons
    };
  }
};
</script>
