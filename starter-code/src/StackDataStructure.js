function StackDataStructure() {
    this.MAX_SIZE = 4
    this.stackControl = []
    this.underFlowFlag = false;
    this.isEmpty = function () {
        if (this.stackControl.length === 0) return true;
        return false;
    }
    this.canPush = function () {
        if (this.stackControl.length >= this.MAX_SIZE) { return false };
        return true;
    }
    this.push = function (value) {
        if (this.stackControl.length >= this.MAX_SIZE) { return "Stack Overflow" };
        this.stackControl.push(value);
        this.underFlowFlag = false;
        return this.stackControl;
    }
    this.pop = function () {
        if (this.stackControl.length === 0) { 
            this.underFlowFlag = true;
            return "Stack Underflow" };
        return this.stackControl.pop()
    }

    this.printStack = function () {
        for (i = 0; i < this.MAX_SIZE; i++) {
            if (this.stackControl[i] !== undefined) {
                $('.stack-element').eq(this.MAX_SIZE - 1 - i).text(this.stackControl[i]);
                $('.stack-element').eq(this.MAX_SIZE - 1 - i).addClass('full');
                $('.stack-element').eq(this.MAX_SIZE - 1 - i).removeClass('underflow');
                if (this.canPush() === false) {
                    $('.stack-element').eq(0).text("Stack Oveflow")
                    $('.stack-element').eq(0).addClass('overflow');
                }
            } else {
                $('.stack-element').eq(this.MAX_SIZE - 1 - i).text(``);
                $('.stack-element').eq(this.MAX_SIZE - 1 - i).removeClass('full');
                $('.stack-element').eq(this.MAX_SIZE - 1 - i).removeClass('overflow');
                if (this.underFlowFlag === true) {
                    $('.stack-element').eq(this.MAX_SIZE - 1).text("Stack Underflow")
                    $('.stack-element').eq(this.MAX_SIZE - 1).addClass('underflow');
                }
            }
        }
    }
}