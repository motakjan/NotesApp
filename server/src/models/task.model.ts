import { Severity, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

interface ITag {
  tagType: string;
  tagText: string;
}

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Task {
  @prop({ required: true })
  public title: string;

  @prop({ required: true })
  public description: string;

  @prop({ required: true })
  public tags: ITag[];

  @prop()
  public start?: string;

  @prop({ default: 'default' })
  public type?: string;

  @prop()
  public end?: string;

  @prop({ required: true })
  public priority: Number;

  @prop()
  public users: string[];

  @prop()
  public updatedAt?: string;
}

const TaskModel = getModelForClass(Task, {
  schemaOptions: {
    timestamps: true,
  },
});

export default TaskModel;
