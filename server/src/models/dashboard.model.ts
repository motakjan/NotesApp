import { Severity, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Dashboard {
  @prop({ required: true })
  public title: string;

  @prop({ required: true })
  public description: string;

  @prop()
  public users: string[];

  @prop()
  public tasks: string[];
}

const DashboardModel = getModelForClass(Dashboard, {
  schemaOptions: {
    timestamps: true,
  },
});

export default DashboardModel;
