$(document).ready(function(){
    var lift_pos = 4;
    $("#interactbtn").click(function(){
        var url = "http://127.0.0.1:5000/call_the_lift";
        $.get(url,function(olddata,status){
            if (olddata){
                data = olddata.floor_number_gen;
                if (data == '0'){
                    var going_to = 0;
                    if(going_to < lift_pos){
                        var variable1 = "400px";
                        $("img").animate({ top: variable1},6000);            
                    }
                    else{
                        alert("you are already in that floor");
                    }
                    lift_pos = 0;
                }
                else if(data == '1'){
                    going_to = 1;
                    if(going_to < lift_pos){
                        variable1 = "300px";
                        $("img").animate({ top: variable1},6000);
                    }
                    else if(going_to > lift_pos){
                        variable0 = (going_to-lift_pos) * 100;
                        vari = variable0 + 'px';
                        variable1 = '-=' + vari;
                        $("img").animate({ top: variable1},6000);
                    }
                    else{
                        alert("you are already in that floor");
                    }
                    lift_pos = 1;
                }
                else if(data == '2'){
                    going_to = 2;
                    if(going_to < lift_pos){
                        variable1 = "200px";
                        $("img").animate({ top: variable1},6000);
                    }
                    else if(going_to > lift_pos){
                        variable0 = (going_to-lift_pos) * 100;
                        vari = variable0 + 'px';
                        variable1 = '-=' + vari;
                        $("img").animate({ top: variable1},6000);
                    }
                    else{
                        alert("you are already in that floor");
                    }
                    lift_pos = 2;
                }
                else if(data == '3'){
                    going_to = 3;
                    if(going_to < lift_pos){
                        variable1 = "100px";
                        $("img").animate({ top: variable1},6000);
                    }
                    else if(going_to > lift_pos){
                        variable0 = (going_to-lift_pos) * 100;
                        vari = variable0 + 'px';
                        variable1 = '-=' + vari;
                        $("img").animate({ top: variable1},6000);
                    }
                    else{
                        alert("you are already in that floor");
                    }
                    lift_pos = 3;
                }
                else if(data == '4'){
                    going_to = 4;
                    if(going_to > lift_pos){
                        variable0 = (going_to-lift_pos) * 100;
                        vari = variable0 + 'px';
                        variable1 = '-=' + vari;
                        $("img").animate({ top: variable1},6000);
                    }
                    else{
                        alert("you are already in that floor");
                    }
                    lift_pos = 4;
                }
                else{
                    alert("There is no floor in building");
                }
            }
                
        }).done(function(){
            var urlsecond = "http://127.0.0.1:5000/go_to_lift";
            $.get(urlsecond,function(olddata,status){
                if (olddata){
                    data = olddata.floornew;
                    if (data == '0'){
                        var going_to = 0;
                        if(going_to < lift_pos){
                            var variable1 = "400px";
                            $("img").animate({ top: variable1},6000);            
                        }
                        else{
                            alert("you are already in that floor");
                        }
                        lift_pos = 0;
                    }
                    else if(data == '1'){
                        going_to = 1;
                        if(going_to < lift_pos){
                            variable1 = "300px";
                            $("img").animate({ top: variable1},6000);
                        }
                        else if(going_to > lift_pos){
                            variable0 = (going_to-lift_pos) * 100;
                            vari = variable0 + 'px';
                            variable1 = '-=' + vari;
                            $("img").animate({ top: variable1},6000);
                        }
                        else{
                            alert("you are already in that floor");
                        }
                        lift_pos = 1;
                    }
                    else if(data == '2'){
                        going_to = 2;
                        if(going_to < lift_pos){
                            variable1 = "200px";
                            $("img").animate({ top: variable1},6000);
                        }
                        else if(going_to > lift_pos){
                            variable0 = (going_to-lift_pos) * 100;
                            vari = variable0 + 'px';
                            variable1 = '-=' + vari;
                            $("img").animate({ top: variable1},6000);
                        }
                        else{
                            alert("you are already in that floor");
                        }
                        lift_pos = 2;
                    }
                    else if(data == '3'){
                        going_to = 3;
                        if(going_to < lift_pos){
                            variable1 = "100px";
                            $("img").animate({ top: variable1},6000);
                        }
                        else if(going_to > lift_pos){
                            variable0 = (going_to-lift_pos) * 100;
                            vari = variable0 + 'px';
                            variable1 = '-=' + vari;
                            $("img").animate({ top: variable1},6000);
                        }
                        else{
                            alert("you are already in that floor");
                        }
                        lift_pos = 3;
                    }
                    else if(data == '4'){
                        going_to = 4;
                        if(going_to > lift_pos){
                            variable0 = (going_to-lift_pos) * 100;
                            vari = variable0 + 'px';
                            variable1 = '-=' + vari;
                            $("img").animate({ top: variable1},6000);
                        }
                        else{
                            alert("you are already in that floor");
                        }
                        lift_pos = 4;
                    }
                    else{
                        alert("There is no floor in building");
                    }
                }

            }).done(function(){
                var url_last = "http://127.0.0.1:5000/thank";
                $.get(url_last,function(data,status){
                    console.log("thank you latter");
                });
            });
        });
    });
});