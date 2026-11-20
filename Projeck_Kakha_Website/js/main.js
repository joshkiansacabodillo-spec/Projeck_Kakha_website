jQuery(function($){
  $('#yr').text(new Date().getFullYear());
  var L=["Fresh brown eggs, daily.","Day-old chicks & fertile eggs.","RIR & BPR breeders, ready to lay.","Farm-to-table heritage fowls."],i=0,c=0,d=false,el=$('#typed');
  (function tick(){var w=L[i];c+=d?-1:1;el.text(w.slice(0,c));
    if(!d&&c===w.length){d=true;return setTimeout(tick,1600);}
    if(d&&c===0){d=false;i=(i+1)%L.length;}
    setTimeout(tick,d?25:55);})();
  $('a.smooth').on('click',function(e){
    var t=$($(this).attr('href'));if(!t.length)return;e.preventDefault();
    $('html,body').animate({scrollTop:t.offset().top-50},700);
    $('#navi').collapse('hide');
  });
  $('.gallery a').on('click',function(e){e.preventDefault();$('#lbimg').attr('src',this.href);$('#lb').modal('show');});
  var done=false;
  function count(){
    if(done||$(window).scrollTop()+$(window).height()<$('.stats').offset().top+60)return;
    done=true;
    $('.count').each(function(){var el=$(this),to=+el.data('to');
      
      $({n:0}).animate({n:to},{duration:1500,step:function(v){el.text(Math.round(v))}});});
  }
  $(window).on('scroll load',count);count();
});
