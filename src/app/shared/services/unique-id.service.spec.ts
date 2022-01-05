//primeiro parametro, o que iremos testar, por padrão o Angular utiliza o Jasmine

import { UniqueIdService } from "./unique-id.service"


describe(UniqueIdService.name, () => {

    let service: UniqueIdService= null

    //será executado antes de cada chamada dos testes, sempre será gerada uma nova instância de uniqueId
    beforeEach(()=>{
        service = new UniqueIdService()
    })


    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    deve gerar um id unico quando for chamado com um prefixo`, () => {

        const id = service.generateUniqueIdWithPrefix('app')

        expect(id.startsWith('app-')).toBeTrue()

        //testa o valor literal
        expect(true).toBeTrue()

        //Compara se um valor é igual a outro
        expect(true).toBe(true)

        //Testar se é verdadeiro - regras javascript false or true
        expect(new Boolean(true)).toBeTruthy()
        
    })


    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    não deve gerar ids duplicados quando for chamado multiplas vezes`, () => {

        const ids = new Set();

        for(let i =0; i<50; i++){
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }

        expect(ids.size).toBe(50)
    })

    it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} 
    saber o retorno de ids gerados quando chamada a função`, () => {

        service.generateUniqueIdWithPrefix('app')
        service.generateUniqueIdWithPrefix('app')

        expect(service.getNumberOfGenerateUniqueIds()).toBe(2)
       
    })


    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    o valor do argumento não pode ser vazio, gerar mensagem de erro`, () => {

        const emptyValues = [null, undefined, '']

        emptyValues.forEach(emptyValue=>{
            expect(()=> service.generateUniqueIdWithPrefix(emptyValue))

            //saber qual o contexto que faz meu teste falhar
            .withContext(`Valor empty: ${emptyValue}`)
            .toThrow()
        })
    })

})