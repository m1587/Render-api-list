import renderApi from '@api/render-api';

renderApi.auth('rnd_Uuqs0mTm6sN7zXxOz8mAoOeOlH20');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));