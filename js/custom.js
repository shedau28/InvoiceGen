$(document).ready(function () {

  $('#addrow').click(function () {
    $('.item-row:last').after('<tr class="item-row"><td class="item-name"><div class="delete-wpr"><textarea>Item Name</textarea></td> <td class="description"><textarea>Item Description </textarea></td><td><textarea class="cost">0</textarea></td><td><textarea class="qty">0</textarea></td><td><span class="price">0</span></td> </tr>')
    bind();
  })
  bind();
  function bind() {
    $('.cost').blur(update_price);
    // console.log($('.cost').blur(update_price))
    $('.qty').blur(update_price);
    $('#discount').blur(update_price);
    $('#gst').blur(update_price);
  }


  function update_price() {
    var row = $(this).parents('.item-row');
    var cost = row.find('.cost').val();
    // console.log(cost)
    var qty = row.find('.qty').val();
    // console.log(qty)

    var x = $(this).parents(".disc-value").find("#discount").val() 
    var y = $(this).parents(".gst-value").find("#gst").val() 
    console.log(x)
    console.log(y)


    row.find('.price').html(Number(qty) * Number(cost));

    // console.log(total)
    // disc_sum=(total/100)*x;
    // $(this).parents(".grand_total-value").find('.grand_total').html((total-disc_sum).toFixed(2));


    update_total()
  }
  function update_total() {

    var total = 0;
    $('.price').each(function (i) {
      price = $(this).html();
      console.log(i + ":" + price)
      if (price > 0) {
        total += Number(price);
      }
    });


    $('#subtotal').html(total);


    // $("#discount").each(function () {
    //   disc = $(this).html();
    //   if (disc > 0) {
    //     disc_sum = (y / 100) * disc
    //     y += disc_sum
    //   }
    // })

    
    	disc_sum=(total/100)*$('#discount').val();
      var without_disc = total-disc_sum;
      console.log(without_disc);

      gst_sum=(total/100)*$("#gst").val();
      // var with_gst = without_disc+gst_sum;
      // console.log(with_gst);
      
    	$('#grand_total').html((without_disc + gst_sum).toFixed(2));
    



    // $('#grand_total').html(y);
  }

  // function update_discount() {
  //   var disc;
  //   $("#discount").val(function(){
  //     discounted_total = $(this).val();
  //     disc=(x/100)*discounted_total
  //   })

  //   $('#grand_total').html(disc);

  // }


  // $("#discount").on('mouseup',function(){
  //   var x = $(this).parents(".disc-value").find("#discount").val()
  //   console.log(x)
  //   console.log($(this).parents("total-value").find("#subtotal").val())


  // });

})



  // function calc_total(){

  //   let x = $('#subtotal').val();
  //   disc_sum=(x/100)*$('#discount').val();
  //   $('.total-value').val((Number(x)-disc_sum).toFixed(2));

  // }





