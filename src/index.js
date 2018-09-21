class Sorter {
  constructor() {
    this.arr=[]
    this.compareFunction=(a,b) => a-b;
    // your implementation
  }

  add(element) {
    this.arr.push(element);
    // your implementation
  }

  at(index) {
    return this.arr[index];
    // your implementation
  }

  get length() {
    return this.arr.length;
    // your implementation
  }

  toArray() {
    return this.arr;
    // your implementation
  }

  sort(indices) {
    var temp_array=[];
    if (indices[1]<indices[0]) {
      indices.reverse();
    }
    for (var i=0; i<indices.length;i++){
      temp_array.push(this.arr[indices[i]])
      }
    temp_array.sort(this.compareFunction);
    for (var i=0; i<temp_array.length; i++){
      this.arr.splice(indices[i],1,temp_array[i]);
    }

    // your implementation
  }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
    // your implementation
  }
}

module.exports = Sorter;