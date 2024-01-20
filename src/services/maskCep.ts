 const maskCep = (cep: string):string => {
    const numericValue = cep.replace(/\D/g, '')
     const cepMask = /^(\d{5})(\d{3})$/;
     
  
    return numericValue.replace(cepMask, '$1-$2');
}

export {maskCep}