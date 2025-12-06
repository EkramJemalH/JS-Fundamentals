class Reactangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth;
        }
        else{
            console.log("invalid width");
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.log("invalid Height");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}
const react=new Reactangle(-10,20);
console.log(react.width);
console.log(react.height);