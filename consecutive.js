
function consecutive(chain){
    let max=0;
    let current=0;
    if(chain!=null){
        for (let value of chain) {
            if(value==1 || parseInt(value)==1){
                current++;
                console.log(current+"oko");
            }
            else if(value==0 || parseInt(value)==0){
                if(current>max){
                    max=current;
                    current=0;
                }
            }
            else
            return -1
        }
        return max;
    }
    else return -1;
}


export {consecutive};