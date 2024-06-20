import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class Other {
  @Prop({ required: true })
  official: boolean;

  @Prop({ required: true })
  box: boolean;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  ram: number;

  @Prop({ required: true })
  rom: number;
}

@Schema()
class Physics {
  @Prop({ required: true })
  condition: Condition;

  @Prop({ required: true })
  completeness: boolean;
}

enum Condition {
  economic = 1,
  standard = 2,
  grease = 3,
}

@Schema()
class Screen {
  @Prop({ required: true })
  condition: string;

  @Prop({ required: true })
  cracked_outer: boolean;

  @Prop({ required: true })
  cracked_inner: boolean;
}

@Schema()
class Specification {
  @Prop({ required: true })
  photo_quality: boolean;

  @Prop({ required: true })
  charging_port: boolean;

  @Prop({ required: true })
  speaker: boolean;

  @Prop({ required: true })
  receiver: boolean;

  @Prop({ required: true })
  enabled: boolean;

  @Prop({ required: true })
  battery_physics: boolean;

  @Prop({ required: true })
  fingerprint: boolean;

  @Prop({ required: true })
  bluetooth: boolean;

  @Prop({ required: true })
  flashlight: boolean;

  @Prop({ required: true })
  sim: boolean;

  @Prop({ required: true })
  wifi: boolean;

  @Prop({ required: true })
  camera: boolean;

  @Prop({ required: true })
  back_button: boolean;

  @Prop({ required: true })
  power_button: boolean;

  @Prop({ required: true })
  home_button: boolean;

  @Prop({ required: true })
  volume_down_button: boolean;

  @Prop({ required: true })
  volume_up_button: boolean;

  @Prop({ required: true })
  touchscreen: boolean;

  @Prop({ required: true })
  sensors: boolean;
}

@Schema()
export class Handphone {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  other: Other;

  @Prop({ required: true })
  physics: Physics;

  @Prop({ required: true })
  screen: Screen;

  @Prop({ required: true })
  specification: Specification;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  photos: [string];
}

export const HandphoneSchema = SchemaFactory.createForClass(Handphone);
