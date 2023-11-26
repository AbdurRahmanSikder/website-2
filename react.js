var tl = gsap .timeline();
var tt = gsap .timeline();
tl .from(".ss, .prod p, .log p",{
    y: -60,
    duration:1,
    stagger:0.2
})
tt .from(".content h1",{
    y:1000,
    duration:0.8,
    stagger:0.2
})
tl .from(".scroll",{
    y:10,
    repeat:-1,
    yoyo:true,
    stagger:1,
})
gsap .from(".fst",{
    x:1000,
    y:100,
    rotate: 360,
    duration: 50,
    repeat:-1,
    yoyo:true
})
gsap .from(".scnd",{
    x:-900,
    y:100,
    rotate: 360,
    duration: 50,
    repeat:-1,
    yoyo:true
})
gsap .from(".trd",{
    x:200,
    y:-500,
    rotate: 360,
    duration: 50,
    repeat:-1,
    yoyo:true
})
gsap .from(".frt",{
    x:-200,
    y:-500,
    rotate: 360,
    duration: 50,
    repeat:-1,
    yoyo:true
})