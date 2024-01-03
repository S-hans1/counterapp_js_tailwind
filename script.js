// countValue hamara yahan div element ki baat kr rha h

const countValue = document.getElementById('counter');

function increment() {
    // ab div matalb element mai se inner text nikalenge aur usko value variable ke equal krwa denge
    // let value = countValue.innerText;
    // ab ye value string mai mil rhi h aur hame integer mai chahiye. we use parseInt
    let value = parseInt(countValue.innerText);
    // ab is fetch value ko increment krwana hai
    value = value + 1;
    // ab is increment updated value to wapis element mai ghusana h
    countValue.innerText = value;

}

const decrement = () => {
    
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;

};

