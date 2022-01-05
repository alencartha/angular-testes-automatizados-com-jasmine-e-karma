import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, ()=>{

    let fixture: ComponentFixture<LikeWidgetComponent> = null
    let component:LikeWidgetComponent = null

    beforeEach(async ()=>{

        //Testbed declara o módulo que eu vou testar, com todos os seus serviços
        //é assíncrono espera a promessa ser resolvida, aguarda o componente ser compilado para o teste continuar
        await TestBed.configureTestingModule({
            imports:[LikeWidgetModule]
        }).compileComponents()

        fixture = TestBed.createComponent(LikeWidgetComponent)
        component = fixture.componentInstance

    })


    it(`Quando o componente é criado`, ()=>{
        expect(component).toBeTruthy()
    })


    it(`Gerar ids unicos quando o Id não é passado como parâmetro`, ()=>{
        fixture.detectChanges()
        expect(component.id).toBeTruthy()
    })

    
    it(`Não gerar ids unicos quando o Id  é passado como parâmetro`, ()=>{
        const someId = 'algumId'
        component.id = someId
        fixture.detectChanges()
        expect(component.id).toBe(someId)
    })

})
  

