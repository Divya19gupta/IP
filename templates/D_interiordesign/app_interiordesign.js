new fullpage('#fullpage', {
    autoScrolling : true,
    navigation : true,
    onLeave: (origin,destination,direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const t1 = new TimelineMax({delay : 0.5});
        t1.fromTo(title,0.5, {y: '50' , opacity : 0 },{y: 0 , opacity : 1 } );

        if(destination.index === 1){
            const chairs = document.querySelectorAll('.chair');
            const description = document.querySelector('.description');

            t1.fromTo(chairs , 0.7 , {x: '50' , opacity : 0 },{x: 0 , opacity : 1 } )
            .fromTo(description,0.5, {y: '50' , opacity : 0 },{y: 0 , opacity : 1 } );
        }
    }
})