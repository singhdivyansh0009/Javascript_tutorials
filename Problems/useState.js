let _val; 
function useState(initialValue){
    _val = _val === undefined ? initialValue : _val;
    const setState = newVal => {
        _val = typeof newVal === "function" ? newVal(_val) : newVal;
        render(); 
    }
    return [_val, setState];
}

function Component(){
    const [counter, setCounter] = useState(0);
    console.log("Rendered with counter:", counter);
    const clickCounter = () =>{
        setCounter(prev => prev + 1);
        // setCounter(counter+1);
    }
    if(counter === 2) return;
    clickCounter();
}

function render(){
    Component();
}

render();
