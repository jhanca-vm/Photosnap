import plans from './_plans.js';

const contents = JSON.stringify(
  plans.map(plan => {
    return {
      title: plan.title,
      basic: plan.basic,
      pro: plan.pro,
      business: plan.business,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
