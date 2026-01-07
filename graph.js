const c=document.getElementById('canvas'),ctx=c.getContext('2d'),wrap=c.parentElement;
let nodes=[],edges=[],directed=false;

window.addEventListener('resize',draw);

function draw(){
  const n=parseInt(document.getElementById('nodes').value);
  const edgeStr=document.getElementById('edges').value;
  directed=document.getElementById('directed').checked;

  try{edges=JSON.parse(edgeStr)}catch(e){alert('Invalid edge format');return}

  nodes=[];
  const r=80;
  for(let i=0;i<n;i++){
    const a=2*Math.PI*i/n-Math.PI/2;
    nodes.push({x:r*Math.cos(a),y:r*Math.sin(a),vx:0,vy:0});
  }

  for(let k=0;k<100;k++){
    for(let i=0;i<n;i++){
      let fx=0,fy=0;
      for(let j=0;j<n;j++){
        if(i===j)continue;
        const dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y;
        const d=Math.sqrt(dx*dx+dy*dy)||1;
        const f=100/d;
        fx+=dx/d*f;fy+=dy/d*f;
      }
      edges.forEach(([a,b])=>{
        if(a===i||b===i){
          const j=a===i?b:a;
          const dx=nodes[j].x-nodes[i].x,dy=nodes[j].y-nodes[i].y;
          const d=Math.sqrt(dx*dx+dy*dy)||1;
          const f=(d-80)*0.03;
          fx+=dx/d*f;fy+=dy/d*f;
        }
      });
      nodes[i].vx=(nodes[i].vx+fx)*0.6;
      nodes[i].vy=(nodes[i].vy+fy)*0.6;
    }
    nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy});
  }

  let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
  nodes.forEach(n=>{
    minX=Math.min(minX,n.x);maxX=Math.max(maxX,n.x);
    minY=Math.min(minY,n.y);maxY=Math.max(maxY,n.y);
  });

  const pad=60;
  const gw=maxX-minX+pad*2,gh=maxY-minY+pad*2;
  const vw=wrap.clientWidth,vh=wrap.clientHeight;

  c.width=Math.max(gw,vw);
  c.height=Math.max(gh,vh);

  const cx=c.width/2,cy=c.height/2;
  const offsetX=cx-(minX+maxX)/2;
  const offsetY=cy-(minY+maxY)/2;

  const style=getComputedStyle(document.documentElement);
  const nodeColor=style.getPropertyValue('--node').trim();
  const nodeGlow=style.getPropertyValue('--node-glow').trim();
  const arrowColor=style.getPropertyValue('--arrow').trim();
  const edgeColor=style.getPropertyValue('--edge').trim();

  ctx.clearRect(0,0,c.width,c.height);

  edges.forEach(([a,b])=>{
    if(a>=n||b>=n)return;
    const n1=nodes[a],n2=nodes[b];
    const dx=n2.x-n1.x,dy=n2.y-n1.y,d=Math.sqrt(dx*dx+dy*dy);

    ctx.strokeStyle=edgeColor;
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(n1.x+offsetX,n1.y+offsetY);
    ctx.lineTo(n2.x+offsetX,n2.y+offsetY);
    ctx.stroke();

    if(directed){
      const ax=n2.x-dx/d*25,ay=n2.y-dy/d*25;
      const angle=Math.atan2(dy,dx);
      ctx.fillStyle=arrowColor;
      ctx.strokeStyle=arrowColor;
      ctx.lineWidth=1.5;
      ctx.beginPath();
      ctx.moveTo(ax+offsetX,ay+offsetY);
      ctx.lineTo(ax-16*Math.cos(angle-0.35)+offsetX,ay-16*Math.sin(angle-0.35)+offsetY);
      ctx.lineTo(ax-16*Math.cos(angle+0.35)+offsetX,ay-16*Math.sin(angle+0.35)+offsetY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  });

  nodes.forEach((n,i)=>{
    ctx.fillStyle=nodeColor;
    ctx.shadowBlur=12;
    ctx.shadowColor=nodeGlow;
    ctx.beginPath();
    ctx.arc(n.x+offsetX,n.y+offsetY,20,0,Math.PI*2);
    ctx.fill();
    ctx.shadowBlur=0;

    ctx.fillStyle='#fff';
    ctx.font='600 13px sans-serif';
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.fillText(i,n.x+offsetX,n.y+offsetY);
  });
}

draw();
