dragElement(document.getElementById('cherry'));
dragElement(document.getElementById('m&m'));
dragElement(document.getElementById('oreo'));
dragElement(document.getElementById('sprinkles'));
dragElement(document.getElementById('cookie dough'));
dragElement(document.getElementById('pretzel'));


let totalTop = []

function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;



        if (totalTop.length <= 5 && !totalTop.includes(terrariumElement.id )){

            totalTop.push(terrariumElement.id)

            if (terrariumElement.offsetLeft > 230){
                document.getElementById('Menu').innerHTML += '<p>'+terrariumElement.id+'</p>'}
            else{
                alert('You Missed your ice cream!')}
        }
    }
    

}

function eat(){
    let menu = document.getElementById('Menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
        menu.classList.add('hidden');}
   
    var x = document.getElementById("crunch");
    x.play();
}