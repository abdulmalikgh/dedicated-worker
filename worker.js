self.addEventListener('message',function(e){
    const result = e.data.valueOne * e.data.valueTwo;
    this.postMessage(result);
})