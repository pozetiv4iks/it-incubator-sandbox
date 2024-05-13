function solution(list){
    let ranges = [];
        let rangeStart = list[0];
        let rangeEnd = list[0];
    
        for (let i = 1; i < list.length; i++) {
            if (list[i] === rangeEnd + 1) {
                rangeEnd = list[i];
            } else {
                if (rangeEnd - rangeStart >= 2) {
                    ranges.push(`${rangeStart}-${rangeEnd}`);
                } else {
                    ranges.push(rangeStart.toString());
                    if (rangeEnd !== rangeStart) {
                        ranges.push(rangeEnd.toString());
                    }
                }
                rangeStart = list[i];
                rangeEnd = list[i];
            }
        }
    
        if (rangeEnd - rangeStart >= 2) {
            ranges.push(`${rangeStart}-${rangeEnd}`);
        } else {
            ranges.push(rangeStart.toString());
            if (rangeEnd !== rangeStart) {
                ranges.push(rangeEnd.toString());
            }
        }
    
        return ranges.join(',');}