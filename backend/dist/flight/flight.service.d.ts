import { UpdateFlightDto } from './dto/update-flight.dto';
export declare class FlightService {
    private readonly pagination;
    findAll(page?: number, limit?: number): Promise<{
        page: number;
        limit: number;
        offset: number;
        data: FlightService;
        total: any;
    }>;
    findOne(id: number): string;
    update(id: number, updateFlightDto: UpdateFlightDto): string;
    remove(id: number): string;
}
