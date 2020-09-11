import stories from './_stories.js';

const contents = JSON.stringify(
  stories.map(story => {
    return {
      title: story.title,
      author: story.author,
      createdAt: story.createdAt,
      time: story.time,
      img: story.img,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
