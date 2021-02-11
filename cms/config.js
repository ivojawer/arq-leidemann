
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
            fields: [
                {
                    label: 'Titulo Obra',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: 'Imagen de la Obra',
                    name: 'image',
                    widget: 'image',
                }
            ],
          },
        ],
      },
    ],
  };
  