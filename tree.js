function print(text){
    console.log(text);
}

var h = 5;

for(var i = 0; i < h; i++) {
    var str = "";

    for(var x = 0; x < h - 1 - i; x++) {
        str += " "
    }
    
    for(var y = 0; y < i * 2 + 1; y++ ) {
      str += "*"   
    }

    print(str)

    if(i == h - 1)
    {
        str = "";
        var n = i * 2;

        for(var z = 0; z < n / 2; z++)
            str += " "

        str += "*"

        print(str)
    }
}
