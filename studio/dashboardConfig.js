export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6099a3f55ad4fb0096d467ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wc68gbcc',
                  apiId: '8d0861dd-a77e-4459-8ca6-e6665da8c949'
                },
                {
                  buildHookId: '6099a3f564db1500ed045d03',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9yta7ej4',
                  apiId: '5e434560-fd3d-41b7-ac10-2d860e733d1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arefyevs/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9yta7ej4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
