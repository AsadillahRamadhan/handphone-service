import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Handphone } from './schema/handphone.schema';

@Injectable()
export class HandphoneService {
  constructor(
    @InjectModel(Handphone.name) private handphone: Model<Handphone>,
  ) {}

  async getAllHandphone(): Promise<{ handphone: Handphone[] }> {
    const handphones = await this.handphone.find().exec();
    return { handphone: handphones };
  }

  async getHandphoneByQuery(query: any): Promise<{ handphone: Handphone[] }> {
    const dbQuery: any = {};

    if (query.query.type) dbQuery['other.type'] = query.query.type;
    if (query.query.brand) dbQuery['brand'] = query.query.brand;
    if (query.query.category) dbQuery['other.category'] = query.query.category;
    if (query.query.lowest_price)
      dbQuery['price'] = { $gte: query.query.lowest_price };
    if (query.query.highest_price) {
      dbQuery['price'] = dbQuery['price'] || {};
      dbQuery['price']['$lte'] = query.query.highest_price;
    }

    let sortBy: any = {};
    if (query.query.sort_by) {
      switch (query.query.sort_by) {
        case 'popular':
          sortBy = { popular: 1 };
          break;
        case 'newest':
          sortBy = { createdAt: -1 };
          break;
        case 'oldest':
          sortBy = { createdAt: 1 };
          break;
        case 'price_asc':
          sortBy = { price: 1 };
          break;
        case 'price_desc':
          sortBy = { price: -1 };
          break;
        default:
          sortBy = {};
          break;
      }
    }

    const handphones = await this.handphone.find(dbQuery).sort(sortBy).exec();
    return { handphone: handphones };
  }

  async getHandphone(data: any): Promise<{ handphone: Handphone }> {
    const handphone = await this.handphone.findById(data.handphone_id).exec();
    return { handphone: handphone };
  }
}
