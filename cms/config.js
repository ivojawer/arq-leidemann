
export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'ivojawer/arq-leidemann',
      branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            label: 'Obra',
            name: 'obra',
            file: 'content/pages/obras.md',
            fields: require('./fields/obra'),
          },
        ],
      },
    ],
  };
  