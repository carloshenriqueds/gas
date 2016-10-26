/**
* @input {number} entrada pra aplicar a taxa tax.
 * @location local para aplicar a taxa adequada.
 * @customfunction
 */
function calculaTaxa(valor, local) {
    var imposto = 0 ;
      switch (local) {
        case 'AC':
            imposto = 0.11;
            break;
        case 'AL':
            imposto = 0.11;
            break;
        case 'AP':
            imposto = 0.11;
            break;
        case 'AM':
            imposto = 0.09;
            break;
        case 'BA':
            imposto = 0.12;
            break;
        case 'CE':
            imposto = 0.11;
            break;
        case 'DF':
            imposto = 0.13;
            break;
        case 'ES':
            imposto = 0.14;
            break;
        case 'GO':
            imposto = 0.14;
            break;
        case 'MA':
            imposto = 0.13;
            break;
        default:
            imposto = 0;
    }
    return (valor * imposto);
}