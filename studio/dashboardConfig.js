export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611d271246e30f0fc2f09287',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u4i9yb8e',
                  apiId: '9d3859be-db21-4994-882e-05f2cb7ff616'
                },
                {
                  buildHookId: '611d2712bfcc961063b4dbb0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w76mmana',
                  apiId: '78980f5a-1107-48f7-9dd2-414834387c5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josehernandezv/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w76mmana.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
