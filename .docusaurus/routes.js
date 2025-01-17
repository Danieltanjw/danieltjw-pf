import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/danieltjw-pf/blog',
    component: ComponentCreator('/danieltjw-pf/blog', '8f5'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/archive',
    component: ComponentCreator('/danieltjw-pf/blog/archive', '77b'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/authors',
    component: ComponentCreator('/danieltjw-pf/blog/authors', '76c'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/danieltjw-pf/blog/authors/all-sebastien-lorber-articles', '726'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/authors/yangshun',
    component: ComponentCreator('/danieltjw-pf/blog/authors/yangshun', 'a47'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/first-blog-post',
    component: ComponentCreator('/danieltjw-pf/blog/first-blog-post', '785'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/long-blog-post',
    component: ComponentCreator('/danieltjw-pf/blog/long-blog-post', '5e8'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/mdx-blog-post',
    component: ComponentCreator('/danieltjw-pf/blog/mdx-blog-post', 'b8c'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/tags',
    component: ComponentCreator('/danieltjw-pf/blog/tags', '5dd'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/tags/docusaurus',
    component: ComponentCreator('/danieltjw-pf/blog/tags/docusaurus', '8b8'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/tags/facebook',
    component: ComponentCreator('/danieltjw-pf/blog/tags/facebook', '53f'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/tags/hello',
    component: ComponentCreator('/danieltjw-pf/blog/tags/hello', 'c6e'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/tags/hola',
    component: ComponentCreator('/danieltjw-pf/blog/tags/hola', '781'),
    exact: true
  },
  {
    path: '/danieltjw-pf/blog/welcome',
    component: ComponentCreator('/danieltjw-pf/blog/welcome', '1f8'),
    exact: true
  },
  {
    path: '/danieltjw-pf/markdown-page',
    component: ComponentCreator('/danieltjw-pf/markdown-page', 'e1d'),
    exact: true
  },
  {
    path: '/danieltjw-pf/portfolio',
    component: ComponentCreator('/danieltjw-pf/portfolio', '578'),
    exact: true
  },
  {
    path: '/danieltjw-pf/sandbox',
    component: ComponentCreator('/danieltjw-pf/sandbox', '79e'),
    exact: true
  },
  {
    path: '/danieltjw-pf/docs',
    component: ComponentCreator('/danieltjw-pf/docs', 'b6f'),
    routes: [
      {
        path: '/danieltjw-pf/docs',
        component: ComponentCreator('/danieltjw-pf/docs', '2e4'),
        routes: [
          {
            path: '/danieltjw-pf/docs',
            component: ComponentCreator('/danieltjw-pf/docs', '944'),
            routes: [
              {
                path: '/danieltjw-pf/docs/Basic_Programming_Languages',
                component: ComponentCreator('/danieltjw-pf/docs/Basic_Programming_Languages', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Basic_Programming_Languages/Java_Programming_Notes',
                component: ComponentCreator('/danieltjw-pf/docs/Basic_Programming_Languages/Java_Programming_Notes', 'f03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide',
                component: ComponentCreator('/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Data_Structures',
                component: ComponentCreator('/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Data_Structures', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Error_Handling_in_Python',
                component: ComponentCreator('/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Error_Handling_in_Python', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Python_Testing_Documentation',
                component: ComponentCreator('/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Python_Testing_Documentation', 'a4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Sorting_Algorithms_Documentation',
                component: ComponentCreator('/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Sorting_Algorithms_Documentation', 'fff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation',
                component: ComponentCreator('/danieltjw-pf/docs/Basic_Programming_Languages/Python_Guide/Vectorized_Algorithms_Documentation', '2f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/intro',
                component: ComponentCreator('/danieltjw-pf/docs/intro', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Programming_Sandbox_Documentation',
                component: ComponentCreator('/danieltjw-pf/docs/Programming_Sandbox_Documentation', '03d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/danieltjw-pf/docs/Project_Documentation_Guide',
                component: ComponentCreator('/danieltjw-pf/docs/Project_Documentation_Guide', '24c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/danieltjw-pf/',
    component: ComponentCreator('/danieltjw-pf/', '8b2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
