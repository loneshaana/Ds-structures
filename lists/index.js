/**
 * list DS has a couple of functionalities
 * 1.implement get set 
 * 2.implement push pop (Front ,back)
 * 3.implement removeDuplicates
 * 4.remove an element 
 * 5.remove at particular index
 * 6.filter the arrays
 * 7.fill method to fill the array
 */

class List {
    constructor(...arg){
        this.list = arg ? [...arg] : []
    }

    /**
        get() returns the list
        get(index) returns the element at the given index
    */
    get(index){
        if(index){
            const l = [...this.list];
            return l[index];
        }
        if(this.list) return [...this.list];
        return [];
    }

    set(...arg){
        this.list = [...arg]
    }

    push(val){
        if(!val) throw new Error('Argument missing for push')
        this.list.push(val);
        return this.list;
    }

    contains(val){
        if(!val) return false;
        const index = this.list.indexOf(val);
        if(index === -1) return false;
        return true;
    }

    pushFront(val){
        if(!val) throw new Error('argument missing for pushFront')
        this.list.unshift(val);
    }

    popEnd(){
        this.list.pop();
        return this.list;
    }

    popFront(){
        return this.list.shift();
    }
    
    /*
        remove duplicates from the list
    */
    removeDuplicates(){
        if(this.list.length ===0) return;
        const setList = new Set(this.list);
        this.list = [...setList];
        return this.list;
    }

    /*
        remove element at a particular index
    */
    splice(index){
        if(index < 0) return;
        if(!index) throw new Error('invalid index provided');
        if(index >= this.list.length) throw new Error('Unknow index given in removeIndex function');
        return this.list.splice(index,1);
    }

    /*
        remove element not by index by its value
    */
    remove(val){
        if(!val) throw new Error('you have to provide the value to be removed from the list ');
        const index = this.list.indexOf(val);
        this.splice(index);
        return this.list;
    }

    /**
     * filter based on numbers or alphabets
        filter(new List(1,2,3)) => filters the list without having the 1,2,3 in it;
        filter(1) => filters the list without having 1;
        filter('a') fitlers the list without having 'a' in it; 
        filter('a','b') => this will only filter `a` in it
            -> to filter on both it should be filter(new List('a','b'))
     */
    filter(mode){
        const digit = 1;
        const alphabet ='a';
        if(!mode) throw new Error('Please filter based on mode i.e number or string');
        
        if(mode instanceof List){
            return this.list.filter(ele =>{
                return !mode.contains(ele);
            });
            return;
        }

        if(typeof mode === 'number' || (typeof mode === 'string' && mode.length === 1)){
            return this.list.filter(ele =>{
                return ele !== mode;
            });
            return;
        }

        const filterOn = mode === 'number' ? digit : alphabet;
        const arr = this.list.filter(ele =>{
            return typeof ele !==typeof filterOn;
        });
        return arr;
    }

    /*
        push element at particular index
        if index is not given it will push it in front
    */

    pushAt(element,index=0){
        if(!element) throw new Error('pushAt requires the element to push element')
        if(index===0){
            this.pushFront(element);
            return;
        }
        const l = this.list;
        l[index] = element;
        this.list = l;
        return this.list;
    }

    fill(element,topIndex,bottomIndex=0){
        if(!topIndex) throw new Error('topIndex is required for the fill -> fill(element,topIndex,bottomIndex=0)');
        if(!element) throw new Error('element to fill the array is required -> fill(element,topIndex,bottomIndex=0)');
        if(topIndex <= bottomIndex) return;
        this.list.fill(element,bottomIndex,topIndex);
        return this.list;
    }

}

module.exports = List;