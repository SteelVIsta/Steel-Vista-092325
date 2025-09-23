// Request Sample form → mailto
document.getElementById('sampleForm').addEventListener('submit', function(e){
  e.preventDefault();
  const d=new FormData(this);
  const lines=[
    "Request Type: Sample",
    `Material: ${d.get('material')}`, `Finish: ${d.get('finish')}`,
    `Thickness: ${d.get('thickness')}`, `Size: ${d.get('size')}`,
    `Quantity: ${d.get('qty')}`, `Lead Time: ${d.get('leadtime')}`,
    "", `Notes: ${d.get('notes')||'-'}`,
    "", `Name: ${d.get('name')}`, `Email: ${d.get('email')}`
  ];
  location.href=`mailto:we.solve@steel-vista.com?subject=${encodeURIComponent('Sample Request – Steel Vista')}&body=${encodeURIComponent(lines.join('\n'))}`;
});