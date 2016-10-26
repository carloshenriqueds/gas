function removeDuplicatas() {
  var planilha = SpreadsheetApp.getActiveSheet();
  var dados = planilha.getDataRange().getValues();
  var novosDados = new Array();
  for(i in dados){
    var row = dados[i];
    var duplicata = false;
    for(j in novosDados){
      if(row.join() == novosDados[j].join()){
        duplicata = true;
      }
    }
    if(!duplicata){
      novosDados.push(row);
    }
  }
  planilha.clearContents();
  planilha.getRange(1, 1, novosDados.length, novosDados[0].length).setValues(novosDados);
}