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
                  buildHookId: '5ddef837eb79c5d423e18508',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-sample-studio',
                  apiId: '7b089982-bf16-43ed-a5ac-2a13f4057cce'
                },
                {
                  buildHookId: '5ddef8379f03ff60ca7428ff',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-sample',
                  apiId: 'b58b152a-3a10-489a-8abc-773da33e6073'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanmdoyle/sanity-gatsby-portfolio-sample',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-sample.netlify.com',
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
