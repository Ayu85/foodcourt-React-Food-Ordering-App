import React from 'react'

const useLetterAnimation = () => {
    const [placeholder, setPlaceholder] = React.useState('');

    const
        string = 'Fastest Food Delivery And Easy Pickup',
        index = React.useRef(0);

    React.useEffect(() => {
        function tick() {
            setPlaceholder(prev => prev + string[index.current]);
            index.current++;
        }
        if (index.current < string.length) {
            let addChar = setInterval(tick, 100);
            return () => clearInterval(addChar);
        }
    }, [placeholder]);
    return placeholder
}

export default useLetterAnimation
