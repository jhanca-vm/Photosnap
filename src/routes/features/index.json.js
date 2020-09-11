import features from './_features.js';

const contents = JSON.stringify(
  features.map(feature => {
    return {
      title: feature.title,
      description: feature.description,
      img: feature.img,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
