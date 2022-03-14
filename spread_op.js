const evens = [0, 2, 4, 6, 8, 10]
    const odds = [1, 3, 5, 7, 9]
    const combined =[...evens,...odds];
   
    console.log('combined array:', combined);
    
    document.write('combined array :', combined);
   

    combined.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
        
    });
    
    document.write('<br>sorted array :',combined);

    function showarray(val) {
    return "" + val + "";
    }
    
    const myList = combined.map((item) => showarray(item));
    document.write("<br>myList: ", myList);