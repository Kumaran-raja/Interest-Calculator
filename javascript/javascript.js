function interestType(){
    let typeInterest=document.getElementById("typeInterest").value;
    if(typeInterest=="simple"){
        document.getElementById("compound").style.display="none";
        document.getElementById("simple_button").style.display="block";
        document.getElementById("compound_button").style.display="none";
        
        document.getElementById('show').innerHTML="";
    }
    else if(typeInterest=="compound"){
        document.getElementById("compound").style.display="block";
        document.getElementById("compound_button").style.display="block";
        document.getElementById("simple_button").style.display="none";
        document.getElementById('show').innerHTML="";
    }
}

function Calculate(type){
    let amount=document.getElementById("amount").value;
    let rate=document.getElementById("rate").value;
    let time=document.getElementById("time").value;
    let CompoundTime=document.getElementById("CompoundTime").value;
    if(type=="simple"){
        if(amount=="" || isNaN(amount)){
            alert("Enter Amount in Number")
        }
        else if(rate=="" || isNaN(rate)){
            alert("Enter Rate of Interest")
        }
        else if(time=="" || isNaN(time)){
            alert("Enter Year")
        } 
        else{
            let interest=(amount*rate*time)/100
            let total=parseInt(amount)+interest;
            document.getElementById('show').innerHTML="Loan Amount : "+ amount +"<br>"+ "Interest Rate : "+rate+"%"+"<br>"+" Payback in "+time+" Year : ₹"+total;
        }
    }
    else if(type=="compound"){
        if(amount=="" || isNaN(amount)){
            alert("Enter Amount in Number")
        }
        else if(rate=="" || isNaN(rate)){
            alert("Enter Interest Rate")
        }
        else if(time=="" || isNaN(time)){
            alert("Enter Year")
        } 
        else if(CompoundTime=="" || isNaN(CompoundTime)){
            alert("Enter Number of times interest is compounded per year")
        } 
        else{
            let r=rate/100;
            let interest = amount * Math.pow((1 + r/CompoundTime), CompoundTime*time);
            let total=interest;
            document.getElementById('show').innerHTML="Investment Amount : "+ amount +"<br>"+ "Interest Rate : "+rate+"%"+"<br>"+" ReturnBack in "+time+" Year : ₹"+total.toFixed(2);
        }
    }
}
