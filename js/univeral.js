   $( function() {
        $( ".day-cell input" ).checkboxradio({
          icon: false
        });
      } );

      $( function() {
        $( ".fl-radio input" ).checkboxradio({
          icon: false
        });
      } );

      // $(function(){
      //   $(".input input[name=two-three]").checkboxradio({
          
      //   })
      // })


      $(".chevronWrapper span").on("click", function(){
        $(".park-filter-wrapper").slideToggle(800);
        if($(this).hasClass("glyphicon-chevron-down")){
          $(this).hide();
          $(".glyphicon-chevron-up").show();
        } else{
          $(this).hide();
          $(".glyphicon-chevron-down").show();
        }

      });



      $(window).on("resize", function(){
        if($(window).width() >992){
          $(".park-filter-wrapper").show();
        }
      })

     
     function Count(){
        this.count = 0;
        this.increment = function(){
          this.count++;
        };
        this.decrease = function(){
          this.count--;
        }

     }
  var adultCounter = new Count();
     var childCounter = new Count(); 

    $("#adult-increase").on("click", function(){
       if(adultCounter.count <10){
        adultCounter.increment();
       }

       $("#adult-number-label").text(adultCounter.count);
       $("#filter-menu-adult").text(adultCounter.count);


    });

    $("#filter-menu-adult").text(adultCounter.count)

    $("#adult-decrease").on("click", function(){
       if(adultCounter.count >0){
        adultCounter.decrease();
       }

       $("#adult-number-label").text(adultCounter.count);
       $("#filter-menu-adult").text(adultCounter.count);


    });

    $("#filter-menu-child").text(childCounter.count);

    $("#child-increase").on("click", function(){
       if(childCounter.count <10){
        childCounter.increment();
       }

       $("#child-number-label").text(childCounter.count);
       $("#filter-menu-child").text(childCounter.count);


    });

    $("#child-decrease").on("click", function(){
       if(childCounter.count >0){
        childCounter.decrease();
       }

       $("#child-number-label").text(childCounter.count);
       $("#filter-menu-child").text(childCounter.count);


    });

   $("input[type=radio][name=florida]").change(function(){
        if($(this).val()==="yes"){
          $(".fl-resident-icon").show();
          
            flresidentprices();
             
        } else {
          $(".fl-resident-icon").hide();
          
            regularPrices();
        }

   });



   $("input[type=radio][name=day]").change(function(){

        var dayChoice = $(this).val();
        console.log(typeof(dayChoice));

        $("#filter-menu-day").text(dayChoice);

         $(".suggestion").hide();
          $(".ticket").hide();


        switch(dayChoice){


          case "1":
         
            $(".oneDay").show();
             $("input[type=radio][name=florida]").prop("disabled", true);
            $(".florida-resident-wrapper").attr("disabled", true);
            console.log("one");
            break;

          case "2":
         
            $(".twoDay").show();
            console.log("two");
             $("input[type=radio][name=florida]").prop("disabled", false);
            $(".florida-resident-wrapper").attr("disabled", false);
            break;

          case "3":
         
            $(".threeDay").show();
            $("#addDay").show();

            console.log("three");
             $("input[type=radio][name=florida]").prop("disabled", false);
            $(".florida-resident-wrapper").attr("disabled", false);
            break;

          case "4":
            
            $(".fourDay").show();
            $("#annualPass").show();
            $("input[type=radio][name=florida]").prop("disabled", true);
            $(".florida-resident-wrapper").attr("disabled", true);
            console.log("four");
            break;

          case "5":
         
            $(".fiveDay").show();
            $("#annualPass").show();
             $("input[type=radio][name=florida]").prop("disabled", true);
            $(".florida-resident-wrapper").attr("disabled", true);
            console.log("five");
            break;

          default:
          $(".suggestion").hide();
          $(".ticket").hide();
          console.log("hide");

        }

   });

  $(".threeDay").show();
            // $("#addDay").show();








function flresidentprices(){

   $("#2-3adultp2p").text(ticketArray[0].floridaPrice.p2p.adult);
          $("#2-3childp2p").text(ticketArray[0].floridaPrice.p2p.child);
          $("#2-3adultop").text(ticketArray[0].floridaPrice.onePark.adult);
          $("#2-3childop").text(ticketArray[0].floridaPrice.onePark.child);

           $("#3-3adultp2p").text(ticketArray[1].floridaPrice.p2p.adult);
          $("#3-3childp2p").text(ticketArray[1].floridaPrice.p2p.child);
          $("#3-3adultop").text(ticketArray[1].floridaPrice.onePark.adult);
          $("#3-3childop").text(ticketArray[1].floridaPrice.onePark.child);

          $("#2-2adultp2p").text(ticketArray[2].floridaPrice.p2p.adult);
          $("#2-2childp2p").text(ticketArray[2].floridaPrice.p2p.child);
          $("#2-2adultop").text(ticketArray[2].floridaPrice.onePark.adult);
          $("#2-2childop").text(ticketArray[2].floridaPrice.onePark.child);
      

}

function regularPrices(){

     $("#2-3adultp2p").text(ticketArray[0].regPrice.p2p.adult);
          $("#2-3childp2p").text(ticketArray[0].regPrice.p2p.child);
          $("#2-3adultop").text(ticketArray[0].regPrice.onePark.adult);
          $("#2-3childop").text(ticketArray[0].regPrice.onePark.child);

          $("#3-3adultp2p").text(ticketArray[1].regPrice.p2p.adult);
          $("#3-3childp2p").text(ticketArray[1].regPrice.p2p.child);
          $("#3-3adultop").text(ticketArray[1].regPrice.onePark.adult);
          $("#3-3childop").text(ticketArray[1].regPrice.onePark.child);
             
          $("#2-2adultp2p").text(ticketArray[2].regPrice.p2p.adult);
          $("#2-2childp2p").text(ticketArray[2].regPrice.p2p.child);
          $("#2-2adultop").text(ticketArray[2].regPrice.onePark.adult);
          $("#2-2childop").text(ticketArray[2].regPrice.onePark.child);

}