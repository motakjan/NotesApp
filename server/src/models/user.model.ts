import { post, prop, getModelForClass } from '@typegoose/typegoose';
import DashboardModel from './dashboard.model';

@post<User>('save', async data => {
  const dashboard = new DashboardModel({
    title: `${data.firstName}'s Dashboard`,
    description: `${data.firstName}'s Dashboard Description`,
    users: [data._id.toString()],
  });
  await dashboard.save();
})
export class User {
  @prop({ required: true })
  public username: string;

  @prop({ required: true })
  public password: string;

  @prop({ required: true })
  public email: string;

  @prop({ required: true })
  public firstName: string;

  @prop({ required: true })
  public lastName: string;

  @prop()
  public image?: string;

  @prop({
    default() {
      return `${this.firstName} ${this.lastName}`;
    },
  })
  public fullName?: string;
}

const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});

export default UserModel;
