function cambia(){
    var listCohorts;
    //se toma el valor de la listCohorts seleccionada:
    listCohorts = document.cohorts.listCohorts[document.cohorts.listCohorts.selectedIndex].value;
    //se chequea si la listCohorts esta definida:
    if(listCohorts !=0){
      //selecionamos las cosas rorrectas:
      eligiendo=eval("opt" + listCohorts);
      //se calcula el numero de cosas:
      num_opts=eligiendo.length;
      //marco el numero de ociones en el select:
      document.cohorts.quees.length=num_opts;
      //para cada opcion de array la pongo en el selec:
      for(i=0;i<num_opts;i++){
      document.cohorts.quees.options[i].vaule=eligiendo[i];
      document.cohorts.quees.options[i].text=eligiendo[i];
      }
    }else{
      //si no habia ninguna opcion seleccionada ,elimino las cossaas del selec
      document.cohorts.quees.length=1;
      //ponemos un guion en la unica opcio que he dejado:
      document.cohorts.quees.options[0].value="-";
      document.cohorts.quees.options[0].text="-";
      }
      //hacer un reset de las opts
      document.cohorts.quees.options[0].selected=true;
    }
    