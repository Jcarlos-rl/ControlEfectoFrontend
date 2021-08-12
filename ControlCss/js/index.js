let Ripple = {
    init: function(selector){
        document.querySelectorAll(selector).forEach(elem => this.transform(elem))
    },
    transform: function(element){
        element.addEventListener('click', (e)=>{

            element.style.position = 'relative';

            let coords = {
                x: e.x,
                y: e.y
            },
            rect = element.getBoundingClientRect(),
            clickPosition = {
                x: coords.x - rect.left,
                y: coords.y - rect.top
            },
            ripple = document.createElement('span'),
            styles = `
                width: ${rect.width * 2}px;
                height:${rect.width * 2}px;
                background-color: rgba(255,255,255,0.56);
                border-radius:50%;
                position: absolute;
                top: ${clickPosition.y- rect.width}px;
                left: ${clickPosition.x- rect.width}px;
            `;

            ripple.style.cssText = styles;

            element.appendChild(ripple);
        })
    }
}

Ripple.init('button');