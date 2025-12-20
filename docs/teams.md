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
        avatar: 'http://racelookup.com/images/kurt.jpeg',
        name: 'Kurt Gross',
        title: 'Managing Director & Co-Founder',
        links: [
            { icon: 'github', link: 'https://github.com' },
            { icon: 'twitter', link: 'https://twitter.com' },
            { icon: 'instagram', link: 'https://instagram.com' }
        ]
    },
    {
        avatar: 'http://racelookup.com/images/dan1.jpeg',
        name: 'Dan Shabra',
        title: 'Managing Director & Co-Founder',
        links: [
            { icon: 'github', link: 'https://github.com' },
            { icon: 'twitter', link: 'https://twitter.com' },
            { icon: 'instagram', link: 'https://instagram.com' }
        ]
    },
    {
        avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIxt2l1bG8C4C7RY3KL6QVJqUOAiES_mbQPVbBCpN63awH74-Y2=s216-c-no',
        name: 'Muhammad Shahzad',
        title: 'CTO (Chief Technology Officer)',
        links: [
            { icon: 'github', link: 'https://github.com' },
            { icon: 'twitter', link: 'https://twitter.com' },
            { icon: 'instagram', link: 'https://instagram.com' }
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
