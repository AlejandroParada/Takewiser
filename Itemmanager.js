var componentdata = {
  borrados:[],
  contenido2: [
    {
      titulo: '1 Ne. 3:7', dato: 'zzz', uso: true, id: 0, order: 0 },
    { titulo: 'bbb', dato: 'mmmm', uso:true, id: 1, order: 1},
    { titulo: 'ccc', dato: 'nnn', uso:false, id: 2, order: 2}
  ],
  icons: {
    more: 'more-vertical',
    recup: 'refresh',
    add: 'plus',
    contact: 'user',
    address: 'location',
    phone: 'phone',
    email: 'mail',
    fax: 'copy',
    url: 'laptop',
    open: 'chevron-up',
    close: 'close'
  }, 
  order: null
};
Vue.component('organizador', {
  mounted(){
    //this.$nextTick(function () {
 //     Sortable.create(document.getElementById('sortable'), {
       // animation: 200,
     //   onUpdate: () => { 
         //this.order = sortable.toArray(); 
      //});
    
    //var indexes = [];
    //var order = null;

    //$(document).on('moved', '.uk-sortable', function(e) {
       //var currentLi = e.originalEvent.explicitOriginalTarget;
       //indexes = [];
      // console.log($(currentLi).data());
       //$(this).find('div').each(function() {
   // indexes.push($(this).data("index"));
        // });
       //alert("New position: " + e.oldIndex);
        //console.log(e);
   //});

//$('.uk-sortable').find('div').each//(function(i) {
    //  $(this).data("index", i);
     //  indexes.push(i);

//console.log(indexes);
    //console.log('inicializo');
    //var $element = $('div.uk-sortable-handle');
    //console.log($element[0]);
     //UIkit.util.on(document,'moved','#sortable', function(e,sortable,el){
   //console.log(e);  
      // console.log('si funciona');
      // console.table(e);
       //console.log(e.oldIndex);
       //  console.log('dropped (Sortable)');
   //      this.reorder(item.oldIndex,item.newIndex);
      //UIkit.notification(`Card is ${item.detail[1].id}`, 'success');
    
    //console.log('salio');
  },
  props: [ 'mover', 'eliminar', 'texto', 'filtrado','agregar','recuperar'], 
  data() {
   return componentdata;
     
    //bcontenido: this.contenido,
     //dmover: this.mover, 
     //deleminar: this.eliminar,
     
//   };
  
},
methods: {
  sortedItems: function() {
      if (!this.order) {
      	return this.contenido2 ;
      }
      return this.order.map((i) => 
      this.contenido2[i]);
    }, 
  reorder(oldIndex, newIndex) {
    // move the item in the underlying array
    this.contenido2.splice(newIndex,this.contenido2.splice(oldIndex, 1)[0]);
    // update order properties based on position in array
    this.contenido2.forEach(function(item, index){
      item.order = index;
    });
  },

  add(){
    alert("Se agrega");
    return;
  },
  del(index,d) {
    
    //d.uso=false;
   // alert('Se eliminará '+ d.uso); 
   // alert(d.titulo);
   this.borrados.push(d);
    this.contenido2.splice(index, 1);
    //return;
  }, 
  recup(index,d){
    this.contenido2.push(d);
    this.borrados.splice(index, 1);
  },
}, 
computed:  {
  
 usofiltrado() {
   if(this.recuperar === 'true'){
     return this.borrados;
   }
   
    //var f=this.filtrado;
   // console.log(f);
    //if(f === 'true' ) 
    //{
      //alert('si ' + this.filtrado);
      //return this.contenido2.filter(item => item.uso);
    //} 
    //else
    //{
      //console.log(this. contenido2); 
      //alert('no ' + this.filtrado);
      return this.contenido2;
    //} 
  } 
 
}, 
  template:'<div class="uk-container">' +
     '<div class="uk-card">' +
         '<div v-if=agregar class="uk-inline uk-width-5-5">'+
          '<div @click="add()" class="uk-text-lead uk-width-5-5 uk-text-center uk-card-default"  :uk-icon="\'icon: \' + icons.add">' +
            
          '</div>' + 
        '</div>' +
       
'<div id="sortable" class="uk-grid-small" >' +
      
 '<div v-for="(d, index) in usofiltrado" :key="d.id">'+
      '<div id="lin{index}" class="uk-card-default uk-flexbox">'+ 
    
        '<div class="uk-card">' +
         '<div class="uk-inline uk-width-5-5">'+
          '<div class="uk-text-lead uk-card-default" >' +
            '{{d.titulo}}' +
            
      '<template v-if=mover>' +
          '<span class="uk-position-right uk-margin-small" :uk-icon="\'icon: \' + icons.open"></span>'+
          '<span class="uk-flexbox" :uk-icon="\'icon: \' + icons.open"></span>'+       
        '</template>' +   
       '<template v-if=eliminar>' +
            '<span @click="del(index,d)" class="uk-margin-small-right uk-position-center-right" :uk-icon="\'icon: \' + icons.close"></span>'+
       '</template>' +
       '<template v-if=recuperar>' +
          '<span @click="recup(index,d)" class="uk-margin-small-right uk-position-center-right uk-align-right" :uk-icon="\'icon: \' + icons.recup"></span>'+
       '</template>' +
      '</div>' +
      '<template v-if=texto>' +     
          '<div class="uk-child-width-expand@l uk-text-center" uk-grid uk-dropdown>{{d.dato}}</div>' +
      '</template>'+
      '</div>' +
  '</div>' +
  '</div>'
  
});

new Vue({ el: "#componentes-demo" });