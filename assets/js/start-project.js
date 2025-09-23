// Start Project form → mailto
document.getElementById('projectForm').addEventListener('submit', function(e){
  e.preventDefault();
  const d=new FormData(this);
  const lines=[
    "Request Type: Project Kickoff",
    `Country / City: ${d.get('country')} ${d.get('city')||''}`,
    `Timeline: ${d.get('start')} → ${d.get('end')}`,
    `Main Materials: ${d.get('materials')}`, `Estimated Qty: ${d.get('qty')||'-'}`,
    "", `Key Requirements: ${d.get('reqs')||'-'}`,
    "", `Name: ${d.get('name')}`, `Email: ${d.get('email')}`
  ];
  location.href=`mailto:we.solve@steel-vista.com?subject=${encodeURIComponent('Start a Project – Steel Vista')}&body=${encodeURIComponent(lines.join('\n'))}`;
});