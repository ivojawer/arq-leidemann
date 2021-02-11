
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
      folder: 'content/obras',
      create: true,
      fields: [       
        {
          label: 'Titulo Obra',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Imagenes de la Obra',
          name: 'images',
          widget: 'list',
          allow_add: true,
          field: {
            label: 'Imagen',
            name: 'image',
            widget: 'image'
          }
        }
      ],
    },
  ],
};
