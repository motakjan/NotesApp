import { prop, getModelForClass } from '@typegoose/typegoose';

export class User {
  @prop({ required: true })
  public username: string;

  @prop({ required: true })
  public password: string;

  @prop({ required: true})
  public email: string;

  @prop({ required: true})
  public firstName: string;

  @prop({ required: true})
  public lastName: string;

  @prop()
  public image?: string;

  @prop({ 
    default() {
      return `${this.firstName} ${this.lastName}`
    }
  })
  public fullName?: string

  /*
  @prop({ ref: () => Task})
  public tasks?: Ref<Task>[];
  */
}

const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});

export default UserModel;
