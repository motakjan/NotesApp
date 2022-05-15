import { Severity, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

interface ITask {
  id: string;
  position: number;
  column: number;
}

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Dashboard {
  @prop({ required: true })
  public title: string;

  @prop({ required: true })
  public description: string;

  @prop({ default: [] })
  public users: string[];

  @prop({ default: [] })
  public tasks: ITask[];
}

const DashboardModel = getModelForClass(Dashboard, {
  schemaOptions: {
    timestamps: true,
  },
});

export default DashboardModel;
