import stories from './stories/_stories.js';
import features from './features/_features.js';

let recentStories = stories.slice(0, 4);
let resumeFeatures = features.slice(0, 3);

const dataStories = recentStories.map(story => {
  return {
    title: story.title,
    author: story.author,
    createdAt: story.createdAt,
    time: story.time,
    img: story.img,
  };
});

const dataFeatures = resumeFeatures.map(feature => {
  return {
    title: feature.title,
    description: feature.description,
    img: feature.img,
  };
});

const data = JSON.stringify({
  stories: dataStories,
  features: dataFeatures,
});

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(data);
}
