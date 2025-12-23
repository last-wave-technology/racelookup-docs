---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
    {
        avatar: '/team/kurt-gross.png',
        name: 'Kurt Gross',
        title: 'Managing Director & Co-Founder',
        links: [
            { icon: 'github', link: 'https://github.com' },
            { icon: 'twitter', link: 'https://twitter.com' },
            { icon: 'instagram', link: 'https://instagram.com' },
        ]
    },
    {
        avatar: '/team/dan-shabra.png',
        name: 'Dan Shabra',
        title: 'Managing Director & Co-Founder',
        links: [
            { icon: 'twitter', link: 'https://x.com/dshabra' },
        ]
    },
    {
        avatar: '/team/muhammad-shahzad.webp',
        name: 'Muhammad Shahzad',
        title: 'CTO (Chief Technology Officer)',
        links: [
            { icon: 'github', link: 'https://github.com/Muhammadshahzad11' },
            { icon: 'twitter', link: 'https://twitter.com' },
            { icon: 'facebook', link: 'https://www.facebook.com/muhammad.shahzad.140433' },
        ]
    },
];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The people behind the success of racelookup for over 8+ years.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
