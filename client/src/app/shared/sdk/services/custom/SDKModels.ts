/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Angular_Loopback } from '../../models/Angular_Loopback';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Angular_Loopback: Angular_Loopback,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
