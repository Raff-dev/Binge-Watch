const onCreate = (selector, callback) => {
    let fired = false;

    const listen = () => {
        let element = $(selector);

        if (!fired && element.length) {
            fired = true;
            callback(element[0]);
        } else if (fired && !element.length) {
            fired = false;
        }
        setTimeout(listen, 100);
    };

    listen();
};

// "use strict";
// class Range {
//     constructor({min, max, step = 1}) {
//         this.min = min;
//         this.max = max;
//         this.step = step;
//     }

//     __iterator__() {
//         for (var val = this.min; val <= this.max; val+=this.step)
//             yield val;
//     }
// }
