
export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'ivojawer/arq-leidemann',
      branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: '/img',
    collections: [
      {
        name: 'obras',
        label: 'Obras',
        files: [
          {
            label: 'Pilar Chico',
            name: 'pilar-chico',
            file: 'content/obras/pilar-chico.md',
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
  