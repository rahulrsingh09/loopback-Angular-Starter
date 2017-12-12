/* tslint:disable */

declare var Object: any;
export interface Angular_LoopbackInterface {
  "id"?: number;
}

export class Angular_Loopback implements Angular_LoopbackInterface {
  "id": number;
  constructor(data?: Angular_LoopbackInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Angular_Loopback`.
   */
  public static getModelName() {
    return "Angular_Loopback";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Angular_Loopback for dynamic purposes.
  **/
  public static factory(data: Angular_LoopbackInterface): Angular_Loopback{
    return new Angular_Loopback(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Angular_Loopback',
      plural: 'Angular_Loopbacks',
      path: 'Angular_Loopbacks',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
