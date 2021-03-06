function QueueDataStructure() {
    this.MAX_SIZE = 4
    this.queueControl = []
    this.underFlowFlag = false;
    this.isEmpty = function () {
        if (this.queueControl.length > 0) { return false };
        return true;
    }
    this.canEnqueue = function () {
        if (this.queueControl.length >= this.MAX_SIZE) { return false };
        return true;
    }
    this.enqueue = function (value) {
        if (this.queueControl.length >= this.MAX_SIZE) { return "Queue Overflow" };
        this.queueControl.unshift(value);
        this.underFlowFlag=false;
        return this.queueControl;
    }
    this.dequeue = function () {
        if (this.queueControl.length === 0) { 
            this.underFlowFlag=true;
            return "Queue Underflow" };
        return this.queueControl.pop()
    }

    this.printQueue = function () {
        for (i = 0; i < this.MAX_SIZE; i++) {
            if (this.queueControl[i] !== undefined) {
                $('.queue-element').eq(this.MAX_SIZE - 1 - i).text(this.queueControl[i]);
                $('.queue-element').eq(this.MAX_SIZE - 1 - i).addClass('full');
                $('.queue-element').eq(this.MAX_SIZE - 1 - i).removeClass('underflow');
                if (this.canEnqueue() === false) {
                    $('.queue-element').eq(0).text("Queue Oveflow")
                    $('.queue-element').eq(0).addClass('overflow');
                }
            } else {
                $('.queue-element').eq(this.MAX_SIZE - 1 - i).text(``);
                $('.queue-element').eq(this.MAX_SIZE - 1 - i).removeClass('full');
                $('.queue-element').eq(this.MAX_SIZE - 1 - i).removeClass('overflow');
                if (this.underFlowFlag === true) {
                    $('.queue-element').eq(this.MAX_SIZE - 1).text("Queue Underflow")
                    $('.queue-element').eq(this.MAX_SIZE - 1).addClass('underflow');
                }
            }

        }
    }
}

