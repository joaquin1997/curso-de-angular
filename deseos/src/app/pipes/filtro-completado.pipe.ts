import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/Lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completado: boolean): Lista[] {
    return listas.filter((list)=>list.terminada===completado);
  }

}
