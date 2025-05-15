# AEM Website Project

## Requirements Met

- Built using https://www.aem.live
- Includes three pages: Home, About, and Contact
- Implemented navigation menu, hero section, and call-to-action (CTA)
- Integrated Google Analytics (GA4) for tracking
- Achieved 94(phone)-99(desktop)% Core Web Vitals score on PageSpeed Insights

## Approach

The website uses AEM Live with auto-blocking. Page content is defined in structured index, nav, footer, contact, about documents. Custom blocks like the hero section were optimized to ensure fast load times and good LCP metrics. Google Analytics was added via the project settings.

## Challenges and Solutions

- **LCP Performance**: Image loading was delayed, which affected Core Web Vitals. Solved by using `loading="eager"` and `fetchpriority="high"`.
- **Hero content structure**: Button and text were not rendering inside the hero block.
- **PageSpeed score variations**: Large images were compressed, unused JS eliminated.

## Deployment and Repository

Deployed site URL: https://main--aem-website-test--bogdanbt.aem.page
GitHub repository: https://github.com/bogdanbt/aem-website-test
