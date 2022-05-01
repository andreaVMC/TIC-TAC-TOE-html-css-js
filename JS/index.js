//made by Andrea Vaccaro 30/04/2022 italy GitHub:andreaVMC
console.log("made by Andrea Vaccaro 30/04/2022 italy GitHub:andreaVMC");
var n=0;
var mod=[];
var XorO=[]; //1 for x, and 0 for O
var wincondition=0;//0 for no win, 1 for win
function main(identifical){
    if(n==0 && mod[(identifical-1)]!=1 && wincondition==0){
        mod[(identifical-1)]=1;
        n+=1;
        XorO[(identifical-1)]=1;
        document.querySelector('.x'+identifical).style = ("display:block;");
        if(win(XorO[(identifical-1)],identifical)){
            document.getElementById('result').innerHTML = "WIN";
            document.querySelector('.win1').style = ("display:block;");
        }else if(full()){
            document.getElementById('result').innerHTML = "TIE";
        }        
    }else if(n==1 && mod[(identifical-1)]!=1 && wincondition==0){
        n-=1;
        mod[(identifical-1)]=1;
        XorO[(identifical-1)]=0;
        document.querySelector('.o'+identifical).style = ("display:block;");
        if(win(XorO[(identifical-1)],identifical)){
            document.getElementById('result').innerHTML = "WIN";
            document.querySelector('.win2').style = ("display:block;");
        }else if(full()){
            document.getElementById('result').innerHTML = "TIE";
        }   
    }
}




//document.querySelector(name).style = ("background-color: blue;");
function win(stato,identity){
    if(identity==1){
        if(XorO[(identity)]==stato && XorO[(identity+1)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity+2)]==stato && XorO[(identity+5)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity+3)]==stato && XorO[(identity+7)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }else if(identity==2){
        if(XorO[(identity-2)]==stato && XorO[(identity)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity+2)]==stato && XorO[(identity+5)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }else if(identity==3){
        if(XorO[(identity-3)]==stato && XorO[(identity-2)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity+2)]==stato && XorO[(identity+5)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity+1)]==stato && XorO[(identity+3)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }else if(identity==4){
        if(XorO[(identity-4)]==stato && XorO[(identity+2)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity)]==stato && XorO[(identity+1)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }else if(identity==5){
        if(XorO[(identity)]==stato && XorO[(identity-2)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity-4)]==stato && XorO[(identity+2)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity-5)]==stato && XorO[(identity+3)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity-3)]==stato && XorO[(identity+1)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }else if(identity==6){
        if(XorO[(identity-4)]==stato && XorO[(identity+2)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity-2)]==stato && XorO[(identity-3)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }else if(identity==7){
        if(XorO[(identity-4)]==stato && XorO[(identity-7)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity)]==stato && XorO[(identity+1)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity-3)]==stato && XorO[(identity-5)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }else if(identity==8){
        if(XorO[(identity-2)]==stato && XorO[(identity)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity-4)]==stato && XorO[(identity-7)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }else if(identity==9){
        if(XorO[(identity-2)]==stato && XorO[(identity-3)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity-4)]==stato && XorO[(identity-7)]==stato){
            wincondition=1;
            return 1;
        }else if(XorO[(identity-5)]==stato && XorO[(identity-9)]==stato){
            wincondition=1;
            return 1;
        }else{
            return 0;
        }
    }
}

function full(){
    var i,ctr=0;
    for(i=0;i<9;i++){
        if(XorO[i]!=null){
            ctr++;
        }
    }
    if(ctr==9){
        return 1;
    }else{
        return 0;
    }
}